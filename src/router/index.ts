import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ProjectsView from "../views/ProjectsView.vue";
import ContactView from "../views/ContactView.vue";
import SkillsView from "../views/SkillsView.vue";
import ServicesView from "../views/ServicesView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        title: "Rahmatjon Matkarimov | Full Stack Dasturchi | Node.js, NestJS & Vue.js",
        description:
          "Rahmatjon Matkarimov - NestJS, Node.js va Vue.js yo'nalishlarida tajribali Full Stack dasturchi. Zamonaviy veb-saytlar va Telegram botlar yaratish xizmatlari.",
      },
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
      meta: {
        title: "Men haqimda | Tajriba va Ta'lim | Rahmatjon Matkarimov",
        description:
          "Rahmatjon Matkarimovning IT sohasidagi sayohati, tajribasi va ta'limi bilan batafsil tanishing. Full Stack dasturchi sifatidagi mutaxassisligi.",
      },
    },
    {
      path: "/projects",
      name: "projects",
      component: ProjectsView,
      meta: {
        title: "Loyihalar va Portfolio | Bajarilgan Ishlar | Rahmatjon Matkarimov",
        description:
          "Bajarilgan loyihalar portfolioli: Korporativ tizimlar, PDF konvertorlar, QR ekotizimlari va boshqa murakkab veb-yechimlar to'plami.",
      },
    },
    {
      path: "/services",
      name: "services",
      component: ServicesView,
      meta: {
        title: "Xizmatlar | Veb-sayt va Bot yaratish | Rahmatjon Matkarimov",
        description:
          "Veb-saytlar yaratish, Telegram botlar, backend tizimlari va biznesni avtomatlashtirish bo'yicha sifatli IT xizmatlari.",
      },
    },
    {
      path: "/skills",
      name: "skills",
      component: SkillsView,
      meta: {
        title: "Ko'nikmalar va Texnologiyalar | Rahmatjon Matkarimov",
        description:
          "Dasturlash tillari va texnologiyalari: NestJS, Node.js, Vue.js, TypeScript, PostgreSQL, MongoDB, Prisma va zamonaviy frontend texnologiyalari.",
      },
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView,
      meta: {
        title: "Aloqa va Bog'lanish | Loyiha Buyurtma Berish | Rahmatjon Matkarimov",
        description:
          "Loyiha buyurtma qilish yoki hamkorlik masalalarida Rahmatjon Matkarimov bilan bog'laning. Telegram, Instagram va Email orqali tezkor aloqa.",
      },
    },
  ],
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

router.beforeEach((to, _from, next) => {
  const title = to.meta.title as string;
  const description = to.meta.description as string;
  const baseUrl = "https://www.rahmatjonmatkarimov.uz";
  const fullUrl = baseUrl + to.path;

  if (title) {
    document.title = title;
  }

  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }
  canonical.setAttribute("href", fullUrl);

  if (description) {
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');

    if (ogTitle && title) ogTitle.setAttribute("content", title);
    if (ogDescription) ogDescription.setAttribute("content", description);
    if (ogUrl) ogUrl.setAttribute("content", fullUrl);
    if (twitterTitle && title) twitterTitle.setAttribute("content", title);
    if (twitterDescription) twitterDescription.setAttribute("content", description);
  }

  next();
});

export default router;
