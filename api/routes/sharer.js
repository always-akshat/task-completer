/**
 * Created by akshat on 20/6/14.
 */


require('../config.js');

var FB = require('fb');

exports.feed_post = function(req,res){
    console.log(req.session.student.facebook.authcode);
    FB.setAccessToken(req.session.student.facebook.authcode);
    var body = 'My first post using facebook-node-sdk';
    FB.api('me/feed', 'post', { message: body}, function (res) {
        if(!res || res.error) {
            console.log(!res ? 'error occurred' : res.error);
            return;
        }
        console.log('Post Id: ' + res.id);
    });
}