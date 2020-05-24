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
    storage.getMonsters(monsters => {
      commit('set', monsters)
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

  add(state, monster) {
    let newMonster = {
      id: ++state.lastID,
      img: monster.img,
      nome: monster.nome,
      tipo: monster.tipo,
      alinhamento: monster.alinhamento,
      destreza: monster.destreza,
      nd: monster.nd,
      xp: monster.xp,
      dados: monster.dados,
      dv: monster.dv,
      pvbase: monster.pvbase
    };
    state.all.push(newMonster)
    storage.saveMonsters(state.all)
  },

  update(state, monster) {
    let pl = state.all.find(m => m.id == monster.id)

    pl.img = monster.img
    pl.nome = monster.nome
    pl.tipo = monster.tipo
    pl.alinhamento = monster.alinhamento
    pl.destreza = monster.destreza
    pl.nd = monster.nd
    pl.xp = monster.xp
    pl.dados = monster.dados
    pl.dv = monster.dv
    pl.pvbase = monster.pvbase

    storage.saveMonsters(state.all)
  },

  remove(state, monster) {
    let idx = state.all.findIndex(m => m.id == monster.id)
    state.all.splice(idx, 1)
    storage.saveMonsters(state.all)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}