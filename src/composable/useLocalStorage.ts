import { getType, ifKeyExist, throwError } from './useUtils'

// TODO: add types
const ls = window.localStorage

export const setStorage = (key: string, payload: any): void => {
  try {
    if (key && payload) {
      const type = getType(payload) == 'object'
      payload = type ? JSON.stringify(payload) : payload
      ls.setItem(key, payload)
    } else {
      throwError('LocalStorage:', 'missing key or payload')
    }
  } catch (error) {
    console.log(error)
  }
}

export const getStorage = (key: any): string | null => {
  try {
    if (key) {
      key = ifKeyExist(ls, key)
      return key != null ? ls.getItem(key) : null
    } else {
      return null
    }
  } catch (error) {
    console.log(error)
    return null
  }
}

export const removeStorage = (key: any): void | null => {
  ls ? (ifKeyExist(ls, key) != null ? ls.removeItem(key) : null) : null
}

export const clearStorage = (): void | null => {
  ls ? ls.clear() : null
}

export default {
  setStorage,
  getStorage,
  removeStorage,
  clearStorage,
}
