export declare namespace gameState {
  export interface Game {
    mode: string
    rounds: number
    difficulty: string
    isPrivate: boolean
  }
  export interface RootObject {
    game: Game,
    modes: string[]
    subtitles: string[]
  }
}

export default gameState
