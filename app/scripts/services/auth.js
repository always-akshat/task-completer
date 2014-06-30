/**
 * Created by Akshat Goel on 23-06-2014.
 */
var viberApp = angular.module('viberApp');

viberApp.factory('vbAuth', function($http,vbIdentity,$q,$rootScope){

    return{
        authenticateUser: function()
        {

            var dfd =$q.defer();
            $http.get('/getstudentdata').success(function (data) {


                if (angular.isObject(data)) {
                    vbIdentity.currentUser = data;

                    $rootScope.identity = vbIdentity;
                    $rootScope.completion = 10;
                    dfd.resolve(true);


                }
                else {
                    console.log(data);
                    dfd.resolve(false);
                }

            });

            return dfd.promise;
        },
        isAuthenticated : function(){

            return angular.isObject($rootScope.identity);

        }
    }

});