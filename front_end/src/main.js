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
import submissionConfirmed from './views/submission-confirmed.vue'


import jQuery from 'jquery'
global.jQuery = jQuery
global.$ = jQuery


import 'bootstrap/dist/css/bootstrap.css'
import './style.scss'
import auth from './middleware/auth';

const routes = [
  {
    path: '/',
    name: 'home',
    component: index,
  },
  {
    path: '/about',
    name: 'about',
    component: about,
  },
  {
    path: '/apply/:id',
    name: 'apply',
    component: apply,
    props: true
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: dashboard,
    beforeEnter: (to, from, next) => {
      auth({ next, router });
    },
  },
  {
    path: '/login',
    name: 'login',
    component: login,
  },
  {
    path: '/signup',
    name: 'signup',
    component: signup,
  },
  {
    path: '/new-show',
    name: 'new-show',
    component: newShow,
    beforeEnter: (to, from, next) => {
      auth({ next, router });
    },
  },
  {
    path: '/review-application/:id',
    name: 'reviewApplications',
    component: reviewApplication,
    props: true,
    beforeEnter: (to, from, next) => {
      auth({ next, router });
    },
  },
  {
    path: '/confirmed',
    name: 'confirmed',
    component: submissionConfirmed,
  },
  {
    path: '/show-details/:id',
    name: 'showDetails',
    component: showDetails,
    props: true
  },
]

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
