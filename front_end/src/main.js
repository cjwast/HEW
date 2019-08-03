import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import index from './views/index.vue'
import about from './views/about.vue'
import apply from './views/apply.vue'
import dashboard from './views/dashboard.vue'
import login from './views/login.vue'
import signup from './views/signup.vue'
import newShow from './views/new-show.vue'
import reviewApplication from './views/review-application.vue'
import showDetails from './views/show-details.vue'


import jQuery from 'jquery'
global.jQuery = jQuery
global.$ = jQuery
let Bootstrap = require('bootstrap')
import 'bootstrap/dist/css/bootstrap.css'

const routes =  [{
  path: '/', 
  name:'home', 
  component: index, 
}, {
  path: '/about',
  name: 'about',
  component: about,
}, {
  path: '/apply',
  name: 'apply',
  component: apply,
}, {
  path: '/dashboard',
  name: 'dashboard',
  component: dashboard,
}, {
  path: '/login',
  name: 'login',
  component: login,
}, {
  path: '/signup',
  name: 'signup',
  component: signup,
}, {
  path: '/new-show',
  name: 'new-show',
  component: newShow,
}, {
  path: '/review-application',
  name: 'review-application',
  component: reviewApplication,
}, {
  path: '/show-details',
  name: 'show-details',
  component: showDetails,
}]

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
