/**
 * Created by Ankit Saxena on 25-06-2014.
 */

var viberApp = angular
    .module('viberApp');

viberApp.controller('vbCheatBoxCtrl',['$scope', function($scope){


}]);

viberApp.controller('vbSocialConnectCtrl',['$scope', function($scope){


}]);

viberApp.controller('vbMiniLeaderBoardCtrl',[ '$scope','$http', function($scope,$http){



        $http.get('/students/leaderboard/points').success(function (data) {


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
}]);