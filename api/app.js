/**
 * Created by Ankit on 5/16/2014.
 */
//require('newrelic');

//var log4js = require('log4js');
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
var data = require("./routes/data");
var mail = require("./routes/mail");
var manage = require("./routes/manageinterns");
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
//app.use(express.session({secret: '1234567890QWERTY'}));
app.use(express.session({
    store: new RedisStore({
        host: '54.251.103.74',
        port: 6379,
        db: 1
    }),
    secret: 'manchester_united',
    cookie: { maxAge: 9000000 }
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


function IsAuthenticatedService(req,res,next){
    /*console.log('trying authentication');
    if(req.session.student){
        console.log('service auth');
        next();
    }else{
        console.log('auth failed');
        next(new Error(403));
    } */
    next();
}
function IsAuthenticatedPage(req,res,next){
    console.log('trying authentication');
    if(req.session.student
        && req.session.student.facebookid
        && req.session.student.facebookid != null
        && req.session.student.facebookid != ''
        ){
        console.log('auth success');
        next();
    }else{
        console.log('auth failed');
        next(res.redirect('/?nosess=1'));
    }
}


app.get('/', routes.index);
app.get('/register', routes.register);


app.get('/auth/facebook',passport.authenticate('facebook',{ scope: ['publish_actions','email','public_profile'] })
);

app.get('/login', function(req,res){
    //console.log(req.user);
    req.session.student = null;
    if(req.user) {
        if (req.user == 3) {
           //res.send('There is no email associated with your facebook account. Add an emailid in your facebook settings to login.');
            res.redirect('/register');
        }
        else if (req.user == 2) {
            console.log('error occured - redirecting to main page');
            res.redirect('/?error=1');
        }
        else {
            //console.log('everything fin. logging in');
            //console.log('student returned' + JSON.stringify(req.user))
            req.session.student = req.user;
             console.log('set facebookid to :' + req.session.student.facebookid);
            complement(req.user.facebookid.toString(), function(err,data){
                console.log('data recieved from complement' + data);
            if(!err){
                req.session.student.c = data.toString();
                console.log('complement ' + data);
                req.session.save(function(err,data){
                    console.log('data ' + data);
                    if(!err){
                        res.redirect('/app/');
                    }else{
                        res.redirect('/auth/facebook')
                    }
                });
            }

            });


        }
    }else{
        res.redirect('/');
    }

});



app.get('/auth/facebook/callback',
        passport.authenticate('facebook',
            {failureRedirect: '/auth/facebook',
             successRedirect: '/login'})
    );



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
app.get('/students/auth/:fbid',students.getstudentauth);
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
app.get('/students/backend/login/:fb',config_passport.backend_login);

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

app.get('/getstudentdata', IsAuthenticatedPage,students.getstudentdata); // to initially set the student data
 // to initially set the student data

app.post('/socialshare',sharer.share);


app.put('/survey',IsAuthenticatedService,sharer.survey);
app.put('/likefollow',IsAuthenticatedService,sharer.likefollow);
app.put('/uploadselfie',IsAuthenticatedService,sharer.selfie);
app.put('/uploadphoto',IsAuthenticatedService,sharer.selfie);
app.put('/invites',IsAuthenticatedService,sharer.fb_invite);
app.put('/stickers',IsAuthenticatedService,sharer.stickers);
app.put('/rating',IsAuthenticatedService,sharer.stickers);
app.put('/knowviber',sharer.knowviber);
app.put('/fbsharepost',sharer.fbsharepost);



app.post('/emailvalidate',students.validateemail);
app.get('/register',function(req,res){res.send('register')});
app.get('/s/:ref?',routes.index);

app.get('/cron/leaderboard',students.verify_vibes);
app.get('/cron/one_task',students.one_task);


app.get('/data/leaderboard/1',data.leaderboard);


app.get('/manage/view/s',manage.getsubordinates);
app.get('/students/manage/interns',students.getsubordinates)
app.put('/students/manage/interns/delete',students.removesubordinate);




http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
    //console.log('Hello from Worker ' + cluster.worker.id);
});




function complement(number,cb){
    console.log(number);

    var secrettoken ='';
    var count = number.length;
    console.log('count' + count);
    for(var c=0;c<=number.length-1;c++){
        secrettoken += (9-parseInt((number.substr(c,1))));
        if(c == (count-1)){
            cb(null,secrettoken);
        }
    }

}
