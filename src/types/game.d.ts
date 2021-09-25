export declare namespace gameTypes {
  export interface Game {
    mode: string
    rounds: number
    difficulty: string
    room: string
  }
  export interface RootObject {
    game: Game
    modes: string[]
    subtitles: string[]
    rounds: number[]
    difficulty: string[]
    room: string[]
  }
}

export default gameTypes
