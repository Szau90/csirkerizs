import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/etelrendeles",
      name: "etelrendeles",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/FoodOrderView.vue"),
    },
    {
      path: "/vip",
      name: "vip",
      component: () => import("../views/VipView.vue"),
    },
    {
      path: "/rolunk",
      name: "Kik vagyunk?",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/technologia",
      name: "technológia",
      component: () => import("../views/FoodOrderView.vue"),
    },
    {
      path: "/szallitasi-terulet",
      name: "szállítási terület",
      component: () => import("../views/FoodOrderView.vue"),
    },
    {
      path: "/viszonteladoknak",
      name: "viszonteladóknak",
      component: () => import("../views/FoodOrderView.vue"),
    },
    {
      path: "/galeria",
      name: "galéria",
      component: () => import("../views/FoodOrderView.vue"),
    },
    {
      path: "/shop",
      name: "shop",
      component: () => import("../views/ShopView.vue"),
    },
    {
      path: "/adatvedelmi-szabalyzat",
      name: "adatvédelmi szabályzat",
      component: () => import("../views/FoodOrderView.vue"),
    },
    {
      path: "/felhasznalasi-feltetelek",
      name: "felhasználási feltételek",
      component: () => import("../views/FoodOrderView.vue"),
    },
    {
      path: "/kosar",
      name: "kosar",
      component: () => import("../views/CartView.vue"),
    },
    {
      path: "/shop/:productId",
      name: "termék",
      component: () => import("../views/ProductShowView.vue"),
      props: true
    },
    { path: '/shop/:pathMatch(.*)*', name: 'NotFound',  component: () => import("../views/NotFoundView.vue"), },
   
  ],
});

export default router;
