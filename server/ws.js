'use strict'
const WebSocket = require('ws')
const WSServer = WebSocket.Server

let wss
function Websocket(server) {
  wss = new WSServer({ server })
  wss.on('connection', (ws) => {
    ws.on('message', (msg) => {
      console.log(`Websocket server recieved: ${msg}`)
      ws.send('Websocket received')
    })
    ws.on('error', (err) => {
      console.error('Unhandled Error', err)
    })
  })
}

function broadcast(data) {
  wss.client.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(data))
    }
  })
}

module.exports = { Websocket, broadcast }
