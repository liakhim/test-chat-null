import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import DefaultLayout from './layouts/DefaultPageLayout.vue'
import ConstructorLayout from './layouts/ConstructorPageLayout.vue'
import AuthLayout from './layouts/AuthPageLayout.vue'

import 'bootstrap/dist/css/bootstrap.css'
Vue.component('default-layout', DefaultLayout)
Vue.component('constructor-layout', ConstructorLayout)
Vue.component('auth-layout', AuthLayout)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')