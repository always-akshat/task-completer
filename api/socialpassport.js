/**
 * Created by akshat on 17/6/14.
 */

// load all the things we need

var passport = require('passport')
var FacebookStrategy = require('passport-facebook').Strategy;
var TwitterStrategy = require('passport-twitter').Strategy;
var studentSchema = require('./models/studentmodel');
var socialauth = require('./socialauth.js');
var student_functions = require('./routes/students.js');



module.exports = passport.use(new FacebookStrategy({
        clientID: socialauth.facebook.clientID,
        clientSecret: socialauth.facebook.clientSecret,
        callbackURL: socialauth.facebook.callbackURL
    },
    function(accessToken, refreshToken, profile, done) {
        console.log('reached fb auth callback');
        //console.log('return frm FB ' + JSON.stringify(profile));
        if(profile.emails) {
            fb_email = profile.emails[0].value;
        }
        else{
            console.log('not found');
            done(null,3);
        }

//        console.log('checked for mail');
        if (fb_email) {
            enter_old_user(profile, function(err,data){
  //              console.log('data recieved in main function');
                if(err){
                    console.log(err);
                }
                done(null,data);
            });

        }else{
            console.log('not found');
            done(null,3);
        }

    }
));

passport.use(new TwitterStrategy({
        consumerKey: socialauth.twitter.consumerKey,
        consumerSecret: socialauth.twitter.consumerSecret,
        callbackURL: socialauth.twitter.callbackURL
    },
    function(accessToken, tokenSecret, profile, done) {
        process.nextTick(function () {

            twit_profile  = new Object();
            twit_profile.id = profile.id;
            twit_profile.name = profile.displayName;
            twit_profile.username = profile.username;
            twit_profile.authcode = accessToken;
            twit_profile.secret = tokenSecret;

            return done(null, twit_profile);
        });
    }
));

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(obj, done) {
    done(null, obj);
});

function enter_old_user(profile,cb){

    console.log('enter old user reg');
    Students.findOne({ email: fb_email}, function (err, student) {
        if (err) {
            console.log('error occured at finding student' );
            cb(err,2);
        }
        else {

            if(student == null) {
                console.log('student null. created new student schema.registering new user');
                student = new studentSchema.student;
                student.email = fb_email;
                student.facebookid = profile.id;
                student.facebook.friends = [];
                //student.facebook.authcode = accessToken;
                student.facebook.authorized = 1;
                student.gender = profile.gender;
                student.name = profile.displayName;
                student.points = 0;

            }
            else if (student != null) {

                console.log('student not null');

                if (!student.facebookid) {
                    console.log('NO facebookid');
                    student.facebookid = profile.id;
                    student.facebook.friends = [];
                    //student.facebook.authcode = accessToken;
                    student.facebook.authorized = 1;
                    student.gender = profile.gender;
                    student.name = profile.displayName;
                }
            }

                //console.log(student);
                student.save(function(err) {
                    console.log('trying to save student');
                    if (!err) {
                        if (student.user_tasks.length > 0) {
                            console.log('user tasks found and returning student');
                            cb(null, student);
                        }
                        else {
                            console.log('NO user tasks');
                            tasks_in_registration(student, function (err, student) {
                                if (err) {
                                    cb(err, 2);
                                } else {
                                    cb(null, student);
                                }

                            });

                        }
                    } else {
                        console.log('error' + err);
                        cb(err,2);
                    }

                });

        }

    });



}

function tasks_in_registration(student,cb){
    console.log('entering new tasks');
    student_functions.add_stage1(student.facebookid, function(err,data){
        console.log('data recieved from add tasks is :' + data);
        if(err){
            console.log('error occured in adding stages' + err);
            student.user_tasks= undefined;
            student.stages = undefined;
            student.save();
            cb(err,0)
        }else{
            console.log('tasks added checking student data integrity');
            Students.findOne({ email: student.email}, function (err, final_student){
                if(final_student.stages.length == 1 && final_student.user_tasks.length ==5){
                    console.log('everything fine');
                    cb(null,final_student);
                }else{
                    console.log('incorrect number of tasks or stages found. err');
                    final_student.user_tasks= undefined;
                    final_student.stages = undefined;
                    final_student.save(function(err){
                        if(err){
                            console.log('error occured in deleting student' +err);
                        }
                        cb(err,0);
                    });

                }

            })

        }
    });
}