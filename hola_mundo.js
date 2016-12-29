var http = require("http");

var funcion = function(solicitud, respuesta) {
	console.log("Recibimos nueva peticion");
	respuesta.end("Hola mundo");
}

var servidor = http.createServer(funcion);

servidor.listen(8080);