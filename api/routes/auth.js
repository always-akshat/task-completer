/**
 * Created by akshat on 17/6/14.
 */

var flash = require('connect-flash');
var config = require('../config.js');
var passport  = require('passport');
var config_passport = require("../socialpassport");



module.exports.facebookauth = function(){
    passport.authenticate('facebook'),function(req, res){
            console.log('trying to contact to facebook');
        }
}

module.exports.facebookcallback = function(){
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

