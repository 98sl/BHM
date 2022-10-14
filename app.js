const Koa = require('koa')
const app = new Koa()
const server = app.listen(3000, () => {
  console.log('Koa is listening in 3000')
})

const WebSocket = require('ws')
const wss = new WebSocket.Server({ server })

// const ws = new WebSocket.Server({ port: 8888 })

wss.on('connection', ws => {
  console.log('server connection')

  ws.on('message', msg => {
    console.log('server receive msg：', msg)
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(msg)
      }
    })
  })

  ws.send('Information from the server')
})

