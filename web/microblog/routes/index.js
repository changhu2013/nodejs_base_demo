var express = require('express');
var Weibo = require('../models/Weibo.js');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {

    Weibo.findAll(function(err, weibos){
        console.log(weibos);
        res.render('index', {weibos : weibos});
    });
});

module.exports = router;
