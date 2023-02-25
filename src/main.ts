import { createApp } from "vue";
import "./bootstrap.min.css";
import "./common.css";
import App from "./App.vue";
import router from "./router";

createApp(App).use(router).mount("#app");
