var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/students/statics',function(req,res,next){
    res.jsonp("hee");
})

module.exports = router;
