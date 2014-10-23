
var events = require('events');
var util = require('util');

function Student(name){
    this.name = name || 'No Name';
}

//注意此处要先进行集成
//再添加其youXing方法,
//因为后写集成会修改其原型
util.inherits(Student, events.EventEmitter);

Student.prototype.youXing = function(){
    var msg = this.name + '开始游行了';
    this.emit('youxing', msg);
}

var student1 = new Student('谢木兰');

student1.on('youxing', function(msg){
    console.log('警察发现：' + msg);
});

console.log(student1);

student1.youXing();