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
        host: '54.251.103.74',
        port: 6379,
        db: 0
    }),
    secret: 'manchester_united',
    cookie: { maxAge: 900000 }
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


function IsAuthenticated(req,res,next){
    console.log('trying authentication');
    if(req.session.student
       && req.session.student.facebookid
       && req.session.student.facebookid !== null
       && req.session.student.facebookid !== ''
        && typeof req.session.student.facebookid !== 'undefined'){
        next();
    }else{
        console.log('rand ke bacche');
        res.redirect('/');
        //next(new Error(401));
    }
}

app.get('/', routes.index);



app.get('/auth/facebook', passport.authenticate('facebook',{ scope: ['publish_actions','email','public_profile'] }),function(req, res){

});

app.get('/auth/facebook/callback',
        passport.authenticate('facebook', {failureRedirect: '/' }),
    function(req, res) {
        console.log(req.user);
        if(req.user == 1){
            res.redirect('/register');

        }else if(req.user == 2){
            res.redirect('/?error=1');
        }
        else{
            req.session.student = req.user;
            res.redirect('/app/');
        }

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
app.put('/students/:facebookid',students.updateSettings);
app.post('/students/:fbid/tasks/:taskid',students.submittask);
app.put('/students/:fbid/tasks/:taskid',students.updatetask);
app.put('/students/points/:facebookid',students.addpoints);
app.get('/students/leaderboard/:type/:id?',students.leaderboard);
app.get('/logout',students.logout);

app.get('/students/backend/add_tasks',students.stage_add_to_all);
app.get('/students/backend/transaction',students.VibesTransaction);
app.get('/students/:facebookid/delete',students.delete_my_data);


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

app.get('/locations/:n?',utility_routes.locationlist);
app.get('/colleges/:n?',utility_routes.collegelsist);
app.get('/students/leaderboard/:type/:id?',students.leaderboard);

app.get('/getstudentdata', IsAuthenticated,students.getstudentdata); // to initially set the student data


app.post('/socialshare',sharer.share);
app.post('/survey',sharer.survey);


app.put('/likefollow',sharer.likefollow);
app.put('/uploadselfie',sharer.selfie);
app.put('/invites',sharer.fb_invite);
app.put('/stickers',sharer.stickers);
app.get('/emailvalidate',students.validateemail);


app.get('/register',function(req,res){res.send('register')});


http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});
