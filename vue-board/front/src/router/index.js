import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/HomeView.vue";
import Post from "@/views/PostView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/post",
    name: "Post",
    component: Post,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
