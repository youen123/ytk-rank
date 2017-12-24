import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/modules/web/index.vue'
import National from '@/modules/web/national.vue'
import Province from '@/modules/web/province.vue'
import Competition from '@/modules/web/competition.vue'
import Champion from '@/modules/web/champion.vue'
import About from '@/modules/web/about.vue'

Vue.use(Router)

export default new Router({
  routes: [
  { path: '/', redirect: '/index' },
  { path: '/index', component: Index },
  { path: '/national', component: National },
  { path: '/province', component: Province },
  { path: '/competition', component: Competition },
  { path: '/champion', component: Champion },
  { path: '/about', component: About }
  ]
})
