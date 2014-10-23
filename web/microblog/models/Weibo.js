var mongodb = require('./db.js');
var BSON = require('mongodb').BSONPure

function Weibo(weibo){
    
    this.message = weibo.message;
    this.userCode = weibo.userCode;
    this.time = weibo.time;
}

Weibo.prototype.save = function(callback){
    var weibo = {
        userCode : this.userCode,
        message : this.message,
        time : this.time
    };
    mongodb.open(function(err, db){
        if(err){
            return callback(err);
        }
        db.collection('weibos', function(err, collection){
            if(err){
                mongodb.close();
                return callback(err);
            }
            collection.insert(weibo, {safe : true}, function(err, weibo){
                mongodb.close();
                callback(err, weibo);
            });
        });
    });
};

Weibo.findAll = function(callback){
    mongodb.open(function(err, db){
        if(err){
            return callback(err);
        }
        db.collection('weibos', function(err, collection){
            if(err){
                mongodb.close();
                return callback(err);
            }
            collection.find().sort({time:-1}).toArray(function(err, docs){
                mongodb.close();
                console.log(docs);
                callback(err, docs);
            });
        });
    });
};

Weibo.del = function(weiboId, callback){
    mongodb.open(function(err, db){
        if(err){
            return callback(err);
        }
        db.collection('weibos', function(err, collection){
            if(err){
                mongodb.close();
                return callback(err);
            }
            //注意按照ObjectId删除数据的时候用这样的方法
            var objId = BSON.ObjectID.createFromHexString(weiboId);
            console.log('按照ObjectId删除：' + objId);
            collection.remove({_id : objId}, {safe : true}, function(err, result){
                console.log('删除：' + weiboId + ' ' + result);
                mongodb.close();
                return callback(err, result);
            });
        });
    });
};

module.exports = Weibo;