const moodData = {
  action: {
    title: "أكشن وإثارة",
    text: "إذا كنت تبحث عن التشويق والإيقاع السريع، فهذا عالمك. سنرتب لك قريبًا ترشيحات مختارة بعناية."
  },
  drama: {
    title: "دراما وحكايات",
    text: "اختر هذا العالم عندما ترغب في قصة قوية وشخصيات تترك أثرًا بعد انتهاء الفيلم."
  },
  classic: {
    title: "روائع كلاسيكية",
    text: "هنا نحتفي بالأعمال التي صنعت تاريخ السينما وبالوجوه التي لا تغيب عن الذاكرة."
  },
  family: {
    title: "عائلي ومغامرات",
    text: "مساحة لأفلام المغامرة والخيال والتجارب التي يمكن أن يستمتع بها أفراد العائلة معًا."
  }
};

const moodButtons = document.querySelectorAll("[data-mood]");
const moodTitle = document.getElementById("mood-title");
const moodText = document.getElementById("mood-text");

moodButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selected = moodData[button.dataset.mood];
    if (!selected) return;
    moodButtons.forEach((item) => {
      const active = item === button;
      item.classList.toggle("active", active);
      item.setAttribute("aria-pressed", String(active));
    });
    moodTitle.textContent = selected.title;
    moodText.textContent = selected.text;
  });
});

moodButtons.forEach((button) => {
  button.setAttribute("aria-pressed", String(button.classList.contains("active")));
});

const heroImage = document.querySelector(".hero-image");
heroImage?.addEventListener("error", () => {
  heroImage.alt = "تعذر تحميل الصورة الرئيسية؛ يرجى التحقق من ملف الصورة داخل المشروع.";
  heroImage.classList.add("image-unavailable");
  const note = document.querySelector(".image-note");
  if (note) note.textContent = "تعذر تحميل الصورة الرئيسية. يرجى مراجعة ملف الصورة داخل المشروع.";
}, { once: true });
