import { createRouter, createWebHistory } from "vue-router";

export const routes = [
  {
    path: "/",
    title: "Home page",
    name: "HomePage",
    component: () => import("@/views/HomePage.vue"),
  },
  {
    path: "/about",
    title: "About us",
    name: "AboutUs",
    component: () => import("@/views/AboutUs.vue"),
  },
  {
    path: "/info",
    title: "TrainInfo",
    name: "TrainInfo",
    component: () => import("@/views/TrainInfo.vue"),
  },
  {
    path: "/resources",
    title: "Resources",
    name: "Resources",
    component: () => import("@/views/ResourcePage.vue"),
  },
  {
    path: "/support",
    title: "Support Our Cause",
    name: "SupportOurCause",
    component: () => import("@/views/SupportOurCause.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
