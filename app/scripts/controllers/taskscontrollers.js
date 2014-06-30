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
    var task;



    user_tasks.forEach(function(key){
        if(key['task_id'] === '53a9515ae4b041d6a3190435')
        {
            task = key;
        }

    } );

    console.log(task);


    if($scope.identity.currentUser.points >= 40){
        $scope.completion = 33;
    }

    var fbsuccess=false, twsuccess=false;
    $scope.answers = task.answers;
    if(angular.isObject($scope.identity)) {



        if (angular.isObject($scope.identity.currentUser.facebook) && $scope.identity.currentUser.facebook.authorized == '1') $scope.checkedfb = true;
        if (angular.isObject($scope.identity.currentUser.facebook) && $scope.identity.currentUser.twitter.authorized == '1') $scope.checkedtw = true;

    }
        $scope.submitForm = function (isValid) {

            if (isValid  && angular.isObject($scope.identity)) {



                if ($scope.checkedfb) {



                    postlink.postfblink($scope.link, $scope.message,task).then(function (success) {

                        if (success) {
                            console.log('successfully posted fb 2');
                            toaster.pop('success', "Facebook Post", "Your Message has been posted successfully to Facebook");

                           // console.log(task);

                        }
                        else {

                            toaster.pop('failure', "Facebook Post", "There was an error in publishing your post");

                        }


                    });
                }

                if ($scope.checkedtw) {

                    postlink.posttwlink($scope.link, $scope.message).then(function (success) {

                        if (success) {
                            toaster.pop('success', "Twitter Post", "Your Message has been posted successfully");
                            twsuccess=true;


                             //   task.answers.push({'link': $scope.link, 'message': $scope.message, 'fb': fbsuccess, 'tw': twsuccess});
                              //  $scope.identity.currentUser.points += 20;






                            console.log(task);
                        }
                        else {

                            toaster.pop('failure', "Twitter Post", "There was an error in publishing your post");

                        }


                    });
                }



            }

        }



});