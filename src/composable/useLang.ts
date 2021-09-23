import { reactive, watchEffect } from 'vue'
import { getStorage, setStorage } from './useLocalStorage'
import { langTypes } from '../types/langTypes'

import en from '../locales/en.json'
import pl from '../locales/pl.json'

// TODO: add types
const storageName = 'settedLanguage'
const storageSetted = getStorage(storageName) || getDefault()

export const state = reactive(<langTypes.RootObject>{
  default: getDefault(),
  setted: storageSetted,
  locales: {
    en,
    pl,
  },
})

export function getDefault(): string {
  const defaultLang = navigator.language
  return defaultLang.length === 5 ? defaultLang.slice(0, 2) : defaultLang
}

export const setLang = (payload: string = storageSetted): void => {
  state.setted = payload
  setStorage(storageName, payload)
}

watchEffect(() => {
  setLang()
})

export default { state, setLang, getDefault }
