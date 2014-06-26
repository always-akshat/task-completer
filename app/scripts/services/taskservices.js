/**
 * Created by Ankit on 6/26/2014.
 */

var viberApp=angular.module('viberApp');

viberApp.factory('postfblink',function($http,$q){

    return{

        postlink: function (link, message) {

            var dfd = $q.defer();
            $http.post('/sharefblink', {'link': link, 'message': message}).success(function(data){

                if(data.length>0){
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





