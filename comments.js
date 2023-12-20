// Create web server
// Run: node comment.js
// =============================================

// Import module
var http = require('http');
var fs = require('fs');

// Create server
http.createServer(function (request, response) {
	// Read file
	fs.readFile('index.html', function(err, data){
		response.writeHead(200, {'Content-Type': 'text/html'});
		response.write(data);
		response.end();
	});
}).listen(8000);

console.log('Server running at http://localhost:8000');