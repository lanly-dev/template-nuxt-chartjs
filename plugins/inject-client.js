'use strict'
import Vue from 'vue'

const vue = new Vue()
const ws = new WebSocket('ws://localhost:3000')

ws.onopen = () => {
  ws.onmessage = (event) => {
    console.log(event.data)
  }
  ws.send('Client send')
}

Vue.prototype.$bus = vue
Vue.prototype.$ws = ws
