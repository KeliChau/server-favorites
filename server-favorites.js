// Requiring dependencies
var http = require("http"); // http module
var fs = require("fs"); // fs module

// Setting port to 8080
var port = 8080;

// Create server
var server = http.createServer(handleRequest);

// Create a function for handling requests and responses coming into server
function handleRequest(require, response){
	// Use fs package to read html files
	fs.readFile(__dirname + "/index.html", function(error, data){
		// Respond to client with HTML page by specifically telling the browser that we're delivering an HTML file
		response.writeHead(200, {"Content-Type": "text/html"});
		response.end(data);
	});
}

// Start server
server.listen(port, function(){
	console.log("Server is listening on port: " + port);
});