'use strict';

var http = require('http');
var express = require('express');
var app = express();
var PORT = (typeof process.argv[2] === 'string') ? process.argv[2] : 3000;

app.use(express.static(__dirname + '/public'))

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(PORT, function () {
  console.log('listening on port', PORT);
});
