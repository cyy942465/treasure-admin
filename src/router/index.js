import Vue from 'vue'
import VueRouter from 'vue-router'

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
    children: [
      {
        path: 'Home', // /Main/Home
        name: '主页',
        component: () => import('../components/home/Home.vue')
      },
      {
        path: 'Data', // /Main/Data
        name: '流量监控',
        component: () => import('../components/data/Data.vue')
      },
      {
        path: 'Users', // /Main/Users
        name: '用户账号',
        component: () => import('../components/account/Users.vue')
      },
      {
        path: 'Admins', // /Main/Admins
        name: '管理账号',
        component: () => import('../components/account/Admins.vue')
      },
      {
        path: 'Orders', // /Main/Orders
        name: '订单管理',
        component: () => import('../components/app/Orders.vue')
      },
      {
        path: 'Goods', // /Main/Goods
        name: '商品管理',
        component: () => import('../components/app/Goods.vue')
      },
      {
        path: 'Articles', // /Main/Articles
        name: '文章管理',
        component: () => import('../components/app/Articles.vue')
      },
      {
        path: 'Map', // /Main/Map
        name: '地图查看',
        component: () => import('../components/maps/Map.vue')
      },
      {
        path: 'Points', // /Main/Points
        name: '标点管理',
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

export default router
