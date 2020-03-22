'use strict'
const express = require('express')
const app = express()

app.get('/test', (req, res, next) => {
  console.log('/api/test received')
  res.json({ hello: 'world' })
})

module.exports = {
  path: '/api',
  handler: app
}
