var express = require('express');
var fs = require('fs');
var buffer = require('buffer');

var app = express.createServer(express.logger());

var string = fs.readFileSync('index.html', 'utf8');

app.get('/', function(request, response) {
  response.send(buffer.toString(string));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
