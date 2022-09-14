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
        component: () => import('../components/Users.vue')
      },
      {
        path: 'Admins', // /Home/Admins
        name: 'Admins',
        component: () => import('../components/Admins.vue')
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
