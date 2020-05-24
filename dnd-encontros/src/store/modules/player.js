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
  getAll({ commit }) {
    storage.getPlayers(players => {
      commit('set', players)
    })
  },
}

// mutations
const mutations = {
  set(state, players) {
    state.all = players
    state.lastID = Math.max.apply(Math, players.map(function (p) { return p.id; }))
    if (isNaN(state.lastID))
      state.lastID = 0
  },

  add(state, player) {
    let newPlayer = {
      id : ++state.lastID,
      nome: player.nome,
      classe: player.classe,
      raca: player.raca,
      nivel: player.nivel,
      ca: player.ca,
      pv: player.pv,
      percepcao: player.percepcao,
      investigacao: player.investigacao,
      intuicao: player.intuicao
    }
    state.all.push(newPlayer)
    storage.savePlayers(state.all)
  },

  update(state, player) {
    let pl = state.all.find(p => p.id == player.id)

    pl.nome = player.nome
    pl.classe = player.classe
    pl.raca = player.raca
    pl.nivel = player.nivel
    pl.ca = player.ca
    pl.pv = player.pv
    pl.percepcao = player.percepcao
    pl.investigacao = player.investigacao
    pl.intuicao = player.intuicao

    storage.savePlayers(state.all)
  },

  remove(state, player) {
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