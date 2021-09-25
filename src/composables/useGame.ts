import { reactive, watchEffect } from 'vue'
import gameTypes from '../types/game'

export const stateGame = reactive(<gameTypes.RootObject>{
  modes: ['random', 'currency', 'boundarie', 'capital', 'flag'],
  rounds: [10, 15],
  difficulty: ['normal', 'hard'],
  room: ['solo', 'frend'], // , 'frend'
  game: {
    mode: '',
    rounds: 10,
    difficulty: 'normal',
    room: 'solo',
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
