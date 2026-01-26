import { defineStore } from "pinia";
import { ref } from "vue";

export const usePortfolioStore = defineStore("portfolio", () => {
  const personalInfo = ref({
    name: "Rahmatjon Matkarimov",
    role: "Backend Developer",
    location: "Xorazm, Uzbekistan",
    email: "rahmatjon974@gmail.com",
    phone: "+998 (33) 990 98 83",
    bio: "Graduating from Najot Ta'lim in Backend web programming solidified my foundation in software engineering. This educational journey, paired with hands-on experience in backend development, motivates me to build impactful, well-integrated systems that solve complex challenges.",
    shortBio:
      "Backend Developer specializing in NestJS, Node.js, and Microservices architecture.",
  });

  const experiences = ref([
    {
      role: "Frontend Developer",
      company: "Yurist Konsalting X/K",
      date: "Jan 2025 - Present",
      description:
        "Working on frontend development tasks and contributing to web application interfaces. Collaborating with the backend team to integrate REST APIs.",
    },
  ]);

  const education = ref([
    {
      school: "Najot Ta'lim",
      role: "Backend Developer",
      date: "May 2025 - Dec 2025",
      description:
        "An 8-month intensive backend web development program focused on modern software engineering practices, Node.js, RESTful APIs, databases, and system design principles.",
    },
    {
      school: "IT Park Xorazm",
      role: "Frontend Developer",
      date: "Apr 2024 - Oct 2024",
      description:
        "A 6-month intensive frontend web development program covering modern software engineering approaches, Vue.js, and system design fundamentals.",
    },
  ]);

  const projects = ref([
    {
      title: "Authentication System",
      description:
        "A robust REST API built with NestJS featuring JWT authentication, Role-Based Access Control, and Swagger documentation.",
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

  const socialLinks = ref([{ name: "Github", url: "https://github.com/RahmatjonMatkarimov", icon: "Github" }]);

  return {
    personalInfo,
    experiences,
    education,
    projects,
    skills,
    socialLinks,
  };
});
