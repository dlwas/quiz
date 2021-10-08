import { reactive, watchEffect, ref } from 'vue'
import gameTypes, { Game } from '../types/game'

export const stateGame = reactive(<gameTypes>{
  modes: ['capital', 'subregion', 'area', 'population'],
  rounds: [5, 10, 15],
  difficulty: ['easy', 'normal', 'hard'],
  room: ['solo', 'frend'],
  game: {
    mode: null,
    rounds: 5,
    difficulty: 'easy',
    room: 'solo',
  },
  score: {
    scored: 0,
    selectedAnswers: [],
  },
})

export const setSettings = (payload: Game = stateGame.game): void => {
  stateGame.game = payload
}

export const setGameMode = (name: string = stateGame.modes[0]): void => {
  stateGame.game.mode = name
}

watchEffect(() => {
  setSettings()
})

export default { stateGame, setSettings, setGameMode }
