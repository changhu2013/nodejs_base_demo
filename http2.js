var http = require('http');
var querystring = require('querystring');

var contents = querystring.stringify({
    name : 'changhu',
    email : 'o52tiger@gmail.com'
});

console.log(contents);

var options = {
    host : 'www.byvoid.com',
    path : '/application/node/post.php',
    method : 'POST',
    headers : {
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Content-Length' : contents.length
    }
};

var req = http.request(options, function(res){
    res.setEncoding('UTF-8');
    res.on('data', function(data){
        console.log(data);
    });
});
req.write(contents);
req.end();
