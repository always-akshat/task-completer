/**
 * Created by Ankit Saxena on 25-06-2014.
 */


var viberApp = angular
    .module('viberApp');

viberApp.controller('vbSurveyCtrl',function($scope){


});

viberApp.controller('vbInsertMobileCtrl',function($scope){


});

viberApp.controller('vbUploadPhotosCtrl',function($scope){


});


viberApp.controller('vbInsertLinksCtrl',function($scope,$http){

    console.log('sending data');
    var data = {link: $scope.link, message : $scope.message };
    console.log(data);
    $scope.sharelink = function(){

        console.log('sending data');
        $http.post('/sharefblink',{'link':$scope.link,'message':$scope.message});


    }

});