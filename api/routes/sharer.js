/**
 * Created by akshat on 20/6/14.
 */


require('../config.js');

var utilities = require("./utilities");
var FB = require('fb');
var TW = require('../node_modules/twit/lib/twitter.js');



exports.get_likes = function(req,res){
    FB.setAccessToken(req.session.student.facebook.authcode);
    var post_id = '10152198497022499_10152228426717499';
    console.log(post_id);
    FB.api(
        "/"+post_id+"/likes", {'summary' : 1},
        function (response) {
            if (response && !response.error) {
                console.log(response);
                res.send(response.summary);
            }else{
                console.log(response);
            }
        }
    );
}

exports.feed_sharelink = function(req,res){
    //console.log(req.session.student.facebook.authcode);
    console.log(req.body);

    console.log('answers : ' + req.body.answers.message) ;
    var answers = {};//req.body.answers;
    answers.message = req.body.answers.message;
    answers.facebook_link =req.body.answers.link;

    var taskid = req.body.taskid;
    var facebookid = req.session.student.facebookid;
    console.log('facebookid ' + facebookid);
    FB.setAccessToken(req.session.student.facebook.authcode);


    FB.api('me/feed', 'post', { message: answers.message,
            link :answers.facebook_link
        }, function (fb_res) {
        console.log('inside facebook function');
            if(!fb_res || fb_res.error) {
                console.log(!fb_res ? 'error occurred' : res.error);
            }else{

                answers.facebook_post_id = fb_res.id;
                utilities.handle_task_Request(facebookid,taskid,answers,function(task_data){
                    if(task_data !== 0){
                        console.log('data returned from utilities ' + JSON.stringify(task_data))
                        res.send(task_data);
                    }else{
                        res.send(0);
                    }
                });


            }


        });


}

exports.sharetweet = function(req,res){


    var answers = {};//req.body.answers;
    answers.message = req.body.answers.message;

    var taskid =req.body.taskid;


    var taskid = req.body.taskid;//req.body.taskid;

    var facebookid = req.session.student.facebookid;

        var bot = new TW({
            consumer_key: 'LrZ3vwBNjaE8jkJNi4od4ntdX'
            , consumer_secret:      'vx84F0lXUygTou3idnl2oHfkfcVDQyfblBAAnZFgn4TR1sZKOQ'
            , access_token:         req.session.student.twitter.authcode
            , access_token_secret:  req.session.student.twitter.secret
        });

    bot.post('statuses/update', { status: answers.message }, function(err, data, response) {

        if(!err) {
            answers.twitter_post_id = data.id_str;

            utilities.handle_task_Request(facebookid, taskid, answers, function (task_data) {

                console.log('sharer task data' + task_data);
                if (task_data !== 0) {
                    console.log('data returned from utilities ' + JSON.stringify(task_data))
                    res.send(task_data);
                } else {
                    res.send(0);
                }
            });
        }else{
            res.send(err);
        }

    })



}