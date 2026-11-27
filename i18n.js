(() => {
  "use strict";
  const textMap = {
    "الرئيسية":"Home",
    "معرض النجوم":"Star Gallery",
    "عن نخبة سينما":"About NOKHBA CINEMA",
    "العودة إلى الصفحة الرئيسية ←":"Back to Home ←",
    "العودة إلى الرئيسية":"Back to Home",
    "العودة إلى NOKHBA CINEMA":"Back to NOKHBA CINEMA",
    "حوّل كلماتك إلى فيديو":"Turn Your Words into a Video",
    "اكتب وصف المشهد الذي تتخيله، وسنجهّز طلب إنشاء الفيديو بالذكاء الاصطناعي. لا تحتاج إلى رفع صورة؛ البداية من النص فقط.":"Describe the scene you imagine and prepare an AI video-generation request. No image upload is needed; start with text only.",
    "1. اكتب وصف الفيديو الذي تريده":"1. Describe the video you want",
    " / 1200 حرف":" / 1200 characters",
    "شروق فوق البحر":"Sunrise over the Sea",
    "الحياة البرية":"Wildlife",
    "مدينة مستقبلية":"Future City",
    "2. مدة الفيديو":"2. Video Duration",
    "5 ثوانٍ":"5 seconds",
    "10 ثوانٍ":"10 seconds",
    "المدد المتاحة ستعتمد على نموذج الإنشاء الذي سنربطه.":"Available durations will depend on the generation model we connect.",
    "3. مقاس الفيديو":"3. Video Format",
    "أفقي — 16:9":"Landscape — 16:9",
    "رأسي — 9:16":"Portrait — 9:16",
    "مربع — 1:1":"Square — 1:1",
    "الأفقي مناسب للشاشة، والرأسي مناسب للهاتف.":"Landscape is suited to screens; portrait is suited to phones.",
    "حالة الخدمة:":"Service Status:",
    "تجهيز الواجهة اكتمل، لكن إنشاء الفيديو والدفع لم يتم تفعيلهما بعد. لن يتم تشغيل أي خدمة مدفوعة أو خصم أي مبلغ في هذه المرحلة.":"The interface is ready, but video generation and payments are not yet enabled. No paid service will run and no amount will be charged at this stage.",
    "سيتم تفعيل إنشاء الفيديو بعد ربط الدفع والذكاء الاصطناعي":"Video generation will be enabled after payment and AI are connected",
    "قبل الإطلاق، سيظهر السعر النهائي للمستخدم بوضوح، ولن يبدأ الإنشاء إلا بعد تأكيد الدفع. لا تضع أي مفاتيح سرية أو بيانات دفع في هذه الصفحة.":"Before launch, the final price will be clearly shown. Generation will begin only after payment confirmation. Do not place secret keys or payment details on this page.",
    "← العودة إلى NOKHBA CINEMA":"← Back to NOKHBA CINEMA",
    "الثقة · الفن · احترام حقوق الصورة":"Trust · Art · Respect for Image Rights",
    "اكتشف عوالم ":"Discover the worlds of ",
    "اختر القسم الذي تحب استكشافه. بوابة بصرية تجمع السينما والصور والفيديو والخيال العلمي وجمال الطبيعة.":"Choose a section to explore. A visual destination for cinema, photography, video, science fiction, and the beauty of nature.",
    "أفلام طويلة":"Feature Films",
    "صور سينمائية":"Cinematic Photography",
    "فيديوهات":"Videos",
    "إنشاء فيديوهات":"Create Videos",
    "الخيال العلمي":"Science Fiction",
    "عالم الطبيعة":"The World of Nature",
    "الدخول إلى معرض النجوم":"Explore the Star Gallery",
    "نجوم السينما العالمية":"Stars of World Cinema",
    "وجوه أيقونية وحكايات خالدة من ذاكرة الشاشة الكبيرة.":"Iconic faces and timeless stories from the big screen.",
    "مختارات من ذاكرة السينما":"Selections from Cinema History",
    "عدد الصور ":"Number of images: ",
    "الكل":"All",
    "نجمات":"Actresses",
    "نجوم":"Actors",
    "كلاسيكيات":"Classics",
    "أودري هيبورن":"Audrey Hepburn",
    "صوفيا لورين":"Sophia Loren",
    "آلان ديلون":"Alain Delon",
    "جيسون ستاثام":"Jason Statham",
    "مونيكا بيلوتشي":"Monica Bellucci",
    "كاترين دونوف":"Catherine Deneuve",
    "أيقونة الأناقة والسينما الكلاسيكية":"An icon of elegance and classic cinema",
    "سحر السينما الإيطالية":"The glamour of Italian cinema",
    "حضور فرنسي لا يُنسى":"An unforgettable French presence",
    "حضور قوي في أفلام الحركة والإثارة":"A powerful presence in action and thriller films",
    "أناقة إيطالية معاصرة":"Contemporary Italian elegance",
    "رمز من رموز السينما الفرنسية":"An icon of French cinema",
    "عرض الصورة ↗":"View image ↗",
    "مجموعة افتتاحية من ستة نجوم. نضيف المزيد بعد مراجعة مصدر كل صورة وشروط استخدامها.":"An opening collection of six stars. More will be added after reviewing each image source and its terms of use.",
    "مصادر الصور وتراخيصها":"Image Sources and Licenses",
    "عارض الصور":"Image Viewer",
    "إغلاق":"Close",
    "صفحة المصدر والترخيص":"Source and License Page",
    
    "مساحة تحتفي بالفن السابع، وتضع الثقة واحترام الحقوق في قلب التجربة.":"A space celebrating the seventh art, with trust and respect for rights at its heart.",
    "رؤية سينمائية":"A Cinematic Vision",
    "بروح راقية":"With an Elegant Spirit",
    "الثقة":"Trust",
    "الفن":"Art",
    "احترام الحقوق":"Respect for Rights",
    "وضوح في المعلومات ومصادر المحتوى.":"Clear information and content sources.",
    "احتفاء بتاريخ السينما وجمال الصورة.":"Celebrating cinema history and the beauty of imagery.",
    "ذكر المصدر والمصور والترخيص حيثما توفر.":"Crediting the source, photographer, and license where available.",
    "زيارة معرض النجوم":"Visit the Star Gallery",
    "هذا القسم قيد التجهيز":"This section is being prepared",
    "سيُضاف المحتوى بعد مراجعته واختياره بعناية.":"Content will be added after careful review and selection.",
    "مساحة مخصصة لاكتشاف عالم الأفلام الطويلة وحكايات الشاشة الكبيرة.":"A space dedicated to discovering feature films and big-screen stories.",
    "اكتشف عوالم المستقبل والفضاء والتقنيات والقصص التي توسّع الخيال.":"Discover future worlds, space, technology, and stories that expand the imagination.",
    "تأمل مشاهد الطبيعة وجمال الأرض وروائع الحياة.":"Explore nature's scenes, Earth's beauty, and the wonders of life.",
    "عالم الفيديوهات":"The World of Video",
    "مختارات من الطبيعة":"Nature Selections",
    "مشاهد طبيعية مبهرة بدقة 4K":"Breathtaking Nature Scenes in 4K",
    "مشاهدة على YouTube ↗":"Watch on YouTube ↗",
    "عجائب الحياة البرية":"Wildlife Wonders",
    "الأرض والفضاء والعلوم":"Earth, Space & Science",
    "كوكب الأرض كما تراه NASA":"Planet Earth as Seen by NASA",
    "رسالة نخبة سينما:":"A Message from NOKHBA CINEMA:"
    "الأفلام":"Films",
    "التراث الإسلامي":"Islamic Heritage",
    "معرض التراث الإسلامي | NOKHBA CINEMA":"Islamic Heritage Gallery | NOKHBA CINEMA",
    "جمال الحضارة":"The Beauty of",
    "الإسلامية":"Islamic Civilization",
    "نافذة معرفية على العمارة والفنون الهندسية، مع احترام حقوق المصورين وتوثيق مصادر الصور.":"A learning window into Islamic architecture and geometric arts, with photographer rights respected and image sources documented.",
    "العودة إلى الرئيسية":"Back to Home",
    "معالم وفنون من الذاكرة الحضارية":"Landmarks and Arts from a Shared Heritage",
    "عدد الصور":"Number of images",
    "تصفية المعرض":"Filter gallery",
    "العمارة والمساجد":"Architecture and Mosques",
    "الفنون والزخرفة":"Arts and Ornament",
    "جامع القيروان":"Great Mosque of Kairouan",
    "الجامع الكبير في القيروان، تونس.":"The Great Mosque in Kairouan, Tunisia.",
    "من أبرز معالم العمارة الإسلامية في شمال أفريقيا.":"One of the most prominent landmarks of Islamic architecture in North Africa.",
    "مشهد بانورامي لجامع القيروان":"Panoramic View of the Great Mosque of Kairouan",
    "إطلالة بانورامية على جامع القيروان.":"A panoramic view of the Great Mosque of Kairouan.",
    "nivea-cream (albina&kostya)":"nivea-cream (albina&kostya)",
    "عمارة القيروان":"Kairouan Architecture",
    "تفاصيل معمارية تحكي قرونًا من التاريخ.":"Architectural details that tell centuries of history.",
    "زخارف هندسية إسلامية في فاس":"Islamic Geometric Patterns in Fez",
    "زخارف هندسية على باب مدرسة بو عنانية في مدينة فاس المغربية.":"Geometric patterns on the door of Bou Inania Madrasa in Fez, Morocco.",
    "فن الزخرفة الهندسية":"The Art of Geometric Ornament",
    "تناغم الأشكال والنجوم في الفنون الإسلامية.":"The harmony of shapes and stars in Islamic art.",
    "نقش هندسي إسلامي":"Islamic Geometric Pattern",
    "نمط زخرفي هندسي مستلهم من الفن الإسلامي.":"A geometric ornamental pattern inspired by Islamic art.",
    "جمال الهندسة":"The Beauty of Geometry",
    "أنماط فنية تجمع الدقة والتناسق والإبداع.":"Artistic patterns combining precision, harmony, and creativity.",
    "تُعرض الصور مع اسم صاحب العمل ورابط المصدر وشروط الترخيص. هذه مجموعة افتتاحية، وستضاف مواد أخرى بعد مراجعة كل مصدر على حدة.":"Images are displayed with creator attribution, source links, and license terms. This is an opening collection; more items will be added after each source is reviewed.",
    "العلم · الفن · احترام الحقوق":"Knowledge · Art · Respect for Rights",
    "مصادر الصور وتراخيصها":"Image Sources and Licenses",
    "عرض الصورة ↗":"View image ↗",
    "عارض الصور":"Image Viewer",
    "إغلاق":"Close",
    "صفحة المصدر والترخيص":"Source and License Page",
    "عرض صورة جامع القيروان":"View the Great Mosque of Kairouan",
    "عرض المشهد البانورامي لجامع القيروان":"View the panoramic mosque image",
    "عرض الزخارف الهندسية الإسلامية":"View Islamic geometric patterns",
    "عرض النقش الهندسي الإسلامي":"View the Islamic geometric pattern",
  };
  const attrMap = {
    placeholder: {
      "مثال: مشهد سينمائي لشروق الشمس فوق البحر، أمواج هادئة وانعكاس الضوء الذهبي، حركة كاميرا بطيئة، تفاصيل واقعية وجودة سينمائية...":"Example: A cinematic sunrise over the sea, calm waves reflecting golden light, slow camera movement, realistic details, and cinematic quality..."
    },
    "data-prompt": {
      "لقطة سينمائية واقعية لشروق الشمس فوق البحر، أمواج ذهبية هادئة، حركة كاميرا بطيئة، إضاءة طبيعية وتفاصيل فائقة.":"A realistic cinematic sunrise over the sea, calm golden waves, slow camera movement, natural lighting, and fine detail.",
      "مشهد وثائقي للحياة البرية في غابة خضراء، طيور تحلق بين الأشجار وأشعة الشمس تخترق الأوراق، تصوير سينمائي واقعي.":"A wildlife documentary scene in a green forest, birds flying between trees as sunlight filters through the leaves, realistic cinematic filming.",
      "مشهد خيال علمي لمدينة مستقبلية ليلًا، مبانٍ مضيئة ومركبات طائرة، حركة كاميرا انسيابية وأجواء سينمائية.":"A science-fiction scene of a futuristic city at night, illuminated buildings and flying vehicles, smooth camera movement, and a cinematic atmosphere."
    },
    "aria-label": {
      "القائمة الرئيسية":"Main navigation",
      "عرض صورة جامع القيروان":"View the Great Mosque of Kairouan",
      "عرض المشهد البانورامي لجامع القيروان":"View the panoramic mosque image",
      "عرض الزخارف الهندسية الإسلامية":"View Islamic geometric patterns",
      "عرض النقش الهندسي الإسلامي":"View the Islamic geometric pattern",
      "تصفية المعرض":"Filter gallery",
      "أمثلة جاهزة":"Ready-made examples",
      "عارض الصور":"Image viewer",
      "إغلاق":"Close",
      "شعار نخبة":"NOKHBA logo"
    },
    alt: {
      "جامع القيروان التاريخي في تونس":"Historic Great Mosque of Kairouan in Tunisia",
      "مشهد بانورامي لجامع القيروان":"Panoramic view of the Great Mosque of Kairouan",
      "زخارف هندسية إسلامية على باب مدرسة تاريخية في فاس":"Islamic geometric patterns on a historic madrasa door in Fez",
      "نقش هندسي إسلامي متكرر":"Repeating Islamic geometric pattern",
      "شعار نخبة":"NOKHBA logo",
      "شعار نخبة سينما":"NOKHBA CINEMA logo"
    }
  };
  const titleMap = {
    "إنشاء فيديو بالنص | NOKHBA CINEMA":"Text-to-Video Studio | NOKHBA CINEMA",
    "معرض النجوم | NOKHBA CINEMA":"Star Gallery | NOKHBA CINEMA",
    "معرض التراث الإسلامي | NOKHBA CINEMA":"Islamic Heritage Gallery | NOKHBA CINEMA",
    "عن نخبة سينما | NOKHBA CINEMA":"About NOKHBA CINEMA | NOKHBA CINEMA",
    "أفلام طويلة | NOKHBA CINEMA":"Feature Films | NOKHBA CINEMA",
    "الفيديوهات | NOKHBA CINEMA":"Videos | NOKHBA CINEMA",
    "الخيال العلمي | NOKHBA CINEMA":"Science Fiction | NOKHBA CINEMA",
    "عالم الطبيعة | NOKHBA CINEMA":"Nature | NOKHBA CINEMA"
  };
  const originalTitle = document.title;
  const textNodes = [];
  const attrNodes = [];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) textNodes.push({node:walker.currentNode, original:walker.currentNode.nodeValue});
  document.querySelectorAll("body *").forEach(el => {
    ["placeholder","data-prompt","aria-label","alt"].forEach(attr => {
      if (el.hasAttribute(attr)) attrNodes.push({el,attr,original:el.getAttribute(attr)});
    });
  });
  function setLanguage(lang) {
    const english = lang === "en";
    document.documentElement.lang = lang;
    document.documentElement.dir = english ? "ltr" : "rtl";
    textNodes.forEach(({node,original}) => {
      const key = original.trim();
      const translated = textMap[key];
      if (!translated) { node.nodeValue = original; return; }
      const leading = original.slice(0, original.length - original.trimStart().length);
      const trailing = original.slice(original.trimEnd().length);
      node.nodeValue = leading + (english ? translated : key) + trailing;
    });
    attrNodes.forEach(({el,attr,original}) => {
      const translated = attrMap[attr] && attrMap[attr][original];
      if (translated) el.setAttribute(attr, english ? translated : original);
    });
    document.title = english ? (titleMap[originalTitle] || originalTitle) : originalTitle;
    const toggle = document.getElementById("nokhba-language-toggle");
    if (toggle) {
      toggle.textContent = english ? "العربية" : "English";
      toggle.setAttribute("aria-label", english ? "Switch language to Arabic" : "Switch language to English");
    }
    document.querySelectorAll(".topbar,.nav").forEach(el => el.style.direction = english ? "ltr" : "rtl");
    document.body.classList.toggle("nokhba-english", english);
    document.querySelectorAll(".counter").forEach(el => el.style.textAlign = english ? "right" : "left");
  }
  const button = document.createElement("button");
  button.id = "nokhba-language-toggle";
  button.type = "button";
  button.className = "language-toggle";
  button.addEventListener("click", () => {
    const next = document.documentElement.lang === "ar" ? "en" : "ar";
    try { localStorage.setItem("nokhba-cinema-language", next); } catch (_) {}
    setLanguage(next);
  });
  const header = document.querySelector(".topbar");
  if (header) header.appendChild(button);
  const css = document.createElement("style");
  css.textContent = ".language-toggle{border:1px solid #c9a66b;background:#171112;color:#ead7b2;padding:8px 13px;border-radius:5px;font:600 12px Arial,sans-serif;cursor:pointer;white-space:nowrap}.language-toggle:hover{background:#c9a66b;color:#090707}.nokhba-english{font-family:Arial,sans-serif}.nokhba-english .creator-intro{text-align:center}.nokhba-english .status-box{border-right:0;border-left:3px solid #b58a49}.nokhba-english .video-section h2{border-right:0;border-left:3px solid #b58a49;padding-right:0;padding-left:13px}@media(max-width:600px){.language-toggle{padding:6px 9px;font-size:11px}.topbar{flex-wrap:wrap}.nav{order:3;width:100%;justify-content:center}}";
  document.head.appendChild(css);
  let saved = "ar";
  try { saved = localStorage.getItem("nokhba-cinema-language") || "ar"; } catch (_) {}
  setLanguage(saved === "en" ? "en" : "ar");
})();