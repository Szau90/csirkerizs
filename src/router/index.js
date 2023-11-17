import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
        path: '/etelrendeles',
        name: 'etelrendeles',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/FoodOrderView.vue')
      },
      {
        path: '/vip',
        name: 'vip',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/FoodOrderView.vue')
      },
      {
        path: '/rólunk',
        name: 'Kik vagyunk?',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/FoodOrderView.vue')
      },
      {
        path: '/technológia',
        name: 'technológia',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/FoodOrderView.vue')
      },
      {
        path: '/szállítási-terület',
        name: 'szállítási terület',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/FoodOrderView.vue')
      },
      {
        path: '/viszonteladóknak',
        name: 'viszonteladóknak',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/FoodOrderView.vue')
      },
      {
        path: '/galéria',
        name: 'galéria',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/FoodOrderView.vue')
      },
      {
        path: '/shop',
        name: 'shop',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/ShopView.vue')
      },
      {
        path: '/adatvédelmi-szabályzat',
        name: 'adatvédelmi szabályzat',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/FoodOrderView.vue')
      },
      {
        path: '/felhasználási-feltételek',
        name: 'felhasználási feltételek',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/FoodOrderView.vue')
      },
      
   
  ]
})

export default router


/*
 {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
    */