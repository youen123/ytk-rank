import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

import National from '@/modules/wep/national.vue'
import Province from '@/modules/wep/province.vue'
import Competition from '@/modules/wep/competition.vue'
import Champion from '@/modules/wep/champion.vue'
import About from '@/modules/wep/about.vue'
import Contact from '@/modules/wep/contact.vue'

Vue.use(Router)

export default new Router({
  routes: [
  { path: '/', redirect: '/national' },
  { path: '/national', component: National },
  { path: '/province', component: Province },
  { path: '/competition', component: Competition },
  { path: '/champion', component: Champion },
  { path: '/about', component: About },
  { path: '/contact', component: Contact }
  ]
})
