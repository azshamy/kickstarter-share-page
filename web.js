var express = require('express');
var fs = require('fs');
var http    = require('http');
var app = express();
app.set('port', process.env.PORT || 8080);
app.use(express.static(__dirname + '/static'));

app.get('/', function(request, response) {
var text = fs.readFileSync("index.html","utf-8")
 response.send(text);
});

http.createServer(app).listen(app.get('port'),function(){
  console.log("Listening on " + app.get('port'));
});