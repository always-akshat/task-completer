/**
 * Created by akshat on 20/6/14.
 */


require('../config.js');


var FB = require('fb');
var TW = require('../node_modules/twit/lib/twitter.js');

exports.feed_post = function(req,res){
    console.log(req.session.student.facebook.authcode);
    FB.setAccessToken(req.session.student.facebook.authcode);
    var body = 'My first post using facebook-node-sdk';
    FB.api('me/photos', 'post', { message: "Photo post through node-facebook-sdk",
                                url :'https://s3-ap-southeast-1.amazonaws.com/letsintern.com/viber/images/new_hp/image_1.jpg'
                                       }
                        , function (res) {
        if(!res || res.error) {
            console.log(!res ? 'error occurred' : res.error);
            return;
        }
        console.log('Post Id: ' + res.id);
    });
}

exports.feed_sharelink = function(req,res){
    //console.log(req.session.student.facebook.authcode);
    console.log(req.body);
    FB.setAccessToken(req.session.student.facebook.authcode);
    var body = req.body.message;
    FB.api('me/feed', 'post', { message: req.body.message,
            link :req.body.link
        }
        , function (res) {
            if(!res || res.error) {
                console.log(!res ? 'error occurred' : res.error);
                return;
            }
            console.log('Post Id: ' + res.id);
        });
}

exports.sharetweet = function(req,res){

        var bot = new TW({
            consumer_key: 'LrZ3vwBNjaE8jkJNi4od4ntdX'
            , consumer_secret:      'vx84F0lXUygTou3idnl2oHfkfcVDQyfblBAAnZFgn4TR1sZKOQ'
            , access_token:         req.session.student.twitter.authcode
            , access_token_secret:  req.session.student.twitter.secret
        });

    bot.post('statuses/update', { status: req.body.message }, function(err, data, response) {
        console.log(data);
        res.send(data);
    })



}