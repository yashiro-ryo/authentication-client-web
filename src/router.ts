// router.ts
import { createRouter, createWebHistory } from "vue-router";
import Signin from "./components/pages/Signin.vue";
import Signup from "./components/pages/Signup.vue";
import Forget from "./components/pages/Forget.vue";

const routes = [
  { path: "/signin", name: "signin", component: Signin },
  { path: "/signup", name: "signup", component: Signup },
  { path: "/forget", name: "forget", component: Forget },
];

const router = createRouter({
  history: createWebHistory(), // HTML5 History モード
  routes,
});

export default router;
