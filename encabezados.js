var http = require("http"),
	fs = require("fs");


http.createServer(function(req, res) {
	fs.readFile("archivos/data.json", function (error, data) {
		res.writeHead(200, {"Content-Type" : "application/json"});
		res.write(data);
		res.end();
	});
}).listen(8080);