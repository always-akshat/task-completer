/**
 * Created by Ankit Saxena on 25-06-2014.
 */

var viberApp = angular
    .module('viberApp');

viberApp.controller('vbCheatBoxCtrl',function($scope){


});

viberApp.controller('vbSocialConnectCtrl',function($scope){


});

viberApp.controller('vbMiniLeaderBoardCtrl',function($scope,$http){



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