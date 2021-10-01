import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createI18n } from 'vue-i18n'
import routes from 'virtual:generated-pages'
import 'virtual:svg-icons-register'
import App from './App.vue'
import './styles/main.css'

import { setByName } from './composables/useNavbar'
import { setTheme } from './composables/useTheme'
import { getDefault, stateLang } from './composables/useLang'
import routeGuard from './guards'
import { stateGame } from './composables/useGame'

const i18n = createI18n({
  mode: 'composition',
  legacy: true,
  locale: stateLang.setted,
  fallbackLocale: getDefault(),
  globalInjection: true,
  messages: stateLang.locales,
})

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
  }

  if (!canAccess) {
    return 'accessdenied'
  } else {
    setTheme()
    setByName(pathTo)
  }
})

const app = createApp(App)
app.use(router)
app.use(i18n)
app.mount('#app')
