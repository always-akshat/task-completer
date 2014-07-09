/**
 * Created by Ankit on 6/26/2014.
 */

var viberApp=angular.module('viberApp');

viberApp.factory('postlink',function($http,$q){

    return{

        postsharelink: function (identity,link,message,task,fbcheck,twcheck) {
            var reqObj = {'taskid' :task['task_id'],'answers':{message:message,link:link},'platform':{'facebook':fbcheck, 'twitter':twcheck}};
            var dfd = $q.defer();

            $http.post('/socialshare',reqObj).success(function(data){

                if(angular.isObject(data)){
                    task.answers = data.answers;
                    task.completiondata = data.completiondata;
                    identity.vibes_transaction.push(task.completiondata.transaction);
                    console.log(JSON.stringify(identity.vibes_transaction));
                    //$scope.identity.currentUser.vibes_transaction += task.completiondata.transaction;
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

viberApp.factory('postsurvey',function($http,$q){

    return{

        postSurvey: function (message) {

            var dfd = $q.defer();
            $http.post('/survey', JSON.stringify(message)).success(function(data){

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



