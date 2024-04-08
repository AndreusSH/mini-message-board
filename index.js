const express = require('express')
const path = require('path')

const app = express()
const port = process.env.PORT || 8080
app.get('/', function (req, res) {
  res.send('Is the server working?')
})


app.listen(port)
console.log('Server started at http://localhost:' + port)