var express = require('express');
var crypto = require('crypto');

var User = require('../models/User.js');

var router = express.Router();

router.get('/', function(req, res) {
    res.render('login');
});

router.post('/', function(req, res){
    console.log(req.body);
    var md5 = crypto.createHash('md5');

    var userCode = req.body['userCode'];
    var password = md5.update(req.body['password']).digest('base64');

    console.log('userCode : ' + userCode);
    console.log('password : ' + password);

    User.get(userCode, function(err, user){

        console.log(user);
        if(password == user.password){
            req.session.user = user;
            req.flash('success', '登陆成功');
            res.redirect('/');    
        }else {
            req.flash('error', '密码错误');
            res.redirect('/login');
        }
    });
});

module.exports = router;
