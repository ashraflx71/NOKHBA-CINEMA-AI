const promptEl=document.getElementById('prompt');
const codeEl=document.getElementById('accessCode');
const durationEl=document.getElementById('duration');
const resolutionEl=document.getElementById('resolution');
const audioEl=document.getElementById('audio');
const generateBtn=document.getElementById('generateBtn');
const statusEl=document.getElementById('status');
const resultPanel=document.getElementById('resultPanel');
const resultVideo=document.getElementById('resultVideo');
const downloadLink=document.getElementById('downloadLink');
const costNote=document.getElementById('costNote');

function updateEstimate(){
 const rate=resolutionEl.value.includes('1920')||resolutionEl.value.includes('1080x1920')?0.06:0.03;
 const seconds=Number(durationEl.value);
 costNote.textContent='التكلفة التقديرية: $'+(rate*seconds).toFixed(2)+' للفيديو ('+seconds+' ثوانٍ). السعر المنشور: $'+rate.toFixed(2)+' لكل ثانية لهذه الدقة. قد تتغير الأسعار.';
}
resolutionEl.addEventListener('change',updateEstimate);
durationEl.addEventListener('change',updateEstimate);

generateBtn.addEventListener('click',async()=>{
 const prompt=promptEl.value.trim();
 const accessCode=codeEl.value.trim();
 if(!accessCode){statusEl.textContent='أدخل رمز الوصول أولًا.';statusEl.className='status error';return;}
 if(prompt.length<8){statusEl.textContent='اكتب وصفًا أوضح للمشهد (8 أحرف على الأقل).';statusEl.className='status error';return;}
 generateBtn.disabled=true;
 resultPanel.hidden=true;
 statusEl.className='status';
 statusEl.textContent='جارٍ إرسال الطلب إلى LTX-2.3 Fast... قد يستغرق التوليد بعض الوقت.';
 try{
  const response=await fetch('/api/video',{
   method:'POST',
   headers:{'Content-Type':'application/json','X-Cinema-Access-Code':accessCode},
   body:JSON.stringify({prompt,duration:Number(durationEl.value),resolution:resolutionEl.value,fps:24,generate_audio:audioEl.value==='true'})
  });
  const data=await response.json().catch(()=>({}));
  if(!response.ok) throw new Error(data.error||'تعذر إنشاء الفيديو. تحقق من إعدادات الخدمة.');
  if(!data.video) throw new Error('اكتمل الطلب لكن لم يصل رابط الفيديو المتوقع.');
  resultVideo.src=data.video;
  downloadLink.href=data.video;
  resultPanel.hidden=false;
  statusEl.textContent='تم إنشاء الفيديو. يمكنك مشاهدته أو تنزيله الآن.';
  statusEl.className='status success';
  resultPanel.scrollIntoView({behavior:'smooth',block:'start'});
 }catch(error){
  statusEl.textContent=error.message||'حدث خطأ غير متوقع.';
  statusEl.className='status error';
 }finally{generateBtn.disabled=false;}
});