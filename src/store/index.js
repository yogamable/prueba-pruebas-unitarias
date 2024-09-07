import { createStore } from 'vuex';

export default createStore({ 
  state: { 
    contador: 0,
  }, 
  getters: { 

  }, 
  mutations: { 
    incrementar(state, payload) {
      return state.contador = state.contador + payload
    },
    disminuir(state, payload) {
      return state.contador = state.contador - payload
    },
  }, 
  actions: { 

  }, 
  modules: { 

  } 
})