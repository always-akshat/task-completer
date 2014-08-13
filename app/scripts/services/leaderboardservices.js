/**
 * Created by vaibhav on 8/7/14.
 */
var viberApp=angular.module('viberApp');

viberApp.factory('getwinners',['$http','$q',function($http,$q){

    return{

        week1: function () {

            var dfd = $q.defer();
            $http.get('/data/leaderboard/1').success(function(data){

                if(angular.isObject(data)){
                     dfd.resolve(data);
                }
                else{
                    dfd.resolve(false);
                }
            });
            return dfd.promise;
        }
    }
}]);

viberApp.factory('getambassadors',['$http','$q',function($http,$q){

    return{

        studentambassadors: function () {

            var dfd = $q.defer();
            $http.get('/manage/view/s').success(function(data){

                if(angular.isObject(data)){
                    dfd.resolve(data);
                }
                else{
                    dfd.resolve(false);
                }
            });
            return dfd.promise;
        }
    }
}]);