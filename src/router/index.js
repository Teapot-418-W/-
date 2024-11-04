import { createWebHistory, createRouter } from "vue-router";


const routes = [
  {
    path: "/",
    hidden: true,
    redirect: "/home",
    meta: {
      name: "首页",
    },
    children: [
      {
        path: '/:pathMatch(.*)*', // 通配符路由
        redirect: { name: 'home' } // 重定向到首页
      },
      {
        path: '',
        name: 'home',
        component: () => import('../pages/homePage.vue'),
      },
      {
        path: 'second',
        name: 'second',
        component: () => import('../pages/secondPage.vue')
      }
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;