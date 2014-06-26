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


viberApp.controller('vbInsertLinksCtrl',function($scope,$http,toaster,$q,postfblink){


    $scope.submitForm = function(isValid){
        console.log(isValid);
        if(isValid) {


            postfblink.postlink($scope.link,$scope.message).then(function(success){

                if(success){
                    toaster.pop('success',"Facebook Post","Your Message has been posted successfully");
                }
                else{

                    toaster.pop('failure',"Facebook Post","There was an error in publishing your post");

                }


            });


        }

    }

});