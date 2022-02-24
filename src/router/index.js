import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/products',
        component: () => import('../views/ProductsView.vue'),
      },
      {
        path: '/product/:id',
        component: () => import('../views/ProductView.vue'),
      },
      {
        path: '/carts',
        component: () => import('../views/CartsView.vue'),
      },
    ],
  },
  {
    path: '/dashboardlogin',
    component: () => import('../views/DashboardLogin.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
