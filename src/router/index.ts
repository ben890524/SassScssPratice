import { createRouter, createWebHashHistory } from "vue-router";
import ImplementCss from "@/views/ImplementCss.vue"
import ImplementScss from "@/views/ImplementScss.vue"
import ImplementSass from "@/views/ImplementSass.vue"
const routes = [
  {
    path: "/",
    redirect: "/css",
  },
  {
    path: "/css",
    name: "ImplementCss",
    component: ImplementCss,
  },
  {
    path: "/scss",
    name: "ImplementScss",
    component: ImplementScss,
  },
  {
    path: "/sass",
    name: "ImplementSass",
    component: ImplementSass,
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/css",
  },
];
export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});
