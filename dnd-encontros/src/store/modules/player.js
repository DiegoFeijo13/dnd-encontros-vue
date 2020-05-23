import storage from '../../api/storage'
// initial state
const state = () => ({
  all: [],
  lastID: 0
})

// getters
const getters = {}

// actions
const actions = {
  getAllPlayers({ commit }) {
    storage.getPlayers(players => {
      commit('setPlayers', players)
    })
  },
}

// mutations
const mutations = {
  setPlayers(state, players) {
    state.all = players
    state.lastID = Math.max.apply(Math, players.map(function (p) { return p.id; }))
    if (isNaN(state.lastID))
      state.lastID = 0
  },

  addPlayer(state, player) {
    player.id = ++state.lastID
    state.all.push(player)
    storage.savePlayers(state.all)
  },

  updatePlayer(state, player) {
    let idx = state.all.findIndex(p => p.id == player.id)
    state.all.splice(idx, 1)
    state.all.push(player)
    storage.savePlayers(state.all)
  },

  removePlayer(state, player) {
    let idx = state.all.findIndex(p => p.id == player.id)
    state.all.splice(idx, 1)
    storage.savePlayers(state.all)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}