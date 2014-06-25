/**
 * Created by akshat on 20/6/14.
 */


require('../config.js');

var FB = require('fb');

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