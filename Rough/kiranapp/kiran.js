var express = require('express')
var kiran = express()

kiran.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function () {
console.log('Example app listening on port 3000!')
})