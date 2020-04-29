const state = {
    token: String
}

const getters = {
    getToken: (state) =>  {
        return state
    }
}

const mutations = {
    setToken (state, payload) {
      state.token = payload
    }
}

const actions = {
    setToken ({commit}, payload) {
        commit('setToken', payload)
    }
}
  
export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
  }