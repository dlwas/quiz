import { stateGame } from '../composables/useGame'

export default function routeGuard(name: string): boolean | null {
  // if false -> index
  // else true -> next()
  let results = null
  const { mode } = stateGame.game
  switch (name) {
    // case 'score':
    //   results = mode != null
    //   break
    // case 'gamesettings':
    //   results = mode != null
    //   break

    default:
      results = true
      break
  }
  return results
}
