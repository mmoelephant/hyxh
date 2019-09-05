import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('../views/index.vue')
    },
    {
      path: '/aboutus',
      name: 'aboutus',
      component: () => import('../views/about-us.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/search.vue')
    },
    {
      path: '/partner',
      name: 'partner',
      component: () => import('../views/partner.vue')
    },
    {
      path: '/policystate',
      name: 'policystate',
      component: () => import('../views/policy-statement.vue')
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('../views/news.vue')
    },
    {
      path: '/industryserve',
      name: 'industryserve',
      component: () => import('../views/industry-serve.vue')
    },
    {
      path: '/member',
      name: 'member',
      component: () => import('../views/member.vue')
    },
    {
      path: '/articledetail',
      name: 'articledetail',
      component: () => import('../views/article-detail.vue')
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
