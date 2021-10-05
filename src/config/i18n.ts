import { createI18n } from 'vue-i18n'
import { getDefault, stateLang } from '../composables/useLang'

const i18n = createI18n({
  mode: 'composition',
  legacy: true,
  locale: stateLang.setted,
  fallbackLocale: getDefault(),
  globalInjection: true,
  messages: stateLang.locales,
})

export default i18n
