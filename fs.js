
console.log('开始输出文件内容-------------');
//引入FS模块
var fs = require('fs');

//异步读取文件内容
//第一个参数为文件名称,第二个参数为编码类型，为可选参数，第三个为回调函数
fs.readFile('fs.js', 'UTF-8', function(err, data){
    if(err){
        throw err;
    }else {
        //console.log(data);
    }
});

console.log('---------------------------------');
//同步方式读取文件内容
//第一个参数为文件名,第二个参数为字符编码，为可选参数.
//如果有错误readFileSync方法会抛出异常,需要主动try catch
try{
    var data = fs.readFileSync('fs.js', 'UTF-8');
    //console.log(data);    
}catch(err){
    console.log(err);
}


console.log('----------------------------------');
//一般来说，除非必要，不要使用这种方式来管理文件
//因为它要求手动管理缓冲区和文件指针
fs.open('fs.js', 'r', function(err, fd){
    if(err){
        console.error(err);
        return;
    }

    var buf = new Buffer(8);
    fs.read(fd, buf, 0, 8, null, function(err, bytesRead, buffer){
        if(err){
            console.error(err);
            return;
        }
        console.log('bytesRead:' + bytesRead);
        console.log(buffer);

        //关闭文件
        fs.close(fd);
    });
});

console.log('------------------------------------');
//写文件内容
fs.writeFile('a.txt', '测试写入文件', 'UTF-8', function(err){
    if(err){
        console.error(err);
        return;
    }
});

fs.writeFileSync('b.txt', '测试同步写入方式', 'UTF-8');

//删除文件
fs.unlink('a.txt', function(err){
    if(err){
        console.error(err);
        return;
    }
});

//同步方式删除文件
fs.unlinkSync('b.txt');

//创建文件夹
fs.mkdir('c', function(err){
    if(err){
        console.error(err);
        return;
    }
});

//同步方式创建文件夹
fs.mkdirSync('d');

//删除文件夹
fs.rmdir('c', function(err){
    if(err){
        console.error(err);
        return;
    }
});

//同步方式删除文件夹
fs.rmdirSync('d');

//读取目录内文件
fs.readdir('temp', function(err, files){
    if(err){
        console.error(err);
        return;
    }
    for(idx in files){
        var file = files[idx];
        console.log('文件:' + file);

        //读取文件真实路径
        fs.realpath('temp/' + file, function(err, resolvedPath){
            if(err){
                console.error(err);
                return;
            }
            console.log('文件路径:' + resolvedPath);
        });

        //同步读取文件真实路径
        var rp = fs.realpathSync('temp/' + file);
        console.log('file path:' + rp);
    }
});

//同步方式读取目录内文件
var files = fs.readdirSync('temp');
for(idx in files){

    var file = files[idx];
    console.log('file:' + file);

    var path1 = 'temp/' + file;
    var path2 = 'temp/' + file.split('.')[0] + '.js';
    console.log(path1);
    console.log(path2);
    //修改文件名称
    fs.rename(path1, path2, function(err){
        if(err){
            console.error(err);
            return;
        }
    });

    //同步修改文件名称
    //fs.renameSync(path1, path2);
}
