var fs = require('fs');
var StringDecoder = require('string_decoder').StringDecoder;

var path = 'a.txt';
var path2 = 'b.txt';

//如果文件不存在则创建该文件
console.log('创建一个文件 ' + path);
fs.open(path, 'w', function(err, fd){
    if(err) throw err;
    //给文件里写入内容
    var buf = new Buffer('这是一个测试文件');
    fs.write(fd, buf, 0, buf.length, 0, function(err){
        console.log(err);
    });
});

//重命名文件
fs.rename(path, path2, function(){
    console.log('修改文件名字为 ' + path2);
});

//读取文件内容
fs.open(path2, 'r', function(err, fd){
    console.log(err);
    if(err) throw err;
    var buf = new Buffer(1024);
    fs.read(fd, buf, 0, buf.length, 0, function(err, bytesRead, buffer){

    });
    
    console.log(buf.length);
    var decoder = new StringDecoder('UTF-8');
    //console.log(decoder.write(buf));
});

//异步删除文件
fs.unlink(path, function(err){
    if(err) throw err;
    console.log('successfully deleted ' + path);
});

//同步删除文件
fs.unlinkSync(path2);
console.log('successfullay delete ' + path2);
