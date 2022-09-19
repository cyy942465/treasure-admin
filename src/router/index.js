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
    path: '/Home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: 'Users', // /Home/Users
        name: 'Users',
        component: () => import('../components/account/Users.vue')
      },
      {
        path: 'Admins', // /Home/Admins
        name: 'Admins',
        component: () => import('../components/account/Admins.vue')
      },
      {
        path: 'Orders', // /Home/Orders
        name: 'Orders',
        component: () => import('../components/app/Orders.vue')
      },
      {
        path: 'Goods', // /Home/Goods
        name: 'Goods',
        component: () => import('../components/app/Goods.vue')
      },
      {
        path: 'Articles', // /Home/Articles
        name: 'Articles',
        component: () => import('../components/app/Articles.vue')
      },
      {
        path: 'Map', // /Home/Map
        name: 'Map',
        component: () => import('../components/maps/Map.vue')
      },
      {
        path: 'Points', // /Home/Points
        name: 'Points',
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
