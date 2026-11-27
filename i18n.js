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
    "رسالة نخبة سينما:":"A Message from NOKHBA CINEMA:",
    "المعرض الإسلامي":"Islamic Gallery",
    "ساهم معنا":"Support Us",
    "عالم المعرفة":"A World of Knowledge",
    "في حكاية وصورة":"Through Stories and Images",
    "اكتشف التاريخ الإسلامي والعلوم والسير والوثائقيات والرسوم المتحركة، في أفلام هادفة تناسب الأسرة وتخاطب العالم.":"Explore Islamic history, science, biographies, documentaries, and animation through meaningful films for families around the world.",
    "اكتشف عالم الأفلام":"Explore the Films",
    "تصفّح المعرض الإسلامي":"Explore the Islamic Gallery",
    "كل معرفة لها":"Every Piece of Knowledge Has a",
    "نقدم حكايات موثوقة تجمع جمال الصورة وعمق المعرفة، وتقرّب التاريخ والعلوم والقيم إلى جميع الأعمار.":"We present well-sourced stories that combine visual beauty with knowledge, bringing history, science, and values closer to every generation.",
    "اكتشف أقسام":"Explore the Sections of",
    "اختر رحلتك القادمة":"Choose Your Next Journey",
    "أفلام تاريخية وتعليمية هادفة":"Meaningful historical and educational films",
    "صور من الحضارة الإسلامية":"Images from Islamic Civilization",
    "أفلام وثائقية":"Documentaries",
    "معرفة موثقة بالصورة والصوت":"Well-sourced knowledge through image and sound",
    "من الفكرة إلى الفيلم التعليمي":"From an Idea to an Educational Film",
    "الرسوم المتحركة":"Animation",
    "قصص تربوية تناسب الصغار":"Educational stories for children",
    "سير العلماء":"Lives of Scholars",
    "رحلات في حياة العلماء والرواد":"Journeys through the lives of scholars and pioneers",
    "الصورة فن…":"Images Are Art…",
    "والحكاية لا تنتهي":"And the Story Never Ends",
    "تعرّف على رؤيتنا وقيمنا":"Discover Our Vision and Values",
    "ساهم في استمرار الخير":"Help Sustain This Good Work",
    "الدعم اختياري، ووضوح وجهته حق لك قبل أن تساهم.":"Support is optional, and you have the right to know exactly where it goes before contributing.",
    "عمل نافع":"Meaningful Work",
    "وسعي كريم للرزق":"And an Honest Livelihood",
    "نخبة سينما مبادرة مستقلة تسعى إلى تقديم محتوى إسلامي وتعليمي وتاريخي ووثائقي نافع، باحترام للمصادر وحقوق أصحاب الأعمال.":"NOKHBA CINEMA is an independent initiative offering beneficial Islamic, educational, historical, and documentary content while respecting sources and creators' rights.",
    "نرغب أن يساعد دعم المحبين في تغطية نفقات تشغيل المنصة وتطويرها، وأن يتيح لمن يرغب أيضًا مساندة صاحب المبادرة بما يعينه على مواصلة هذا العمل والقيام باحتياجاته.":"Support from those who value this work may help cover platform operating and development costs. Those who wish may also offer direct assistance to the initiative's creator so this work can continue.",
    "نحن نوضح الأمر كما هو:":"We explain things as they are:",
    "المساهمة في تشغيل المشروع أو مساندة صاحبه ليست تبرعًا مخصصًا للفقراء، ولن نصفها بذلك. ولكل مساهم الحق في معرفة الجهة التي سيذهب إليها المبلغ قبل الدفع.":"Contributing to project operations or assisting its creator is not a donation designated for people in need, and we will not describe it as such. Every contributor has the right to know where the money will go before paying.",
    "دعم المنصة":"Platform Support",
    "استمرار المحتوى":"Keeping the Content Available",
    "المساعدة في نفقات الاستضافة والتشغيل والتطوير وإعداد المواد التعليمية.":"Helping cover hosting, operations, development, and educational content preparation.",
    "مساندة صاحب المبادرة":"Support for the Initiative's Creator",
    "عون مباشر وواضح":"Direct and Transparent Assistance",
    "مساهمة اختيارية لمساندة صاحب المبادرة في احتياجاته، مع توضيح ذلك قبل أي تحويل.":"An optional contribution to help the initiative's creator with personal needs, clearly disclosed before any transfer.",
    "شراكة مستقبلية":"Future Partnership",
    "رعاية مسؤولة":"Responsible Sponsorship",
    "التعاون مع راعٍ أو شريك مناسب، مع الإفصاح عن الرعاية وعدم السماح لها بتوجيه المحتوى أو التضليل.":"Working with a suitable sponsor or partner, with sponsorship disclosed and no influence over content or misleading claims.",
    "بنك الإسكندرية":"AlexBank",
    "تحويل بنكي إلى الحساب المخصص، بعد اعتماد بيانات الحساب واسم صاحبه.":"A bank transfer to the designated account, once the account details and owner's name are verified.",
    "الحالة:":"Status:",
    "بانتظار مراجعة بيانات الاستقبال.":"Awaiting verification of receiving details.",
    "فودافون كاش":"Vodafone Cash",
    "تحويل إلى محفظة فودافون كاش المخصصة للدعم، بعد التأكد من ملكيتها وبياناتها.":"A transfer to the designated Vodafone Cash wallet after verifying its ownership and details.",
    "تحويل لحظي عبر عنوان الدفع أو وسيلة الاستقبال المعتمدة، بعد التحقق منها.":"An instant transfer through a verified payment address or approved receiving method.",
    "لا دفع الآن":"No Payments Yet",
    "حتى تكتمل وسيلة آمنة":"Until a Secure Method Is Ready",
    "هذه الصفحة تعريفية في الوقت الحالي. لم يتم تفعيل استقبال الأموال أو ربط بوابة دفع أو جمع بيانات بطاقات أو حسابات.":"This page is informational for now. Payments are not enabled, no payment gateway is connected, and no card or account details are collected.",
    "عندما تتوفر وسيلة مناسبة، سنعلن اسمها ورسومها وطريقة استخدامها، ونفصل بوضوح بين دعم المنصة ومساندة صاحب المبادرة. لن نطلب كلمة مرور أو رمز تحقق أو بيانات بطاقة عبر الرسائل.":"When a suitable method becomes available, we will publish its name, fees, and instructions, clearly distinguishing platform support from assistance to the initiative's creator. We will never ask for passwords, verification codes, or card details in messages.",
    "لا يلزم الزائر أي مبلغ، وتظل زيارة المحتوى الأساسي متاحة دون اشتراك إلزامي.":"Visitors are not required to pay, and core content remains available without a mandatory subscription.",
    "العودة إلى نخبة سينما":"Back to NOKHBA CINEMA",
    "الدعم اختياري · الوضوح حق للجميع":"Support Is Optional · Transparency Is Everyone's Right",
    "عن المبادرة":"About the Initiative",
    "جمال الحضارة":"The Beauty of",
    "الإسلامية":"Islamic Civilization",
    "مساجد عريقة، وفنون هندسية، ومخطوطات، وشواهد من تاريخ العلم والمعرفة.":"Historic mosques, geometric arts, manuscripts, and landmarks from the history of science and knowledge.",
    "العودة إلى الرئيسية":"Back to Home",
    "نافذة على حضارة امتد نورها":"A Window into a Civilization Whose Light Endures",
    "المساجد والعمارة":"Mosques and Architecture",
    "الفنون والزخرفة":"Arts and Ornamentation",
    "جامع القيروان":"The Great Mosque of Kairouan",
    "من أبرز معالم العمارة الإسلامية في شمال أفريقيا.":"One of the most notable landmarks of Islamic architecture in North Africa.",
    "عمارة القيروان":"Kairouan Architecture",
    "تفاصيل معمارية تحكي قرونًا من التاريخ.":"Architectural details that tell centuries of history.",
    "فن الزخرفة الهندسية":"The Art of Geometric Ornamentation",
    "تناغم الأشكال والنجوم في الفنون الإسلامية.":"The harmony of shapes and stars in Islamic art.",
    "جمال الهندسة":"The Beauty of Geometry",
    "أنماط فنية تجمع الدقة والتناسق والإبداع.":"Artistic patterns combining precision, balance, and creativity.",
    "تُعرض الصور مع أسماء أصحابها وروابط مصادرها وتراخيصها. هذه بداية المجموعة الأولى، وستضاف صور للمخطوطات والعلوم والآثار بعد مراجعة كل مصدر.":"Images are displayed with creator credits, source links, and license details. This is the first collection; manuscripts, science, and archaeological images will be added after each source is reviewed.",
    "العلم · القيم · احترام الحقوق":"Knowledge · Values · Respect for Rights",
    "عرض صورة جامع القيروان":"View the Great Mosque of Kairouan",
    "عرض المشهد البانورامي لجامع القيروان":"View the Panoramic Scene of the Great Mosque of Kairouan",
    "عرض الزخارف الهندسية الإسلامية":"View Islamic Geometric Ornamentation",
    "عرض النقش الهندسي الإسلامي":"View the Islamic Geometric Pattern",
    "جامع عقبة بن نافع – القيروان":"Uqba ibn Nafi Mosque – Kairouan",
    "مشهد من جامع القيروان العريق في تونس.":"A view of the historic Great Mosque of Kairouan in Tunisia.",
    "مشهد بانورامي لجامع القيروان":"Panoramic View of the Great Mosque of Kairouan",
    "إطلالة بانورامية على جامع القيروان.":"A panoramic view of the Great Mosque of Kairouan.",
    "زخارف هندسية إسلامية في مدرسة بو عنانية":"Islamic Geometric Patterns at Bou Inania Madrasa",
    "زخارف هندسية على باب مدرسة بو عنانية في مدينة فاس المغربية.":"Geometric ornamentation on the door of Bou Inania Madrasa in Fez, Morocco.",
    "نقش هندسي إسلامي":"Islamic Geometric Pattern",
    "نمط زخرفي هندسي مستلهم من الفن الإسلامي.":"A geometric ornamental pattern inspired by Islamic art.",
    "عرض الصورة ↗":"View Image ↗",
    "صفحة المصدر والترخيص":"Source and License Page"

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
      "تصفية المعرض":"Filter gallery",
      "أمثلة جاهزة":"Ready-made examples",
      "عارض الصور":"Image viewer",
      "إغلاق":"Close",
      "شعار نخبة":"NOKHBA logo"
    },
    alt: {
      "شعار نخبة":"NOKHBA logo",
      "شعار نخبة سينما":"NOKHBA CINEMA logo"
    }
  };
  const titleMap = {
    "إنشاء فيديو بالنص | NOKHBA CINEMA":"Text-to-Video Studio | NOKHBA CINEMA",
    "معرض النجوم | NOKHBA CINEMA":"Star Gallery | NOKHBA CINEMA",
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