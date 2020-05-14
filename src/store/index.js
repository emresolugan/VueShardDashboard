import Vue from 'vue'
import Vuex from 'vuex'
import tokenModule from './modules/tokenmodule'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    tokenModule
  }
})