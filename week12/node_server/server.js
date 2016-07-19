var http = require('http');

function handleRequest(request, response){
	response.end('It works!! Path Hit: ' + request.url);
}

var server = http.createServer(handleRequest);
// 3000 is the most popular anything 1024
server.listen(8080, function(){
	console.log('Server listening on: http://localhost:%s', PORT)
})