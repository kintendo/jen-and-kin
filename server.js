
var http = require('http');
var express = require('express');
var app = express();
server = http.createServer(app);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
});

app.use('/images', express.static(__dirname + '/images'))

server.listen(3000);
