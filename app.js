// Translation object for Hausa and English
const translations = {
  home: { en: "Home", ha: "Gida" },
  basics: { en: "Basics", ha: "Tushe" },
  intermediate: { en: "Intermediate", ha: "Tsakiya" },
  advance: { en: "Advance", ha: "Ci Gaba" },
  about: { en: "About", ha: "Danganta" },
  contact: { en: "Contact", ha: "Tuntubo" },
  login: { en: "Login", ha: "Shiga" },
  register: { en: "Register", ha: "Zi Nama" },
  startNow: { en: "Start Now", ha: "Fara Yanzu" },
  registerFree: { en: "Register Free →", ha: "Zi Nama Free →" },
  learningLevels: { en: "Learning Levels", ha: "Matakin Koyo" },
  skillsAvailable: { en: "Skills Available", ha: "Ƙwarewar Da Ke Akwai" },
  languages: { en: "Languages", ha: "Harsunaye" },
  spotifyKnowledge: { en: "Spotify for Knowledge", ha: "Spotify don Ilmiya" },
  futureEducation: { en: "The Future of Education in Arewa", ha: "GidanAjiyar Ilmiya a Arewa" },
  heroDesc: { en: "Making learning simple, digital, and inclusive for every Northern Nigerian learner — from students to professionals, from urban areas to remote villages. In Hausa and English.", ha: "Yin koyo sauƙi, dijital, da na gama gari ga kowane mai koyo a Arewa — daga ɗalibi zuwa ƙwararru, daga birni zuwa kauyuka. A Hausa da Turanci." },
  ilmiyaAI: { en: "Ilmiya AI Active", ha: "Ilmiya AI Yana Aiki" },
  mathBasics: { en: "Mathematics — Basics Level", ha: "Lissafi — Matakin Tushe" },
  completePercent: { en: "62% complete · 2 lessons left", ha: "62% an kammala · 2 darussa aka rage" },
  learningNow: { en: "+240 learning now", ha: "+240 suna koyo yanzu" },
  culturalLearning: { en: "Cultural Learning", ha: "Koyon Al'ada" },
  islamicEducation: { en: "Islamic Education & Culture", ha: "Ilmiyar Musulunci & Al'ada" },
  islamicDesc: { en: "At Ilmiya Hub, we blend modern learning with Arewa's Islamic heritage. Our pathway includes Islamic studies, Hausa language, and values-based learning that empowers learners with both faith and future-ready skills.", ha: "A Ilmiya Hub, mun haɗa koyon jiya-jiya da gado-gadan Musulunci na Arewa. Hanyarmu ta ƙunshi karatun Musulunci, harshen Hausa, da koyon da ya fi da ƙima da ke bugi mai-koyo da aminci da ƙwarewar gida." },
  exploreIslamic: { en: "Explore the Islamic Path →", ha: "Bincika Hanyar Musulunci →" },
  ourMission: { en: "Our Mission", ha: "Amacinmu" },
  missionText: { en: "Making quality education available to every Hausa-speaking learner, anywhere and anytime.", ha: "Yin ilmiya mai ƙima a biya ga kowane mai koyo na Hausa, inda a lokacin." },
  ourVision: { en: "Our Vision", ha: "Ganinmu" },
  visionText: { en: "Empowering Hausa-speaking learners through accessible, innovative, culturally relevant education.", ha: "Bugi mai-koyo na Hausa ta hanyar ilmiya da ba a isa, mai nuwu, da ta taɓa al'ada." },
  ourMotto: { en: "Our Motto", ha: "Maganarmu" },
  mottoText: { en: "Ilmiya — The House of Knowledge. Blending modern learning with Hausa culture and language.", ha: "Ilmiya — Gida na Ilmiya. Haɗa koyon jiya-jiya da al'adar Hausa da harshen Hausa." },
  learningPath: { en: "Learning Path", ha: "Hanya Koyo" },
  startJourney: { en: "Start Your Journey", ha: "Fara Balaguron Kai" },
  seeAll: { en: "See All →", ha: "Ga Duka →" },
  hausalang: { en: "Hausa Language", ha: "Harshen Hausa" },
  masterReading: { en: "Master reading, writing and speaking with confidence.", ha: "Kasua karantawa, rubuta da magana da gaskiya." },
  mathematics: { en: "Mathematics", ha: "Lissafi" },
  mathDesc: { en: "Numbers, problem solving and logical thinking.", ha: "Lambobi, warware matsala da tunanin logik." },
  psychology: { en: "Psychology", ha: "Tunani-tunani" },
  psychologyDesc: { en: "Understand the human mind, emotions and social behaviour.", ha: "Fahimtar tunanin mutum, motsin rai da halayyen jama'a." },
  emotionalIntel: { en: "Emotional Intelligence", ha: "Wayo Motsin Rai" },
  emotionalDesc: { en: "Build leadership, empathy and professional skills.", ha: "Gina shugabanci, tausayi da ƙwarewar ɗan sana'a." },
  globalAwareness: { en: "Global Awareness", ha: "Sanin Dunia" },
  globalDesc: { en: "Connect with global issues, cultures and opportunities.", ha: "Haɗa da matsalolin duniya, al'adu da dama." },
  careerSkills: { en: "Career Skills", ha: "Ƙwarewar Aiki" },
  careerDesc: { en: "CV writing, interview prep and job search strategies.", ha: "Rubutun CV, shirye-shirye kokarintatta da dabarun neman aiki." },
  skillsBar: { en: "Skills Bar", ha: "Sandar Ƙwarewa" },
  centurySkills: { en: "21st Century Skills for Arewa Youth", ha: "Ƙwarewar Karni na 21 ga Matasa Arewa" },
  softwareDev: { en: "Software Dev & Coding", ha: "Gina Software & Rubutu Code" },
  webApps: { en: "Web & mobile apps", ha: "Ayyukan Aibomashi & wayar hannu" },
  forexTrading: { en: "Forex & Crypto Trading", ha: "Sulhaci Forex & Crypto" },
  financialMarkets: { en: "Financial markets", ha: "Kasuwar Kudin" },
  realEstate: { en: "Real Estate", ha: "Kasuwar Gida" },
  propertyHousing: { en: "Property & smart housing", ha: "Kasuwa da gida mai wayo" },
  cybersecurity: { en: "Cybersecurity", ha: "Garkuwa da Network" },
  digitalDefense: { en: "Digital defense", ha: "Garkuwa dijital" },
  digitalMarketing: { en: "Digital Marketing", ha: "Kasuwar Dijital" },
  seoContent: { en: "SEO, content & branding", ha: "SEO, abubuwan ciki da aikin gida" },
  aiMachine: { en: "AI & Machine Learning", ha: "AI & Koyon Injini" },
  automationAI: { en: "Automation & AI thinking", ha: "Sauke da tunanin AI" },
  roboticsIoT: { en: "Robotics & IoT", ha: "Robotics & IoT" },
  smartSystems: { en: "Smart systems", ha: "Tsarin wayo" },
  graphicDesign: { en: "Graphic Design", ha: "Zane Zanen Hoto" },
  visualComm: { en: "Visual communication", ha: "Sadarwa ta gani" },
  aiIntegration: { en: "AI Integration", ha: "Haɗakar AI" },
  meetIlmiya: { en: "Meet Ilmiya — Your AI Tutor", ha: "Saba da Ilmiya — Malamin AI Kai" },
  aiDesc: { en: "Your personal AI learning companion. Ask questions, get explanations, practice assignments — all in Hausa or English. Available 24/7 for every learner.", ha: "Abokin koyon AI na kai. Bugi tambayoyi, sami bayani, yi aiki — duka a Hausa ko Turanci. Akwai 24/7 ga kowane mai koyo." },
  talkToIlmiya: { en: "Talk to Ilmiya AI", ha: "Magana da Ilmiya AI" },
  readyToStart: { en: "Ready to Start Learning?", ha: "Shirye Ne Fara Koyo?" },
  joinIlmiya: { en: "Join Ilmiya Hub Today.", ha: "Shiga Ilmiya Hub Jiya." },
  noExcuses: { en: "Free access to Basics & Intermediate. No excuses — just knowledge.", ha: "Buɗi buɗi zuwa Tushe & Tsakiya. Babu bahaushe — ilmiya kawai." },
  startNowFree: { en: "Start Now — It's Free", ha: "Fara Yanzu — Ba a Biya" },
  courses: { en: "Courses", ha: "Darussa" },
  skills: { en: "Skills", ha: "Ƙwarewa" },
  freeBasics: { en: "Free · Basics", ha: "Buɗi · Tushe" },
  freeIntermediate: { en: "Free · Intermediate", ha: "Buɗi · Tsakiya" },
  paidAdvanced: { en: "Paid · Advanced", ha: "A biya · Ci Gaba" },
  paidIntermediate: { en: "Paid · Intermediate", ha: "A biya · Tsakiya" },
  hausaEnglish: { en: "Hausa / English", ha: "Hausa / Turanci" },
};

// Initialize theme and language on page load
document.addEventListener("DOMContentLoaded", function () {
  const savedTheme = localStorage.getItem("theme") || "dark";
  const savedLang = localStorage.getItem("language") || "en";

  applyTheme(savedTheme);
  applyLanguage(savedLang);

  // Event listeners for toggles
  document.getElementById("themeToggle").addEventListener("click", toggleTheme);
  document.getElementById("langToggle").addEventListener("click", toggleLanguage);
});

// Toggle theme
function toggleTheme() {
  const currentTheme = localStorage.getItem("theme") || "dark";
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  localStorage.setItem("theme", newTheme);
  applyTheme(newTheme);
}

// Apply theme
function applyTheme(theme) {
  const html = document.documentElement;
  const themeToggle = document.getElementById("themeToggle");

  if (theme === "light") {
    html.classList.add("light-mode");
    themeToggle.textContent = "🌙";
    themeToggle.classList.add("active");
  } else {
    html.classList.remove("light-mode");
    themeToggle.textContent = "☀️";
    themeToggle.classList.remove("active");
  }
  localStorage.setItem("theme", theme);
}

// Toggle language
function toggleLanguage() {
  const currentLang = localStorage.getItem("language") || "en";
  const newLang = currentLang === "en" ? "ha" : "en";
  localStorage.setItem("language", newLang);
  applyLanguage(newLang);
}

// Apply language
function applyLanguage(lang) {
  const langToggle = document.getElementById("langToggle");
  langToggle.textContent = lang === "en" ? "HA" : "EN";
  langToggle.classList.toggle("active", lang === "ha");

  // Update all translatable elements
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (translations[key]) {
      element.textContent = translations[key][lang];
    }
  });

  localStorage.setItem("language", lang);
}

// Initialize page with translations
function initializeTranslations() {
  const lang = localStorage.getItem("language") || "en";
  applyLanguage(lang);
}

// Call initialization when script loads
initializeTranslations();
