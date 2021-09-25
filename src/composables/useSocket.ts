import { reactive, watch } from 'vue'
import { io } from 'socket.io-client'

const SERVER_PORT = process.env.SERVER_PORT || 3001
const defaultUrl = `http://localhost:${SERVER_PORT}/`
const ioOptions = { transports: ['websocket', 'polling'] }

// TODO: add types
export const socket = io(`${defaultUrl})`, ioOptions)
export const stateSocket = reactive({
  userId: <null | string>null,
  connected: <boolean>false,
})

export const conSocket = () => {
  socket.on('connect', () => {
    stateSocket.userId = socket.id
    stateSocket.connected = true
  })
}

socket.on('disconnect', () => {
  stateSocket.userId = null
  stateSocket.connected = false
})

watch(stateSocket, () => {
  console.log('useSocket store updated')
})

export default { socket, stateSocket, conSocket }
