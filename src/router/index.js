import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import AboutUs from "@/views/AboutUs.vue";
import TrainInfo from "@/views/TrainInfo.vue";
import ResourcePage from "@/views/ResourcePage.vue";
import SupportOurCause from "@/views/SupportOurCause.vue";

export const routes = [
  {
    path: "/",
    title: "Home page",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/about",
    title: "About us",
    name: "AboutUs",
    component: AboutUs,
  },
  {
    path: "/info",
    title: "TrainInfo",
    name: "TrainInfo",
    component: TrainInfo,
  },
  {
    path: "/resources",
    title: "Resources",
    name: "Resources",
    component: ResourcePage,
  },
  {
    path: "/support",
    title: "Support Our Cause",
    name: "SupportOurCause",
    component: SupportOurCause,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
