/**
 * Created by Ankit on 5/16/2014.
 */



var express = require('express'),mongoose = require('mongoose');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var flash = require('connect-flash');
var config = require('./config.js');
var passport  = require('passport');

/*
passport.serializeUser(function(user, done) {
    done(null, user);
});
passport.deserializeUser(function(obj, done) {
    done(null, obj);
});
*/




var authroutes = require("./routes/auth");
var students = require("./routes/students");
var campaigns = require("./routes/campaigns");
var stages = require("./routes/stages");
var tasks = require("./routes/tasks");
var config_passport = require("./socialpassport");


var app = express();



// all environments
app.set('port', process.env.PORT || 3001);
//app.set('views', path.join(__dirname, 'views'));
//app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.cookieParser());    // to read cookies
app.use(express.bodyParser());      // to get information from html forms.
app.use(express.session({ secret: 'gloryglorymanchesterunited' })); // session secret
app.use(express.urlencoded());
app.use(passport.initialize());
app.use(passport.session());
app.use(app.router);


// required for passport

app.use(flash()); // use connect-flash for flash messages stored in session





// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}




app.get('/', routes.index);

app.get('/auth/facebook', passport.authenticate('facebook'),function(req, res){

});

app.get('/auth/facebook/callback',
        passport.authenticate('facebook', {failureRedirect: '/' }),
    function(req, res) {

        req.session.student = req.user;
        res.send(req.session.student);
    });

app.get('/auth/twitter',
    passport.authenticate('twitter'),
    function(req, res){
    });

app.get('/auth/twitter/callback',
    passport.authenticate('twitter', { failureRedirect: '/' }),
    function(req, res) {
        req.session.twit = req.user;
        res.send(req.session.twit);
    });

app.get('/students', students.list);
app.post('/students',students.signup);
app.get('/students/:fbid',students.info);
app.get('/students/friends/:fbid',students.getfacebookfriends);
app.put('/students/friends/:facebookid',students.putfacebookfriends);
app.get('/students/type/:usertypeid',students.allusersoftype);
app.post('/students/:fbid/tasks/:taskid',students.submittask);
app.put('/students/:fbid/tasks/:taskid',students.updatetask);
app.put('/students/points/:facebookid',students.addpoints);


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
