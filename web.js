// web.js
var express = require("express");
var logfmt = require("logfmt");
var util = require("util");
var fs = require("fs");
var app = express();

app.use(logfmt.requestLogger());

app.get('/', function(req, res) {
  res.writeHead(200, {'content-type': 'text/html'});
        var rs = fs.createReadStream('index.html');
        util.pump(rs, res);
});

var port = Number(process.env.PORT || 5000);
 
app.listen(port, function() {
  console.log("Listening on " + port);
});