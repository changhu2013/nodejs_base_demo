var express = require('express');
var crypto = require('crypto');

var User = require('../models/User.js');

var router = express.Router();

router.use(function(req, res, next){
    res.locals.error = req.flash('error');
    res.locals.userCode = req.flash('userCode');
    res.locals.password = req.flash('password');
    next();
});

router.get('/', function(req, res) {
    res.render('signin');
});

router.post('/', function(req, res){

    var userCode = req.body['userCode'];
    var password = req.body['password'];
    var passwordRepeat = req.body['password-repeat'];

    if(password !== passwordRepeat){
        req.flash('error', '两次输入的密码不一致');
        req.flash('userCode', userCode);
        req.flash('password', password);
        return res.redirect('/signin');
    }

    var md5 = crypto.createHash('md5');
    password = md5.update(password).digest('base64');

    var user = new User({
        userCode : userCode,
        password : password
    });

    User.get(userCode, function(err, u){
        if(u){
            err = '该账户已经存在'
        }
        if(err){
            req.flash('error', err);
            req.flash('userCode', userCode);
            req.flash('password', password);
            res.redirect('/signin');
        }
        user.save(function(err){
            if(err){
                req.flash('error', err);
                return res.redirect('/signin');
            }
            req.session.user = user;
            req.flash('success', '注册成功');
            res.redirect('/');
        });
    });
});

module.exports = router;