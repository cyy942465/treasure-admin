import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store/index.js';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Auth',
    component: () => import('../views/Auth.vue'),
    children: [
      {
        path: 'Login',
        name: 'Login',
        component: () => import('../components/auth/Login.vue')
      }, {
        path: 'Register',
        name: 'Register',
        component: () => import('../components/auth/Register')
      }
    ]
  },
  {
    path: '/Main',
    name: 'Main',
    component: () => import('../views/Main.vue'),
    meta: { requiresAuth: true },
    children: [
      {
        path: 'Home', // /Main/Home
        name: '主页',
        meta: { requiresAuth: true },
        component: () => import('../components/home/Home.vue')
      },
      {
        path: 'Data', // /Main/Data
        name: '流量监控',
        meta: { requiresAuth: true },
        component: () => import('../components/data/Data.vue')
      },
      {
        path: 'Users', // /Main/Users
        name: '用户账号',
        meta: { requiresAuth: true },
        component: () => import('../components/account/Users.vue')
      },
      {
        path: 'Admins', // /Main/Admins
        name: '管理账号',
        meta: { requiresAuth: true },
        component: () => import('../components/account/Admins.vue')
      },
      {
        path: 'Orders', // /Main/Orders
        name: '订单管理',
        meta: { requiresAuth: true },
        component: () => import('../components/app/Orders.vue')
      },
      {
        path: 'Goods', // /Main/Goods
        name: '商品管理',
        meta: { requiresAuth: true },
        component: () => import('../components/app/Goods.vue')
      },
      {
        path: 'Articles', // /Main/Articles
        name: '文章管理',
        meta: { requiresAuth: true },
        component: () => import('../components/app/Articles.vue')
      },
      {
        path: 'Map', // /Main/Map
        name: '地图查看',
        meta: { requiresAuth: true },
        component: () => import('../components/maps/Map.vue')
      },
      {
        path: 'Points', // /Main/Points
        name: '标点管理',
        meta: { requiresAuth: true },
        component: () => import('../components/maps/Points.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 设置路由守卫
router.beforeEach(function(to, from, next) {
  if (to.meta.requiresAuth && !store.getters.token) {
    next('/');
  } else {
    next();
  }
})

export default router
