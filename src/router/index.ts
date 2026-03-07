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
        title: "Rahmatjon Matkarimov - Full Stack Developer",
        description:
          "Portfolio of Rahmatjon Matkarimov - Full Stack Developer specializing in NestJS, Node.js, Vue.js and Microservices architecture. Based in Xorazm, Uzbekistan.",
      },
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
      meta: {
        title: "About Me | Rahmatjon Matkarimov",
        description:
          "Learn more about Rahmatjon Matkarimov, a Full Stack developer from Uzbekistan with a passion for building scalable systems.",
      },
    },
    {
      path: "/projects",
      name: "projects",
      component: ProjectsView,
      meta: {
        title: "Projects | Rahmatjon Matkarimov",
        description:
          "Explore the Full Stack development projects and software solutions built by Rahmatjon Matkarimov.",
      },
    },
    {
      path: "/services",
      name: "services",
      component: ServicesView,
      meta: {
        title: "Services | Rahmatjon Matkarimov",
        description:
          "Professional Full Stack development services, Telegram bots, and business system solutions by Rahmatjon Matkarimov.",
      },
    },
    {
      path: "/skills",
      name: "skills",
      component: SkillsView,
      meta: {
        title: "Skills | Rahmatjon Matkarimov",
        description:
          "Technical skills and technologies mastered by Rahmatjon Matkarimov, including NestJS, Node.js, Vue.js, TypeScript, and database management.",
      },
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView,
      meta: {
        title: "Contact | Rahmatjon Matkarimov",
        description:
          "Get in touch with Rahmatjon Matkarimov to discuss Full Stack development opportunities and collaborations.",
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
