/**
 * Created by Ankit on 5/16/2014.
 */

/**
 * Module dependencies.
 */

var express = require('express'),
    mongoose = require('mongoose');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');


var students = require("./routes/students");
var app = express();

// all environments
app.set('port', process.env.PORT || 3001);
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');
//app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.bodyParser());
app.use(express.urlencoded());
app.use(express.json());

//app.use(express.methodOverride());
app.use(app.router);
//app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

//app.set("view options", {layout: false});
app.use(express.static('../app'));

//app.get("/students",students.findAll);
// app.get("/user/:id", students.findById);
//app.post("/insertstudent", students.insertStudent);

app.get('/', routes.index);
app.get('/students', students.list);
app.post('/signup',students.signup);
app.post('/validate', students.validate);

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});
