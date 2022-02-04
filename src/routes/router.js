import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/pages/Home";
import Videos from "@/pages/Videos";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Home },
  { path: "/videos", component: Videos },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
