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
var campaigns = require("./routes/campaigns");
var stages = require("./routes/stages");
var tasks = require("./routes/tasks");

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
app.post('/students',students.signup);
app.get('/students/:fbid',students.info);
app.get('/students/friends/:fbid',students.getfacebookfriends);
app.put('/students/friends/:facebookid',students.putfacebookfriends);
app.get('/students/type/:usertypeid',students.allusersoftype);
app.post('/students/:fbid/tasks/:taskid',students.submittask);
app.put('/students/:fbid/tasks/:taskid',students.updatetask);

app.post('/campaigns',campaigns.addcampaign);
app.get('/campaigns',campaigns.list);
app.get('/campaigns/:oid',campaigns.info);


app.post('/stages',stages.addstage);
app.get('/stages',stages.list);
app.get('/stages/:oid',stages.info);


app.post('/tasks',tasks.addtask);
app.get('/tasks',tasks.list);
app.get('/tasks/:oid',tasks.info);
//app.get('/tasks/:taskid/children',tasks.children);



http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});
