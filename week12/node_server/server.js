// In this exercise, students will be creating a server that will serve multiple HTML files.

// Slack out the following instructions:

// Serving some HTML realness
// * Create a website with 4 routes:
//   * Home
//   * Favorite Food
//   * Favorite Movies
//   * Favorite CSS Frameworks
// * Use fs to serve the HTML from files rather than straight in the JavaScript


var http = require('http');
var fs = require('fs');
var url = require('url');

var _PORT = 8080;

var server = http.createServer(handleRequest);


function handleRequest(req, res){
    var url_parts = url.parse(req.url);

    switch (url_parts.pathname) {
    case '/':
      display_root(url_parts.pathname, req, res);
      break;
    case '/food':
      display_food(url_parts.pathname, req, res);
      break;
    case '/movie':
      display_movie(url_parts.pathname, req, res);
      break;
    case '/css':
      display_css(url_parts.pathname, req, res);
      break;
    default:
      display_404(url_parts.pathname, req, res);
  }
}

function display_root(url, req, res){
    fs.readFile('index.html', function(err, data){
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.end(data);
    });
};

function display_food(url, req, res){
    fs.readFile('food.html', function(err, data){
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.end(data);
    });
};

function display_movie(url, req, res){
    fs.readFile('movie.html', function(err, data){
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.end(data);
    });
};

function display_css(url, req, res){
    fs.readFile('css.html', function(err, data){
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.end(data);
    });
};

function display_404(url, req, res){
    fs.readFile('404.html', function(err, data){
        res.writeHead(400, {'Content-Type' : 'text/html'});
        res.end(data);
    });
};



    // switch (url_parts.pathname) {
    //     case '/':

    //     break;
    //     case '/food':
    //         fs.readFile('food.html', function(err, data){
    //             res.writeHead(200, {'Content-Type' : 'text/html'});
    //             res.end(data);
    //         });
    //     break;
    //     case '/movie':
    //         fs.readFile('movie.html', function(err, data){
    //             res.writeHead(200, {'Content-Type' : 'text/html'});
    //             res.end(data);
    //         });
    //     break;
    // }

server.listen(_PORT, function(){
    console.log('Server is listeing on PORT: ' + _PORT);
})