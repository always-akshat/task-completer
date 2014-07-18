/**
 * Created by akshat on 20/6/14.
 */


require('../config.js');
var async = require('async');
var utilities = require("./utilities");
var FB = require('fb');
var TW = require('../node_modules/twit/lib/twitter.js');


exports.share = function(req,res){


    var facebookid = req.session.student.facebookid;
    var answers = req.body.answers;
    var taskid = req.body.taskid;
    var platform = req.body.platform;
    var auth = req.session.student.facebook.authcode;
    var twit_token =   req.session.student.twitter.authcode;
    var twit_secret =  req.session.student.twitter.secret


    asyncTasks = [];

    if(platform.facebook == 1){
        asyncTasks.push(function(cb){
            feed_sharelink(auth,answers, function(facebook_post_data){
                console.log('hii facebook');
                if(facebook_post_data && facebook_post_data !=0){
                    console.log('facebook returned' + JSON.stringify(facebook_post_data));
                    answers.facebook ={};
                    answers.facebook.post_id =facebook_post_data;
                }
                cb(null,1);
            });

        });
    }


    if(platform.twitter == 1){
        asyncTasks.push(function(cb){
            sharetweet(twit_token,twit_secret,answers,function(twitter_post_data){
                console.log('hii twitter');
                if(twitter_post_data && twitter_post_data !=0){
                    answers.twitter = {};
                    answers.twitter.post_id =twitter_post_data;
                    console.log('twitter returned' + JSON.stringify(twitter_post_data));
                }
                cb(null,1);
            });

        });
    }


    async.parallel(asyncTasks, function(err, results) {
        console.log('these are the final results');

        utilities.handle_task_Request(facebookid,taskid,answers,function(task_data){
            if(task_data !== 0){
                //console.log('data returned from utilities ' + JSON.stringify(task_data))
                var tasks = req.session.student.user_tasks;

                tasks.forEach(function(instance){
                   if(instance.task_id == taskid){
                       instance.answers = task_data.answers;
                   }
                });

                res.send(task_data);
            }else{
                res.send(0);
            }
        });

    });





}

exports.survey = function(req,res){
    var facebookid = req.session.student.facebookid;
    var answers = req.body.answers;
    var taskid = req.body.taskid;

    if(answers){
        utilities.handle_task_Request(facebookid, taskid, answers, function (task_data) {
            if (task_data !== 0) {
                //console.log('data returned from utilities ' + JSON.stringify(task_data))
                var tasks = req.session.student.user_tasks;

                tasks.forEach(function (instance) {
                    if (instance.task_id == taskid) {
                        instance.answers = task_data.answers;
                    }
                });

                res.send(task_data);
            } else {
                res.send(0);
            }
        });
    }else{
        res.send('invalid answers');
    }

}


exports.stickers = function(req,res){
    var facebookid = req.session.student.facebookid;
    var answers = req.body.answers;
    var taskid = req.body.taskid;

    console.log('taskid :' + taskid + '\n asnwers : ' + JSON.stringify(answers));


    utilities.handle_task_Request(facebookid,taskid,answers,function(task_data){
        if(task_data !== 0){
            //console.log('data returned from utilities ' + JSON.stringify(task_data))
            var tasks = req.session.student.user_tasks;

            tasks.forEach(function(instance){
                if(instance.task_id == taskid){
                    instance.answers = task_data.answers;
                }
            });

            res.send(task_data);
        }else{
            res.send(0);
        }
    });

}

exports.selfie = function(req,res){

    var facebookid = req.session.student.facebookid;
    var answers = req.body.answers;
    var taskid = req.body.taskid;

    if(answers.name.length >0){
        answers.uploads = 1;
        utilities.handle_task_Request(facebookid,taskid,answers,function(task_data){
            if(task_data !== 0){
                //console.log('data returned from utilities ' + JSON.stringify(task_data))
                var tasks = req.session.student.user_tasks;

                tasks.forEach(function(instance){
                    if(instance.task_id == taskid){
                        instance.answers = task_data.answers;
                    }
                });

                res.send(task_data);
            }else{
                res.send(0);
            }
        });
    }else{
        res.send(0);
    }









}

exports.fb_invite = function(req,res){


    var facebookid = req.session.student.facebookid;
    var answers = req.body.answers;
    var taskid = '53a9526be4b041d6a3190440';//req.body.taskid;
        console.log('length' +answers.fb_ids.length);
    if(answers.fb_ids.length >1){
        answers.invite_2 = 1;
        utilities.handle_task_Request(facebookid,taskid,answers,function(task_data){
            if(task_data !== 0){
                //console.log('data returned from utilities ' + JSON.stringify(task_data))
                var tasks = req.session.student.user_tasks;

                tasks.forEach(function(instance){
                    if(instance.task_id == taskid){
                        instance.answers = task_data.answers;
                    }
                });

                res.send(task_data);
            }else{
                res.send(0);
            }
        });
    }else{
        res.send('minimum 2 friends needed');
    }

}

exports.likefollow = function(req,res){

    var facebookid = req.session.student.facebookid;
    var answers = req.body.answers;
    var taskid = req.body.taskid;
    var platform = req.body.platform;

    var size =0;
    for(key in platform ){
        size++;
    }
    if(size >0) {
        if (platform.facebook == true) {
            answers.facebook = 1;
        }
        if (platform.twitter == true) {
            answers.twitter = 1;
        }

        utilities.handle_task_Request(facebookid, taskid, answers, function (task_data) {
            if (task_data !== 0) {
                var tasks = req.session.student.user_tasks;
                tasks.forEach(function (instance) {
                    if (instance.task_id == taskid) {
                        instance.answers = task_data.answers;
                    }
                });

                res.send(task_data);
            } else {
                res.send(0);
            }
        });
    }else{
        res.send(0);
    }





}



function get_likes(req,res){
    FB.setAccessToken(req.session.student.facebook.authcode);
    var post_id = '10152198497022499_10152228426717499';
    var post_id_array= ['10152198497022499_10152228426717499','10152198497022499_10152228520742499'
                        ,'10152198497022499_10152228521847499']
    var batch = new Array();

    post_id_array.forEach(function(instance){
       var req_string = "{ method: 'GET', relative_url: '/"+instance+"/likes'}";
        batch.push(req_string);
    });
    console.log('this is my batch\n' + batch);


    /*FB.api(
        "/"+post_id+"/likes", {'summary' : 1},
        function (response) {
            if (response && !response.error) {
                console.log(response);
                res.send(response.summary);
            }else{
                console.log(response);
            }
        }
    );*/

    FB.api('/', 'POST', {
        batch: [
            { method: 'GET', relative_url: '/10152198497022499_10152228426717499/likes'},
            { method: 'GET', relative_url: '/10152198497022499_10152228520742499/likes'},
            { method: 'GET', relative_url: '/10152198497022499_10152228521847499/likes'}]
    }, function (response) {
        console.log(response);
    });

}

function feed_sharelink(auth,answers,cb){
    answers.message = answers.message;
    answers.link = answers.link;

    FB.setAccessToken(auth);
    FB.api('me/feed', 'post', { message: answers.message,
            link :answers.link
        }, function (fb_res) {
            if(!fb_res || fb_res.error) {
                cb(0);
            }else{

                cb(fb_res.id);

            }


        });


}

function sharetweet(twit_token,twit_secret,answers,cb){

    var bot = new TW({
            consumer_key: 'LrZ3vwBNjaE8jkJNi4od4ntdX'
            , consumer_secret:      'vx84F0lXUygTou3idnl2oHfkfcVDQyfblBAAnZFgn4TR1sZKOQ'
            , access_token:         twit_token
            , access_token_secret:  twit_secret
        });

    bot.post('statuses/update', { status: answers.message }, function(err, data, response) {
        if(!err) {
                cb(data.id_str);
        }else{
            cb(0);
        }
    })



}





