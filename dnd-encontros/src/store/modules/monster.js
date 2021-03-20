import axios from 'axios'

// initial state
const state = () => ({
  all: [],
  lastID: 0
})

// getters
const getters = {}

// actions
const actions = {
  getAll({ commit }) {
    axios.get('http://www.dnd5eapi.co/api/monsters').
    then(response => {        
      commit('set', response.data.results);
        
    })
  }
}

// mutations
const mutations = {
  set(state, monsters) {
    state.all = monsters
    state.lastID = Math.max.apply(Math, monsters.map(function (m) { return m.id; }))
    if (isNaN(state.lastID))
      state.lastID = 0
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}