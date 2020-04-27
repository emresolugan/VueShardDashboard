import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import AppRoutes from '@/router.js'

import "@/assets/styles/shards-dashboards.1.1.0.min.css"
import '@/assets/styles/extras.1.1.0.min.css'
import '@/assets/styles/extras.1.1.0.min.css'
import '@/assets/scripts/extras.1.1.0.min.js'
import '@/assets/scripts/shards-dashboards.1.1.0.min.js'
import '@/assets/scripts/app/app-components-overview.1.1.0.js'



Vue.config.productionTip = false

const router=new VueRouter({
  mode:"history",
  routes:AppRoutes
})

Vue.use(VueRouter);

new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
