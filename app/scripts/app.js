'use strict';

var viberApp = angular
  .module('viberApp', ['ngRoute','toaster']);

// angular routes configuration


viberApp.config(['$routeProvider',
    function($routeProvider) {
        console.log('rp');
        $routeProvider.
            when('/', {
                templateUrl: 'views/dashboard.html',
                controller: 'dashboardCtrl'
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

            })
            .when('/mysettings',{

                templateUrl:'my-settings.html'

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



    vbAuth.authenticateUser().then(function(success){

        if(success){ console.log(' Login Successfull');

        $rootScope.identity = vbIdentity;

        }
        else console.log('Login Not Successful');


    });


});

viberApp.controller('dashboardCtrl',function($scope,vbSharedService){


    var currentPage = {home:1,rewards:0,lb:0, mysettings:0};
    vbSharedService.prepForBroadcast(currentPage);


});

viberApp.controller('leaderboardCtrl',function($scope,vbSharedService,$http){

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


viberApp.controller('lbMySettingsCntrl',function($scope,vbIdentity,vbSharedService){

    var currentPage = {home:0,rewards:0,lb:0, mysettings:1};
    vbSharedService.prepForBroadcast(currentPage);


});



viberApp.controller('lbRewardsCtrl',function(vbSharedService){

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

