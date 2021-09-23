import gameState from '../../types/gameTypes'

export default {
  namespaced: true,
  state: <gameState.RootObject>{
    modes: ['random', 'currency', 'boundaries', 'capitals', 'flags'],
    game: {
      mode: '',
      rounds: 0,
      difficulty: 'normal',
      isPrivate: true,
    },
  },
  mutations: {
    setGamemode(state: any, payload: string): void {
      state.game.mode = payload
    },
  },
  getters: {
    getModes(state: any) {
      return state.modes
    },
  },
}
