import { reactive, watch } from 'vue'
import { io } from 'socket.io-client'

const ioAddress = 'http://localhost'
const ioPort = 3001
const ioOptions = { transports: ['websocket', 'polling'] }

// TODO: add types
export const socket = io(`${ioAddress}:${ioPort}`, ioOptions)
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
