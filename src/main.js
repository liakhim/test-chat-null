import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import DefaultLayout from './layouts/DefaultPageLayout.vue'
import AuthLayout from './layouts/AuthPageLayout.vue'

Vue.component('default-layout', DefaultLayout)
Vue.component('auth-layout', AuthLayout)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')