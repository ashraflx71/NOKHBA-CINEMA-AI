const MODEL = 'lightricks/ltx-2-3-fast';
const ALLOWED_RESOLUTIONS = new Set(['1280x720','720x1280','1920x1080','1080x1920']);

function json(data, status=200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store'}
  });
}

export async function onRequestGet({env}) {
  return json({
    service: 'NOKHBA CINEMA AI Video',
    model: MODEL,
    enabled: env.LTX_VIDEO_ENABLED === 'true',
    authConfigured: Boolean(env.CINEMA_ACCESS_CODE),
    note: 'Generation is available only after the owner enables the service and configures a private access code.'
  });
}

export async function onRequestPost({request, env}) {
  if (env.LTX_VIDEO_ENABLED !== 'true') return json({error:'خدمة الفيديو غير مفعّلة بعد. فعّلها من إعدادات Cloudflare بعد تجهيز الحماية.'}, 503);
  if (!env.AI || typeof env.AI.run !== 'function') return json({error:'Workers AI binding باسم AI غير مضبوط.'}, 503);
  if (!env.CINEMA_ACCESS_CODE) return json({error:'رمز الحماية CINEMA_ACCESS_CODE غير مضبوط في Cloudflare.'}, 503);

  const suppliedCode = request.headers.get('X-Cinema-Access-Code') || '';
  if (suppliedCode.length !== env.CINEMA_ACCESS_CODE.length || suppliedCode !== env.CINEMA_ACCESS_CODE) {
    return json({error:'رمز الوصول غير صحيح.'}, 401);
  }

  const origin = request.headers.get('Origin');
  if (origin && new URL(request.url).origin !== origin) return json({error:'مصدر الطلب غير مسموح.'}, 403);

  let body;
  try { body = await request.json(); } catch { return json({error:'بيانات الطلب غير صالحة.'}, 400); }

  const prompt = typeof body.prompt === 'string' ? body.prompt.trim() : '';
  const duration = Number(body.duration || 6);
  const resolution = String(body.resolution || '1280x720');
  const fps = Number(body.fps || 24);
  const generate_audio = body.generate_audio !== false;

  if (prompt.length < 8 || prompt.length > 1500) return json({error:'وصف المشهد يجب أن يكون بين 8 و1500 حرف.'}, 400);
  if (duration !== 6) return json({error:'المدة المتاحة في تجربة البداية هي 6 ثوانٍ.'}, 400);
  if (!ALLOWED_RESOLUTIONS.has(resolution)) return json({error:'الدقة المختارة غير مدعومة في إعداد التجربة.'}, 400);
  if (fps !== 24) return json({error:'معدل الإطارات الحالي ثابت عند 24.'}, 400);

  try {
    const result = await env.AI.run(MODEL, {prompt,duration,resolution,fps,generate_audio});
    const video = result?.result?.video || result?.video;
    if (!video || typeof video !== 'string' || !video.startsWith('https://')) {
      return json({error:'لم يُرجع النموذج رابط فيديو صالحًا. راجع سجل Workers AI.'}, 502);
    }
    return json({video, state:result?.state || 'Completed', model:MODEL});
  } catch (error) {
    console.error('LTX video generation failed:', error?.message || error);
    return json({error:'تعذر إكمال التوليد من مزوّد الخدمة. راجع سجل Cloudflare لمعرفة السبب.'}, 502);
  }
}