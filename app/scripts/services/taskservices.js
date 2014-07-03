/**
 * Created by Ankit on 6/26/2014.
 */

var viberApp=angular.module('viberApp');

viberApp.factory('postlink',function($http,$q){

    return{

        postsharelink: function (link,message,task,fbcheck,twcheck) {
            var reqObj = {'taskid' :task['task_id'],'answers':{message:message,link:link},'platform':{'facebook':fbcheck, 'twitter':twcheck}};
            var dfd = $q.defer();

            $http.post('/socialshare',reqObj).success(function(data){

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





