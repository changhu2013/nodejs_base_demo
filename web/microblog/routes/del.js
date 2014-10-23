var express = require('express');
var url = require('url');
var querystring = require('querystring');

var Weibo = require('../models/Weibo.js');

var router = express.Router();

router.get('/', function(req, res){
    var query = querystring.parse(url.parse(req.url).query);
    console.log(query);
    var weiboId = query.weiboId;
    console.log('weiboId : ' + weiboId);
    Weibo.del(weiboId, function(err, result){
        if(err){
            console.error(err);
        }
        console.log(result);
        res.redirect('/');
    });
   
});

module.exports = router;
