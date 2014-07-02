/**
 * Created by Ankit on 6/26/2014.
 */

var viberApp=angular.module('viberApp');

viberApp.factory('postlink',function($http,$q){

    return{

        postfblink: function (link, message,task) {

            var reqObj = {'taskid' :task['task_id'],'answers':{message:message,link:link}};
            var dfd = $q.defer();

            $http.post('/sharefblink',reqObj).success(function(data){
                console.log(data);
                if(angular.isObject(data)){

                    var answers  = data.answers;

//                    var fb_posts = _.pluck(answers,'facebook_posts_messages');
//                    var tw_posts= _.pluck(answers,'twitter_posts_messages');
//
//                    _.each(answers,function(answer){
//
//
//
//
//                    });

                    task.answers=data.answers;
                    dfd.resolve(true);
                }
                else{
                    dfd.resolve(false);
                }


            });
            return dfd.promise;

        },

        posttwlink: function (link, message,task) {
            var reqObj = {'taskid' :task['task_id'],'answers':{message:message,link:link}};
            var dfd = $q.defer();
            $http.post('/sharetweet',reqObj).success(function(data){

                if(angular.isObject(data)){
                    dfd.resolve(true);
                }
                else{
                    dfd.resolve(false);
                }


            });
            return dfd.promise;

        }


    }


});



viberApp.factory('getminileaderboard',function($http,$q){

    return{

        postlink: function (link, message) {

            var dfd = $q.defer();
            $http.get('/students/leaderboard/points').success(function(data){

                if(angular.isObject(data)){
                    dfd.resolve(true);
                }
                else{
                    dfd.resolve(false);
                }


            });
            return dfd.promise;

        }


    }


});





