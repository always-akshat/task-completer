'use strict';

var viberApp = angular
  .module('viberApp', ['ngRoute']);


// route of the application.

viberApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'views/main.html',
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
            otherwise({
                redirectTo: '/'
            });
    }]);