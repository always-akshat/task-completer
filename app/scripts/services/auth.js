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


                if (data.length > 0) {
                    vbIdentity.currentUser = data[0];
                    dfd.resolve(true);

                }
                else {
                    dfd.resolve(false);
                }

            });

            return dfd.promise;
        }
    }

});