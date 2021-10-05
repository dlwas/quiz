import { createApp } from 'vue'
import App from './App.vue'
import './styles/main.css'

import i18n from './config/i18n'
import router from './config/router'
import 'virtual:svg-icons-register'

const app = createApp(App)
app.use(router)
app.use(i18n)
app.mount('#app')
