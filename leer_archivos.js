var http = require("http"),
	fs = require("fs");

/*
 * Si el codigo lo pongo en este lado, 
 * entonces el servidor solo lo 
 * leera una vez
 */

http.createServer(function(req, res) {
	/*
	 * Si el codigo lo pongo en esta seccion,
	 * entonces el servidor correra por cada peticion 
	 * que se haga al navegador
	 */
	fs.readFile("archivos/index.html", function(err, data) {
		res.write(data);
		res.end();
	});	
}).listen(8080);