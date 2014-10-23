
//执行node命令时候的参数
var argv = process.argv;
console.log(argv);
//第一个为node
//第二个参数为js文件
//后续为输入的其他参数

//process.stdout 是标准的输出流
process.stdout.write('Hello Node process \n');

//process.stdin 是标准的输入流
//初始时它是被暂停的，要想从标准输入读取数据，你必须恢复流，
//并手动编写流的事件响应函数
/*
process.stdin.resume();
process.stdin.on('data', function(data){
    process.stdout.write('read from consol:' + data.toString());
});
*/

//process.nextTick(callback)的功能是为事件循环设置一项任务，Node.js会在
//下次事件循环调响应时调用callback
function doSomething(callback){
    //do something...
    console.log(' doSomething ');
    process.nextTick(callback);
}

doSomething(function onEnd(){
    //do something...
    console.log(' doEnd ');
});