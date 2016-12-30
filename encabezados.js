var http = require("http"),
	fs = require("fs");


http.createServer(function(req, res) {
	fs.readFile("archivos/data.json", function (error, data) {
		res.writeHead(200, {"Content-Type" : "application/json"});
		res.write(data);
		res.end();
	});
}).listen(8080);

/*
 * Para ver el detalle del serivcio usar en la linea de comandos lo sgte:
 * curl -I localhost:8080
 */