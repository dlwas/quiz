import { reactive, watchEffect } from 'vue'
import gameTypes from '../types/game'

export const stateGame = reactive(<gameTypes.RootObject>{
  // modes: ['random', 'currency', 'boundarie', 'capital', 'flag'],
  modes: ['capital'],
  rounds: [5, 10, 15],
  difficulty: ['easy', 'normal', 'hard'],
  room: ['solo', 'frend'], // , 'frend'
  game: {
    mode: 'capital',
    rounds: 10,
    difficulty: 'normal',
    room: 'solo',
  },
  score: {
    scored: 0,
  },
})

export const setSettings = (payload: gameTypes.Game = stateGame.game): void => {
  stateGame.game = payload
}

export const setGameMode = (name: string = stateGame.modes[0]): void => {
  stateGame.game.mode = name
}

watchEffect(() => {
  setSettings()
})

export default { stateGame, setSettings, setGameMode }
