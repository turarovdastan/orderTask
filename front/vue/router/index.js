import Vue from 'vue'
import VueRouter from "vue-router"
Vue.use(VueRouter)

import Main from'../pages/main.vue'

const routes = [
  { path:'/',  component:Main },
]

export default new VueRouter({routes,mode:'history'})


