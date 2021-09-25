import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createI18n } from 'vue-i18n'
import routes from 'virtual:generated-pages'
import 'virtual:svg-icons-register'
import store from './stores'
import App from './App.vue'
import './styles/main.css'

import { setByName } from './composables/useNavbar'
import { setTheme } from './composables/useTheme'
import { getDefault, stateLang } from './composables/useLang'
// import { conSocket } from './composables/useSocket'

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

router.beforeEach((to, from) => {
  const path = String(to.name)
  setTheme()
  setByName(path)
})

const app = createApp(App)
app.use(router)
app.use(store)
app.use(i18n)
// app.use(conSocket)
app.mount('#app')
