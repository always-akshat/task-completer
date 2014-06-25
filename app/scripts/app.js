'use strict';

var viberApp = angular
  .module('viberApp', ['ngRoute']);


viberApp.controller('vbNavBarCtrl',function($scope,$http){


});

viberApp.directive('navBar', function(){

    return{

        restrict : 'E',
        templateUrl : 'views/navbar.html',
        controller : 'vbNavBarCtrl'

    }


});

viberApp.directive('loginBar', function(){

    return{

        restrict : 'E',
        templateUrl : 'views/loginbar.html',
        controller : 'vbLoginBarCtrl'

    }


});


viberApp.directive('taskUploadPhotos', function(){

    return{

        restrict : 'E',
        templateUrl : 'views/taskuploadphotos.html',
        controller : 'vbUploadPhotosCtrl'

    }


});




viberApp.directive('taskInsertLinks', function(){

    return{

        restrict : 'E',
        templateUrl : 'views/taskinsertlinks.html',
        controller : 'vbInsertLinksCtrl'

    }


});

viberApp.directive('taskInsertMobile', function(){

    return{

        restrict : 'E',
        templateUrl : 'views/taskinsertmobile.html',
        controller : 'vbInsertMobileCtrl'

    }


});

viberApp.directive('taskSurvey', function(){

    return{

        restrict : 'E',
        templateUrl : 'views/tasksurvey.html',
        controller : 'vbSurveyCtrl'

    }


});

viberApp.directive('miniLeaderboard', function(){

    return{

        restrict : 'E',
        templateUrl : 'views/minileaderboard.html',
        controller : 'vbMiniLeaderBoardCtrl'

    }


});

viberApp.directive('socialConnect', function(){

    return{

        restrict : 'E',
        templateUrl : 'views/socialconnect.html',
        controller : 'vbSocialConnectCtrl'

    }


});

viberApp.directive('cheatBox', function(){

    return{

        restrict : 'E',
        templateUrl : 'views/cheatbox.html',
        controller : 'vbCheatBoxCtrl'

    }


});

viberApp.controller('vbCheatBoxCtrl',function($scope){


});


viberApp.controller('vbSocialConnectCtrl',function($scope){


});

viberApp.controller('vbMiniLeaderBoardCtrl',function($scope){


});

viberApp.controller('vbSurveyCtrl',function($scope){


});

viberApp.controller('vbInsertMobileCtrl',function($scope){


});

viberApp.controller('vbUploadPhotosCtrl',function($scope){


});


viberApp.controller('vbInsertLinksCtrl',function($scope){


});


viberApp.controller('vbLoginBarCtrl',function($scope,vbAuth,vbIdentity){

    $scope.identity = vbIdentity;

    vbAuth.authenticateUser().then(function(success){

        if(success) console.log('Successfully');
        else console.log('Not Successful');

    });

    $scope.currentPage = {home:1,rewards:0,lb:0, mysettings:0};
    console.log($scope.currentPage.home);

});


viberApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'views/dashboard.html',
                controller: 'MainCtrl'
            }).
            when('/signup', {
                templateUrl: 'views/signup.html',
                controller: 'signupCntrl'
            }).
            when('/leaderboard',{

                templateUrl:'views/leaderboard.html',
                controller:'lbCntrl'

            }).
            when('/mysettings',{

                templateUrl:'views/mysettings.html',
                controller:'lbCntrl'

            }).
            otherwise({
                redirectTo: '/'
            });
    }]);