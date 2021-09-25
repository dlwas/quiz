import gameState from '../../types/game'

export default {
  namespaced: true,
  state: <gameState.RootObject>{
    modes: ['random', 'currency', 'boundarie', 'capital', 'flag'],
    rounds: [10, 15],
    difficulty: ['normal', 'hard'],
    room: ['solo'], // , 'frend'
    game: {
      mode: '',
      rounds: 10,
      difficulty: 'normal',
      room: 'solo',
    },
  },
  mutations: {
    setSettigns(state: any, payload: object): void {
      state.game = payload
    },
    setGamemode(state: any, payload: string): void {
      state.game.mode = payload
    },
  },
  getters: {
    getGameInfo(state: any) {
      return state.game
    },
    getModes(state: any) {
      return state.modes
    },
    getRounds(state: any) {
      return state.rounds
    },
    getDifficulty(state: any) {
      return state.difficulty
    },
    getRoom(state: any) {
      return state.room
    },
  },
}
