import { reactive, watchEffect } from 'vue'
import { getStorage, setStorage } from './useLocalStorage'

import { themeTypes } from '../types/themeTypes'

const storageName = 'settedTheme'
const storageSetted = getStorage(storageName) || getDefault()

export const stateTheme = reactive(<themeTypes.RootObject>{
  default: getDefault(),
  setted: storageSetted,
  html: document.querySelector('html'),
})

function getName(name: string | boolean): string | undefined {
  if (name) {
    let results: string = 'null'
    if (typeof name === 'string') {
      results = name == 'dark' ? 'dark' : 'light'
    }
    if (typeof name === 'boolean') {
      results = name ? 'dark' : 'light'
    }
    return results
  }
}

export function getDefault(): string {
  const defaultName = getName(window.matchMedia('(prefers-color-scheme: dark)').matches)
  return defaultName ? defaultName : 'dark'
}

export const setTheme = (payload: string = storageSetted): void | undefined => {
  const settedTheme = getName(payload)
  if (settedTheme) {
    stateTheme.setted = settedTheme
    if (stateTheme.html) {
      stateTheme.html.dataset.theme = settedTheme
      setStorage(storageName, settedTheme)
    }
  }
}

export const toggleTheme = (): void | undefined => {
  const toggledTheme = stateTheme.setted == 'dark' ? 'light' : 'dark'
  if (toggledTheme) {
    setTheme(toggledTheme)
  }
}

watchEffect(() => {
  setTheme()
})

export default { stateTheme, setTheme, toggleTheme }
