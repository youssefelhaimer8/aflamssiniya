import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: " الرئيسية",
    },
  },
  {
    path: "/aflam",
    name: "Aflam",
    component: () => import("../views/aflam.vue"),
    meta: {
      title: " مسلسلات",
    },
  },

  {
    path: "/add",
    name: "Add",
    component: () => import("../views/admin/add.vue"),
    meta: {
      title: " add new Post",
    },
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
    meta: {
      title: " about",
    },
  },
  {
    path: "/watch/:id",
    name: "Watch",
    component: () => import("../views/watch.vue"),
    meta: {
      title: " watch now",
    },
  },
  {
    path: "/play/:id",
    name: "Play",
    component: () => import("../views/red.vue"),
    meta: {
      title: " watch now",
    },
  },
  {
    path: "/series/:id",
    name: "Series",
    component: () => import("../views/series.vue"),
    meta: {
      title: " مسلسل",
    },
  },
  {
    path: "/not_found",
    alias: "*",
    name: "NotFound",
    component: () => import("@/views/Errors/NotFound"),
    meta: {
      // global: true,
      title: "not found",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});
router.afterEach((to) => {
  Vue.nextTick(() => {
    document.title = "glamour | " + (to.meta.title || "Welcome");
  });
});
export default router;
