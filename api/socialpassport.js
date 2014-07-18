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


Student = studentSchema.student;



module.exports = passport.use(new FacebookStrategy({
        clientID: socialauth.facebook.clientID,
        clientSecret: socialauth.facebook.clientSecret,
        callbackURL: socialauth.facebook.callbackURL
    },
    function(accessToken, refreshToken, profile, done) {
        console.log('return frm FB ' + JSON.stringify(profile));
        if (profile.emails[0].value) {
            Students.findOne({ email: profile.emails[0].value}, function (err, student) {
                if (err) {
                    console.log(err);
                    done(null,1);
                }
                else if(student == null){
                    done(null,1);
                }
                else if( student != null) {
                        console.log(JSON.stringify(student));

                    if(student.facebookid){
                        console.log('facebookid');
                        student.facebook.authcode = accessToken;
                    }
                    else{
                        console.log('NO facebookid');
                        student.facebookid = profile.id;
                        student.facebook.friends =[];
                        student.facebook.authcode = accessToken;
                        student.facebook.authorized =1;
                        student.gender = profile.gender;
                        student.name = profile.displayName;
                    }

                    student.save(function (err) {
                        if (!err){
                            if(student.user_tasks.length >0){
                                console.log('user tasks');
                                done(null, student);
                            }
                            else{
                                console.log('NO user tasks');
                                student_functions.add_stage1(profile.id, function(err,data){
                                    if(err){
                                        console.log(err);
                                        student.user_tasks= undefined;
                                        student.stages = undefined;
                                        student.save();
                                        done(null,2);
                                    }else{
                                        Students.findOne({ email: profile.emails[0].value}, function (err, student){
                                            if(student.stages.length == 1 && student.user_tasks.length ==5){
                                                done(null,student);
                                            }else{
                                                student.user_tasks= undefined;
                                                student.stages = undefined;
                                                student.save();
                                                done(null,2);
                                            }

                                        })

                                    }
                                });

                            }
                        }else{
                            done(null,1);
                        }

                    });



                }
                else {
                    done(null,1);
                }
                ;
            });
        }else{
            console.log('not found');
            done(null,1);
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