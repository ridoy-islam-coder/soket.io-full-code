 import express from 'express'
const app = express()
import http from 'http'
const port = 4000;
const createServer = http.createServer(app)


app.get('/', (req, res) => {
  res.sendFile(__dirname+ '/index.html')
})



















createServer.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
