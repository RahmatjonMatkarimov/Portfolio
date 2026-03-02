import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const usePortfolioStore = defineStore("portfolio", () => {
  const currentLanguage = ref<"en" | "uz">("uz");

  const translations = {
    en: {
      nav: {
        home: "Home",
        about: "About",
        projects: "Projects",
        skills: "Skills",
        contact: "Contact",
        talk: "LET'S TALK",
        langAria: "Switch language to ",
      },
      hero: {
        title1: "Building",
        title2: "Digital Future",
        subtitle: "Hi, I'm",
        action1: "See My Work",
        action2: "Contact Me",
        feature1Title: "Modern Stack",
        feature1Desc: "Clean, scalable code architectures with modern tools.",
        feature2Title: "Performance",
        feature2Desc: "Optimizing for speed and efficiency at every level.",
      },
      about: {
        badge: "My Journey",
        title1: "Experience &",
        title2: "Education",
        workTitle: "Work Experience",
        eduTitle: "Education",
      },
      projects: {
        badge: "Portfolio",
        title1: "Featured",
        title2: "Works",
        subtitle: "A selection of projects that demonstrate my passion for building digital experiences.",
        viewAll: "View All Projects",
      },
      skills: {
        badge: "Expertise",
        title1: "Technical",
        title2: "Skills",
      },
      contact: {
        badge: "Get in Touch",
        title1: "Let's",
        title2: "Connect",
        subtitle: "I'm always open to discussing product design work or partnership opportunities. Feel free to reach out through any of the following channels.",
        formName: "Full Name",
        formEmail: "Email Address",
        formMessage: "Message",
        formSubmit: "Send Message",
        sending: "Sending...",
        success: "Thank you! Your message has been sent successfully.",
        infoTitle: "Contact Info",
        socialTitle: "Social Networks",
        emailMe: "Email Me",
        callMe: "Call Me",
        formTitle: "Send a message",
      },
      footer: {
        tagline: "Designing digital experiences for all screens.",
        crafted: "Crafted with precision.",
      },
    },
    uz: {
      nav: {
        home: "Asosiy",
        about: "Men haqimda",
        projects: "Loyihalar",
        skills: "Ko'nikmalar",
        contact: "Aloqa",
        talk: "BOG'LANISH",
        langAria: "Tilni o'zgartirish: ",
      },
      hero: {
        title1: "Raqamli",
        title2: "Kelajakni Quramiz",
        subtitle: "Salom, men",
        action1: "Ishlarimni ko'rish",
        action2: "Bog'lanish",
        feature1Title: "Zamonaviy Texnologiyalar",
        feature1Desc: "Zamonaviy vositalar bilan toza va kengayuvchan kod arxitekturalari.",
        feature2Title: "Samaradorlik",
        feature2Desc: "Har bir bosqichda tezlik va samaradorlikni optimallashtirish.",
      },
      about: {
        badge: "Mening yo'lim",
        title1: "Tajriba va",
        title2: "Ta'lim",
        workTitle: "Ish tajribasi",
        eduTitle: "Ta'lim",
      },
      projects: {
        badge: "Portfolio",
        title1: "Tanlangan",
        title2: "Ishlar",
        subtitle: "Raqamli tajribalarni yaratishga bo'lgan ishtiyoqimni ko'rsatuvchi loyihalar to'plami.",
        viewAll: "Barcha loyihalar",
      },
      skills: {
        badge: "Mutaxassislik",
        title1: "Texnik",
        title2: "Ko'nikmalar",
      },
      contact: {
        badge: "Bog'lanish",
        title1: "Keling,",
        title2: "Gaplashamiz",
        subtitle: "Men har doim mahsulot dizayni yoki hamkorlik imkoniyatlarini muhokama qilish uchun ochiqman. Quyidagi kanallar orqali bog'lanishingiz mumkin.",
        formName: "To'liq ism",
        formEmail: "Email manzili",
        formMessage: "Xabar",
        formSubmit: "Xabarni yuborish",
        sending: "Yuborilmoqda...",
        success: "Muvaffaqiyatli yuborildi!",
        infoTitle: "Aloqa ma'lumotlari",
        socialTitle: "Ijtimoiy tarmoqlar",
        emailMe: "Email orqali",
        callMe: "Telefon orqali",
        formTitle: "Xabar yuborish",
      },
      footer: {
        tagline: "Barcha ekranlar uchun raqamli tajribalarni loyihalashtirish.",
        crafted: "Aniq va sifatli yaratilgan.",
      },
    },
  };

  const t = computed(() => translations[currentLanguage.value]);

  const personalInfo = ref({
    name: "Rahmatjon Matkarimov",
    role: "Backend Developer",
    location: "Xorazm, Uzbekistan",
    email: "rahmatjon974@gmail.com",
    phone: "+998 (33) 990 98 83",
    bio: {
      en: "Graduating from Najot Ta'lim in Backend web programming solidified my foundation in software engineering. This educational journey, paired with hands-on experience in backend development, motivates me to build impactful, well-integrated systems that solve complex challenges.",
      uz: "Najot Ta'limda Backend web dasturlash yo'nalishini tugatishim dasturiy ta'minot muhandisligi bo'yicha poydevorimni mustahkamladi. Ushbu ta'lim yo'li, backend ishlab chiqishdagi amaliy tajriba bilan birgalikda, meni murakkab muammolarni hal qiladigan ta'sirli, yaxshi integratsiyalangan tizimlarni qurishga undaydi.",
    },
    shortBio: {
      en: "Backend Developer specializing in NestJS, Node.js, and Microservices architecture.",
      uz: "NestJS, Node.js va Mikroxizmatlar arxitekturasiga ixtisoslashgan Backend dasturchi.",
    },
  });

  const experiences = ref([
    {
      role: {
        en: "Frontend Developer",
        uz: "Frontend Dasturchi",
      },
      company: "Yurist Konsalting X/K",
      date: {
        en: "Jan 2025 - Present",
        uz: "Yanvar 2025 - Hozirgacha",
      },
      description: {
        en: "Working on frontend development tasks and contributing to web application interfaces. Collaborating with the backend team to integrate REST APIs.",
        uz: "Frontend ishlab chiqish vazifalari ustida ishlash va veb-ilova interfeyslariga hissa qo'shish. REST API'larni integratsiya qilish uchun backend jamoasi bilan hamkorlik qilish.",
      },
    },
  ]);

  const education = ref([
    {
      school: "Najot Ta'lim",
      role: {
        en: "Backend Developer",
        uz: "Backend Dasturchi",
      },
      date: {
        en: "May 2025 - Dec 2025",
        uz: "May 2025 - Dekabr 2025",
      },
      description: {
        en: "An 8-month intensive backend web development program focused on modern software engineering practices, Node.js, RESTful APIs, databases, and system design principles.",
        uz: "Zamonaviy dasturiy ta'minot muhandisligi amaliyoti, Node.js, RESTful API, ma'lumotlar bazalari va tizim dizayni tamoyillariga yo'naltirilgan 8 oylik intensiv backend veb-ishlab chiqish dasturi.",
      },
    },
    {
      school: "IT Park Xorazm",
      role: {
        en: "Frontend Developer",
        uz: "Frontend Dasturchi",
      },
      date: {
        en: "Apr 2024 - Oct 2024",
        uz: "Aprel 2024 - Oktyabr 2024",
      },
      description: {
        en: "A 6-month intensive frontend web development program covering modern software engineering approaches, Vue.js, and system design fundamentals.",
        uz: "Zamonaviy dasturiy muhandislik yondashuvlari, Vue.js va tizim dizayni asoslarini qamrab oluvchi 6 oylik intensiv frontend veb-ishlab chiqish dasturi.",
      },
    },
  ]);

  const projects = ref([
    {
      title: {
        en: "Authentication System",
        uz: "Autentifikatsiya tizimi",
      },
      description: {
        en: "A robust REST API built with NestJS featuring JWT authentication, Role-Based Access Control, and Swagger documentation.",
        uz: "JWT autentifikatsiyasi, rolga asoslangan kirishni boshqarish va Swagger hujjatlariga ega NestJS bilan qurilgan mustahkam REST API.",
      },
      tags: ["NestJS", "TypeScript", "PostgreSQL", "JWT", "Swagger"],
      links: {
        github: "https://github.com/RahmatjonMatkarimov/auth",
        demo: null,
      },
      features: [
        "JWT authentication (access & refresh tokens)",
        "Password hashing with bcrypt",
        "Role-protected endpoints",
        "User CRUD operations",
        "Swagger API documentation",
      ],
    },
  ]);

  const skills = ref({
    Backend: ["Node.js", "Express.js", "NestJS", "Microservices"],
    Frontend: ["HTML5", "CSS3", "Vue.js", "React (Basic)"],
    "Mobile & Tools": [
      "React Native (basic)",
      "JavaScript",
      "TypeScript",
      "Linux",
      "Git",
      "Nginx",
      "SSL/TLS",
    ],
    Database: ["MongoDB", "PostgreSQL"],
  });

  const socialLinks = ref([
    { name: "Github", url: "https://github.com/RahmatjonMatkarimov", icon: "Github" },
    { name: "Telegram", url: "https://t.me/Rahmatjon_web", icon: "Send" },
    { name: "Instagram", url: "https://instagram.com/Rahmatjon_web", icon: "Instagram" },
  ]);

  function setLanguage(lang: "en" | "uz") {
    currentLanguage.value = lang;
  }

  return {
    currentLanguage,
    t,
    personalInfo,
    experiences,
    education,
    projects,
    skills,
    socialLinks,
    setLanguage,
  };
});
