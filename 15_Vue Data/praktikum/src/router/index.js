import Vue from "vue";
import VueRouter from "vue-router";
import NewsView from "../views/NewsView.vue";
import SingleNewsView from "../views/SingleNewsView.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "home",
    component: NewsView,
  },
  {
    path: "/news/:id",
    name: "singleNews",
    component: SingleNewsView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
