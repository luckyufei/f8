var express = require('express')
var app = express()
var path = require('path')

app.use('/', express.static(path.resolve(__dirname, '../site')))

app.listen(3001, function (err) {
  if (err) {
    console.error(err)
    return
  }
  console.log('Listening at http://localhost:3001')
})
