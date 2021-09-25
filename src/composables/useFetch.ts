import { reactive, watchEffect } from 'vue'
import fetchTypes from '../types/fetch'

const SERVER_PORT = process.env.SERVER_PORT || 3001
const defaultUrl = `http://localhost:${SERVER_PORT}/api/`

export const stateFetch = reactive(<fetchTypes.RootObject>{
  loading: <boolean>false,
  error: {},
  data: null,
})

export const fetchData = async (url: string = defaultUrl) => {
  stateFetch.loading = true

  try {
    const response = await fetch(url)
    response.ok
      ? (stateFetch.data = await response.json())
      : (stateFetch.error = `Error on 'fetching' data`)
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
