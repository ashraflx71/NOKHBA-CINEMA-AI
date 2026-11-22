(() => {
  "use strict";

  const isSecureContext = location.protocol === "https:" || location.hostname === "localhost";
  if ("serviceWorker" in navigator && isSecureContext) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./sw.js", { scope: "./" })
        .then(registration => {
          registration.update().catch(() => {});
        })
        .catch(error => console.warn("NOKHBA PWA: تعذر تسجيل Service Worker", error));
    });
  }

  let installPrompt = null;
  let installButton = null;

  function createInstallButton() {
    if (installButton || document.querySelector('button[data-nokhba-install]')) return;
    installButton = document.createElement("button");
    installButton.type = "button";
    installButton.dataset.nokhbaInstall = "true";
    installButton.textContent = "تثبيت نخبة سينما";
    installButton.setAttribute("aria-label", "تثبيت تطبيق نخبة سينما على الجهاز");
    Object.assign(installButton.style, {
      position: "fixed",
      zIndex: "9999",
      bottom: "18px",
      left: "18px",
      padding: "12px 18px",
      border: "1px solid #ead7b2",
      borderRadius: "999px",
      background: "linear-gradient(110deg,#ead7b2,#c9a66b)",
      color: "#130e0b",
      font: "700 13px Cairo,Arial,sans-serif",
      boxShadow: "0 8px 28px #0008",
      cursor: "pointer"
    });
    installButton.addEventListener("click", async () => {
      if (!installPrompt) return;
      installButton.disabled = true;
      installPrompt.prompt();
      await installPrompt.userChoice.catch(() => null);
      installPrompt = null;
      installButton.remove();
      installButton = null;
    });
    document.body.appendChild(installButton);
  }

  window.addEventListener("beforeinstallprompt", event => {
    event.preventDefault();
    installPrompt = event;
    createInstallButton();
  });

  window.addEventListener("appinstalled", () => {
    installPrompt = null;
    if (installButton) installButton.remove();
    installButton = null;
  });
})();