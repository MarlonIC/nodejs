var http = require("http"),
	fs = require("fs");

http.createServer(function(req, res) {
	fs.readFile("archivos/render_vars.html", function(err, data) {
		var html_string = data.toString();

		/* Con las expresiones regulares obtenemos
		 * las variables en un arreglo
		 */
		var variables = html_string.match(/[^\{\}]+(?=\})/g);

		//Variables a renderizar en la vista
		var titulo = "Renderizando variables";
		var nombre = "Marlon Inga Cahuana";
		var curso = "NodeJS";

		for (var i = variables.length - 1; i >= 0; i--) {
			/*
			 * Con eval ejecutamos como variable de javascript
			 * para obtener el valor de dicha variables
			 */
			var value = eval(variables[i]);

			html_string = html_string.replace("{"+variables[i]+"}", value);
		}

		res.writeHead(200, {"Content-type" : "text/html"});
		res.write(html_string);
		res.end();
	});
}).listen(8080);