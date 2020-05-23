import storage from '../../api/storage'
// initial state
const state = () => ({
  all: []
})

// getters
const getters = {}

// actions
const actions = {
  getAllMonsters ({ commit }) {
    storage.getMonsters(monsters => {
      commit('setMonsters', monsters)
    })
  }
}

// mutations
const mutations = {
  setMonsters (state, monsters) {
    state.all = monsters
  },

  removeMonster (state, { id }) {
    const monster = state.all.find(monster => monster.id === id)
    storage.removeMonster(monster)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}