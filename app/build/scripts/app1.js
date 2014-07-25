'use strict';
var viberApp = angular.module('viberApp', [
    'ngRoute',
    'toaster',
    'angular-loading-bar',
    'ngAnimate',
    'ui.bootstrap',
    'angularFileUpload'
  ]);
// angular routes configuration
viberApp.config([
  '$routeProvider',
  function ($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'views/dashboard.html',
      controller: 'dashboardCtrl',
      resolve: {
        vbAuth: function (vbAuth) {
          if (!vbAuth.isAuthenticated())
            return vbAuth.authenticateUser();
        }
      }
    }).when('/signup', {
      templateUrl: 'views/signup.html',
      controller: 'signupCntrl'
    }).when('/leaderboard', {
      templateUrl: 'views/leaderboard.html',
      controller: 'leaderboardCtrl'
    }).when('/rewards', {
      templateUrl: 'views/rewards.html',
      controller: 'lbRewardsCtrl'
    }).when('/mysettings', {
      templateUrl: 'views/mysettings.html',
      controller: 'lbMySettingsCntrl'
    }).otherwise({ redirectTo: '/' });
  }
]);
viberApp.controller('vbNavBarCtrl', [
  '$scope',
  '$window',
  function ($scope, $window) {
    //    var currentPage = {home:1,rewards:0,lb:0, mysettings:0};
    //    vbSharedService.prepForBroadcast(currentPage);
    $scope.logout = function () {
      $window.location = '/logout';
    };
  }
]);
viberApp.controller('dashboardCtrl', [
  '$scope',
  'vbSharedService',
  'vbAuth',
  '$window',
  function ($scope, vbSharedService, vbAuth, $window) {
    $window.scrollTo(0, 0);
    var currentPage = {
        home: 1,
        rewards: 0,
        lb: 0,
        mysettings: 0
      };
    vbSharedService.prepForBroadcast(currentPage);
    $scope.myStyle = undefined;
    if ($scope.identity.currentUser.complete == 100) {
      $scope.myStyle = { 'font-size': '14px' };
    }
  }
]);
viberApp.controller('leaderboardCtrl', [
  '$scope',
  'vbSharedService',
  '$http',
  '$window',
  function ($scope, vbSharedService, $http, $window) {
    $window.scrollTo(0, 0);
    var currentPage = {
        home: 0,
        rewards: 0,
        lb: 1,
        mysettings: 0
      };
    vbSharedService.prepForBroadcast(currentPage);
    $http.get('/students/leaderboard/points').success(function (data) {
      if (angular.isObject(data)) {
        void 0;
        $scope.lbstudents = data;
        for (var i = 0; i < $scope.lbstudents.length; i++) {
          if (!$scope.lbstudents[i].facebookid)
            $scope.lbstudents[i].facebookid = 100006788625561;
        }
        void 0;
      } else {
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
      void 0;
      var place = $item.CityName;
      $http.get('/students/leaderboard/city/' + place).success(function (data) {
        if (angular.isObject(data)) {
          $scope.lbstudents = data;
          for (var i = 0; i < $scope.lbstudents.length; i++) {
            if (!$scope.lbstudents[i].facebookid)
              $scope.lbstudents[i].facebookid = 100006788625561;
          }
          void 0;
        } else {
        }
      });
    };  //    $scope.getCollege = function(val){
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
  }
]);
viberApp.controller('lbMySettingsCntrl', [
  '$scope',
  '$http',
  'vbIdentity',
  'vbSharedService',
  '$window',
  'settingSubmit',
  function ($scope, $http, vbIdentity, vbSharedService, $window, settingSubmit) {
    $window.scrollTo(0, 0);
    var currentPage = {
        home: 0,
        rewards: 0,
        lb: 0,
        mysettings: 1
      };
    vbSharedService.prepForBroadcast(currentPage);
    $scope.tw_auth = false;
    $scope.user = $scope.identity.currentUser;
    $scope.transactions = $scope.user.vibes_transaction;
    $scope.settingData = $scope.identity.currentUser;
    if (angular.isObject($scope.user.twitter)) {
      $scope.tw_auth = true;
    }
    if (angular.isObject($scope.user.facebook)) {
      $scope.fb_auth = true;
    }
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
        if ($scope.college_name != undefined) {
          $scope.identity.currentUser.college.id = $scope.college_id;
          $scope.identity.currentUser.college.name = $scope.college_name;
        }
        if ($scope.city_name != undefined) {
          $scope.identity.currentUser.location.id = $scope.city_id;
          $scope.identity.currentUser.location.name = $scope.city_name;
        }
        //console.log(JSON.stringify($scope.identity.currentUser));
        settingSubmit.settingSubmitbutton($scope.identity.currentUser, $scope.user.facebookid).then(function (success) {
          if (success) {
            void 0;
          } else {
            void 0;
          }
        });
      }
    }  //    $scope.pagination = Pagination.getNew(10);
       //    $scope.pagination.numPages = Math.ceil($scope.transactions.length/$scope.pagination.perPage);
;
  }
]);
viberApp.controller('lbRewardsCtrl', [
  'vbSharedService',
  '$window',
  function (vbSharedService, $window) {
    $window.scrollTo(0, 0);
    var currentPage = {
        home: 0,
        rewards: 1,
        lb: 0,
        mysettings: 0
      };
    vbSharedService.prepForBroadcast(currentPage);
  }
]);
viberApp.controller('vbLoginBarCtrl', [
  '$scope',
  'vbSharedService',
  function ($scope, vbSharedService) {
    $scope.$on('handlePageChange', function () {
      void 0;
      $scope.currentPage = vbSharedService.currentPage;
    });
  }
]);
viberApp.factory('vbSharedService', [
  '$rootScope',
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
  }
]);
/**
 * Created by Akshat Goel on 23-06-2014.
 */
var viberApp = angular.module('viberApp');
viberApp.factory('vbAuth', [
  '$http',
  'vbIdentity',
  '$q',
  '$rootScope',
  '$window',
  function ($http, vbIdentity, $q, $rootScope, $window) {
    return {
      authenticateUser: function () {
        var dfd = $q.defer();
        $http.get('/getstudentdata').success(function (data) {
          if (angular.isObject(data)) {
            vbIdentity.currentUser = data;
            //console.log("Data"+vbIdentity.currentUser.stages[0].name);
            $rootScope.identity = vbIdentity;
            vbIdentity.currentUser.level = vbIdentity.currentUser.stages[0].name;
            //vbIdentity.currentUser.complete = vbIdentity.currentUser.stages[0].completion;
            var level_com = 0;
            _.each(vbIdentity.currentUser.user_tasks, function (usertask) {
              level_com += usertask.completed;
            });
            vbIdentity.currentUser.complete = level_com * 20;
            dfd.resolve(true);
          } else {
            $window.location = '/logout';
            //console.log('error loggin in');
            dfd.resolve(false);
          }
        });
        return dfd.promise;
      },
      isAuthenticated: function () {
        return angular.isObject($rootScope.identity);
      }
    };
  }
]);
viberApp.factory('settingSubmit', [
  '$http',
  '$q',
  function ($http, $q) {
    return {
      settingSubmitbutton: function (form_data, fbid) {
        var dfd = $q.defer();
        //console.log("before put");
        //console.log($scope.identity.currentUser.facebookid);
        $http.put('/students/' + fbid, JSON.stringify(form_data)).success(function (data) {
          void 0;
          if (angular.isObject(data)) {
            //
            dfd.resolve(true);
          } else {
            dfd.resolve(false);
          }
        });
        return dfd.promise;
      }
    };
  }
]);
/**
 * Created by Akshat Goel on 23-06-2014.
 */
var viberApp = angular.module('viberApp');
viberApp.factory('vbIdentity', function () {
  return {
    currentUser: undefined,
    isAuthenticated: function () {
      return !!this.currentUser;
    }
  };
});
/**
 * Created by Ankit on 6/26/2014.
 */
var viberApp = angular.module('viberApp');
viberApp.factory('postlink', [
  '$http',
  '$q',
  function ($http, $q) {
    return {
      postsharelink: function (identity, link, message, task, fbcheck, twcheck) {
        var reqObj = {
            'taskid': task['task_id'],
            'answers': {
              message: message,
              link: link
            },
            'platform': {
              'facebook': fbcheck,
              'twitter': twcheck
            }
          };
        var dfd = $q.defer();
        $http.post('/socialshare', reqObj).success(function (data) {
          if (angular.isObject(data)) {
            task.answers = data.answers;
            task.completiondata = data.completiondata;
            identity.vibes_transaction.push(task.completiondata.transaction);
            void 0;
            //$scope.identity.currentUser.vibes_transaction += task.completiondata.transaction;
            dfd.resolve(true);
          } else {
            dfd.resolve(false);
          }
        });
        return dfd.promise;
      }
    };
  }
]);
viberApp.factory('getminileaderboard', [
  '$http',
  '$q',
  function ($http, $q) {
    return {
      postlink: function (link, message) {
        var dfd = $q.defer();
        $http.get('/students/leaderboard/points').success(function (data) {
          if (angular.isObject(data)) {
            dfd.resolve(true);
          } else {
            dfd.resolve(false);
          }
        });
        return dfd.promise;
      }
    };
  }
]);
/**
 * Created by Ankit Saxena on 25-06-2014.
 */
var viberApp = angular.module('viberApp');
viberApp.directive('navBar', function () {
  return {
    restrict: 'E',
    templateUrl: 'views/navbar.html',
    controller: 'vbNavBarCtrl'
  };
});
viberApp.directive('loginBar', function () {
  return {
    restrict: 'E',
    templateUrl: 'views/loginbar.html',
    controller: 'vbLoginBarCtrl'
  };
});
viberApp.directive('taskUploadPhotos', function () {
  return {
    restrict: 'E',
    templateUrl: 'views/taskuploadphotos.html',
    controller: 'vbUploadPhotosCtrl'
  };
});
viberApp.directive('taskInsertLinks', function () {
  return {
    restrict: 'E',
    templateUrl: 'views/taskinsertlinks.html',
    controller: 'vbInsertLinksCtrl'
  };
});
viberApp.directive('taskInsertMobile', function () {
  return {
    restrict: 'E',
    templateUrl: 'views/taskinsertmobile.html',
    controller: 'vbInsertMobileCtrl'
  };
});
viberApp.directive('taskSurvey', function () {
  return {
    restrict: 'E',
    templateUrl: 'views/tasksurvey.html',
    controller: 'vbSurveyCtrl'
  };
});
viberApp.directive('miniLeaderboard', function () {
  return {
    restrict: 'E',
    templateUrl: 'views/minileaderboard.html',
    controller: 'vbMiniLeaderBoardCtrl'
  };
});
viberApp.directive('socialConnect', function () {
  return {
    restrict: 'E',
    templateUrl: 'views/socialconnect.html',
    controller: 'vbSocialConnectCtrl'
  };
});
viberApp.directive('cheatBox', function () {
  return {
    restrict: 'E',
    templateUrl: 'views/cheatbox.html',
    controller: 'vbCheatBoxCtrl'
  };
});
viberApp.directive('inviteFbFriends', function () {
  return {
    restrict: 'E',
    templateUrl: 'views/invitefbfriends.html',
    controller: 'vbinviteFrndsCtrl'
  };
});
viberApp.directive('likenFollow', function () {
  return {
    restrict: 'E',
    templateUrl: 'views/likenfollow.html',
    controller: 'vblikenfollowCtrl'
  };
});
viberApp.directive('taskYuwa', function () {
  return {
    restrict: 'E',
    templateUrl: 'views/taskyuwa.html',
    controller: 'vbTaskYuwaCtrl'
  };
});
viberApp.directive('supportYuwa', function () {
  return {
    restrict: 'E',
    templateUrl: 'views/supportyuwa.html',
    controller: 'vbSupportYuwaCtrl'
  };
});
viberApp.directive('taskKnowviber', function () {
  return {
    restrict: 'E',
    templateUrl: 'views/taskknowviber.html',
    controller: 'vbKnowViberCtrl'
  };
});
viberApp.directive('activateFriends', function () {
  return {
    restrict: 'E',
    templateUrl: 'views/activatefriends.html',
    controller: 'vbActivateCtrl'
  };
});
viberApp.directive('goodvibesMind', function () {
  return {
    restrict: 'E',
    templateUrl: 'views/goodvibesmind.html',
    controller: 'vbGoodvibesMindCtrl'
  };
});
'use strict';
angular.module('viberApp').controller('MainCtrl', [
  '$scope',
  function ($scope) {
    $scope.users = [
      {
        'name': 'Ankit Saxena',
        'college': 'M.S Ramaiah Institute of Technology',
        'city': 'Bangalore',
        'goodvibes': '500',
        'fbid': '690323644'
      },
      {
        'name': 'Arti Sharma',
        'college': 'M.S Ramaiah Institute of Technology',
        'city': 'Bangalore',
        'goodvibes': '500',
        'fbid': '100003303986564'
      },
      {
        'name': 'Mayank Goyal',
        'college': 'M.S Ramaiah Institute of Technology',
        'city': 'Bangalore',
        'goodvibes': '500',
        'fbid': '100001081843471'
      },
      {
        'name': 'Rahul Saxena',
        'college': 'M.S Ramaiah Institute of Technology',
        'city': 'Bangalore',
        'goodvibes': '500',
        'fbid': '100001105429407'
      }
    ];
  }
]);
viberApp.controller('lbCntrl', [
  '$scope',
  function ($scope) {
    $scope.users = [
      {
        'name': 'Ankit Saxena',
        'college': 'M.S Ramaiah Institute of Technology',
        'city': 'Bangalore',
        'goodvibes': '500',
        'fbid': '690323644'
      },
      {
        'name': 'Arti Sharma',
        'college': 'M.S Ramaiah Institute of Technology',
        'city': 'Bangalore',
        'goodvibes': '500',
        'fbid': '100003303986564'
      },
      {
        'name': 'Mayank Goyal',
        'college': 'M.S Ramaiah Institute of Technology',
        'city': 'Bangalore',
        'goodvibes': '500',
        'fbid': '100001081843471'
      },
      {
        'name': 'Rahul Saxena',
        'college': 'M.S Ramaiah Institute of Technology',
        'city': 'Bangalore',
        'goodvibes': '500',
        'fbid': '100001105429407'
      }
    ];
  }
]);
viberApp.controller('signupCntrl', [
  '$scope',
  '$http',
  '$location',
  function ($scope, $http, $location) {
    $scope.User = {};
    $scope.errorMessage = 'Error';
    $scope.Register = function () {
      void 0;
      $http({
        method: 'POST',
        url: '/signup',
        data: $.param($scope.User),
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      }).success(function (data) {
        $location.path('/');
      }).error(function (err) {
        $scope.errorMessage = err;
      });
    };
  }
]);
/**
 * Created by Ankit Saxena on 25-06-2014.
 */
var viberApp = angular.module('viberApp');
Object.size = function (obj) {
  var size = 0, key;
  for (key in obj) {
    if (obj.hasOwnProperty(key))
      size++;
  }
  return size;
};
viberApp.controller('vbSurveyCtrl', [
  '$scope',
  '$http',
  'toaster',
  '$rootScope',
  function ($scope, $http, toaster, $rootScope) {
    $rootScope.ataskcomplete0 = false;
    //$scope.ataskcomplete0 = false;
    var user_tasks = $scope.identity.currentUser.user_tasks;
    var task = _.where(user_tasks, { 'task_id': '53a951f9e4b041d6a3190438' })[0];
    if (angular.isObject(task) && task.completed == 1) {
      //$scope.ataskcomplete0 = true;
      $rootScope.ataskcomplete0 = true;
    }
    $scope.person = undefined;
    $scope.old = undefined;
    $scope.learning = undefined;
    $scope.submit = function (isValid) {
      if (isValid) {
        var postObj = {
            'answers': {
              'answer1': $scope.person,
              'answer2': $scope.old,
              'answer3': $scope.learning
            },
            'taskid': '53a951f9e4b041d6a3190438'
          };
        $http.post('/survey', JSON.stringify(postObj)).success(function (data) {
          if (angular.isObject(data)) {
            if (angular.isObject(data.completiondata)) {
              // because the service will not return Level inside completiondata if the user is doing the same task again
              $rootScope.ataskcomplete0 = true;
              //$scope.ataskcomplete0=true;
              task.completed = 1;
              $scope.identity.currentUser.complete += data.completiondata.level;
              $scope.identity.currentUser.points += data.completiondata.points;
              $scope.identity.currentUser.vibes_transaction.push(data.completiondata.transaction);
              toaster.pop('success', 'Task 1', 'You have successfully finished the first task');
            }
            void 0;
          }
        }).error(function (err) {
          void 0;
          toaster.pop('failure', 'Task 1', 'There was an error submitting your task, please try again');
        });  //            postsurvey.postSurvey(postObj).then(function(success){
             //                console.log(success);
             //                if(success){
             //                    var user_tasks = $scope.identity.currentUser.user_tasks;
             //                    var task = _.where(user_tasks,{'task_id':'53a951f9e4b041d6a3190438'})[0];
             //
             //                    $scope.identity.currentUser.points += 30;
             //
             //                }
             //                else{
             //                    console.log("failure");
             //                }
             //            });
      }
    };
  }
]);
viberApp.controller('vbInsertMobileCtrl', [
  '$scope',
  function ($scope) {
  }
]);
viberApp.controller('vbUploadPhotosCtrl', [
  '$scope',
  '$http',
  '$upload',
  'toaster',
  function ($scope, $http, $upload, toaster) {
    //XML parser
    var user_tasks = $scope.identity.currentUser.user_tasks;
    var task = _.where(user_tasks, { 'task_id': '53a9526be4b041d6a3190441' })[0];
    $scope.s3success = false;
    $scope.submitted = 0;
    $scope.added = 0;
    $scope.serSubmitted = [];
    $scope.done = [];
    $scope.taskcomplete1 = false;
    $scope.zeroselected = true;
    _.each(task.answers, function (answer) {
      $scope.submitted += answer.name.length;
      _.each(answer.name, function (names) {
        $scope.serSubmitted.push(names);  //$scope.serSubmitted.push(names);
      });
    });
    if (task.completed == 1)
      $scope.taskcomplete1 = true;
    $scope.onFileSelect = function ($files) {
      var fbid = $scope.identity.currentUser.facebookid;
      $scope.files = $files;
      $scope.upload = [];
      $scope.s3added = [];
      if ($scope.files.length > 0) {
        $scope.zeroselected = false;
        var file = $scope.files[0];
        var ran_num = Math.round(Math.random() * 1000);
        $scope.done[0] = fbid + '$' + ran_num + '$' + file.name;
        $scope.upload[0] = $upload.upload({
          url: 'https://viber-uploads.s3-ap-southeast-1.amazonaws.com/',
          method: 'POST',
          data: {
            'key': 's3UploadExample/' + fbid + '$' + ran_num + '$' + file.name,
            'acl': 'public-read',
            'Content-Type': 'application',
            'AWSAccessKeyId': 'AKIAITP3AH32R7ZKQ4XQ',
            'success_action_status': '201',
            'Policy': 'eyJleHBpcmF0aW9uIjoiMjAxNS03LTE4VDIwOjAwOjAwLjAwMFoiLCJjb25kaXRpb25zIjpbWyJzdGFydHMtd2l0aCIsIiRrZXkiLCJzM1VwbG9hZEV4YW1wbGUvIl0seyJidWNrZXQiOiJ2aWJlci11cGxvYWRzIn0seyJhY2wiOiJwdWJsaWMtcmVhZCJ9LFsic3RhcnRzLXdpdGgiLCIkQ29udGVudC1UeXBlIiwiYXBwbGljYXRpb24iXSx7InN1Y2Nlc3NfYWN0aW9uX3N0YXR1cyI6IjIwMSJ9XX0=',
            'Signature': '7OiVs5UxzIJdBbhfgjnuPaX6eKE='
          },
          file: file
        }).then(function (response) {
          if (response.status === 201) {
            $scope.added += 1;
            var xmlDoc;
            //xml parser
            if (window.DOMParser) {
              parser = new DOMParser();
              xmlDoc = parser.parseFromString(response.data, 'text/xml');
            } else
              // Internet Explorer
              {
                xmlDoc = new ActiveXObject('Microsoft.XMLDOM');
                xmlDoc.async = false;
                xmlDoc.loadXML(txt);
              }
            $scope.s3added.push(xmlDoc.getElementsByTagName('Location')[0].childNodes[0].nodeValue);
            $scope.s3success = true;  //$scope.serSubmitted.push(ran_num + '$' + file.name);
          }
        });
      }
    };
    $scope.onFileUpload = function () {
      var reqbody = {
          'answers': { 'name': $scope.done },
          'taskid': '53a9526be4b041d6a3190441'
        };
      $scope.serSubmitted.push($scope.done[0]);
      $scope.s3added = [];
      $scope.zeroselected = true;
      $http.put('/uploadselfie', reqbody).success(function (data) {
        if (angular.isObject(data)) {
          if (angular.isObject(data.completiondata)) {
            $scope.identity.currentUser.complete += data.completiondata.level;
            $scope.identity.currentUser.points += data.completiondata.points;
            $scope.identity.currentUser.vibes_transaction.push(data.completiondata.transaction);
            $scope.taskcomplete1 = true;
            task.completed = 1;
          }
          $scope.submitted += $scope.done.length;
          $scope.added = 0;
          $scope.s3success = false;
          toaster.pop('success', 'Task 4', 'Your photo was uploaded successfully.');
        }
      });
    };
  }
]);
viberApp.controller('vbinviteFrndsCtrl', [
  '$scope',
  '$http',
  'toaster',
  function ($scope, $http, toaster) {
    var user_tasks = $scope.identity.currentUser.user_tasks;
    var task = _.where(user_tasks, { 'task_id': '53a9526be4b041d6a3190440' })[0];
    $scope.taskcomplete2 = false;
    if (task.completed == 1)
      $scope.taskcomplete2 = true;
    // Load the SDK Asynchronously
    (function (d) {
      var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement('script');
      js.id = id;
      js.async = true;
      js.src = '//connect.facebook.net/en_US/all.js';
      ref.parentNode.insertBefore(js, ref);
    }(document));
    $scope.sendRequest = function () {
      //var user_id = document.getElementsByName("user_id")[0].value;
      FB.init({
        appId: '493599764105814',
        cookie: true,
        status: true,
        xfbml: true
      });
      FB.ui({
        method: 'apprequests',
        message: 'Request App!!',
        display: 'popup'
      }, function (response) {
        if (response) {
          if (Object.size(response) == 3) {
            var reqObj = {
                'answers': { 'fb_ids': response.to },
                'taskid': '53a9526be4b041d6a3190440'
              };
            $http.put('/invites', reqObj).success(function (data) {
              if (angular.isObject(data.completiondata)) {
                $scope.identity.currentUser.complete += data.completiondata.level;
                $scope.identity.currentUser.points += data.completiondata.points;
                $scope.taskcomplete2 = true;
                task.completed = 1;
                $scope.identity.currentUser.vibes_transaction.push(data.completiondata.transaction);
              }
              toaster.pop('success', 'Task 5', 'Your invites were sent successfully.');
            });
          }
        }
      });
    };
  }
]);
viberApp.controller('vblikenfollowCtrl', [
  '$scope',
  '$http',
  '$window',
  '$rootScope',
  'toaster',
  function ($scope, $http, $window, $rootScope, toaster) {
    var user_tasks = $scope.identity.currentUser.user_tasks;
    var task = _.where(user_tasks, { 'task_id': '53a9526be4b041d6a3190439' })[0];
    $scope.taskcomplete3 = false;
    if (task.completed == 1) {
      $scope.taskcomplete3 = true;
    }
    $rootScope.twfollow = false;
    $rootScope.fblike = false;
    $scope.$watch('fblike', function (currentValue, newValue) {
      if ($scope.taskcomplete3 == false && currentValue == true) {
        void 0;
        var reqbody = {
            'answers': { 'link': 'https://www.facebook.com/officialviberindia/' },
            'platform': { 'facebook': true },
            'taskid': '53a9526be4b041d6a3190439'
          };
        $http.put('/likefollow', reqbody).success(function (data) {
          if (angular.isObject(data)) {
            if (angular.isObject(data.completiondata)) {
              $scope.identity.currentUser.complete += data.completiondata.level;
              $scope.taskcomplete3 = true;
              task.completed = 1;
              $scope.identity.currentUser.points += data.completiondata.points;
              $scope.identity.currentUser.vibes_transaction.push(data.completiondata.transaction);
            }
            toaster.pop('success', 'Facebook Like', 'Your Facebook like has been saved');
          }
        });
      }
    });
    $scope.$watch('twfollow', function (currentValue, newValue) {
      if ($scope.taskcomplete3 == false && currentValue == true) {
        void 0;
        var reqbody = {
            'answers': { 'link': 'viber_india' },
            'platform': { 'twitter': true },
            'taskid': '53a9526be4b041d6a3190439'
          };
        $http.put('/likefollow', reqbody).success(function (data) {
          if (angular.isObject(data.completiondata)) {
            $scope.identity.currentUser.complete += data.completiondata.level;
            $scope.taskcomplete3 = true;
            task.completed = 1;
            $scope.identity.currentUser.points += data.completiondata.points;
            $scope.identity.currentUser.vibes_transaction.push(data.completiondata.transaction);
          }
          toaster.pop('success', 'Twitter Follow', 'Your Twitter Follow has been saved');
        });
      }
    });
    (function ($) {
      // Registering new tracking handler
      $.fn.iframeTracker = function (handler) {
        // Storing the new handler into handler list
        $.iframeTracker.handlersList.push(handler);
        // Binding boundary listener
        $(this).bind('mouseover', { handler: handler }, function (e) {
          e.data.handler.over = true;
          void 0;
          try {
            e.data.handler.overCallback(this);
          } catch (ex) {
          }
        }).bind('mouseout', { handler: handler }, function (e) {
          e.data.handler.over = false;
          $.iframeTracker.focusRetriever.focus();
          void 0;
          try {
            e.data.handler.outCallback(this);
          } catch (ex) {
          }
        });
      };
      // Iframe tracker common object
      $.iframeTracker = {
        focusRetriever: null,
        focusRetrieved: false,
        handlersList: [],
        isIE8AndOlder: false,
        init: function () {
          // Determine browser version (IE8-) ($.browser.msie is deprecated since jQuery 1.9)
          try {
            if ($.browser.msie == true && $.browser.version < 9) {
              this.isIE8AndOlder = true;
            }
          } catch (ex) {
            try {
              var matches = navigator.userAgent.match(/(msie) ([\w.]+)/i);
              if (matches[2] < 9) {
                this.isIE8AndOlder = true;
              }
            } catch (ex2) {
            }
          }
          // Listening window blur
          $(window).focus();
          $(window).blur(function (e) {
            $.iframeTracker.windowLoseFocus(e);
          });
          // Focus retriever
          $('body').append('<div style="position:fixed; top:0; left:0; overflow:hidden;"><input style="position:absolute; left:-300px;" type="text" value="" id="focus_retriever" readonly="true" /></div>');
          this.focusRetriever = $('#focus_retriever');
          this.focusRetrieved = false;
          // Focus back to page
          $(document).mousemove(function (e) {
            if (document.activeElement && document.activeElement.tagName == 'IFRAME') {
              $.iframeTracker.focusRetriever.focus();
              $.iframeTracker.focusRetrieved = true;
            }
          });
          // Blur doesn't works correctly on IE8-, so we need to trigger it manually
          if (this.isIE8AndOlder) {
            this.focusRetriever.blur(function (e) {
              e.stopPropagation();
              e.preventDefault();
              $.iframeTracker.windowLoseFocus(e);
            });
          }
          // Keep focus on window (fix bug IE8-, focusable elements)
          if (this.isIE8AndOlder) {
            $('body').click(function (e) {
              $(window).focus();
            });
            $('form').click(function (e) {
              e.stopPropagation();
            });
            // Same thing for "post-DOMready" created forms (issue #6)
            try {
              $('body').on('click', 'form', function (e) {
                e.stopPropagation();
              });
            } catch (ex) {
              void 0;
            }
          }
        },
        windowLoseFocus: function (event) {
          for (var i in this.handlersList) {
            if (this.handlersList[i].over == true) {
              void 0;
              try {
                this.handlersList[i].blurCallback();
              } catch (ex) {
              }
            }
          }
        }
      };
      // Init the iframeTracker on document ready
      $(document).ready(function () {
        $.iframeTracker.init();
        void 0;
      });
    }(jQuery));
    $('#chaljatw').iframeTracker({
      blurCallback: function () {
        var scope = angular.element(document).scope();
        scope.$apply(function () {
          scope.$root.twfollow = true;
        });  //scope.$apply();
      }
    });
    $('#chaljafb').iframeTracker({
      blurCallback: function () {
        void 0;
        var scope = angular.element(document).scope();
        scope.$apply(function () {
          scope.$root.fblike = true;
        });
      }
    });
  }
]);
viberApp.controller('vbInsertLinksCtrl', [
  '$scope',
  '$http',
  'toaster',
  function ($scope, $http, toaster) {
    $scope.link = 'https://www.youtube.com/watch?v=12n9qipCYno';
    $scope.rate = undefined;
    void 0;
    var user_tasks = $scope.identity.currentUser.user_tasks;
    var task = _.where(user_tasks, { 'task_id': '53a9526be4b041d6a3190442' })[0];
    $scope.taskcomplete4 = false;
    if (task.completed == 1)
      $scope.taskcomplete4 = true;
    if (task.completed != 1) {
      $scope.submitForm = function (isValid) {
        if (isValid) {
          var reqbody = {
              'answers': { 'rate': $scope.rate },
              'taskid': '53a9526be4b041d6a3190442'
            };
          $http.put('/stickers', reqbody).success(function (data) {
            if (angular.isObject(data)) {
              if (angular.isObject(data.completiondata)) {
                // because the service will not return Level inside completiondata if the user is doing the same task again
                $scope.identity.currentUser.complete += data.completiondata.level;
                $scope.taskcomplete4 = true;
                task.completed = 1;
                $scope.identity.currentUser.points += data.completiondata.points;
                toaster.pop('success', 'Task 3', 'You have successfully finished the third task');
                $scope.identity.currentUser.vibes_transaction.push(data.completiondata.transaction);
              }
            }
          });
        }
      };
    }  //    var fbsuccess=false, twsuccess=false;
       //
       //    var bindCtrl = function () {
       //        $scope.answers = task.answers;
       //        $scope.completiondata = task.completiondata;
       //        $scope.answers.reverse();
       //        _.each($scope.answers,function(answer){
       //
       //            if(angular.isObject(answer.facebook)){
       //
       //                if(angular.isObject(answer.twitter)) {
       //
       //                    answer['fbsuccess'] = true;
       //                    answer['twsuccess'] = true;
       //                }
       //                else {
       //                    answer['fbsuccess'] = true;
       //                    answer['twsuccess'] = false;
       //                }
       //
       //            }
       //            else{ answer['twsuccess'] = true;
       //                answer['fbsuccess'] =false;
       //            }
       //        });
       //    };
       //
       //    bindCtrl();
       //
       //    if (angular.isObject($scope.identity.currentUser.facebook) && $scope.identity.currentUser.facebook.authorized == '1') $scope.checkedfb = true;
       //    if (angular.isObject($scope.identity.currentUser.twitter) && $scope.identity.currentUser.twitter.authorized == '1') $scope.checkedtw = true;
       //    console.log(angular.isObject($scope.answers.facebook));
       //
       //    $scope.submitForm = function (isValid) {
       //
       //            if (isValid) {
       //
       //
       //                postlink.postsharelink($scope.identity.currentUser,$scope.link, $scope.message, task, $scope.checkedfb, $scope.checkedtw).then(function(success) {
       //                    if($scope.checkedfb && $scope.checkedtw){
       //                        if (success) {
       //                            toaster.pop('success', "Twitter Post", "Your Message has been posted successfully");
       //                            toaster.pop('success', "Facebook Post", "Your Message has been posted successfully to Facebook");
       //                            twsuccess=true;
       //                            fbsuccess=true;
       //                            $scope.identity.currentUser.points += 20;
       //                            bindCtrl();
       //                        }
       //                        else {
       //
       //                            toaster.pop('failure', "Twitter Post", "There was an error in publishing your post");
       //                            toaster.pop('failure', "Facebook Post", "There was an error in publishing your post");
       //                        }
       //
       //                        toaster.pop('success', "Social Post", "Your Message has been posted successfully to Facebook");
       //                        $scope.taskcomplete4=true;
       //                    }
       //                    else if($scope.checkedfb){
       //                        if (success) {
       //
       //                            toaster.pop('success', "Facebook Post", "Your Message has been posted successfully to Facebook");
       //                            fbsuccess=true;
       //                            $scope.identity.currentUser.points += 20;
       //                            bindCtrl();
       //
       //                        }
       //                        else {
       //
       //                            toaster.pop('failure', "Facebook Post", "There was an error in publishing your post");
       //
       //                        }
       //
       //                    }
       //                    else if($scope.checkedtw){
       //                        if (success) {
       //                            toaster.pop('success', "Twitter Post", "Your Message has been posted successfully");
       //                            twsuccess=true;
       //                            $scope.identity.currentUser.points += 20;
       //                            bindCtrl();
       //                        }
       //                        else {
       //
       //                            toaster.pop('failure', "Twitter Post", "There was an error in publishing your post");
       //
       //                        }
       //                    }
       //
       //                    toaster.pop('success', "Social Post", "Your Message has been posted successfully to Facebook");
       //                    $scope.taskcomplete4=true;
       //
       //                });
       //
       //            }
       //
       //        }
  }
]);
//Level 2 Tasks
viberApp.controller('vbKnowViberCtrl', [
  '$scope',
  'toaster',
  '$http',
  function ($scope, toaster, $http) {
    $scope.taskcomplete21 = false;
    var user_tasks = $scope.identity.currentUser.user_tasks;
    var task = _.where(user_tasks, { 'task_id': 'taskid1234567890' })[0];
    if (angular.isObject(task) && task.completed == 1) {
      $scope.taskcomplete21 = true;
    }
    $scope.task1que1 = undefined;
    $scope.task1que2 = undefined;
    $scope.task1que3 = undefined;
    $scope.task1que4 = undefined;
    $scope.task1que5 = undefined;
    $scope.task1que6 = undefined;
    $scope.task1que7 = undefined;
    $scope.task1que8 = undefined;
    $scope.task1que9 = undefined;
    $scope.submit = function (isValid) {
      if (isValid) {
        var postObj = {
            'answers': {
              'answer1': $scope.task1que1,
              'answer2': $scope.task1que2,
              'answer3': $scope.task1que3,
              'answer4': $scope.task1que4,
              'answer5': $scope.task1que5,
              'answer6': $scope.task1que6,
              'answer7': $scope.task1que7,
              'answer8': $scope.task1que8,
              'answer9': $scope.task1que9
            },
            'taskid': 'taskid1234567890',
            'complete': task.completed
          };
        $http.post('/level2task1', JSON.stringify(postObj)).success(function (data) {
          if (angular.isObject(data)) {
          }
        }).error(function (err) {
          void 0;
          toaster.pop('failure', 'Task 1', 'There was an error submitting your task, please try again');
        });
      }
    };
  }
]);
viberApp.controller('vbActivateCtrl', [
  '$scope',
  function ($scope) {
  }
]);
viberApp.controller('vbGoodvibesMindCtrl', [
  '$scope',
  function ($scope) {
  }
]);
viberApp.controller('vbTaskYuwaCtrl', [
  '$scope',
  '$http',
  function ($scope, $http) {
    $scope.rateyuwa = undefined;
    var user_tasks = $scope.identity.currentUser.user_tasks;
    var task = _.where(user_tasks, { 'task_id': 'taskyuwa1234567890' })[0];
    $scope.taskcomplete24 = false;
    if (angular.isObject(task) && task.completed == 1)
      $scope.taskcomplete24 = true;
    $scope.submitForm = function (isValid) {
      if (isValid) {
        var reqbody = {
            'answers': { 'rate': $scope.rateyuwa },
            'taskid': 'taskyuwa1234567890'
          };
        $http.put('/level2task4', reqbody).success(function (data) {
          if (angular.isObject(data)) {
          }
        });
      }
    };
  }
]);
viberApp.controller('vbSupportYuwaCtrl', [
  '$scope',
  function ($scope) {
  }
]);
/**
 * Created by Ankit Saxena on 25-06-2014.
 */
var viberApp = angular.module('viberApp');
viberApp.controller('vbCheatBoxCtrl', [
  '$scope',
  function ($scope) {
  }
]);
viberApp.controller('vbSocialConnectCtrl', [
  '$scope',
  function ($scope) {
  }
]);
viberApp.controller('vbMiniLeaderBoardCtrl', [
  '$scope',
  '$http',
  function ($scope, $http) {
    $http.get('/students/leaderboard/points').success(function (data) {
      if (angular.isObject(data)) {
        $scope.lbstudents = data;
        for (var i = 0; i < $scope.lbstudents.length; i++) {
          if (!$scope.lbstudents[i].facebookid)
            $scope.lbstudents[i].facebookid = 100006788625561;
        }
        void 0;
      } else {
      }
    });
  }
]);