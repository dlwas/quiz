import { reactive, watchEffect } from 'vue'
import fetchTypes from '../types/fetch'

const SERVER_PORT = 3001
const defaultUrl = `http://localhost:${SERVER_PORT}/`

export const stateFetch = reactive(<fetchTypes.RootObject>{
  loading: <boolean>false,
  error: {},
  data: null,
})

export const fetchData = async (url: Request | string = defaultUrl) => {
  stateFetch.loading = true

  try {
    const response = await fetch(url)
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
