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
var mail_functions = require('./routes/mail.js');
var stages_functions = require('./routes/stages.js');
var async = require('async');



module.exports = passport.use(new FacebookStrategy({
        clientID: socialauth.facebook.clientID,
        clientSecret: socialauth.facebook.clientSecret,
        callbackURL: socialauth.facebook.callbackURL,
        passReqToCallback: true
    },
    function(req,accessToken, refreshToken, profile, done) {
        if (req.session.referredby) {
            var referrer = req.session.referredby;
        } else {
            var referrer = 0;
        }
        console.log('reached fb auth callback');
        //console.log('return frm FB ' + JSON.stringify(profile));
            relogin =1;

            Students.findOne({ facebookid: profile.id}, 'facebookid email', function (err, student) {

               if(!err) {
                   if (student !== null) {
                       fb_email = student.email;
                       console.log(student);
                       console.log('student found from facebookid');
                       if (typeof fb_email != 'undefined') {
                           console.log('email to check' + fb_email);
                           enter_old_user(referrer, profile, accessToken, function (err, data) {
                               //              console.log('data recieved in main function');
                               if (err) {
                                   console.log(err);
                                   done(null, 2);
                               }
                               console.log('this is the final data recieved at parent function' + data);

                               if (data !== 0) {
                                   Students.findOne({ email: data.toString()}, function (err, student) {
                                       console.log('final student to send : ' + student.email);
                                       done(null, student);
                                   })
                               }else{
                                   done(null,2);
                               }
                           });
                       }
                   }
                   else {
                       console.log('student was null');
                       relogin = 0;
                       if (profile.emails) {
                           fb_email = profile.emails[0].value;
                       } else if (req.session.register_mail != 'undefined') {
                           console.log('email found in session' + req.session.register_mail);
                           fb_email = req.session.register_mail;
                           req.session.register_mail = 'undefined';
                       } else {
                           console.log('not found');
                           done(null, 3);
                       }

                       if (typeof fb_email != 'undefined') {
                           console.log('email to check' + fb_email);
                           enter_old_user(referrer, profile, accessToken, function (err, data) {
                               //              console.log('data recieved in main function');
                               if (err) {
                                   console.log(err);
                               }
                               console.log('this is the final data recieved at parent function' + data);

                               if (data !== 0) {
                                   Students.findOne({ email: fb_email}, function (err, student) {
                                       done(null, student);
                                   })
                               }else {
                                   done(null,2);
                               }
                           });
                       }
                       else {
                           console.log('not found');
                           done(null, 3);
                       }
                   }
               }else{
                  console.log(err);
               }
            });

    }
));

passport.use(new TwitterStrategy({
        consumerKey: socialauth.twitter.consumerKey,
        consumerSecret: socialauth.twitter.consumerSecret,
        callbackURL: socialauth.twitter.callbackURL
    },
    function(req,accessToken, tokenSecret, profile, done) {
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

function enter_old_user(referrer,profile,authcode,cb){

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

                student.facebook.authorized = 1;
                student.gender = profile.gender;
                student.name = profile.displayName;
                student.points = 0;
                student.auth = profile.id;
                student.referred_by = referrer;
                student.refercount = 0;
                student.createdon = Date.now();

                mail_functions.singup(profile.displayName, fb_email);

                Students.findOne({ auth: referrer}, function (err, refstudent) {
                    if(refstudent){
                        if(refstudent.refercount) {
                            refstudent.refercount += 1;
                        }else{
                            refstudent.refercount = 1;
                        }
                        refstudent.points +=20;

                        refstudent.save();
                        var transaction = new studentSchema.vibes_transaction;
                        transaction.vibes = 20;
                        transaction.type = 'referral';
                        transaction.sign = 1;
                        transaction.message = 'Referred ' + ' ' +profile.displayName;
                        student_functions.VibesTransaction(refstudent.facebookid, transaction, function (v_transaction) {
                            if(v_transaction !== 0) {
                                mail_functions.referral(profile.displayName, refstudent.name, refstudent.points + 20, refstudent.email);
                            }
                        });
                    }else{
                        console.log('referrral student not found');
                    }

                });

            }
            else if (student != null) {

                console.log('student not null');

                if (!student.facebookid) {
                    console.log('NO facebookid');
                    student.facebookid = profile.id;
                    student.facebook.friends = [];
                    student.facebook.authcode = authcode;
                    student.facebook.authorized = 1;
                    student.gender = profile.gender;
                    student.name = profile.displayName;
                }

                if(!student.auth){
                   student.auth = profile.id;
                }
            }

            student.facebook.authcode = authcode;
            student.updatedon = Date.now();
                //console.log(student);
                student.save(function(err) {
                    console.log('trying to save student' + student.email);
                    if (!err) {
                            var all_stages = {};
                            stages_functions.list(function(stages_data){
                                stages_data.forEach(function(db_stage){
                                    all_stages[db_stage._id] = db_stage.name;
                                });
                                //console.log('all stages');
                                //console.log(all_stages);
                                //console.log('reached after stages');

                                if(student.stages.length >0){
                                    console.log('stages found');
                                    student.stages.forEach(function(mystages_data){
                                        console.log('stageid :' + mystages_data.stageid);
                                        all_stages[mystages_data.stageid] = null;
                                    });
                                    //console.log('final stages to be added');
                                    //console.log(all_stages);
                                    tasks_in_registration(student,all_stages,function(err,data){
                                        cb(null,data);
                                    });
                                }else{
                                    console.log('no stages');
                                    tasks_in_registration(student,all_stages,function(err,data){
                                        console.log('data recieved by add old_user' + data);
                                    cb(null,data);
                                    });
                                }
                            });
                    } else {
                        console.log('error' + err);
                        cb(err,2);
                    }
                });

        }

    });



}


function tasks_in_registration(student,stages,cb){
  console.log('entering new tasks for' + student.name);
    //console.log(stages);
    var initial = 0;
    var final =0;
    if(stages){
        initial = Object.keys(stages).length;
        for(var key in stages) {
            add_stage_to_student(student,key,stages[key],function(err,data){
               console.log('data recieved from last function to second last function : ' + data);
                    final++;
                console.log('final :' + final);
                if(initial == final){
                    console.log('final level');
                    cb(null,data);
                }

            });

        }
 }
}



function add_stage_to_student(student,stageid,stagename,cb) {
    console.log('add stage to student for ' + student.name);
    if (stagename !== null){
        console.log('adding stage :' + stagename);
            student_functions.add_stage(student.facebookid, stageid, stagename, function (err, data) {
            console.log('data recieved from add tasks is :' + data);
            if (err){
                console.log('error occured in adding stages' + err);
                student.user_tasks = undefined;
                student.stages = undefined;
                student.save(function (err) {
                    if (!err) {
                        cb(null, 0)
                    }
                });
            }
            else {
                console.log('tasks added checking student data integrity');
                Students.findOne({ email: student.email}, function (err, final_student) {
                    if (final_student.stages.length && final_student.user_tasks.length) {
                        console.log('everything fine');
                        cb(null, student.email);
                    }else{
                        console.log('incorrect number of tasks or stages found. err');
                        final_student.user_tasks = undefined;
                        final_student.stages = undefined;
                        final_student.save(function (err) {
                            if (err) {
                                console.log('error occured in deleting student' + err);
                            }
                            cb(null, 0);
                        });
                    }
                })
            }
        });
        }else{
        console.log('stagename was null');
        cb(null,student.email)
    }
};
