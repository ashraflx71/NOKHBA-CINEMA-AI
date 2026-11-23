const JSON_HEADERS = {
  "content-type": "application/json; charset=utf-8",
  "cache-control": "no-store"
};

function jsonResponse(data, status = 200, method = "GET") {
  return new Response(method === "HEAD" ? null : JSON.stringify(data), {
    status,
    headers: JSON_HEADERS
  });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/health") {
      if (request.method !== "GET" && request.method !== "HEAD") {
        return jsonResponse(
          { ok: false, error: "method_not_allowed", allowed: ["GET", "HEAD"] },
          405,
          request.method
        );
      }

      return jsonResponse(
        {
          ok: true,
          service: "NOKHBA CINEMA",
          status: "worker-online",
          checks: {
            workerRuntime: true,
            staticAssetsBinding: Boolean(env.ASSETS),
            videoGeneration: false,
            payments: false
          },
          message: "اتصال Worker يعمل. إنشاء الفيديو والدفع غير مفعّلين."
        },
        200,
        request.method
      );
    }

    if (url.pathname.startsWith("/api/")) {
      return jsonResponse(
        { ok: false, error: "not_found", message: "API route not found" },
        404,
        request.method
      );
    }

    return env.ASSETS.fetch(request);
  }
};
