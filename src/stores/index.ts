import { createStore } from 'vuex'

import navbar from './modules/navbar'
import game from './modules/game'

export default createStore({
  modules: {
    navbar,
    game,
  },
})
