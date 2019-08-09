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
    // meta: {
    //   // Hint: try to switch those two around to see
    //   // how this affects execution of the callbacks.
    //   middleware: [auth],
    // },
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
  },
  {
    path: '/review-application',
    name: 'review-application',
    component: reviewApplication,
  },
  {
    path: '/show-details/:id',
    name: 'show-details',
    component: showDetails,
    //pasara por acá para cada peticion a esta ruta
    // beforeEnter: (to, from, next) => {
    //   auth({ next, router });
    // },
    props: true
  },
  /**a route for OK submissions message is missing */
]

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history'
})

// Creates a `nextMiddleware()` function which not only
// runs the default `next()` callback but also triggers
// the subsequent Middleware function.
// function nextFactory(context, middleware, index) {
//   const subsequentMiddleware = middleware[index];
//   // If no subsequent Middleware exists,
//   // the default `next()` callback is returned.
//   if (!subsequentMiddleware) return context.next;

//   return (...parameters) => {
//     // Run the default Vue Router `next()` callback first.
//     context.next(...parameters);
//     // Then run the subsequent Middleware with a new
//     // `nextMiddleware()` callback.
//     const nextMiddleware = nextFactory(context, middleware, index + 1);
//     subsequentMiddleware({ ...context, next: nextMiddleware });
//   };
// }

// router.beforeEach((to, from, next) => {
//   if (to.meta.middleware) {
//     const middleware = Array.isArray(to.meta.middleware)
//       ? to.meta.middleware
//       : [to.meta.middleware];

//     const context = {
//       from,
//       next,
//       router,
//       to,
//     };
//     const nextMiddleware = nextFactory(context, middleware, 1);

//     return middleware[0]({ ...context, next: nextMiddleware });
//   }

//   return next();
// });


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
