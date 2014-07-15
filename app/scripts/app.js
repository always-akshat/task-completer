'use strict';

var viberApp = angular
    .module('viberApp', ['ngRoute', 'toaster', 'angular-loading-bar', 'ngAnimate', 'ui.bootstrap', 'ngCookies',
        'ngSanitize','angularFileUpload']);

// angular routes configuration


viberApp.config(['$routeProvider',
    function ($routeProvider) {

        $routeProvider.
            when('/', {
                templateUrl: 'views/dashboard.html',
                controller: 'dashboardCtrl',
                resolve: {vbAuth: function (vbAuth) {

                    if (!vbAuth.isAuthenticated())
                        return vbAuth.authenticateUser()
                }

                }
            }).
            when('/signup', {
                templateUrl: 'views/signup.html',
                controller: 'signupCntrl'
            }).
            when('/leaderboard', {

                templateUrl: 'views/leaderboard.html',
                controller: 'leaderboardCtrl'

            }).
            when('/rewards', {

                templateUrl: 'views/rewards.html',
                controller: 'lbRewardsCtrl'

            }).
            when('/mysettings', {

                templateUrl: 'views/mysettings.html',
                controller: 'lbMySettingsCntrl'

            }).
            otherwise({
                redirectTo: '/'
            });
    }]);


viberApp.controller('vbNavBarCtrl', function ($scope, $window) {


//    var currentPage = {home:1,rewards:0,lb:0, mysettings:0};
//    vbSharedService.prepForBroadcast(currentPage);

    $scope.logout = function () {

        $window.location = "/logout";

    }


});

viberApp.controller('dashboardCtrl', function ($scope, vbSharedService, vbAuth, $window) {

    $window.scrollTo(0, 0);
    var currentPage = {home: 1, rewards: 0, lb: 0, mysettings: 0};
    vbSharedService.prepForBroadcast(currentPage);
});

viberApp.controller('leaderboardCtrl', function ($scope, vbSharedService, $http, $window) {

    $window.scrollTo(0, 0);
    var currentPage = {home: 0, rewards: 0, lb: 1, mysettings: 0};
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

    $scope.getLocation = function (val) {
        if (val.length >= 3) {
            return $http.get('/locations/' + val).then(function (res) {
                var places = [];
                angular.forEach(res.data, function (item) {
                    places.push(item);
                });
                return places;
            });
        }
    };

    $scope.onSelectLocation = function ($item) {
        console.log(JSON.stringify($item));
        var place = $item.CityName;

        $http.get('/students/leaderboard/city/' + place).success(function (data) {


            if (angular.isObject(data)) {
                $scope.lbstudents = data;

                console.log('coming back from server');

            }
            else {
                //console.log(data);

            }

        });

    };

//    $scope.getCollege = function(val){
//        if(val.length>=4) {
//            return $http.get('/colleges/' + val).then(function (res) {
//                var clges = [];
//                angular.forEach(res.data, function(item){
//                    clges.push(item);
//                });
//                return clges;
//            });
//        }
//    };
//
//    $scope.onSelectCollege = function ($item) {
//        console.log(JSON.stringify($item));
//    };


});


viberApp.controller('lbMySettingsCntrl', function ($scope, $http, vbIdentity, vbSharedService, $window, settingSubmit) {

    $window.scrollTo(0, 0);
    var currentPage = {home: 0, rewards: 0, lb: 0, mysettings: 1};
    vbSharedService.prepForBroadcast(currentPage);

    $scope.user = $scope.identity.currentUser;

    $scope.transactions = $scope.user.vibes_transaction;
    $scope.settingData = $scope.identity.currentUser;

    $scope.getLocation = function (val) {
        if (val.length >= 3) {
            return $http.get('/locations/' + val).then(function (res) {
                var places = [];
                angular.forEach(res.data, function (item) {
                    places.push(item);
                });
                return places;
            });
        }
    };

    $scope.onSelectLocation = function ($item) {
        $scope.city_name = $item.CityName;
        $scope.city_id = $item.Id;
    };

    $scope.getCollege = function (val) {
        if (val.length >= 4) {
            return $http.get('/colleges/' + val).then(function (res) {
                var clges = [];
                angular.forEach(res.data, function (item) {
                    clges.push(item);
                });
                return clges;
            });
        }
    };

    $scope.onSelectCollege = function ($item) {
        $scope.college_name = $item.CollegeName;
        $scope.college_id = $item.Id;
    };


    $scope.submitForm = function (isValid) {
        if (isValid) {

            $scope.identity.currentUser.name = $scope.user.name;
            $scope.identity.currentUser.gender = $scope.user.gender;
            $scope.identity.currentUser.mobile = $scope.user.mobile;
            $scope.identity.currentUser.email = $scope.user.email;
            $scope.identity.currentUser.college.id = $scope.college_id;
            $scope.identity.currentUser.college.name = $scope.college_name;
            $scope.identity.currentUser.location.id = $scope.city_id;
            $scope.identity.currentUser.location.name = $scope.city_name;


            //console.log(JSON.stringify($scope.identity.currentUser));
            settingSubmit.settingSubmitbutton($scope.identity.currentUser, $scope.user.facebookid).then(function (success) {
                if (success) {
                    console.log("Success");
                }
                else {
                    console.log("failure");
                }
            });
        }
    }

//    $scope.pagination = Pagination.getNew(10);
//    $scope.pagination.numPages = Math.ceil($scope.transactions.length/$scope.pagination.perPage);

});


viberApp.controller('lbRewardsCtrl', function (vbSharedService, $window) {

    $window.scrollTo(0, 0);
    var currentPage = {home: 0, rewards: 1, lb: 0, mysettings: 0};
    vbSharedService.prepForBroadcast(currentPage);


});


viberApp.controller('vbLoginBarCtrl', function ($scope, vbSharedService) {


    $scope.$on('handlePageChange', function () {
        console.log('event received');
        $scope.currentPage = vbSharedService.currentPage;
    });


});

viberApp.factory('vbSharedService',
    function ($rootScope) {
        var sharedService = {};

        sharedService.message = '';

        sharedService.prepForBroadcast = function (currentPage) {
            this.currentPage = currentPage;
            this.broadcastItem();
        };

        sharedService.broadcastItem = function () {

            $rootScope.$broadcast('handlePageChange');
        };

        return sharedService;
    });

