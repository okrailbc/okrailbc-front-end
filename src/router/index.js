import { createRouter, createWebHistory } from "vue-router";

export const routes = [
  {
    path: "/",
    title: "Home page",
    name: "HomePage",
    component: () => import("@/views/HomePage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
