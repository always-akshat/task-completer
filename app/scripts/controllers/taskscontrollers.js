/**
 * Created by Ankit Saxena on 25-06-2014.
 */


var viberApp = angular
    .module('viberApp');

viberApp.controller('vbSurveyCtrl',function($scope,postsurvey){

    $scope.used = undefined;
    $scope.country = undefined;
    $scope.awesome1 = undefined;
    $scope.awesome2 = undefined;
    $scope.awesome3 = undefined;
    $scope.awesome4 = undefined;
    $scope.coolest = undefined;
    $scope.person1 = undefined;
    $scope.person2 = undefined;
    $scope.person3 = undefined;

    $scope.submit = function(isValid){
        if(isValid){
            var postObj = {'answers':{'answer1' :$scope.used,'answer2':$scope.country,'answer3':{awesome1:$scope.awesome1,awesome2:$scope.awesome2,awesome3:$scope.awesome3,awesome4:$scope.awesome4},'answer4':$scope.coolest,'answer5':{'person1':$scope.person1, 'person2':$scope.person2,'person3':$scope.person3}},'taskid':'53a951f9e4b041d6a3190438'};
            console.log(JSON.stringify(postObj));
            postsurvey.postSurvey(postObj).then(function(success){
                if(success){
                    console.log("Success");
                }
                else{
                    console.log("failure");
                }
            });
        }
    };
});

viberApp.controller('vbInsertMobileCtrl',function($scope){


});

viberApp.controller('vbUploadPhotosCtrl',function($scope){


});


viberApp.controller('vbinviteFrndsCtrl',function($scope){


});


viberApp.controller('vblikenfollowCtrl',function($scope){


});

viberApp.controller('vbInsertLinksCtrl',function($scope,$http,toaster,$q,postlink){

    $scope.link = "https://www.youtube.com/watch?v=EOl4e8wsvHU";
    console.log($scope.identity.currentUser);
    var user_tasks = $scope.identity.currentUser.user_tasks;
    var task = _.where(user_tasks,{'task_id':'53a9515ae4b041d6a3190435'})[0];

    var fbsuccess=false, twsuccess=false;
    var bindCtrl = function () {
        $scope.answers = task.answers;
        $scope.completiondata = task.completiondata;
        $scope.answers.reverse();
        _.each($scope.answers,function(answer){

            if(angular.isObject(answer.facebook)){

                if(angular.isObject(answer.twitter)) {

                    answer['fbsuccess'] = true;
                    answer['twsuccess'] = true;
                }
                else {
                    answer['fbsuccess'] = true;
                    answer['twsuccess'] = false;
                }

            }
            else{ answer['twsuccess'] = true;
                answer['fbsuccess'] =false;
            }
        });
    };

    bindCtrl();

    if (angular.isObject($scope.identity.currentUser.facebook) && $scope.identity.currentUser.facebook.authorized == '1') $scope.checkedfb = true;
    if (angular.isObject($scope.identity.currentUser.facebook) && $scope.identity.currentUser.twitter.authorized == '1') $scope.checkedtw = true;
    console.log(angular.isObject($scope.answers.facebook));

    $scope.submitForm = function (isValid) {

            if (isValid) {


                postlink.postsharelink($scope.identity.currentUser,$scope.link, $scope.message, task, $scope.checkedfb, $scope.checkedtw).then(function(success) {
                    if($scope.checkedfb && $scope.checkedtw){
                        if (success) {
                            toaster.pop('success', "Twitter Post", "Your Message has been posted successfully");
                            toaster.pop('success', "Facebook Post", "Your Message has been posted successfully to Facebook");
                            twsuccess=true;
                            fbsuccess=true;
                            $scope.identity.currentUser.points += 20;
                            bindCtrl();
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
                            $scope.identity.currentUser.points += 20;
                            bindCtrl();

                        }
                        else {

                            toaster.pop('failure', "Facebook Post", "There was an error in publishing your post");

                        }

                    }
                    else if($scope.checkedtw){
                        if (success) {
                            toaster.pop('success', "Twitter Post", "Your Message has been posted successfully");
                            twsuccess=true;
                            $scope.identity.currentUser.points += 20;
                            bindCtrl();
                        }
                        else {

                            toaster.pop('failure', "Twitter Post", "There was an error in publishing your post");

                        }
                    }
                });

            }

        }



});