'use strict';

var viberApp = angular
  .module('viberApp', ['ngRoute','toaster','angular-loading-bar', 'ngAnimate']);

// angular routes configuration


viberApp.config(['$routeProvider',
    function($routeProvider) {
        console.log('rp');
        $routeProvider.
            when('/', {
                templateUrl: 'views/dashboard.html',
                controller: 'dashboardCtrl',
                resolve : {vbAuth:
                    function(vbAuth){

                        if(!vbAuth.isAuthenticated())
                        return vbAuth.authenticateUser()
                    }

                }
            }).
            when('/signup', {
                templateUrl: 'views/signup.html',
                controller: 'signupCntrl'
            }).
            when('/leaderboard',{

                templateUrl:'views/leaderboard.html',
                controller:'leaderboardCtrl'

            }).
            when('/rewards',{

                templateUrl:'views/rewards.html',
                controller:'lbRewardsCtrl'

            }).
            when('/mysettings',{

                templateUrl:'views/mysettings.html',
                controller:'lbMySettingsCntrl'

            }).
            otherwise({
                redirectTo: '/'
            });
    }]);


viberApp.controller('vbNavBarCtrl',function($scope,vbIdentity,vbSharedService,vbAuth,$rootScope){


    var currentPage = {home:1,rewards:0,lb:0, mysettings:0};
    vbSharedService.prepForBroadcast(currentPage);


//    if(!angular.isObject($scope.identity))
//    vbAuth.authenticateUser().then(function(success){
//
//        if(success){ console.log(' Login Successfull');
//
//
//        console.log($rootScope.identity);
//
//        }
//        else console.log('Login Not Successful');
//
//
//    });


});

viberApp.controller('dashboardCtrl',function($scope,vbSharedService,vbAuth,$window){

    $window.scrollTo(0,0);
    var currentPage = {home:1,rewards:0,lb:0, mysettings:0};
    vbSharedService.prepForBroadcast(currentPage);
});

viberApp.controller('leaderboardCtrl',function($scope,vbSharedService,$http,$window){

    $window.scrollTo(0,0);
    var currentPage = {home:0,rewards:0,lb:1, mysettings:0};
    vbSharedService.prepForBroadcast(currentPage);

    $http.get('/students/leaderboard/points').success(function (data) {


        if (angular.isObject(data)) {
            $scope.lbstudents = data;

            console.log('coming back from server');

        }
        else {
            //console.log(data);

        }

    });





});


viberApp.controller('lbMySettingsCntrl',function($scope,vbIdentity,vbSharedService,$window,settingSubmit){

    $window.scrollTo(0,0);
    var currentPage = {home:0,rewards:0,lb:0, mysettings:1};
    vbSharedService.prepForBroadcast(currentPage);

    $scope.user = $scope.identity.currentUser;
    //console.log("User"+$scope.user);
    $scope.transactions = $scope.user.vibes_transaction;
    //console.log("Name level"+vbIdentity.currentUser.level);

    $scope.settingData = {'name':$scope.user.name, 'mobile':$scope.user.mobile,'email':$scope.user.email,'city':$scope.user.location.id,'college':$scope.user.college.id};
    $scope.submitForm = function(isValid){
        if(isValid){
            settingSubmit.settingSubmitbutton($scope.settingData, $scope.user.facebookid).then(function(success){
                if(success){
                    console.log("Success");
                }
                else{
                    console.log("failure");
                }
            });
        }
    }

//    $scope.pagination = Pagination.getNew(10);
//    $scope.pagination.numPages = Math.ceil($scope.transactions.length/$scope.pagination.perPage);

});



viberApp.controller('lbRewardsCtrl',function(vbSharedService,$window){

    $window.scrollTo(0,0);
    var currentPage = {home:0,rewards:1,lb:0, mysettings:0};
    vbSharedService.prepForBroadcast(currentPage);


});


viberApp.controller('vbLoginBarCtrl',function($scope,vbSharedService){


    $scope.$on('handlePageChange', function() {
        console.log('event received');
        $scope.currentPage = vbSharedService.currentPage;
    });



});

viberApp.factory('vbSharedService',
function($rootScope) {
    var sharedService = {};

    sharedService.message = '';

    sharedService.prepForBroadcast = function(currentPage) {
        this.currentPage = currentPage;
        this.broadcastItem();
    };

    sharedService.broadcastItem = function() {

        $rootScope.$broadcast('handlePageChange');
    };

    return sharedService;
});

