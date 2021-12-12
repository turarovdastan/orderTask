import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import products from './products'
import basket from './basket'
export default new Vuex.Store({
    modules:{
        products,
        basket 
    }
  })