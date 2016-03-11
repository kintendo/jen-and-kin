
var http = require('http');
var express = require('express');
var app = express();
var PORT = 3000;

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.use('/images', express.static(__dirname + '/images'));
app.use('/js', express.static(__dirname + '/js'));

app.listen(PORT, function () {
  console.log('listening on port', PORT);
});
