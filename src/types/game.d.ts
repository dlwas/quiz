export interface Game {
  mode: string | null
  rounds: number
  difficulty: string
  room: string
}
export interface Score {
  scored: number
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
