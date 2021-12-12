import Vue from "vue";
import VueApp from './vue/App.vue'

import store from './vue/store'
//CSS
import './css/index.css'

//router
import router from './vue/router'

Vue.config.productionTip = false

//VM
new Vue({
    name:'App',
    router,
    store:store,
    render:h=>h(VueApp)
}).$mount('.vue')
//END VM

