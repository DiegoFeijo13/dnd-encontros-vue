import storage from '../../api/storage'
// initial state
const state = () => ({
  all: [],
  lastID: 0,
})

// getters
const getters = {}

// actions
const actions = {
  getAll ({ commit }) {
    storage.getEncounters(encounters => {
      commit('set', encounters)
    })
  }
}

// mutations
const mutations = {
  set (state, encounters) {
    state.all = encounters
    state.lastID = Math.max.apply(Math, encounters.map(function (p) { return p.id; }))
    if (isNaN(state.lastID))
      state.lastID = 0
  },

  add(state, encounter){
    let newEncounter = {
      id: state.lastID,
      monsters: encounter.monsters,
      xp: encounter.xp,
      name: encounter.name
    }
    state.all.push(newEncounter)
    storage.saveEncounters(state.all)
  },

  update(state, encounter) {
    let e = state.all.find(x => x.id == encounter.id)

    e.name = encounter.name
    e.xp = encounter.xp
    e.monsters = encounter.monsters

    storage.saveEncounters(state.all)
  },

  remove(state, encounter) {
    let idx = state.all.findIndex(x => x.id == encounter.id)
    state.all.splice(idx, 1)
    storage.saveEncounters(state.all)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}