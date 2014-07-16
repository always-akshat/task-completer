/**
 * Created by Ankit Saxena on 25-06-2014.
 */

var viberApp = angular
    .module('viberApp');


viberApp.controller('vbSurveyCtrl',function($scope,postsurvey){

    $scope.persons = [{"id":1, "value":"einstein", "label":"images/img-check-1.jpg"}, {"id":2, "value":"gandhi","label":"images/img-check-2.jpg"},{"id":3, "value":"tagore","label":"images/img-check-3.jpg"}];
    $scope.awesomeness = [{"id":11, "value":"Text them"},{"id":12, "value":"Call them via internet"},{"id":13, "value":"Form groups"},{"id":14, "value":"Share stickers"}];
    $scope.value1 = [];
    $scope.value2 = [];
    $scope.updateQuestionValue = function(choice){
        $scope.value1 = $scope.value1 || [];
        if(choice.checked){
            $scope.value1 = _.without($scope.value1, choice.value);
        }else{
            $scope.value1.push(choice.value);
            $scope.value1 = _.uniq($scope.value1);
        }
        console.log($scope.value1);
    };

    $scope.updateAwesomeValue = function(choice){
        $scope.value2 = $scope.value2 || [];
        if(choice.checked){
            $scope.value2 = _.without($scope.value2, choice.value);
        }else{
            $scope.value2.push(choice.value);
            $scope.value2 = _.uniq($scope.value2);
        }
        console.log($scope.value2);
    };

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

            switch($scope.value1.length){
                case 1:
                    $scope.person1=$scope.value1[0];
                    break;
                case 2:
                    $scope.person1=$scope.value1[0];
                    $scope.person2=$scope.value1[1];
                    break;
                case 3:
                    $scope.person1=$scope.value1[0];
                    $scope.person2=$scope.value1[1];
                    $scope.person3=$scope.value1[2];
                    break;
            }

            switch($scope.value2.length){
                case 1:
                    $scope.awesome1=$scope.value2[0];
                    break;
                case 2:
                    $scope.awesome1=$scope.value2[0];
                    $scope.awesome2=$scope.value2[1];
                    break;
                case 3:
                    $scope.awesome1=$scope.value2[0];
                    $scope.awesome2=$scope.value2[1];
                    $scope.awesome3=$scope.value2[2];
                    break;
                case 3:
                    $scope.awesome1=$scope.value2[0];
                    $scope.awesome2=$scope.value2[1];
                    $scope.awesome3=$scope.value2[2];
                    $scope.awesome4=$scope.value2[3];
                    break;
            }

            var postObj = {'answers':{'answer1' :$scope.used,'answer2':$scope.country,'answer3':{'awesome1':$scope.awesome1,'awesome2':$scope.awesome2,'awesome3':$scope.awesome3,'awesome4':$scope.awesome4},'answer4':$scope.coolest,'answer5':{'person1':$scope.person1, 'person2':$scope.person2,'person3':$scope.person3}},'taskid':'53a951f9e4b041d6a3190438'};
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


viberApp.controller('vbUploadPhotosCtrl',function($scope, $http, $upload){


    $scope.selected = 0;
    $scope.submitted = 0;
    $scope.done = [];

    $scope.onFileSelect = function($files){
    $scope.files = $files;
    $scope.selected = $scope.files.length;
    };

    $scope.onFileUpload = function(){
        $scope.upload =[];
        for(var i=0;i<$scope.files.length;i++){
            var file = $scope.files[i];
            var ran_num = Math.round(Math.random()*10000);
            $scope.done[i]=ran_num+'$$'+file.name;
            $scope.upload[i]=$upload.upload({
                url: 'https://viber-uploads.s3-ap-southeast-1.amazonaws.com/',
                method: 'POST',
                data: {
                    'key' : 's3UploadExample/'+ ran_num + '$$' + file.name,
                    'acl' : 'public-read',
                    'Content-Type' : file.type,
                    'AWSAccessKeyId': 'AKIAITP3AH32R7ZKQ4XQ',
                    'success_action_status' : '201',
                    'Policy' : 'eyJleHBpcmF0aW9uIjoiMjAxNS03LTE2VDI0OjAwOjAwLjAwMFoiLCJjb25kaXRpb25zIjpbWyJzdGFydHMtd2l0aCIsIiRrZXkiLCJzM1VwbG9hZEV4YW1wbGUvIl0seyJidWNrZXQiOiJ2aWJlci11cGxvYWRzIn0seyJhY2wiOiJwdWJsaWMtcmVhZCJ9LFsic3RhcnRzLXdpdGgiLCIkQ29udGVudC1UeXBlIiwiaW1hZ2UvanBlZyJdLHsic3VjY2Vzc19hY3Rpb25fc3RhdHVzIjoiMjAxIn1dfQ==',
                    'Signature' : 'kzikIBOel+cn8KYLhQIRX73IHhc='
                },
                file: file
            }).then(function(response){
                if(response.status===201){
                    $scope.submitted += 1;
                }
            });
        }
        var reqbody =  {
            "answers" : {
                "name" : $scope.done
            },
            "taskid" : '12a34b56c78d90e'
        };
        $http.put('/students/uploadselfie', reqbody).success(function(data) {
            console.log("success");
        });

    };
});


viberApp.controller('vbinviteFrndsCtrl',function($scope, $http){


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

        FB.ui({method: 'apprequests',
                message: 'Request App!!',
                display : 'popup'},
            function(response) {
                if (response) {
                    var reqObj = {
                        "answers" : {
                            "fb_ids" : response.to
                        },
                        "taskid" : '12a34b56c78d90e'
                    };
                    $http.put('/students/invites', reqObj).success(function(data){
                        console.log('Success Invites');
                    });

                }
            });
    }

});


viberApp.controller('vblikenfollowCtrl',function($scope, $http){

    //Facebook Like
    window.fbAsyncInit = function() {
        FB.init({
            appId: '247429375447674'
        });
        FB.Event.subscribe('edge.create', function(response) {
            var reqbody =  {
                "answers" : {
                    "link" : "https://www.facebook.com/officialviberindia/"
                },
                "platform" : {"facebook": true},
                "taskid" : '12a34b56c78d90e'
            };
            $http.put('/students/likefollow', reqbody).success(function(data){
               console.log("success");

            });
        });
//        FB.Event.subscribe('edge.remove', function(response) {
//        });
    };

    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id; //js.async = true;
        js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=247429375447674";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    //Twitter follow
    window.twttr = (function(d, s, id) {
        var t, js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = "//platform.twitter.com/widgets.js";
        fjs.parentNode.insertBefore(js, fjs);
        return window.twttr || (t = {
            _e: [],
            ready: function(f) {
                t._e.push(f)
            }
        });
    }(document, "script", "twitter-wjs"));

// Wait for the asynchronous resources to load
    twttr.ready(function(twttr) {
        twttr.events.bind('follow', function() {

            var reqbody =  {
                "answers" : {
                    "link": "viber_india"
                },
                "platform" : {"twitter":true },
                "taskid" : '12a34b56c78d90e'
            };
            $http.put('/students/likefollow', reqbody).success(function(data){
                console.log("success");

            });
        });
//        twttr.events.bind('unfollow', function() {
//        });
    });

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