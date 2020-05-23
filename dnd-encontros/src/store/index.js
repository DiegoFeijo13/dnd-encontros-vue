import Vue from 'vue'
import Vuex from 'vuex'
import player from './modules/player'
import monster from './modules/monster'
import encounter from './modules/encounter'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    player,
    monster,
    encounter
  },
  strict: debug,
})