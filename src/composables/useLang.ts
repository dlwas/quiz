import { reactive, watchEffect } from 'vue'
import { getStorage, setStorage } from './useLocalStorage'
import langTypes from '../types/lang'

import en from '../locales/en.json'
import pl from '../locales/pl.json'

// TODO: add types
const storageName = 'settedLanguage'
const storageSetted = getStorage(storageName) || getDefault()

export const stateLang = reactive(<langTypes>{
  default: getDefault(),
  setted: storageSetted,
  locales: {
    en,
    pl,
  },
})

export function getDefault(): string {
  const defaultLang = navigator.language
  return defaultLang.length === 5 ? defaultLang.slice(0, 2) : defaultLang || 'en'
}

export const setLang = (payload: string = storageSetted): void => {
  stateLang.setted = payload
  setStorage(storageName, payload)
}

watchEffect(() => {
  setLang()
})

export default { stateLang, setLang, getDefault }
