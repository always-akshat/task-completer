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
            when('/manage', {

                templateUrl: 'views/manage.html',
                controller: 'vbClusterCtrl',
                resolve: {cmambassadors: function (getambassadors) {


                    return getambassadors.studentambassadors();
                }
                }

            }).
            when('/manageCMs', {

                templateUrl: 'views/manageclustermanagers.html',
                controller: 'vbProjectCtrl',
                resolve: {clustermanagers: function (getambassadors) {


                    return getambassadors.studentambassadors();
                }
                }

            }).
            when('/managePMs', {

                templateUrl: 'views/manageprojectmanager.html',
                controller: 'vbZonalCtrl',
                resolve: {projectmanagers: function (getambassadors) {


                    return getambassadors.studentambassadors();
                }
                }

            }).
            when('/winners-week1', {

                templateUrl: 'views/winners-week1.html',
                controller: 'vbWinnersCtrl',
                resolve: {week1winners: function (getwinners) {


                    return getwinners.week1();
                }
                }

            }).
            otherwise({
                redirectTo: '/'
            });
    }]);


viberApp.controller('vbNavBarCtrl', ['$scope', '$window', '$http', function ($scope, $window, $http) {


    //var currentPage = {home:1,rewards:0,lb:0, mysettings:0};
    //vbSharedService.prepForBroadcast(currentPage);
    $scope.isManager = false;
    $scope.isProjectManager = false;
    $scope.isZonalManager = false;
    $scope.logout = function () {

        $window.location = "/logout";

    }
    $http.get('/getstudentdata').success(function (data) {

        if (angular.isObject(data) && angular.isNumber(data.role)) {
            $scope.user_role = data.role;
            switch($scope.user_role){
                case 1:
                    $scope.isManager = true;
                    break;
                case 2:
                    $scope.isProjectManager = true;
                    break;
                case 3:
                    $scope.isZonalManager = true;
                    break;
            }
        }
    });

}]);

viberApp.controller('vbWinnersCtrl', ['$scope', '$window', 'week1winners', function ($scope, $window,week1winners) {

    $window.scrollTo(0,0);

    $scope.winners = week1winners;
    console.log($scope.winners);
    var index = 0;
    _.each(week1winners,function(winner){
        index = index + 1;
        if(index == 1){
            winner.item = 'iPad Mini';
        }
        else if(index>=2 && index <=50){
            winner.item = 'BookMyShow voucher';
        }
        else if(index>=51 && index <=75){
            winner.item = 'Viber pendrive';
        }
        else if(index>=76){
            winner.item = 'Viber T-shirt';
        }
    });


}]);

viberApp.controller('dashboardCtrl', ['$rootScope','$scope', 'vbSharedService', 'vbAuth', '$window','$location','$modal','$http','settingSubmit','toaster', function ($rootScope, $scope, vbSharedService, vbAuth, $window,$location, $modal, $http,settingSubmit, toaster) {

    $rootScope.level1iscompleted = false;
    $rootScope.level2iscompleted = false;
    $rootScope.level3iscompleted = false;
    $scope.profilecomplete = true;

    if (!$scope.identity.currentUser.c)
        $window.location = '/auth/facebook';

    if (!angular.isObject($scope.identity.currentUser.college) || !angular.isObject($scope.identity.currentUser.college)) {
        console.log('redirecting');
        $scope.profilecomplete = false;
    }

    $rootScope.manageclicked = false;

    if ($scope.identity.currentUser.complete1 == 100)
        $rootScope.level1iscompleted = true;

    if ($scope.identity.currentUser.complete1 == 100 && $scope.identity.currentUser.complete2 == 100)
        $rootScope.level2iscompleted = true;

    if ($scope.identity.currentUser.complete1 == 100 && $scope.identity.currentUser.complete2 == 100 && $scope.identity.currentUser.complete3 == 100 && $rootScope.tasklimit31 == true)
        $rootScope.level3iscompleted = true;

    $window.scrollTo(0, 0);
    var currentPage = {home: 1, rewards: 0, lb: 0, mysettings: 0};
    vbSharedService.prepForBroadcast(currentPage);

    $rootScope.style1 = undefined;
    if ($scope.identity.currentUser.complete1 == 100) {
        $rootScope.style1 = {'font-size': '14px'};
    }

    $rootScope.style2 = undefined;
    if ($scope.identity.currentUser.complete2 == 100) {
        $rootScope.style2 = {'font-size': '14px'};
    }

    $rootScope.style3 = undefined;
    if ($scope.identity.currentUser.complete3 == 100) {
        $rootScope.style3 = {'font-size': '14px'};
    }

    $rootScope.style4 = undefined;
    if ($scope.identity.currentUser.complete4 == 100) {
        $rootScope.style4 = {'font-size': '14px'};
    }

    $scope.open = function (size) {

        var modalInstance = $modal.open({
            templateUrl: 'completeProfile.html',
            controller: completeProfileCtrl,
            size: size
        });

        modalInstance.result.then(function () {
            console.log("Item selected");
        }, function () {
            console.log('Modal dismissed at: ' + new Date());
        });
    };

    var completeProfileCtrl = function ($scope, $modalInstance) {
        $scope.getLocation = function (val) {
            if (val.length >= 3) {
                return $http.get('/locations/' + val).then(function (res) {
                    var places = [];
                    angular.forEach(res.data, function (item) {
                        places.push(item);
                    });
                    return places.slice(0, 4);
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
                    return clges.slice(0, 4);
                });
            }
        };
        $scope.onSelectCollege = function ($item) {
            $scope.college_name = $item.CollegeName;
            $scope.college_id = $item.Id;
        };
        $scope.ok = function (isValid) {
            if (isValid) {
                if ($scope.college_name != undefined) {
                    $scope.identity.currentUser.college.id = $scope.college_id;
                    $scope.identity.currentUser.college.name = $scope.college_name;
                }
                if ($scope.city_name != undefined) {
                    $scope.identity.currentUser.location.id = $scope.city_id;
                    $scope.identity.currentUser.location.name = $scope.city_name;
                }
                settingSubmit.settingSubmitbutton($scope.identity.currentUser, $scope.identity.currentUser.facebookid).then(function (success) {
                    $modalInstance.close();
                    toaster.pop('success', "", "Your profile has been saved successfully.");
                });
            }
        };
    };

    if (!$scope.profilecomplete)
        $scope.open();
    if ($scope.identity.currentUser.complete1 == 0 && $scope.profilecomplete && (!$rootScope.tour_seen || ($rootScope.tour_seen == false))) {
        $(document).ready(function () {
            $(this).ekkoLightbox({
                remote: 'images/tour.png'
            });
        });
        $rootScope.tour_seen = true;
    }

    //Face Init
}]);

viberApp.controller('leaderboardCtrl', ['$scope','$rootScope' , 'vbSharedService', '$http', '$window', function ($scope, $rootScope,vbSharedService, $http, $window) {

    $window.scrollTo(0, 0);
    var currentPage = {home: 0, rewards: 0, lb: 1, mysettings: 0};
    vbSharedService.prepForBroadcast(currentPage);

    $rootScope.manageclicked = false;
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


viberApp.controller('lbMySettingsCntrl', ['$scope', '$rootScope', '$http', 'vbIdentity', 'vbSharedService', '$window', 'settingSubmit', function ($scope,$rootScope, $http, vbIdentity, vbSharedService, $window, settingSubmit) {

    $window.scrollTo(0, 0);
    var currentPage = {home: 0, rewards: 0, lb: 0, mysettings: 1};
    vbSharedService.prepForBroadcast(currentPage);
    $rootScope.manageclicked = false;

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


viberApp.controller('lbRewardsCtrl', ['vbSharedService', '$window','$rootScope', function (vbSharedService, $window, $rootScope) {

    $window.scrollTo(0, 0);
    var currentPage = {home: 0, rewards: 1, lb: 0, mysettings: 0};
    vbSharedService.prepForBroadcast(currentPage);

    $rootScope.manageclicked = false;
}]);


viberApp.controller('vbClusterCtrl',[ '$scope','$rootScope','$http','$window','toaster','cmambassadors', function($scope,$rootScope,$http, $window, toaster, cmambassadors){

    $window.scrollTo(0, 0);
//    var currentPage = {home: 0, rewards: 0, lb: 0, mysettings: 0,managecluster: 1};
//    vbSharedService.prepForBroadcast(currentPage);

    $scope.email_ids = undefined;
    $rootScope.manageclicked = true;
    $scope.addStudent = function(){
        var email_array = $scope.email_ids.split(',');
        var userrole = 0;
        if($scope.identity.currentUser.role && ($scope.identity.currentUser.role!=0))
            userrole = $scope.identity.currentUser.role;

        var reqObject = {
            interns: email_array,
            email: $scope.identity.currentUser.email,
            role: userrole
        };
        $http.put('/students/manage/interns',reqObject).success(function(data) {
            if(data != 0) {
                $scope.getinterns();
                toaster.pop('success', "", data+" out of"+email_array.length+" Ambassadors were added successfully.");
            }
            else{
                toaster.pop('failure', "", "Something went wrong. Please try again with valid mail id.");
            }
        })
            .error(function(err){
                    toaster.pop('failure', "", "Something went wrong. Please try again.");
            });
    };
    $scope.getinterns = function(){
        $http.get('/manage/view/s').success(function(data) {
            if (data != 'x')
                $scope.interndata = data;
            else
                $scope.interndata = [];
        });
    };
    $scope.getinterns();

    $scope.deleteintern = function(index){
        var reqBody = {email: $scope.interndata[index].email};
        $http.put('/students/manage/interns/delete',reqBody).success(function(data){
            if(data==1) {
                $scope.interndata = _.without($scope.interndata, $scope.interndata[index]);
                toaster.pop('success', "", "Ambassador was removed successfully.");
            }
            else{
                toaster.pop('failure', "", "Something went wrong. Please try again.");
            }
        })
            .error(function(error){
                toaster.pop('failure', "", "Something went wrong. Please try again.");
            });
    };

}]);

viberApp.controller('vbProjectCtrl',[ '$scope','$rootScope','$http','$window','toaster','clustermanagers', function($scope,$rootScope,$http, $window, toaster, clustermanagers){

    $window.scrollTo(0, 0);
    $scope.email_cluster = undefined;
    $rootScope.manageclicked = true;
    $scope.addClusterManager = function(){
        var email_array = $scope.email_cluster.split(',');
        var userrole = 0;
        if($scope.identity.currentUser.role && ($scope.identity.currentUser.role!=0) && ($scope.identity.currentUser.role==2))
            userrole = $scope.identity.currentUser.role;

        var reqObject = {
            interns: email_array,
            email: $scope.identity.currentUser.email,
            name: $scope.identity.currentUser.name,
            role: userrole
        };
        $http.put('/students/manage/interns',reqObject).success(function(data) {
            if(data != 0) {
                $scope.getClusterManagers();
                toaster.pop('success', "", data+" out of"+email_array.length+" Cluster Managers were added successfully.");
            }
            else{
                toaster.pop('failure', "", "Something went wrong. Please try again with valid mail id.");
            }
        })
            .error(function(err){
                toaster.pop('failure', "", "Something went wrong. Please try again.");
            });
    };

    $scope.getClusterManagers = function(){
        $http.get('/manage/view/s').success(function(data) {
            if (data != 'x')
                $scope.ProjectManagerdata = data;
            else
                $scope.ProjectManagerdata = [];
        });
    };
    $scope.getClusterManagers();
    $scope.deleteClusterManager = function(index){
        var reqBody = {email: $scope.ProjectManagerdata[index].email};
        $http.put('/students/manage/interns/delete',reqBody).success(function(data){
            if(data==1) {
                $scope.ProjectManagerdata = _.without($scope.ProjectManagerdata, $scope.ProjectManagerdata[index]);
                toaster.pop('success', "", "Cluster Manager was removed successfully.");
            }
            else{
                toaster.pop('failure', "", "Something went wrong. Please try again.");
            }
        })
            .error(function(error){
                toaster.pop('failure', "", "Something went wrong. Please try again.");
            });
    };

}]);

viberApp.controller('vbZonalCtrl',[ '$scope','$rootScope','$http','$window','toaster','projectmanagers', function($scope,$rootScope,$http, $window, toaster, projectmanagers){

    $window.scrollTo(0, 0);
    $scope.email_project = undefined;
    $rootScope.manageclicked = true;
    $scope.addProjectManager = function(){
        var email_array = $scope.email_project.split(',');
        var userrole = 0;
        if($scope.identity.currentUser.role && ($scope.identity.currentUser.role!=0) && ($scope.identity.currentUser.role==3))
            userrole = $scope.identity.currentUser.role;

        var reqObject = {
            interns: email_array,
            email: $scope.identity.currentUser.email,
            name: $scope.identity.currentUser.name,
            role: userrole
        };

        $http.put('/students/manage/interns',reqObject).success(function(data) {
            if(data != 0) {
                $scope.getProjectManagers();
                toaster.pop('success', "", data+" out of"+email_array.length+" Project Managers were added successfully.");
            }
            else{
                toaster.pop('failure', "", "Something went wrong. Please try again with valid mail id.");
            }
        })
            .error(function(err){
                toaster.pop('failure', "", "Something went wrong. Please try again.");
            });
    };

    $scope.getProjectManagers = function(){
        $http.get('/manage/view/s').success(function(data) {
            if (data != 'x') {
                $scope.ZonalManagerdata = data;
            }
            else {
                $scope.ZonalManagerdata = [];
            }
        });
    };
    $scope.getProjectManagers();

    $scope.deleteProjectManager = function(index){
        var reqBody = {email: $scope.ZonalManagerdata[index].email};
        $http.put('/students/manage/interns/delete',reqBody).success(function(data){
            if(data==1) {
                $scope.ZonalManagerdata = _.without($scope.ZonalManagerdata, $scope.ZonalManagerdata[index]);
                toaster.pop('success', "", "Project Manager was removed successfully.");
            }
            else{
                toaster.pop('failure', "", "Something went wrong. Please try again.");
            }
        })
            .error(function(error){
                toaster.pop('failure', "", "Something went wrong. Please try again.");
            });
    };

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

viberApp.controller('vbLoginBarCtrl', ['$scope', 'vbIdentity','vbSharedService', function ($scope,vbIdentity, vbSharedService) {

   //$scope.loginlevelcomplete = false;

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
//        $scope.loginlevelcomplete = true;
//    }

}]);

