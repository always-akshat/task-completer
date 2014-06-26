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
                controller:'lbCntrl'

            }).when('/mysettings',{

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


viberApp.controller('vbNavBarCtrl',function($scope,$http){


});

viberApp.controller('dashboardCtrl',function($scope,vbIdentity,vbSharedService){

    var currentPage = {home:1,rewards:0,lb:0, mysettings:0};
    vbSharedService.prepForBroadcast(currentPage);


});

viberApp.controller('lbMySettingsCntrl',function($scope,vbIdentity,vbSharedService){

    var currentPage = {home:0,rewards:0,lb:0, mysettings:1};
    vbSharedService.prepForBroadcast(currentPage);


});

viberApp.controller('vbLoginBarCtrl',function($scope,vbAuth,vbIdentity,vbSharedService){

    $scope.identity = vbIdentity;


    vbAuth.authenticateUser().then(function(success){

        if(success) console.log('Successfully');
        else console.log('Not Successful');
        $scope.currentPage = {home:1,rewards:0,lb:0, mysettings:0} ;

    });

    //handling change of page event to add the active class

    $scope.$on('handlePageChange', function() {
        console.log('event received');
        $scope.currentPage = vbSharedService.currentPage;
    });

    console.log($scope.identity);

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

