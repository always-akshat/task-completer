/**
 * Created by akshat on 17/6/14.
 */

// load all the things we need

var passport = require('passport')
var FacebookStrategy = require('passport-facebook').Strategy;
var studentSchema = require('./models/studentmodel');
var socialauth = require('./socialauth.js');

Student = studentSchema.student;

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(obj, done) {
    done(null, obj);
});

module.exports = passport.use(new FacebookStrategy({
        clientID: socialauth.facebook.clientID,
        clientSecret: socialauth.facebook.clientSecret,
        callbackURL: socialauth.facebook.callbackURL
    },
    function(accessToken, refreshToken, profile, done) {
        Students.findOne({ facebookid: profile.id }, function(err, user) {
            if(err) { console.log(err); }
            if (!err && user != null) {
                done(null, user);
            }
            else {
                console.log(profile);
                var student = new  Student;
                student.name =profile.displayName;
                student.email = profile.emails;
                student.facebookid = profile.id;
                student.createdon = Date.now();
                student.updatedon = Date.now();
                student.gender = profile.gender;
                student.facebook.authorized = 1;
                //student.facebook.authcode = 'ashdwhh23232hshdghsgbdjabd334343434hjbdhsbjdbjwbd';
                student.points = 0;
                student.type.id = 1;
                student.type.name = 'Student';
                console.log('-----------------------------------------');
                console.log(student);
                student.save(function(err) {
                    if(err) {
                        console.log(err);
                    } else {
                        console.log("saving user ...");
                        done(null, student);
                    };
                });
            };
        });
    }
));