import { createApp } from "vue";
import "@/styles/style.scss";
import App from "./App.vue";
import router from "./router";
import "@bcgov/bc-sans/css/BC_Sans.css";

createApp(App).use(router).mount("#app");
