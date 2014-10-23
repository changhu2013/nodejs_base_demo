
var http = require('http');
var querystring = require('querystring');
var util = require('util');

var server = new http.Server();

server.on('request', function(req, res){
    
    var post = '';
    req.on('data', function(chunk){
        post += chunk;
        console.log('data:' + chunk);
    });
    req.on('end', function(){
        post = querystring.parse(post);
        res.end(util.inspect(post));
    });

    res.writeHead(200, {
        'Content-Type' : 'text/html'
    });
    res.write('<center><h1>Node.JS</h1></center>');
    //结束并发送
    res.end('<p>Hello World</p>');
});
server.listen(3000);
console.log('服务监听端口为3000');

/*
http.createServer(function(req, res){
    res.writeHead(200, {
        'Content-Type' : 'text/html'
    });
    res.write('<center><h1>Node.JS</h1></center>');
    //结束并发送
    res.end('<p>Hello World</p>');
}).listen(3000);
*/