import { createStore } from 'vuex'

import navbar from './modules/navbar'

export default createStore({
  modules: {
    navbar,
  },
})
