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
      en: "Rahmatjon Web - Full Stack Developer specializing in NestJS, Node.js, and Vue.js ecosystem.",
      uz: "Rahmatjon Web - NestJS, Node.js va Vue.js ekotizimiga ixtisoslashgan Full Stack dasturchi.",
    },
  });

  const experiences = ref([
    {
      role: {
        en: "Frontend Engineer",
        uz: "Frontend Muhandis",
      },
      company: "Yurist Konsalting X/K",
      date: {
        en: "Jan 2025 - Present",
        uz: "Yanvar 2025 - Hozirgacha",
      },
      description: {
        en: "Developed and maintained highly responsive web interfaces for legal consulting services. Successfully integrated complex RESTful APIs and collaborated with backend engineers to ensure seamless data synchronization and peak performance using Vue.js ecosystem.",
        uz: "Yuridik konsalting xizmatlari uchun yuqori darajada moslashuvchan veb-interfeyslarni ishlab chiqish va qo'llab-quvvatlash. Murakkab RESTful API'larni muvaffaqiyatli integratsiya qilish va backend jamoasi bilan ma'lumotlar sinxronizatsiyasini ta'minlashda faol ishtirok etish.",
      },
    },
  ]);

  const education = ref([
    {
      school: "Najot Ta'lim IT Academy",
      role: {
        en: "Backend Engineering (Node.js/NestJS)",
        uz: "Backend Muhandisligi (Node.js/NestJS)",
      },
      date: {
        en: "May 2025 - Dec 2025",
        uz: "May 2025 - Dekabr 2025",
      },
      description: {
        en: "Completed an intensive 8-month software engineering bootcamp at Uzbekistan's leading IT Academy. Mastered Node.js, NestJS, microservices architecture, database design (PostgreSQL/MongoDB), and enterprise-grade API development.",
        uz: "O'zbekistonning yetakchi IT akademiyasida 8 oylik intensiv dasturiy ta'minot muhandisligi kursini tamomladim. Node.js, NestJS, mikroxizmatlar arxitekturasi va ma'lumotlar bazasi (PostgreSQL/MongoDB) dizaynini mukammal o'zlashtirdim.",
      },
    },
    {
      school: "IT Park Academy Xorazm",
      role: {
        en: "Modern Frontend Engineering",
        uz: "Zamonaviy Frontend Muhandisligi",
      },
      date: {
        en: "Apr 2024 - Oct 2024",
        uz: "Aprel 2024 - Oktyabr 2024",
      },
      description: {
        en: "Specialized in advanced frontend patterns, Vue.js lifecycle, and state management systems. Focused on performance optimization, responsive design principles, and modern build tools (Vite/Webpack).",
        uz: "Ilg'or frontend patternlari, Vue.js lifecycle va holatni boshqarish (state management) tizimlari bo'yicha ixtisoslashdim. Ish samaradorligini optimallashtirish va zamonaviy build vositalari (Vite/Webpack) bilan ishlashga e'tibor qaratildi.",
      },
    },
  ]);

  const projects = ref([
    {
      title: {
        en: "Enterprise Document Processor",
        uz: "Hujjatlarni PDF'ga aylantirish tizimi",
      },
      description: {
        en: "A high-performance document processing engine that handles cross-platform conversions (Word, Excel, Images) with precision using LibreOffice server integration and NestJS.",
        uz: "LibreOffice server integratsiyasi va NestJS yordamida Word, Excel va rasm kabi hujjatlarni yuqori aniqlikda PDF formatiga o'tkazuvchi professional tizim.",
      },
      tags: ["NestJS", "Vue 3", "LibreOffice", "Tailwind CSS v4", "Vite"],
      links: {
        github: "https://github.com/RahmatjonMatkarimov/pdf-convertor",
        demo: null,
      },
      features: {
        en: [
          "Enterprise-grade conversion using LibreOffice-convert",
          "Asynchronous file processing with NestJS and clean architecture",
          "Advanced drag-and-drop UI with real-time progress tracking",
          "Optimized for high-speed document rendering and security",
        ],
        uz: [
          "LibreOffice-convert yordamida korporativ darajadagi konvertatsiya",
          "NestJS va toza arxitektura asosida asinxron fayl ishlov berish",
          "Real-vaqtda yuklash jarayonini kuzatuvchi ilg'or interfeys",
          "Yuqori tezlikdagi renderlash va xavfsizlik uchun optimallashgan",
        ],
      },
    },
    {
      title: {
        en: "OsonQR - Professional QR Ecosystem",
        uz: "OsonQR - Professional QR Ekotizimi",
      },
      description: {
        en: "A feature-rich QR code generation platform focused on accessibility and UX. Supports secure vCards, WiFi configurations, and advanced visual customization with Tailwind v4.",
        uz: "Foydalanishga qulay va yuqori UX darajasiga ega QR kod yaratish platformasi. Xavfsiz vCard, WiFi sozlamalari va Tailwind v4 asosidagi maxsus vizual dizaynni qo'llab-quvvatlaydi.",
      },
      tags: ["Vue 3", "Tailwind CSS v4", "i18n", "Vite", "SEO"],
      links: {
        github: "https://github.com/RahmatjonMatkarimov/osonQR",
        demo: "https://osonqr.rahmatjonmatkarimov.uz/",
      },
      features: {
        en: [
          "Advanced QR types (vCard, WiFi, SMS, Social Media)",
          "Dynamic visual styling and business logo injection",
          "High-performance UI built with Tailwind CSS v4",
          "Full internationalization (i18n) support for global users",
        ],
        uz: [
          "Ilg'or QR turlari (vCard, WiFi, SMS, Ijtimoiy tarmoqlar)",
          "Dinamik vizual dizayn va biznes logotiplarini joylashtirish",
          "Tailwind CSS v4 asosidagi yuqori samarali interfeys",
          "Xalqaro foydalanuvchilar uchun to'liq i18n ko'p tilli tizimi",
        ],
      },
    },
    {
      title: {
        en: "shop automation system",
        uz: "do'konni automatlashtirish tizimi",
      },
      description: {
        en: "A comprehensive business automation suite featuring a NestJS/Prisma backend, interactive Vue 3 dashboard for real-time analytics, and an Expo mobile app for barcode workflows.",
        uz: "NestJS va Prisma backend, real-vaqtda tahlillar beruvchi Vue 3 paneli va shtrix-kodlar bilan ishlaydigan Expo mobil ilovasidan iborat biznesni avtomatlashtirish ekotizimi.",
      },
      tags: ["NestJS", "Prisma", "PostgreSQL", "Vue 3", "React Native", "Expo"],
      links: {
        github: null,
        demo: null,
      },
      features: {
        en: [
          "Scalable NestJS architecture with Prisma ORM and PostgreSQL",
          "Real-time inventory tracking and POS (Point of Sale) operations",
          "Cross-platform mobile solution with integrated barcode scanning",
          "Complex data visualization for sales and revenue analytics",
          "Enterprise-grade JWT authentication and role-based security",
        ],
        uz: [
          "Prisma ORM va PostgreSQL bilan kengayuvchan NestJS arxitekturasi",
          "Real-vaqtdagi ombor kontoli va kassa (POS) operatsiyalari",
          "Shtrix-kod skaneri integratsiyalangan mobil ilova (Expo)",
          "Savdo va foyda tahlillari uchun murakkab ma'lumotlar vizualizatsiyasi",
          "JWT asosidagi xavfsizlik va rollarga asoslangan kirish nazorati",
        ],
      },
    },
    {
      title: {
        en: "Murodbek Matkarimov - Marketing Suite",
        uz: "Murodbek Matkarimov - Marketing Vizitka",
      },
      description: {
        en: "A premium digital vCard and service showcase for an SMM specialist. Engineered with Vue 3 and Tailwind CSS v4 for maximum performance and SEO visibility.",
        uz: "SMM mutaxassisi uchun premium darajadagi raqamli xizmatlar ko'rgazmasi. Vue 3 va Tailwind CSS v4 yordamida maksimal tezlik va SEO uchun optimallashgan holda yaratilgan.",
      },
      tags: ["Vue 3", "Tailwind CSS v4", "SEO", "Vite"],
      links: {
        github: "https://github.com/RahmatjonMatkarimov/murodbek-matkarimov",
        demo: "https://murodbek-matkarimov.rahmatjonmatkarimov.uz/",
      },
      features: {
        en: [
          "Optimized Service Catalog for high conversion",
          "State-of-the-art animations with Tailwind v4 transitions",
          "Direct Business API integration for Telegram/Instagram",
          "Semantic HTML5 structure for peak SEO performance",
        ],
        uz: [
          "Yuqori konversiya uchun optimallashgan xizmatlar katalogi",
          "Tailwind v4 yordamida zamonaviy va tezkor animatsiyalar",
          "Telegram va Instagram uchun to'g'ridan-to'g'ri biznes integratsiya",
          "SEO uchun mukammal semantic HTML5 struktura",
        ],
      },
    },
    {
      title: {
        en: "Boburjon Bobojonov - Brand Identity",
        uz: "Boburjon Bobojonov - Brend Vizitka",
      },
      description: {
        en: "An elegant, gold-themed personal branding portfolio featuring a custom CSS stagger animation system for a luxury user experience.",
        uz: "Shaxsiy brending uchun maxsus CSS animatsiyalar bilan boyitilgan, oltin rangli va yuqori estetikali professional vizitka sayti.",
      },
      tags: ["Vue 3", "Tailwind CSS v3", "Glassmorphism", "CSS Animations"],
      links: {
        github: "https://github.com/RahmatjonMatkarimov/boburjon-bobojonov",
        demo: "https://boburjon-bobojonov.rahmatjonmatkarimov.uz/",
      },
      features: {
        en: [
          "Custom-engineered golden aesthetic brand identity",
          "Staggered entrance animations for enhanced user engagement",
          "Mobile-first responsive architecture with zero layout shift",
          "Optimized asset delivery for ultra-fast loading speeds",
        ],
        uz: [
          "Oltin rangli maxsus dizayn va premium brend imidji",
          "Foydalanuvchi e'tiborini tortuvchi kaskadli animatsiyalar",
          "Layout shiftlarsiz (CLS) mobil-birinchi arxitektura",
          "O'ta tez yuklanish uchun optimallashgan resurslar",
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
        github: "https://github.com/RahmatjonMatkarimov/X.M_Portfolio",
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
        en: "Modern Auth & Security Core",
        uz: "Zamonaviy Autentifikatsiya Markazi",
      },
      description: {
        en: "A production-ready Authorization & Authentication microservice built with NestJS, implementing industry-standard security protocols and RBAC.",
        uz: "Sanoat standarti xavfsizlik protokollari va RBAC tizimi asosida NestJS bilan qurilgan, foydalanishga tayyor avtorizatsiya va autentifikatsiya mikroxizmati.",
      },
      tags: ["NestJS", "TypeScript", "PostgreSQL", "JWT", "Swagger"],
      links: {
        github: "https://github.com/RahmatjonMatkarimov/auth",
        demo: null,
      },
      features: {
        en: [
          "Advanced JWT strategy with Access & Refresh token rotation",
          "Secure password hashing implementing bcrypt industry standards",
          "Granular Role-Based Access Control (RBAC) and data protection",
          "Comprehensive API documentation using Swagger / OpenAPI",
          "Scalable User and Profile management lifecycle",
        ],
        uz: [
          "Access va Refresh token rotatsiyasiga ega ilg'or JWT strategiyasi",
          "bcrypt standarti bo'yicha parollarni xavfsiz xesh-lash",
          "Rollar bo'yicha aniq kirish nazorati (RBAC) va xavfsizlik",
          "Swagger / OpenAPI yordamida batafsil API hujjatlari",
          "Foydalanuvchilar va profillarni boshqarishning kengayuvchan tizimi",
        ],
      },
    },
        {
      title: {
        en: "Khiva-Soft Corporate Portal",
        uz: "Khiva-Soft Korporativ Portali",
      },
      description: {
        en: "A modern corporate presence for an IT solutions firm, utilizing Vue Router for seamless SPA navigation and Tailwind CSS for a scalable design system.",
        uz: "IT-echimlar firmasi uchun Vue Router va Tailwind CSS yordamida yaratilgan, qulay SPA navigatsiyasiga ega zamonaviy korporativ portal.",
      },
      tags: ["Vue 3", "Tailwind CSS", "Vue Router", "SPA"],
      links: {
        github: "https://github.com/RahmatjonMatkarimov/Khiva-Soft",
        demo: 'https://khiva-soft.rahmatjonmatkarimov.uz/',
      },
      features: {
        en: [
          "Lightning-fast Single Page Application (SPA) architecture",
          "Modular CSS design system for consistent branding",
          "SEO-optimized content structure and fast navigation",
          "Fully responsive layout across all device viewports",
        ],
        uz: [
          "Yashin tezligidagi SPA (Single Page Application) arxitekturasi",
          "Brend imidji uchun modulli CSS dizayn tizimi",
          "SEO-optimallashgan kontent va qulay navigatsiya",
          "Barcha turdagi qurilmalar uchun to'liq moslashuvchan interfeys",
        ],
      },
    },
    {
      title: {
        en: "Dynamic Weather Intelligence",
        uz: "Dinamik Ob-havo Markazi",
      },
      description: {
        en: "A real-time weather analytics application featuring automatic geolocation detection and interactive UI elements using OpenWeather API integration.",
        uz: "OpenWeather API integratsiyasi orqali real-vaqtdagi ob-havo tahlillarini taqdim etuvchi, avtomatik geolokatsiya va interaktiv UI elementlariga ega ilova.",
      },
      tags: ["Vue 3", "OpenWeather API", "Axios", "Geolocation"],
      links: {
        github: "https://github.com/RahmatjonMatkarimov/wather",
        demo: 'https://wather.rahmatjonmatkarimov.uz/',
      },
      features: {
        en: [
          "Precise real-time weather data fetching via OpenWeather API",
          "Automated user geolocation via Browser Geolocation API",
          "Sophisticated Dark/Light theme orchestration",
          "Modern Glassmorphism UI components with smooth transitions",
        ],
        uz: [
          "OpenWeather API orqali aniq real-vaqtda ob-havo ma'lumotlari",
          "Browser Geolocation API orqali avtomatik joylashuvni aniqlash",
          "Tizimli Dark/Light mavzu almashtirgich",
          "Yumshoq o'tishlarga ega zamonaviy Glassmorphism UI komponentlari",
        ],
      },
    },
    {
      title: {
        en: "AirPods Pro - Visual Clone",
        uz: "AirPods Pro - Vizual Klon",
      },
      description: {
        en: "A high-fidelity clone of the AirPods Pro landing page, demonstrating mastery of fundamental HTML5/CSS3 and complex Flexbox/Grid layouts.",
        uz: "AirPods Pro landing page-ning yuqori aniqlikdagi kloni. HTML5/CSS3 hamda murakkab Flexbox va Grid joylashuvlari boyicha kuchli ko'nikmalarni namoyish etadi.",
      },
      tags: ["HTML5", "CSS3", "Responsive Design", "UI/UX"],
      links: {
        github: "https://github.com/RahmatjonMatkarimov/airPods_pro_HTML_CSS",
        demo: 'https://air-pods-pro.rahmatjonmatkarimov.uz/',
      },
      features: {
        en: [
          "Pixel-perfect visual replication of Apple design standards",
          "Advanced responsive behavior using CSS Grid and Flexbox",
          "Optimized static asset delivery for maximum performance",
        ],
        uz: [
          "Apple dizayn standartlariga mos keluvchi pixel-perfect klon",
          "CSS Grid va Flexbox yordamida ilg'or moslashuvchanlik",
          "Maksimal samaradorlik uchun optimallashgan statik resurslar",
        ],
      },
    },
  ]);

  const skills = ref({
    Backend: ["Node.js", "NestJS", "Express.js", "Microservices", "RESTful APIs"],
    Frontend: ["Vue 3", "Vite", "Pinia", "Tailwind CSS v4", "GSAP Animations"],
    "Database & ORM": ["PostgreSQL", "MongoDB", "Prisma ORM"],
    "Tools & DevOps": ["TypeScript", "Git", "Linux", "Nginx", "Docker (Basic)", "SSL/TLS"],
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
