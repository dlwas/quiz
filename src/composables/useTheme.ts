import { reactive, watchEffect } from 'vue'
import { getStorage, setStorage } from './useLocalStorage'
import { addClasses, removeClasses } from './useUtils'
import themeTypes from '../types/theme'

const storageName = 'settedTheme'
const storageSetted = getStorage(storageName) || getDefault()

export const stateTheme = reactive(<themeTypes.RootObject>{
  default: getDefault(),
  setted: storageSetted,
  html: document.querySelector('html'),
})

function getName(name: string | boolean): string | undefined {
  if (name) {
    let results = 'null'
    if (typeof name === 'string') {
      results = name == 'dark' ? 'dark' : 'light'
    }
    return results
  }
}

export function getDefault(): string {
  const defaultName = getName(window.matchMedia('(prefers-color-scheme: dark)').matches)
  return defaultName ? defaultName : 'dark'
}

export const setTheme = (payload: string = stateTheme.setted): void => {
  const settedTheme = getName(payload)
  if (settedTheme && stateTheme.html) {
    stateTheme.setted = settedTheme
    const toggledTheme = stateTheme.setted == 'dark' ? 'light' : 'dark'

    addClasses(stateTheme.html, stateTheme.setted)
    removeClasses(stateTheme.html, toggledTheme)

    setStorage(storageName, stateTheme.setted)
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
