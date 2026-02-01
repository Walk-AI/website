import { createRouter, createWebHistory } from "vue-router";

export const walkRouter = createRouter({
  history: createWebHistory("/website/"),
  routes: [
    { path: "/", name: "Home", component: () => import("@/pages/HomePage.vue") },
    { path: "/about", name: "About", component: () => import("@/pages/AboutPage.vue") },
    { path: "/team", name: "Team", component: () => import("@/pages/TeamPage.vue") },
    { path: "/contact", name: "Contact", component: () => import("@/pages/ContactPage.vue") },
    { path: "/waitlist", name: "Waitlist", component: () => import("@/pages/WaitlistPage.vue") },
  ],
});