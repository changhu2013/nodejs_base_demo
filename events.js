
var events = require('events');

//emitter.EventEmitter是事件发射和事件监听器功能的封装
//EventEmitter的每个事件由一个事件名和若干个参数组成，事件名是一个字符串
//通常表达一定的语义。对于每个事件，EventEmitter支持若干个事件监听器。
var emitter = new events.EventEmitter();

//为指定事件注册一个监听器，
emitter.on('someEvent', function(arg1, arg2){
    console.log('listener1', arg1, arg2);
});

emitter.on('someEvent', function(arg1, arg2){
    console.log('listener2', arg1, arg2);
});

//发射someEvent事件，传递若干可选参数到事件监听器的参数表
emitter.emit('someEvent', 'changhu', 1000);

//为指定事件注册一个单次监听器，即监听器最多只会触发一次，触发后立即解除监听器
emitter.once('someEvent', function(){

});

var listener = function(){
    
};

//设置监听器
emitter.on('someEvent', listener);

//解除监听器
emitter.removeListener('someEvent', listener);

//emitter.removeAllListener([event])
//解除所有事件的监听器

//EventEmitter中定义了一个特殊的事件error，它包含了错误的语义，我们在遇到异常的时候
//通常会发射error事件，当error事件发射时，EventEmitter规定如果没有响应的监听器，
//Node.js会把它当做异常，推出程序并打印调用栈。

//emitter.emit('error')
