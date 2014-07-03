/**
 * Created by Ankit on 5/16/2014.
 */

var log4js = require('log4js');
//log the cheese logger messages to a file, and the console ones as well.
/*log4js.configure({
    appenders: [
        {
            type: "file",
            filename: "'logs/badvibes.log",
            category: [ 'cheese','console' ]
        },
        {
            type: "console"
        }
    ],
    replaceConsole: true
});
var logger = log4js.getLogger('cheese');
logger.setLevel('ERROR');
*/



var express = require('express'),mongoose = require('mongoose');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var flash = require('connect-flash');
var config = require('./config.js');
var passport  = require('passport');

var session = require('express-session');
var RedisStore = require('connect-redis')(session);


var authroutes = require("./routes/auth");
var students = require("./routes/students");
var campaigns = require("./routes/campaigns");
var stages = require("./routes/stages");
var tasks = require("./routes/tasks");
var sharer = require("./routes/sharer");
var utility_routes = require("./routes/utilities");
var config_passport = require("./socialpassport");


var app = express();

app.use("/app", express.static(__dirname + '/../app/'));

// all environments
app.set('port', process.env.PORT || 3001);
//app.set('views', path.join(__dirname, 'views'));
//app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.cookieParser());    // to read cookies
app.use(express.bodyParser());      // to get information from html forms.
app.use(express.session({
    store: new RedisStore({
        host: '54.254.100.71',
        port: 6379,
        db: 9
    }),
    secret: 'manchester_united'
}));
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



app.get('/auth/facebook', passport.authenticate('facebook',{ scope: 'publish_actions' }),function(req, res){

});

app.get('/auth/facebook/callback',
        passport.authenticate('facebook', {failureRedirect: '/' }),
    function(req, res) {

        req.session.student = req.user;
        //res.send(req.session.student);
        res.redirect('/app/');
        //console.log(req.session.student);
    });

app.get('/auth/twitter',
    passport.authenticate('twitter'),
    function(req, res){
    });




app.get('/auth/twitter/callback',
    passport.authenticate('twitter', { failureRedirect: '/' }),
    function(req, res) {
        req.session.twit = req.user
        //console.log(req.session);
        students.addTwitter(req,res);
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
app.get('/students/leaderboard/points',students.leaderboard);
app.get('/logout',students.logout);
app.get('/students/backend/add_tasks',students.stage_add_to_all);
app.get('/students/backend/transaction',students.VibesTransaction);

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

app.get('/locations',utility_routes.locationlist);
app.get('/colleges',utility_routes.collegelsist);


app.get('/getstudentdata', students.getstudentdata); // to initially set the student data


//app.post('/sharefblink',sharer.feed_sharelink);
//app.post('/sharetweet',sharer.sharetweet);
//app.get('/getlikes',sharer.get_likes);


app.post('/socialshare',sharer.share);

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});
