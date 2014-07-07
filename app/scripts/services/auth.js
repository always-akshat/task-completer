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
                    $rootScope.completion = 30;
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

viberApp.factory('settingSubmit', function($http, $q){
    return{
        settingSubmitbutton: function (form_data) {

            var dfd = $q.defer();
            console.log("before put");
            $http.put('/students/:facebookid', form_data).success(function (data) {

            console.log("success");
                if (angular.isObject(data)) {
//                    vbIdentity.currentUser = data;
//
//                    $rootScope.identity = vbIdentity;
//                    $rootScope.completion = 30;

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