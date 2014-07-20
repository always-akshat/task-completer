/**
 * Created by Ankit Saxena on 25-06-2014.
 */

var viberApp = angular
    .module('viberApp');

Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

viberApp.controller('vbSurveyCtrl',['$scope','$http','toaster','$rootScope', function($scope,$http,toaster, $rootScope){
    $rootScope.ataskcomplete0 = false;
    //$scope.ataskcomplete0 = false;

    var user_tasks = $scope.identity.currentUser.user_tasks;
    var task = _.where(user_tasks,{'task_id':'53a951f9e4b041d6a3190438'})[0];
    if(angular.isObject(task) && task.completed==1) {
        //$scope.ataskcomplete0 = true;
        $rootScope.ataskcomplete0 = true;
    }

    $scope.person = undefined;
    $scope.old = undefined;
    $scope.learning = undefined;

    $scope.submit = function(isValid){
        if(isValid){

            var postObj = {'answers':{'answer1' :$scope.person,'answer2':$scope.old,'answer3':$scope.learning},'taskid':'53a951f9e4b041d6a3190438'};

            $http.post('/survey', JSON.stringify(postObj)).success(function(data){
                if(angular.isObject(data)){
                    if(Object.size(data.completiondata)==4){ // because the service will not return Level inside completiondata if the user is doing the same task again
                        $rootScope.ataskcomplete0 = true;
                        //$scope.ataskcomplete0=true;
                        task.completed=1;
                        $scope.identity.currentUser.complete += data.completiondata.level;
                        $scope.identity.currentUser.points += data.completiondata.points;
                        $scope.identity.currentUser.vibes_transaction.push(data.completiondata.transaction);
                        toaster.pop('success', "Task 1", "You have successfully finished the first task");
                    }
                    console.log("task complete0  "+$scope.taskcomplete0);

                }
            }).error(function(err){

                console.log(err);
                toaster.pop('failure', "Task 1", "There was an error submitting your task, please try again");


            });
//            postsurvey.postSurvey(postObj).then(function(success){
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
}]);

viberApp.controller('vbInsertMobileCtrl',function($scope){


});


viberApp.controller('vbUploadPhotosCtrl',['$scope','$http', '$upload','toaster' , function($scope, $http, $upload, toaster){

    //XML parser
    var user_tasks = $scope.identity.currentUser.user_tasks;
    var task = _.where(user_tasks,{'task_id':'53a9526be4b041d6a3190441'})[0];
    $scope.s3success = false;
    $scope.submitted = 0;
    $scope.added = 0;
    $scope.serSubmitted = [];
    $scope.done = [];
    $scope.taskcomplete1=false;

    _.each(task.answers,function(answer){
        $scope.submitted += answer.name.length;
        _.each(answer.name,function(names){
            $scope.serSubmitted.push(names);
         //$scope.serSubmitted.push(names);
        });
    });
    if(task.completed==1)
        $scope.taskcomplete1=true;

    $scope.onFileSelect = function($files){
        var fbid = $scope.identity.currentUser.facebookid;
        $scope.files = $files;
        $scope.upload =[];
        $scope.s3added = [];
        for(var i=0;i<$scope.files.length;i++){
            var file = $scope.files[i];
            $scope.done[i]=fbid+'$'+file.name;
            $scope.upload[i]=$upload.upload({
                url: 'https://viber-uploads.s3-ap-southeast-1.amazonaws.com/',
                method: 'POST',
                data: {
                    'key' : 's3UploadExample/'+ fbid + '$' + file.name,
                    'acl' : 'public-read',
                    'Content-Type' : 'application',
                    'AWSAccessKeyId': 'AKIAITP3AH32R7ZKQ4XQ',
                    'success_action_status' : '201',
                    'Policy' : 'eyJleHBpcmF0aW9uIjoiMjAxNS03LTE4VDIwOjAwOjAwLjAwMFoiLCJjb25kaXRpb25zIjpbWyJzdGFydHMtd2l0aCIsIiRrZXkiLCJzM1VwbG9hZEV4YW1wbGUvIl0seyJidWNrZXQiOiJ2aWJlci11cGxvYWRzIn0seyJhY2wiOiJwdWJsaWMtcmVhZCJ9LFsic3RhcnRzLXdpdGgiLCIkQ29udGVudC1UeXBlIiwiYXBwbGljYXRpb24iXSx7InN1Y2Nlc3NfYWN0aW9uX3N0YXR1cyI6IjIwMSJ9XX0=',
                    'Signature' : '7OiVs5UxzIJdBbhfgjnuPaX6eKE='
                },
                file: file
            }).then(function(response){
                if(response.status===201){
                    //console.log("File   "+file.name);
                    $scope.added += 1;
                    //xml parser
                    if (window.DOMParser)
                    {
                        parser=new DOMParser();
                        xmlDoc=parser.parseFromString(response.data,"text/xml");
                    }
                    else // Internet Explorer
                    {
                        xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
                        xmlDoc.async=false;
                        xmlDoc.loadXML(txt);
                    }
                    $scope.s3added.push(xmlDoc.getElementsByTagName("Location")[0].childNodes[0].nodeValue);
                    $scope.s3success = true;
                    //$scope.serSubmitted.push(ran_num + '$' + file.name);
                }
            });

        }

    };

    $scope.onFileUpload = function(){

        var reqbody =  {
            "answers" : {
                "name" : $scope.done
            },
            "taskid" : '53a9526be4b041d6a3190441'
        };
//        for(var i=0;i<$scope.done.length;i++) {
//            $scope.serSubmitted.push($scope.done[i]);
//        }
        $http.put('/uploadselfie', reqbody).success(function(data) {
            if(angular.isObject(data)){
                if(Object.size(data.completiondata)==4){
                    $scope.identity.currentUser.complete += data.completiondata.level;
                    $scope.identity.currentUser.points += data.completiondata.points;
                    $scope.identity.currentUser.vibes_transaction.push(data.completiondata.transaction);
                    $scope.taskcomplete1=true;
                    task.completed=1;
                }
                $scope.submitted += $scope.done.length;
                toaster.pop('success', "Task 4", "Your photo was uploaded successfully.");
            }
        });

    };
}]);


viberApp.controller('vbinviteFrndsCtrl',['$scope','$http','toaster', function($scope, $http, toaster){

    var user_tasks = $scope.identity.currentUser.user_tasks;
    var task = _.where(user_tasks,{'task_id':'53a9526be4b041d6a3190440'})[0];
    $scope.taskcomplete2=false;
    if(task.completed==1)
        $scope.taskcomplete2=true;
    // Load the SDK Asynchronously
    (function(d){
        var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement('script'); js.id = id; js.async = true;
        js.src = "//connect.facebook.net/en_US/all.js";
        ref.parentNode.insertBefore(js, ref);
    }(document));

    $scope.sendRequest = function() {
        //var user_id = document.getElementsByName("user_id")[0].value;
        FB.init({
            appId: '493599764105814',
            cookie:true,
            status:true,
            xfbml:true
        });

        FB.ui({method: 'apprequests',
                message: 'Request App!!',
                display : 'popup'},
            function(response) {
                if (response) {
                    var reqObj = {
                        "answers" : {
                            "fb_ids" : response.to
                        },
                        "taskid" : '53a9526be4b041d6a3190440'
                    };
                    $http.put('/invites', reqObj).success(function(data){
                        if(Object.size(data.completiondata)==4){
                            $scope.identity.currentUser.complete += data.completiondata.level;
                            $scope.identity.currentUser.points += data.completiondata.points;
                            $scope.taskcomplete2=true;
                            task.completed=1;
                            $scope.identity.currentUser.vibes_transaction.push(data.completiondata.transaction);
                        }
                        toaster.pop('success', "Task 5", "Your invites were sent successfully.");
                    });

                }
            });
    }

}]);


viberApp.controller('vblikenfollowCtrl',function($scope, $http,$window,$rootScope,toaster) {

    var user_tasks = $scope.identity.currentUser.user_tasks;
    var task = _.where(user_tasks, {'task_id': '53a9526be4b041d6a3190439'})[0];
    $scope.taskcomplete3 = false;

    if (task.completed == 1) {
             $scope.taskcomplete3 = true;
    }

    $rootScope.twfollow = false;
    $rootScope.fblike = false;


    $scope.$watch('fblike', function(currentValue,newValue) {


    if($scope.taskcomplete3==false && currentValue==true) {
        console.log('Executing FB');
        var reqbody = {
            "answers": {
                "link": "https://www.facebook.com/officialviberindia/"
            },
            "platform": {"facebook": true},
            "taskid": '53a9526be4b041d6a3190439'
        };
        $http.put('/likefollow', reqbody).success(function (data) {
            if (angular.isObject(data)) {
                if (Object.size(data.completiondata) == 4) {
                    $scope.identity.currentUser.complete += data.completiondata.level;
                    $scope.taskcomplete3 = true;
                    task.completed=1;
                    $scope.identity.currentUser.points += data.completiondata.points;
                    $scope.identity.currentUser.vibes_transaction.push(data.completiondata.transaction);
                }
                toaster.pop('success', "Facebook Like", "Your Facebook like has been saved");
            }

        });

    }


 });

    $scope.$watch('twfollow', function(currentValue,newValue) {


        if($scope.taskcomplete3==false && currentValue == true) {
            console.log('Executing TW');
            var reqbody = {
                "answers": {
                    "link": "viber_india"
                },
                "platform": {"twitter": true },
                "taskid": '53a9526be4b041d6a3190439'
            };
            $http.put('/likefollow', reqbody).success(function (data) {
                if (Object.size(data.completiondata) == 4) {
                    $scope.identity.currentUser.complete += data.completiondata.level;
                    $scope.taskcomplete3 = true;
                    task.completed=1;
                    $scope.identity.currentUser.points += data.completiondata.points;
                    $scope.identity.currentUser.vibes_transaction.push(data.completiondata.transaction);
                }
                toaster.pop('success', "Twitter Follow", "Your Twitter Follow has been saved");
            });
        }
    });



});

viberApp.controller('vbInsertLinksCtrl',['$scope','$http','toaster', function($scope,$http,toaster /*,$q,postlink */){

    $scope.link = "https://www.youtube.com/watch?v=12n9qipCYno";
    $scope.rate = undefined;
    console.log($scope.identity.currentUser);
    var user_tasks = $scope.identity.currentUser.user_tasks;
    var task = _.where(user_tasks,{'task_id':'53a9526be4b041d6a3190442'})[0];

    $scope.taskcomplete4=false;
    if(task.completed==1)
        $scope.taskcomplete4=true;

    $scope.submitForm = function(isValid){
        if(isValid){
            var reqbody = {
                "answers": {
                    "rate": $scope.rate
                },
                "taskid": '53a9526be4b041d6a3190442'
            };

            $http.put('/stickers',reqbody).success(function(data){
                if(angular.isObject(data)){
                    if(Object.size(data.completiondata)==4){ // because the service will not return Level inside completiondata if the user is doing the same task again
                        $scope.identity.currentUser.complete += data.completiondata.level;
                        $scope.taskcomplete4=true;
                        task.completed=1;
                        $scope.identity.currentUser.points += data.completiondata.points;
                        toaster.pop('success', "Task 3", "You have successfully finished the third task");
                        $scope.identity.currentUser.vibes_transaction.push(data.completiondata.transaction);
                    }
                }
            })
        }
    }

//    var fbsuccess=false, twsuccess=false;
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



}]);