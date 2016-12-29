var http = require("http"),
	fs = require("fs");

var html = fs.readFileAsync("/archivos/index.html");

http.createServer(function(req, res) {

}).listen(8080);