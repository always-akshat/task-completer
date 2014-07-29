'use strict';

var viberApp = angular
    .module('viberApp', ['ngRoute', 'toaster', 'angular-loading-bar', 'ngAnimate', 'ui.bootstrap','angularFileUpload']);

// angular routes configuration


viberApp.config(['$routeProvider', function ($routeProvider) {

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


viberApp.controller('vbNavBarCtrl', ['$scope', '$window', function ($scope, $window) {


//    var currentPage = {home:1,rewards:0,lb:0, mysettings:0};
//    vbSharedService.prepForBroadcast(currentPage);

    $scope.logout = function () {

        $window.location = "/logout";

    }


}]);

viberApp.controller('dashboardCtrl', ['$rootScope','$scope', 'vbSharedService', 'vbAuth', '$window','$location', function ($rootScope, $scope, vbSharedService, vbAuth, $window,$location) {


    $scope.profilecomplete=true;
    if(!angular.isObject($scope.identity.currentUser.college) || !angular.isObject($scope.identity.currentUser.college)) {
        console.log('redirecting');
        $scope.profilecomplete = false;
    }
    console.log("dashboard "+ JSON.stringify($scope.identity));
    var stage = $scope.identity.currentUser.stages;
    var level1= _.where(stage,{'stageid':'5390521624349ecc0c108c10'})[0];
    var level2= _.where(stage,{'stageid':'53d36e0abb5c82917b3a3d94'})[0];



    $window.scrollTo(0, 0);
    var currentPage = {home: 1, rewards: 0, lb: 0, mysettings: 0};
    vbSharedService.prepForBroadcast(currentPage);

    $rootScope.style1 = undefined;
    if($scope.identity.currentUser.complete1==100){
        $rootScope.style1 = {'font-size':'14px'};
    }

    $rootScope.style2 = undefined;
    if($scope.identity.currentUser.complete2==100){
        $rootScope.style2 = {'font-size':'14px'};
    }


}]);

viberApp.controller('leaderboardCtrl', ['$scope', 'vbSharedService', '$http', '$window', function ($scope, vbSharedService, $http, $window) {

    $window.scrollTo(0, 0);
    var currentPage = {home: 0, rewards: 0, lb: 1, mysettings: 0};
    vbSharedService.prepForBroadcast(currentPage);

    $http.get('/students/leaderboard/points').success(function (data) {


        if (angular.isObject(data)) {

            console.log(data);
            $scope.lbstudents = data;
            for(var i=0;i<$scope.lbstudents.length;i++){
                if(!$scope.lbstudents[i].facebookid)
                    $scope.lbstudents[i].facebookid=100006788625561;
            }
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
                for(var i=0;i<$scope.lbstudents.length;i++){
                    if(!$scope.lbstudents[i].facebookid)
                        $scope.lbstudents[i].facebookid=100006788625561;
                }
                console.log('coming back from server');

            }
            else {
                //console.log(data);

            }

        });

    };

}]);


viberApp.controller('lbMySettingsCntrl', ['$scope', '$http', 'vbIdentity', 'vbSharedService', '$window', 'settingSubmit', function ($scope, $http, vbIdentity, vbSharedService, $window, settingSubmit) {

    $window.scrollTo(0, 0);
    var currentPage = {home: 0, rewards: 0, lb: 0, mysettings: 1};
    vbSharedService.prepForBroadcast(currentPage);

    $scope.tw_auth = false;
    $scope.user = $scope.identity.currentUser;
    console.log($scope.user.facebookid);

    //Referral URL
    $scope.returnUrl = function(){
        $http.get('/students/auth/'+$scope.user.facebookid).success(function(data){
            if(!angular.isObject(data)) {
                var x = JSON.stringify(data).split('"');
            }
            vbIdentity.currentUser.referralId += 'app.thegoodvibes.in/s/'+x[1];
        });
    };
    if(!(vbIdentity.currentUser.referralId)) {
        vbIdentity.currentUser.referralId = '';
    }
    if(vbIdentity.currentUser.referralId == '') {
        $scope.returnUrl();
    }

    $scope.transactions = $scope.user.vibes_transaction;
    $scope.settingData = $scope.identity.currentUser;

    $scope.getLocation = function (val) {
        if (val.length >= 3) {
            return $http.get('/locations/' + val).then(function (res) {
                var places = [];
                angular.forEach(res.data, function (item) {
                    places.push(item);
                });
                return places.slice(0,4);
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
                return clges.slice(0,4);
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
            if($scope.college_name!=undefined) {
                $scope.identity.currentUser.college.id = $scope.college_id;
                $scope.identity.currentUser.college.name = $scope.college_name;
            }
            if($scope.city_name!=undefined)
            {
                $scope.identity.currentUser.location.id = $scope.city_id;
                $scope.identity.currentUser.location.name = $scope.city_name;
            }

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

}]);


viberApp.controller('lbRewardsCtrl', ['vbSharedService', '$window', function (vbSharedService, $window) {

    $window.scrollTo(0, 0);
    var currentPage = {home: 0, rewards: 1, lb: 0, mysettings: 0};
    vbSharedService.prepForBroadcast(currentPage);


}]);


viberApp.controller('vbLoginBarCtrl', ['$scope', 'vbSharedService', function ($scope, vbSharedService) {


    $scope.$on('handlePageChange', function () {
        console.log('event received');
        $scope.currentPage = vbSharedService.currentPage;
    });

//    console.log("Login Bar"+ JSON.stringify($scope.identity));
//    var stage = $scope.identity.currentUser.stages;
//    var level1= _.where(stage,{'stageid':'5390521624349ecc0c108c10'});
//    var level2= _.where(stage,{'stageid':'53d36e0abb5c82917b3a3d94'});
//
//
//    if(level1.completion==100) {
//        $scope.currentlevel = level2.name;
//        $scope.currentcompleted = level2.completion;
//    }
//    else{
//        $scope.currentlevel = level1.name;
//        $scope.currentcompleted = level1.completion;
//    }

}]);

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

