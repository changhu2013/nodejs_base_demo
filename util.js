
var util = require('util');

function Base(){
    this.name = 'base';
    this.base = 1991;

    this.sayHello = function(){
         console.log('Hello ' + this.name);
    };
}

Base.prototype.showName = function(){
    console.log(this.name);
}

function Sub(){
    this.name = 'sub';
}

util.inherits(Sub, Base);
//以上代码定义了Base类和Base类的子类Sub类
//注意：Sub类仅仅击沉管理Base类原型中定义的函数，而构造方法
//中创建的属性和sayHello方法没有被Sub类继承。同时原型中定义的属性不会
//被console.log作为对象属性输出

var objBase = new Base();
objBase.showName();
objBase.sayHello();
console.log(objBase);

var objSub = new Sub();
objSub.showName();
//objSub.sayHello();
console.log(objSub);

console.log('--------------------------------');
//util.inspect(object, [showHidden], [depth], [colors])是一个将任意对象
//转换为字符串的方法，通常用于调试和错误输出

console.log(util.inspect(objSub, true, true, true));
console.log(util.inspect(objBase, true, true, true));


//util的其他工具方法
//判断是否是数组
var ary = ['1', 2, '3'];
util.isArry(ary);

//判断是否是正则表达式
var reg = /^S/g;
util.isRegExp();

//判断是否是日期类型
util.isDate(new Date());

//判断是否是错误
var e = new Error('测试');
util.isError();