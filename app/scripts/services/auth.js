/**
 * Created by Akshat Goel on 23-06-2014.
 */
var viberApp = angular.module('viberApp');

viberApp.factory('vbAuth', function($http,vbIdentity,$q){

    return{
        authenticateUser: function()
        {

            var dfd =$q.defer();
            $http.get('/getstudentdata').success(function (data) {


                if (angular.isObject(data)) {
                    vbIdentity.currentUser = data;
                    dfd.resolve(true);

                }
                else {
                    console.log(data);
                    dfd.resolve(false);
                }

            });

            return dfd.promise;
        }
    }

});