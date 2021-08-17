import Vue from "vue";
import VueApp from './vue/App.vue'

//CSS
import './css/index.css'
//END CSS

//router
import router from './vue/router'
//end router
Vue.config.productionTip = false
//VM
new Vue({
    name:'App',
    router,
    render:h=>h(VueApp)
}).$mount('.vue')
//END VM




import React from "react";
import ReactDOM from "react-dom";
import ReactApp from "./react/App.js";

ReactDOM.render(<ReactApp />, document.getElementById("react"));