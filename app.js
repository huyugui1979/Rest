var express = require('express')
var bodyParser = require('body-parser')
var methodOverride = require('method-override')
var mongoose = require('mongoose')
var restify = require('express-restify-mongoose')
require('./model/model.js')
var app = express()
var router = express.Router()

app.use(bodyParser.json())
app.use(methodOverride())

mongoose.connect('mongodb://huyugui.eicp.net/restify')

restify.serve(router, mongoose.model('Student'))
restify.serve(router, mongoose.model('Book'))
app.use(router)

app.listen(9999, function () {
    console.log('Express server listening on port 9999')
})