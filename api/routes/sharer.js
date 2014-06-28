/**
 * Created by akshat on 20/6/14.
 */


require('../config.js');
var students = require("./students");

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

    var answers = {};//req.body.answers;
    answers.facebook_post_message = req.body.message;
    answers.link ='';
    var taskid = '53a9515ae4b041d6a3190435';//req.body.taskid;
    FB.setAccessToken(req.session.student.facebook.authcode);

    FB.api('me/feed', 'post', { message: answers.facebook_post_message,
            link :answers.link
        }, function (res,cb) {
            if(!res || res.error) {
                console.log(!res ? 'error occurred' : res.error);
                
            }else {
                answers.facebook_post_id = res.id;
                return students.updateAnswers(req.session.student.facebookid,taskid,answers,function(added_answers){
                    if(added_answers !=0){
                        var value_to_return = {};
                        value_to_return.answers = added_answers;
                        students.completeTask(req.session.student.facebookid,taskid,function(completion_val){
                            if(completion_val !== 0){
                                value_to_return.completiondata = completion_val;
                                console.log( value_to_return);


                            }else{
                                console.log( value_to_return);
                            }
                        });

                    }else{
                        console.log(0)

                    }
                });

            }


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