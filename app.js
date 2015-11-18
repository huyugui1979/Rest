var express = require('express')
var bodyParser = require('body-parser')
var methodOverride = require('method-override')
var mongoose = require('mongoose')
var restify = require('express-restify-mongoose')
require('./model/model.js')
var app = express()
var router = express.Router()
var routes = require('./routes/index.js')
app.use(routes);
app.use(bodyParser.json())
app.use(methodOverride())
app.use(
    function crossOrigin(req,res,next){
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "X-Requested-With");
      return next();
    }
);

//
mongoose.connect('mongodb://huyugui.eicp.net/restify')

restify.serve(router, mongoose.model('Student'));
restify.serve(router, mongoose.model('Teacher'));

app.use(routes);

app.listen(9999, function () {
  console.log('Express server listening on port 9999')
})