import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createI18n } from 'vue-i18n'
import routes from 'virtual:generated-pages'
import 'virtual:svg-icons-register'
import store from './stores'
import App from './App.vue'
import './styles/main.css'

import { init } from './composable/useUtils'
import { setTheme } from './composable/useTheme'
import { getDefault, state as langState } from './composable/useLang'

init(() => {
  setTheme()
})

const i18n = createI18n({
  mode: 'composition',
  legacy: true,
  locale: langState.setted,
  fallbackLocale: getDefault(),
  globalInjection: true,
  messages: langState.locales,
})

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from) => {
  store.commit('navbar/set', to.name)
})

const app = createApp(App)
app.use(router)
app.use(store)
app.use(i18n)
app.mount('#app')
