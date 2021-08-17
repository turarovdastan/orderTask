import Vue from 'vue'
import VueRouter from "vue-router"
Vue.use(VueRouter)

import Foo from '../pages/foo.vue'
import Bar from '../pages/bar.vue'
import Main from'../pages/main.vue'

const routes = [
  { path:'/',  component:Main },
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

export default new VueRouter({routes,mode:'history'})


