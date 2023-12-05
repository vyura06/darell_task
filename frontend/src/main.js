import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import VueRouter from 'vue-router'
import './plugins/bootstrap-vue'
import App from './App.vue'
import MenuPage from './pages/MenuPage.vue'
import AdminPage from './pages/AdminPage.vue'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import store from './store'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: '/', component: MenuPage },
  { path: '/admin', component: AdminPage }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')