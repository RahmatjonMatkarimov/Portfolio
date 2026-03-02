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
        services: "Services",
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
        formPhone: "Phone Number",
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
      services: {
        badge: "What I Offer",
        title1: "My",
        title2: "Services",
        subtitle: "I help businesses grow by creating reliable, efficient, and user-friendly digital solutions.",
        webDev: {
          title: "Web Development",
          desc: "Creating modern, fast, and high-quality websites and admin panels tailored to your business needs.",
        },
        telegramBots: {
          title: "Telegram Bots",
          desc: "Smart bots to automate your sales, customer support, and daily business tasks directly inside Telegram.",
        },
        backend: {
          title: "Backend & APIs",
          desc: "Building the powerful 'brain' that manages your data and connects different systems together securely.",
        },
        systems: {
          title: "Business Systems",
          desc: "Custom CRM and management systems to organize your work, track sales, and improve productivity.",
        },
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
        services: "Xizmatlar",
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
        formPhone: "Telefon raqami",
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
      services: {
        badge: "Xizmatlar",
        title1: "Men ko'rsatadigan",
        title2: "Xizmatlar",
        subtitle: "Sizning biznesingizni rivojlantirish uchun ishonchli, samarali va foydalanishga qulay raqamli yechimlarni taklif qilaman.",
        webDev: {
          title: "Veb-saytlar yaratish",
          desc: "Biznesingiz uchun zamonaviy, tez ishlaydigan va sifatli veb-saytlar hamda boshqaruv panellarini tayyorlab beraman.",
        },
        telegramBots: {
          title: "Telegram Botlar",
          desc: "Savdoni avtomatlashtirish, mijozlar bilan muloqot va kundalik ishlarni yengillashtirish uchun aqlli botlar yarataman.",
        },
        backend: {
          title: "Backend va API'lar",
          desc: "Ma'lumotlaringizni xavfsiz saqlaydigan va tizimlaringizni bir-biriga bog'laydigan kuchli 'miya' (bazalar) quraman.",
        },
        systems: {
          title: "Biznes Tizimlari",
          desc: "Ishingizni tartibga solish, mijozlarni kuzatish va foydani oshirish uchun maxsus CRM va boshqaruv tizimlari.",
        },
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
    role: "Full Stack Developer",
    location: "Xorazm, Uzbekistan",
    email: "rahmatjon974@gmail.com",
    phone: "+998 (33) 990 98 83",
    bio: {
      en: "Graduating from Najot Ta'lim in Backend programming and IT Park in Frontend development solidified my foundation in Full Stack engineering. This combined expertise allows me to build robust, scalable, and user-centric digital solutions from start to finish.",
      uz: "Najot Ta'limda Backend va IT Parkda Frontend yo'nalishlarini tamomlash Full Stack muhandisligi bo'yicha poydevorimni mustahkamladi. Ushbu birlashgan tajriba menga boshidan oxirigacha mustahkam, kengayuvchan va foydalanuvchiga yo'naltirilgan raqamli yechimlarni yaratish imkonini beradi.",
    },
    shortBio: {
      en: "Full Stack Developer specializing in NestJS, Node.js, and Vue.js ecosystem.",
      uz: "NestJS, Node.js va Vue.js ekotizimiga ixtisoslashgan Full Stack dasturchi.",
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
        en: "Shop Automation System",
        uz: "Do'kon avtomatlashtirish tizimi",
      },
      description: {
        en: "A robust retail management ecosystem with a NestJS/Prisma backend, Vue 3 dashboard featuring real-time analytics, and an Expo mobile app for barcode-driven operations.",
        uz: "NestJS va Prisma backend, real-vaqt tahlillariga ega Vue 3 paneli va shtrix-kodlar bilan ishlaydigan Expo mobil ilovasidan iborat do'kon boshqaruv tizimi.",
      },
      tags: ["NestJS", "Vue 3", "React Native", "PostgreSQL", "Prisma"],
      links: {
        github: "https://github.com/RahmatjonMatkarimov",
        demo: null,
      },
      features: {
        en: [
          "Real-time POS & Inventory tracking",
          "Barcode scanner integration (Mobile & Web)",
          "Monthly/Yearly sales analytics with charts",
          "Low-stock alerts & best-seller reports",
          "Secure multi-role JWT authentication",
        ],
        uz: [
          "To'liq kassa va ombor boshqaruv tizimi",
          "Shtrix-kod skaneri (mobil va veb uchun)",
          "Oylik va yillik savdo statistikasi va hisobotlar",
          "Kam qolgan va ko'p sotilgan mahsulotlar tahlili",
          "Barcha qurilmalarda ma'lumotlarning real-vaqtdagi sinxronizatsiyasi",
        ],
      },
    },
    {
      title: {
        en: "Murodbek Matkarimov - SMM Portfolio",
        uz: "Murodbek Matkarimov - SMM Portfolio",
      },
      description: {
        en: "A premium vCard for an SMM & Digital Marketing specialist. Developed using Vue 3 and the latest Tailwind CSS v4 for peak performance.",
        uz: "SMM va Digital Marketing mutaxassisi uchun premium vizitka sayti. Vue 3 va eng so'nggi Tailwind CSS v4 texnologiyasi asosida yuqori tezlik bilan yaratilgan.",
      },
      tags: ["Vue 3", "Tailwind CSS v4", "SEO", "Vite"],
      links: {
        github: "https://github.com/RahmatjonMatkarimov",
        demo: "https://murodbek-matkarimov.rahmatjonmatkarimov.uz/",
      },
      features: {
        en: [
          "Specialized SMM Service Catalog",
          "Tailwind v4 high-speed UI transitions",
          "Direct Instagram & Telegram business API",
          "SEO-ready semantic HTML structure",
        ],
        uz: [
          "Sohaga oid maxsus SMM xizmatlar katalogi",
          "Tailwind v4 asosidagi yuqori tezlikdagi animatsiyalar",
          "Instagram va Telegram orqali to'g'ridan-to'g'ri bog'lanish",
          "SEO uchun optimallashgan semantik tuzilish",
        ],
      },
    },
    {
      title: {
        en: "Boburjon Bobojonov - Trading Portfolio",
        uz: "Boburjon Bobojonov - Trading Portfolio",
      },
      description: {
        en: "An elegant, gold-themed trading portfolio optimized for personal branding. Features a custom CSS stagger animation system.",
        uz: "Shaxsiy brending uchun mo'ljallangan, oltin rangli va lyuks uslubdagi trading portfoliosi. Maxsus CSS kaskadli animatsiya tizimi bilan boyitilgan.",
      },
      tags: ["Vue 3", "Tailwind CSS v3", "Glassmorphism", "SEO"],
      links: {
        github: "https://github.com/RahmatjonMatkarimov",
        demo: "https://boburjon-bobojonov.rahmatjonmatkarimov.uz/",
      },
      features: {
        en: [
          "Luxury Gold-accented visual identity",
          "Staggered entrance animations",
          "One-page 'vCard' style layout",
          "Optimized for fast mobile loading",
        ],
        uz: [
          "Oltin rangli lyuks vizual imidj",
          "Kaskadli kirish animatsiyalari",
          "Bir sahifali 'visitka' uslubidagi dizayn",
          "Mobil qurilmalarda tez yuklanish uchun optimallashgan",
        ],
      },
    },
    {
      title: {
        en: "Muhammadjon Xusainboyev - Portfolio",
        uz: "Muhammadjon Xusainboyev - Portfolio",
      },
      description: {
        en: "An interactive trading portfolio and professional vCard. Built with Vue 3 and GSAP for high-end scroll animations and a seamless dark/light mode experience.",
        uz: "Moliya bozori tahlilchisi va treder uchun interaktiv 'visitka' (vCard) sayti. Vue 3 va GSAP yordamida yuqori sifatli animatsiyalar va qulay dark/light mode tizimi bilan yaratilgan.",
      },
      tags: ["Vue 3", "GSAP", "Tailwind CSS", "ScrollTrigger"],
      links: {
        github: "https://github.com/RahmatjonMatkarimov",
        demo: "https://xusainboyevmuhammadjon.rahmatjonmatkarimov.uz/",
      },
      features: {
        en: [
          "Interactive GSAP Timeline animations",
          "ScrollTrigger-based reveal effects",
          "Dynamic Theme Switcher (Dark/Light)",
          "Glassmorphism UI elements",
          "One-click social & contact integration",
        ],
        uz: [
          "Interaktiv GSAP Timeline animatsiyalari",
          "ScrollTrigger asosidagi animatsion effektlar",
          "Dinamik mavzu almashtirgich (Dark/Light)",
          "Glassmorphism uslubidagi UI elementlar",
          "Ijtimoiy tarmoqlar va aloqa integratsiyasi",
        ],
      },
    },
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
      features: {
        en: [
          "JWT authentication (access & refresh tokens)",
          "Password hashing with bcrypt",
          "Role-protected endpoints",
          "User CRUD operations",
          "Swagger API documentation",
        ],
        uz: [
          "JWT autentifikatsiyasi (access va refresh token)",
          "bcrypt bilan parollarni xesh-lash",
          "Rollar bilan himoyalangan yo'llar",
          "Foydalanuvchi CRUD operatsiyalari",
          "Swagger API hujjatlari",
        ],
      },
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
