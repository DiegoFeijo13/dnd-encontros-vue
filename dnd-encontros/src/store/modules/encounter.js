import storage from '../../api/storage'
// initial state
const state = () => ({
  all: []
})

// getters
const getters = {}

// actions
const actions = {
  getAllEncounters ({ commit }) {
    storage.getEncounters(encounters => {
      commit('setEncounters', encounters)
    })
  }
}

// mutations
const mutations = {
  setEncounter (state, encounter) {
    state.all = encounter
  },

  removeEncounter (state, { id }) {
    const encounter = state.all.find(encounter => encounter.id === id)
    storage.removeEncounter(encounter)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}