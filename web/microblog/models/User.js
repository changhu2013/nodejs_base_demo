var mongodb = require('./db.js');

function User(user){
    this.userCode = user.userCode;
    this.password = user.password;
}

User.prototype.save = function(callback){
    var user = {
        userCode : this.userCode,
        password : this.password
    };
    mongodb.open(function(err, db){
        if(err){
            return callback(err);
        }
        db.collection('users', function(err, collection){
            if(err){
                mongodb.close();
                return callback(err);
            }
            collection.ensureIndex('userCode', {unique : true});
            collection.insert(user, {safe : true}, function(err, user){
                mongodb.close();
                callback(err, user);
            });
        });
    });
};

User.get = function get(userCode, callback){

    console.log('userCode : ' + userCode);
    console.log('mongodb  : ' +  mongodb);

    mongodb.open(function(err, db){
        if(err){
            return callback(err);
        }
        db.collection('users', function(err, collection){
            if(err){
                mongodb.close();
                return callback(err);
            }
            collection.findOne({userCode : userCode}, function(err, doc){
                mongodb.close();
                if(doc){
                    var user = new User(doc);
                    callback(err, user);
                }else {
                    callback(err, null);
                }
            });
        });
    });
};

module.exports = User;
