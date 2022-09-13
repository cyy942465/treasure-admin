import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/Login.vue')
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
