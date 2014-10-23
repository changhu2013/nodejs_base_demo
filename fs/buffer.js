
var str = "你好 Node.JS";
var buf = new Buffer(str, 'UTF-8');
console.log(buf);

console.log(buf.length);
console.log(buf[10]);

//buf.write(' Hello World');

console.log(buf.toString('UTF-8'));

var fs = require('fs');
var rs = fs.createReadStream('fs.js');
var data = '';
rs.on('data', function(trunk){
    data += trunk;
    //console.log(trunk.toString('UTF-8'));
});
rs.on('end', function(){
    console.log(data);
});

console.log('--------------------------------');
var rs2 = fs.createReadStream('fs.js');
rs2.setEncoding('UTF-8');
rs2.on('data', function(trunk){
     console.log(trunk);
});


