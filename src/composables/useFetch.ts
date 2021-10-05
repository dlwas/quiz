import { reactive, watchEffect } from 'vue'
import fetchTypes from '../types/fetch'
import { parseUrl } from './useUtils'

const SERVER_PORT = 3001
let defaultUrl: any = null
if (process.env.NODE_ENV === 'production') {
  defaultUrl = parseUrl(`https://dlwas-quiz-backend.herokuapp.com/`)
} else {
  defaultUrl = parseUrl(`http://localhost:${SERVER_PORT}/`)
}
export const stateFetch = reactive(<fetchTypes>{
  loading: <boolean>false,
  error: {},
  data: null,
})

export const fetchData = async (url: Request | string | URL = defaultUrl) => {
  stateFetch.loading = true

  try {
    const response = await fetch(url as keyof object)
    const json = await response.json()
    response.ok ? (stateFetch.data = json) : (stateFetch.error = `Error on 'fetching' data`)
    return json
  } catch (error) {
    stateFetch.error = `Error on 'fetching' data: ${stateFetch.error.message}`
  } finally {
    stateFetch.loading = false
  }
}

watchEffect(() => {
  fetchData()
})

export default { stateFetch, fetchData }
