import Vue from "vue";
import VueRouter from "vue-router";
import ListNews from "../views/ListNews.vue";
import DetailNews from "../views/DetailNews.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: ListNews,
  },
  {
    path: "/detail/:id",
    name: "detail",
    component: DetailNews,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;