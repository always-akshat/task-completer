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

    $scope.link = "https://www.youtube.com/watch?v=EOl4e8wsvHU";
    console.log($scope.identity.currentUser);
    var user_tasks = $scope.identity.currentUser.user_tasks;


   var task = _.where(user_tasks,{'task_id':'53a9515ae4b041d6a3190435'})[0];

    var fbsuccess=false, twsuccess=false;
//    $scope.answers = task.answers;

    if (angular.isObject($scope.identity.currentUser.facebook) && $scope.identity.currentUser.facebook.authorized == '1') $scope.checkedfb = true;
    if (angular.isObject($scope.identity.currentUser.facebook) && $scope.identity.currentUser.twitter.authorized == '1') $scope.checkedtw = true;


        $scope.submitForm = function (isValid) {

            if (isValid) {


                postlink.postsharelink($scope.link, $scope.message, task, $scope.checkedfb, $scope.checkedtw).then(function(success) {
                    if($scope.checkedfb && $scope.checkedtw){
                        if (success) {
                            toaster.pop('success', "Twitter Post", "Your Message has been posted successfully");
                            toaster.pop('success', "Facebook Post", "Your Message has been posted successfully to Facebook");
                            twsuccess=true;
                            fbsuccess=true;

                        }
                        else {

                            toaster.pop('failure', "Twitter Post", "There was an error in publishing your post");
                            toaster.pop('failure', "Facebook Post", "There was an error in publishing your post");
                        }
                    }
                    else if($scope.checkedfb){
                        if (success) {

                            toaster.pop('success', "Facebook Post", "Your Message has been posted successfully to Facebook");
                            fbsuccess=true;
                        }
                        else {

                            toaster.pop('failure', "Facebook Post", "There was an error in publishing your post");

                        }

                    }
                    else if($scope.checkedtw){
                        if (success) {
                            toaster.pop('success', "Twitter Post", "Your Message has been posted successfully");
                            twsuccess=true;

                        }
                        else {

                            toaster.pop('failure', "Twitter Post", "There was an error in publishing your post");

                        }
                    }
                });
                /* if ($scope.checkedfb) {

                    postlink.postfblink($scope.link, $scope.message,task).then(function (success) {

                        if (success) {

                            toaster.pop('success', "Facebook Post", "Your Message has been posted successfully to Facebook");
                     }
                        else {

                            toaster.pop('failure', "Facebook Post", "There was an error in publishing your post");

                        }


                    });
                }

                else if ($scope.checkedtw) {

                    postlink.posttwlink($scope.link, $scope.message,task).then(function (success) {

                        if (success) {
                            toaster.pop('success', "Twitter Post", "Your Message has been posted successfully");
                            twsuccess=true;

                        }
                        else {

                            toaster.pop('failure', "Twitter Post", "There was an error in publishing your post");

                        }


                    });
                }

                else if($scope.checkedtw && $scope.checkedfb){

                }  */



            }

        }



});