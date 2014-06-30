/**
 * Created by Ankit on 6/26/2014.
 */

var viberApp=angular.module('viberApp');

viberApp.factory('postlink',function($http,$q){

    return{

        postfblink: function (link, message,task) {

            var dfd = $q.defer();

            $http.post('/sharefblink', {'link': link, 'message': message}).success(function(data){
                console.log(data);
                if(angular.isObject(data)){

                    task.answers=data.answers;
                    //if(angular.isObject(data.user_tasks))
                    dfd.resolve(true);
                }
                else{
                    dfd.resolve(false);
                }


            });
            return dfd.promise;

        },

        posttwlink: function (link, message) {

            var dfd = $q.defer();
            $http.post('/sharetweet', {'link': link, 'message': message}).success(function(data){

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





