import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {BootstrapVue, BootstrapVueIcons} from 'bootstrap-vue'

import ItemLists from './components/ItemLists';

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

const routes = [
  { path: '/', component: ItemLists, name: 'home' },
  //{ path: '/view/:id', component: ItemView }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
