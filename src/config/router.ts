import { createRouter, createWebHistory } from 'vue-router'
import routes from 'virtual:generated-pages'
import routeGuard from '../guards'

import { stateGame } from '../composables/useGame'
import { setByName } from '../composables/useNavbar'
import { setTheme } from '../composables/useTheme'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(async (to, from) => {
  const pathTo = String(to.name)
  const pathFrom = String(from.name)
  const canAccess = await routeGuard(pathTo)

  if (pathFrom == 'score') {
    stateGame.score.scored = 0
    stateGame.score.selectedAnswers = []
  }

  if (!canAccess) {
    return 'accessdenied'
  } else {
    setTheme()
    setByName(pathTo)
  }
})

export default router
