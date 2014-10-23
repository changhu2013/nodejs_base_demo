
var http = require('http');

http.get({host : 'www.baidu.com'}, function(res){
    res.setEncoding('UTF-8');
    res.on('data', function(data){
        //输出响应内容
        //console.log(data);
    });
});

var req = http.get({host : 'www.baidu.com'});
req.on('response', function(res){
    res.setEncoding('UTF-8');
    res.on('data', function(data){
        console.log(data);
    });
});
//终止正在发送的请求
//req.abort();

//设置请求超时时间
/*
100 为超时毫秒数，当请求超时以后执行回调方法
req.setTimeout(100, function(){

});
*/

