/**
 * Created by Akshat Goel on 23-06-2014.
 */
var viberApp = angular.module('viberApp');

viberApp.factory('vbAuth',['$http','vbIdentity','$q','$rootScope','$window',  function($http,vbIdentity,$q,$rootScope,$window){

    return{
        authenticateUser: function()
        {

            var dfd =$q.defer();
            $http.get('/getstudentdata').success(function (data) {


                if (angular.isObject(data)) {
                    if(data=='1'){

                        $window.location = '/login';
                        dfd.resolve(false);

                    }
                    else {
                        vbIdentity.currentUser = data;
                        //console.log("Data"+vbIdentity.currentUser.stages[0].name);
                        $rootScope.identity = vbIdentity;


                        var stage = vbIdentity.currentUser.stages;
                        var level1 = _.where(stage, {'stageid': '5390521624349ecc0c108c10'})[0];
                        var level2 = _.where(stage, {'stageid': '53d36e0abb5c82917b3a3d94'})[0];
                        var level3 = _.where(stage, {'stageid': '53db74a368425b29ecc82f4d'})[0];


                        vbIdentity.currentUser.level2 = level2.name;
                        vbIdentity.currentUser.complete2 = level2.completion;

                        vbIdentity.currentUser.level1 = level1.name;
                        vbIdentity.currentUser.complete1 = level1.completion;

                        vbIdentity.currentUser.level3 = level3.name;
                        vbIdentity.currentUser.complete3 = level3.completion;

                        //vbIdentity.currentUser.complete = vbIdentity.currentUser.stages[0].completion;
//                    var level_com = 0;
//                    _.each(vbIdentity.currentUser.user_tasks,function(usertask){
//                        level_com += (usertask.completed);
//                    });
//                    vbIdentity.currentUser.complete = level_com*20;
                        dfd.resolve(true);
                    }

                }
                else{
                    $window.location = '/logout';
                    //console.log('error loggin in');
                    dfd.resolve(false);
                }

            });

            return dfd.promise;
        },
        isAuthenticated : function(){

            return angular.isObject($rootScope.identity);

        }
    }

}]);

viberApp.factory('settingSubmit',['$http', '$q', function($http, $q){
    return{
        settingSubmitbutton: function (form_data, fbid) {

            var dfd = $q.defer();
            //console.log("before put");
            //console.log($scope.identity.currentUser.facebookid);
            $http.put('/students/'+ fbid, JSON.stringify(form_data)).success(function (data) {

            console.log("success");
                if (angular.isObject(data)) {
//
                    dfd.resolve(true);
                }
                else {
                    dfd.resolve(false);
                }

            });

            return dfd.promise;
        }
    }
}]);