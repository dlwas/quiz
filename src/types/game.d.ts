export interface Game {
  mode: string | null
  rounds: number
  difficulty: string
  room: string
}
export interface SelectedAnswersItem {
  correct: string
  negative: string | null
  type: string | null
}
export interface Score {
  scored: number
  selectedAnswers: SelectedAnswersItem[]
}
export interface gameTypes {
  modes: string[]
  rounds: number[]
  difficulty: string[]
  room: string[]
  game: Game
  score: Score
}

export default gameTypes
