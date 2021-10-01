import { stateGame } from '../composables/useGame'

export default function routeGuard(name: string): boolean | null {
  // if false -> index
  // else true -> next()
  let results = null
  switch (name) {
    case 'score':
      const scored = stateGame.score.scored
      if (scored == 0) {
        results = false
      }
      break

    default:
      results = true
      break
  }
  return results
}
