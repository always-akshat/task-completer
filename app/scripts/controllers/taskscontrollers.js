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


viberApp.controller('vbInsertLinksCtrl',function($scope,$http,toaster,$q,postlink){

    console.log($scope.identity);

   if(angular.isObject($scope.identity.currentUser.facebook) &&  $scope.identity.currentUser.facebook.authorized == '1' ) $scope.checkedfb =true;
   if(angular.isObject($scope.identity.currentUser.facebook) &&  $scope.identity.currentUser.twitter.authorized == '1' ) $scope.checkedtw =true;


    $scope.submitForm = function(isValid){
        console.log(isValid);
        if(isValid) {

            if($scope.checkedfb) {
                postlink.postfblink($scope.link, $scope.message).then(function (success) {

                    if (success) {
                        toaster.pop('success', "Facebook Post", "Your Message has been posted successfully");
                    }
                    else {

                        toaster.pop('failure', "Facebook Post", "There was an error in publishing your post");

                    }


                });
            }

            if($scope.checkedtw) {
                console.log('trying to send tweet');
                postlink.posttwlink($scope.link, $scope.message).then(function (success) {

                    if (success) {
                        toaster.pop('success', "Twitter Post", "Your Message has been posted successfully");
                    }
                    else {

                        toaster.pop('failure', "Twitter Post", "There was an error in publishing your post");

                    }


                });
            }


        }

    }

});