/**
 * Created by akshat on 17/6/14.
 */

var config = require('../config.js');
var passport = config.passport;


exports.facebookauth = function(){
    passport.authenticate('facebook');
}

exports.facebookcallback = function(passport){
    passport.authenticate('facebook', {
        successRedirect : '/profile',
        failureRedirect : '/'
    });
}


exports.logout = function(req, res) {
    req.logout();
    res.redirect('/');
};

exports.isloggedin = function (req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');

}

