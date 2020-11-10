import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Constructor from "../views/Constructor";
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        layout: 'auth-layout'
      }
    },
    {
      path: '/constructor',
      name: 'constructor',
      component: Constructor,
      meta: {
        layout: 'constructor'
      }
    }
  ]
})