var express = require('express');
var Weibo = require('../models/Weibo.js');
var MyUtil = require('../MyUtil.js');

var router = express.Router();

router.use(function(req, res, next){
    res.locals.error = req.flash('error');
    next();
});

router.get('/', function(req, res){
    if(req.session && req.session.user){
        res.render('post');
    }else {
        res.redirect('/login');
    }
});

router.post('/', function(req, res){
    var message = req.body['message'];
    var user = req.session.user;
    var time = MyUtil.dateFormat(new Date(), 'yyyy-MM-dd hh:mm:ss');
    var weibo = new Weibo({
        message : message,
        userCode : user.userCode,
        time : time
    });
    weibo.save(function(err, wb){
        if(err){
            console.error(err);
            res.flash('error', err);
            return res.redirect('/post');
        }
        console.log('保存成功' + wb);
        res.redirect('/');
    });
});

module.exports = router;