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

viberApp.controller('vbSurveyCtrl',['$scope','$http','toaster','$rootScope','$window', function($scope,$http,toaster, $rootScope, $window){
    $rootScope.ataskcomplete0 = false;

    var user_tasks = $scope.identity.currentUser.user_tasks;
    var task = _.where(user_tasks,{'task_id':'53a951f9e4b041d6a3190438'})[0];
    if(angular.isObject(task) && task.completed==1) {
        $rootScope.ataskcomplete0 = true;
    }

    $scope.person = undefined;
    $scope.old = undefined;
    $scope.learning = undefined;

    $scope.submitsurvey = function(isValid){
        if(isValid){

            var postObj = {'answers':{'answer1' :$scope.person,'answer2':$scope.old,'answer3':$scope.learning},
                            c : $scope.identity.currentUser.c,
                            'taskid':'53a951f9e4b041d6a3190438'};

            $http.put('/survey', JSON.stringify(postObj)).success(function(data){
                if(angular.isObject(data) && angular.isObject(data.completiondata)) {
                    // because the service will not return Level inside completiondata if the user is doing the same task again
                    $rootScope.ataskcomplete0 = true;
                    task.completed = 1;
                    $scope.identity.currentUser.complete1 += data.completiondata.level;
                    $scope.identity.currentUser.points += data.completiondata.points;
                    $scope.identity.currentUser.vibes_transaction.push(data.completiondata.transaction);
                    if ($scope.identity.currentUser.complete1 == 100) {
                        $rootScope.style1 = {'font-size': '14px'};
                        $rootScope.level1iscompleted = true;
                    }
                    toaster.pop('success', "Task 1", "You have successfully finished the first task");
                }
                else
                {
                    $window.location = '/logout';
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

viberApp.controller('vbInsertMobileCtrl',['$scope',function($scope){


}]);


viberApp.controller('vbUploadPhotosCtrl',['$scope','$http', '$upload','toaster','$rootScope','$window' , function($scope, $http, $upload, toaster,$rootScope,$window){

    //XML parser
    var user_tasks = $scope.identity.currentUser.user_tasks;
    var task = _.where(user_tasks,{'task_id':'53a9526be4b041d6a3190441'})[0];
    $scope.s3success = false;
    $scope.submitted = 0;
    $scope.added = 0;
    $scope.serSubmitted = [];
    $scope.done = [];
    $scope.taskcomplete1=false;
    $scope.zeroselected = true;

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
        if($scope.files.length>0) {
            $scope.zeroselected = false;
                var file = $scope.files[0];
                var ran_num = Math.round(Math.random() * 1000);
                $scope.done[0] = fbid + '$' + ran_num + '$' + file.name;
                $scope.upload[0] = $upload.upload({
                    url: 'https://viber-uploads.s3-ap-southeast-1.amazonaws.com/',
                    method: 'POST',
                    data: {
                        'key': 's3UploadExample/' + fbid + '$' + ran_num + '$' + file.name,
                        'acl': 'public-read',
                        'Content-Type': 'application',
                        'AWSAccessKeyId': 'AKIAITP3AH32R7ZKQ4XQ',
                        'success_action_status': '201',
                        'Policy': 'eyJleHBpcmF0aW9uIjoiMjAxNS03LTE4VDIwOjAwOjAwLjAwMFoiLCJjb25kaXRpb25zIjpbWyJzdGFydHMtd2l0aCIsIiRrZXkiLCJzM1VwbG9hZEV4YW1wbGUvIl0seyJidWNrZXQiOiJ2aWJlci11cGxvYWRzIn0seyJhY2wiOiJwdWJsaWMtcmVhZCJ9LFsic3RhcnRzLXdpdGgiLCIkQ29udGVudC1UeXBlIiwiYXBwbGljYXRpb24iXSx7InN1Y2Nlc3NfYWN0aW9uX3N0YXR1cyI6IjIwMSJ9XX0=',
                        'Signature': '7OiVs5UxzIJdBbhfgjnuPaX6eKE='
                    },
                    file: file
                }).then(function (response) {
                    if (response.status === 201) {
                        $scope.added += 1;
                        var xmlDoc;
                        //xml parser
                        if (window.DOMParser) {
                            parser = new DOMParser();
                            xmlDoc = parser.parseFromString(response.data, "text/xml");
                        }
                        else // Internet Explorer
                        {
                            xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
                            xmlDoc.async = false;
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
            c : $scope.identity.currentUser.c,
            "taskid" : '53a9526be4b041d6a3190441'
        };
        $scope.serSubmitted.push($scope.done[0]);
        $scope.s3added = [];
        $scope.zeroselected = true;
        $http.put('/uploadselfie', reqbody).success(function(data) {
            if(angular.isObject(data)){
                if(angular.isObject(data.completiondata)){
                    $scope.identity.currentUser.complete1 += data.completiondata.level;
                    $scope.identity.currentUser.points += data.completiondata.points;
                    $scope.identity.currentUser.vibes_transaction.push(data.completiondata.transaction);
                    if($scope.identity.currentUser.complete1==100){
                        $rootScope.style1 = {'font-size':'14px'};
                        $rootScope.level1iscompleted = true;
                    }
                    $scope.taskcomplete1=true;
                    task.completed=1;
                }
                $scope.submitted += $scope.done.length;
                $scope.added = 0;
                $scope.s3success = false;
                toaster.pop('success', "Task 4", "Your photo was uploaded successfully.");
            }
            else
            {
                $window.location = '/logout';
            }
        }).error(function(err){

            console.log(err);
            toaster.pop('failure', "Task 4", "There was an error submitting your task, please try again");
        });

    };
}]);


viberApp.controller('vbinviteFrndsCtrl',['$scope','$http','toaster','$rootScope','$window', function($scope, $http, toaster,$rootScope,$window){

    var user_tasks = $scope.identity.currentUser.user_tasks;
    var task = _.where(user_tasks,{'task_id':'53a9526be4b041d6a3190440'})[0];
    $scope.taskcomplete2=false;
    if(task.completed==1)
        $scope.taskcomplete2=true;

    window.fbAsyncInit = function() {
        FB.init({
            appId: '493599764105814',
            //appId : '247429375447674', // App ID
            status     : true, // check login status
            cookie     : true, // enable cookies to allow the server to access the session
            xfbml      : true  // parse XFBML
        });
    };

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
                    if (response.to) {
                        var reqObj = {
                            "answers": {
                                "fb_ids": response.to
                            },
                            c : $scope.identity.currentUser.c,
                            "taskid": '53a9526be4b041d6a3190440'
                        };
                        $http.put('/invites', reqObj).success(function (data) {
                            if (angular.isObject(data)) {
                                if (angular.isObject(data.completiondata)) {
                                    $scope.identity.currentUser.complete1 += data.completiondata.level;
                                    $scope.identity.currentUser.points += data.completiondata.points;
                                    if ($scope.identity.currentUser.complete1 == 100) {
                                        $rootScope.style1 = {'font-size': '14px'};
                                        $rootScope.level1iscompleted = true;
                                    }
                                    $scope.taskcomplete2 = true;
                                    task.completed = 1;
                                    $scope.identity.currentUser.vibes_transaction.push(data.completiondata.transaction);
                                    toaster.pop('success', "Task 5", "Your invites were sent successfully.");
                                }
                            }
                            else {
                                $window.location = '/logout';
                            }
                        }).error(function (err) {
                            console.log(err);
                            toaster.pop('failure', "Task 5", "There was an error submitting your task, please try again");
                        });
                    }
                }
            });
    }

}]);


viberApp.controller('vblikenfollowCtrl',['$scope', '$http','$window','$rootScope','toaster', function($scope, $http,$window,$rootScope,toaster) {

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
                c : $scope.identity.currentUser.c,
                "taskid": '53a9526be4b041d6a3190439'
            };
            $http.put('/likefollow', reqbody).success(function (data) {
                if (angular.isObject(data)) {
                    if (angular.isObject(data.completiondata)) {
                        $scope.identity.currentUser.complete1 += data.completiondata.level;
                        $scope.taskcomplete3 = true;
                        task.completed = 1;
                        $scope.identity.currentUser.points += data.completiondata.points;
                        // $rootScope.level1stagecompletion += data.completiondata.level;
                        if ($scope.identity.currentUser.complete1 == 100) {
                            $rootScope.style1 = {'font-size': '14px'};
                            $rootScope.level1iscompleted = true;
                        }
                        $scope.identity.currentUser.vibes_transaction.push(data.completiondata.transaction);

                    }
                    toaster.pop('success', "Facebook Like", "Your Facebook like has been saved");
                }
                else {
                    $window.location = '/logout';
                }
            }).error(function(err) {

                console.log(err);
                toaster.pop('failure', "Task 2", "There was an error submitting your task, please try again");
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
                c : $scope.identity.currentUser.c,
                "taskid": '53a9526be4b041d6a3190439'
            };
            $http.put('/likefollow', reqbody).success(function (data) {
                if(angular.isObject(data)) {
                    if (angular.isObject(data.completiondata)) {
                        $scope.identity.currentUser.complete1 += data.completiondata.level;
                        $scope.taskcomplete3 = true;
                        task.completed = 1;
                        $scope.identity.currentUser.points += data.completiondata.points;
                        //$rootScope.level1stagecompletion += data.completiondata.level;
                        if ($scope.identity.currentUser.complete1 == 100) {
                            $rootScope.style1 = {'font-size': '14px'};$rootScope.level1iscompleted = true;
                        }
                        $scope.identity.currentUser.vibes_transaction.push(data.completiondata.transaction);
                    }
                    toaster.pop('success', "Twitter Follow", "Your Twitter Follow has been saved");
                }
                else
                {
                    $window.location = '/logout';
                }
            }).error(function(err){

                console.log(err);
                toaster.pop('failure', "Task 2", "There was an error submitting your task, please try again");


            });
        }
    });

    (function($){
        // Registering new tracking handler
        $.fn.iframeTracker = function(handler){
            // Storing the new handler into handler list
            $.iframeTracker.handlersList.push(handler);

            // Binding boundary listener
            $(this)
                .bind('mouseover', {handler: handler}, function(e){
                    e.data.handler.over = true;
                    console.log("Mouseover");
                    try{ e.data.handler.overCallback(this); } catch(ex){}
                })
                .bind('mouseout',  {handler: handler}, function(e){
                    e.data.handler.over = false;
                    $.iframeTracker.focusRetriever.focus();
                    console.log("Mouseout");
                    try{ e.data.handler.outCallback(this); } catch(ex){}
                });
        };

        // Iframe tracker common object
        $.iframeTracker = {
            // Attributes
            focusRetriever: null,  // Element used for restoring focus on window (element)
            focusRetrieved: false, // Says if the focus was retrived on the current page (bool)
            handlersList: [],      // Store a list of every trakers (created by calling $(selector).iframeTracker...)
            isIE8AndOlder: false,  // true for Internet Explorer 8 and older

            // Init (called once on document ready)
            init: function(){
                // Determine browser version (IE8-) ($.browser.msie is deprecated since jQuery 1.9)
                try{
                    if( $.browser.msie == true && $.browser.version < 9 ){
                        this.isIE8AndOlder = true;
                    }
                } catch(ex){
                    try{
                        var matches = navigator.userAgent.match(/(msie) ([\w.]+)/i);
                        if( matches[2] < 9 ){
                            this.isIE8AndOlder = true;
                        }
                    } catch(ex2){}
                }

                // Listening window blur
                $(window).focus();
                $(window).blur(function(e){
                    $.iframeTracker.windowLoseFocus(e);
                });

                // Focus retriever
                $('body').append('<div style="position:fixed; top:0; left:0; overflow:hidden;"><input style="position:absolute; left:-300px;" type="text" value="" id="focus_retriever" readonly="true" /></div>');
                this.focusRetriever = $('#focus_retriever');
                this.focusRetrieved = false;
                // Focus back to page
                $(document).mousemove(function(e){
                    if( document.activeElement && document.activeElement.tagName == 'IFRAME' ){
                        $.iframeTracker.focusRetriever.focus();
                        $.iframeTracker.focusRetrieved = true;
                    }
                });
                // Blur doesn't works correctly on IE8-, so we need to trigger it manually
                if( this.isIE8AndOlder ){
                    this.focusRetriever.blur(function(e){
                        e.stopPropagation();
                        e.preventDefault();
                        $.iframeTracker.windowLoseFocus(e);
                    });
                }

                // Keep focus on window (fix bug IE8-, focusable elements)
                if( this.isIE8AndOlder ){
                    $('body').click(function(e){ $(window).focus(); });
                    $('form').click(function(e){ e.stopPropagation(); });

                    // Same thing for "post-DOMready" created forms (issue #6)
                    try{
                        $('body').on('click', 'form', function(e){ e.stopPropagation(); });
                    } catch(ex){
                        console.log("[iframeTracker] Please update jQuery to 1.7 or newer. (exception: " + ex.message + ")");
                    }
                }
            },

            // Blur on window => calling blurCallback for every handler with over=true
            windowLoseFocus: function(event){
                for(var i in this.handlersList){
                    if( this.handlersList[i].over == true ){
                        console.log("Blur callback");
                        try{ this.handlersList[i].blurCallback(); } catch(ex){}
                    }
                }
            }
        };

        // Init the iframeTracker on document ready
        $(document).ready(function(){
            $.iframeTracker.init();
            console.log("Iframetracker init");
        });
    })(jQuery);

    $('#chaljatw').iframeTracker({blurCallback: function(){


        var scope = angular.element(document).scope();

        scope.$apply(function(){
            scope.$root.twfollow=true;

        });

        //scope.$apply();
    }});


    $('#chaljafb').iframeTracker({blurCallback: function(){

        console.log('clicked fb');
        var scope = angular.element(document).scope();

        scope.$apply(function(){
            scope.$root.fblike=true;

        });


    }});

}]);

viberApp.controller('vbInsertLinksCtrl',['$scope','$http','toaster','$rootScope','$window', function($scope,$http,toaster ,$rootScope,$window/*,$q,postlink */){

    $scope.rate = undefined;
    console.log($scope.identity.currentUser);
    var user_tasks = $scope.identity.currentUser.user_tasks;
    var task = _.where(user_tasks,{'task_id':'53a9526be4b041d6a3190442'})[0];

    $scope.taskcomplete4=false;
    if(task.completed==1)
        $scope.taskcomplete4=true;

    $scope.submitForml1t3 = function (isValid) {
        if (isValid) {
            var reqbody = {
                "answers": {
                    "rate": $scope.rate
                },
                c : $scope.identity.currentUser.c,
                "taskid": '53a9526be4b041d6a3190442'
            };

            $http.put('/stickers', reqbody).success(function (data) {
                if (angular.isObject(data)) {
                    if (angular.isObject(data.completiondata)) { // because the service will not return Level inside completiondata if the user is doing the same task again
                        $scope.identity.currentUser.complete1 += data.completiondata.level;
                        $scope.taskcomplete4 = true;
                        task.completed = 1;
                        $scope.identity.currentUser.points += data.completiondata.points;
                        //$rootScope.level1stagecompletion += data.completiondata.level;
                        if($scope.identity.currentUser.complete1==100){
                            $rootScope.style1 = {'font-size':'14px'};$rootScope.level1iscompleted = true;
                        }
                        toaster.pop('success', "Task 3", "You have successfully finished the third task");
                        $scope.identity.currentUser.vibes_transaction.push(data.completiondata.transaction);
                    }
                }
                else
                {
                    $window.location = '/logout';
                }
            }).error(function(err){

                console.log(err);
                toaster.pop('failure', "Task 3", "There was an error submitting your task, please try again");


            });
        }
    }

}]);


//Level 2 Tasks

viberApp.controller('vbKnowViberCtrl',['$rootScope', '$scope','toaster', '$http','$window',function($rootScope, $scope, toaster, $http,$window){
    $rootScope.taskcomplete21 = false;
    var user_tasks = $scope.identity.currentUser.user_tasks;
    var task = _.where(user_tasks,{'task_id':'53d1e789bb5c82917b3a3a41'})[0];
    if(angular.isObject(task) && task.completed==1) {
        $rootScope.taskcomplete21 = true;
    }
    $scope.task1que1 = undefined;
    $scope.task1que2 = undefined;
    $scope.task1que3 = undefined;
    $scope.task1que4 = undefined;
    $scope.task1que5 = undefined;
    $scope.task1que6 = undefined;
    $scope.task1que7 = undefined;
    $scope.task1que8 = undefined;
    $scope.task1que9 = undefined;
    $scope.task1que10 = undefined;


    $scope.submitquestions = function(isValid){
        if(isValid){
            var postObj = {'answers':{'answer1' :$scope.task1que1,'answer2':$scope.task1que2,'answer3':$scope.task1que3,'answer4' :$scope.task1que4,
                                'answer5':$scope.task1que5,'answer6':$scope.task1que6,'answer7' :$scope.task1que7,'answer8':$scope.task1que8,'answer9':$scope.task1que9,'answer10':$scope.task1que10},
                                    c : $scope.identity.currentUser.c,
                                    'taskid':'53d1e789bb5c82917b3a3a41'};

            $http.put('/knowviber', JSON.stringify(postObj)).success(function(data){
                if(angular.isObject(data)){
                    if(angular.isObject(data.completiondata)){ // because the service will not return Level inside completiondata if the user is doing the same task again
                        $rootScope.taskcomplete21 = true;
                        task.completed=1;
                        $scope.identity.currentUser.complete2 += data.completiondata.level;
                        $scope.identity.currentUser.points += data.completiondata.points;
                        //$rootScope.level2stagecompletion += data.completiondata.level;
                        if($scope.identity.currentUser.complete2==100){
                            $rootScope.style2 = {'font-size':'14px'};
                            $rootScope.level2iscompleted = true;
                        }
                        $scope.identity.currentUser.vibes_transaction.push(data.completiondata.transaction);
                        toaster.pop('success', "Task 1", "You have successfully finished the first task");
                    }

                }
                else
                {
                    $window.location = '/logout';
                }
            }).error(function(err){

                console.log(err);
                toaster.pop('failure', "Task 1", "There was an error submitting your task, please try again");


            });
        }
    };

}]);

viberApp.controller('vbActivateCtrl',['$scope', '$upload', '$http', 'toaster','$rootScope','$window',function($scope, $upload, $http, toaster,$rootScope,$window){
    var user_tasks = $scope.identity.currentUser.user_tasks;
    var task = _.where(user_tasks,{'task_id':'53d1e85abb5c82917b3a3a42'})[0];
    $scope.s3success22 = false;
    $scope.submitted22 = 0;
    $scope.added22 = 0;
    $scope.serSubmitted22 = [];
    $scope.done22 = [];
    $scope.taskcomplete22=false;
    $scope.zeroselected22 = true;

        _.each(task.answers, function (answer) {
            $scope.submitted22 += answer.name.length;
            _.each(answer.name, function (names) {
                $scope.serSubmitted22.push(names);
            });
        });

    if(angular.isObject(task) && task.completed==1)
        $scope.taskcomplete22=true;

    $scope.onFileSelecttask2 = function($files){

        var fbid = $scope.identity.currentUser.facebookid;
        $scope.files22 = $files;
        $scope.upload22 =[];
        $scope.s3added22 = [];
        if($scope.files22.length>0) {
            $scope.zeroselected22 = false;
            var file = $scope.files22[0];
            var ran_num = Math.round(Math.random() * 1000);
            $scope.done22[0] = fbid + '$' + ran_num + '$' + file.name;
            $scope.upload22[0] = $upload.upload({
                url: 'https://viber-uploads.s3-ap-southeast-1.amazonaws.com/',
                method: 'POST',
                data: {
                    'key': 'level2task2/' + fbid + '$' + ran_num + '$' + file.name,
                    'acl': 'public-read',
                    'Content-Type': 'application',
                    'AWSAccessKeyId': 'AKIAITP3AH32R7ZKQ4XQ',
                    'success_action_status': '201',
                    'Policy': 'eyJleHBpcmF0aW9uIjoiMjAxNS03LTI2VDEyOjAwOjAwLjAwMFoiLCJjb25kaXRpb25zIjpbWyJzdGFydHMtd2l0aCIsIiRrZXkiLCJsZXZlbDJ0YXNrMi8iXSx7ImJ1Y2tldCI6InZpYmVyLXVwbG9hZHMifSx7ImFjbCI6InB1YmxpYy1yZWFkIn0sWyJzdGFydHMtd2l0aCIsIiRDb250ZW50LVR5cGUiLCJhcHBsaWNhdGlvbiJdLHsic3VjY2Vzc19hY3Rpb25fc3RhdHVzIjoiMjAxIn1dfQ==',
                    'Signature': 'cibG6Z0+a109JGj8XLucjaGD168='
                },
                file: file
            }).then(function (response) {
                if (response.status === 201) {
                    $scope.added22 += 1;
                    var xmlDoc;
                    //xml parser
                    if (window.DOMParser) {
                        parser = new DOMParser();
                        xmlDoc = parser.parseFromString(response.data, "text/xml");
                    }
                    else // Internet Explorer
                    {
                        xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
                        xmlDoc.async = false;
                        xmlDoc.loadXML(txt);
                    }
                    $scope.s3added22.push(xmlDoc.getElementsByTagName("Location")[0].childNodes[0].nodeValue);
                    $scope.s3success22 = true;
                    //$scope.serSubmitted.push(ran_num + '$' + file.name);
                }
            });

        }
    };
    $scope.onFileUploadtask2 = function(){

        var reqbody =  {
            "answers" : {
                "name" : $scope.done22
            },
            c : $scope.identity.currentUser.c,
            "taskid" : '53d1e85abb5c82917b3a3a42'
        };
        $scope.serSubmitted22.push($scope.done22[0]);
        $scope.s3added22 = [];
        $scope.zeroselected22 = true;
        $http.put('/uploadphoto', reqbody).success(function(data) {
            if(angular.isObject(data)){
                if(angular.isObject(data.completiondata)){
                    $scope.identity.currentUser.complete2 += data.completiondata.level;
                    $scope.identity.currentUser.points += data.completiondata.points;
                    //$rootScope.level2stagecompletion += data.completiondata.level;
                    if($scope.identity.currentUser.complete2==100){
                        $rootScope.style2 = {'font-size':'14px'};
                        $rootScope.level2iscompleted = true;
                    }
                    $scope.identity.currentUser.vibes_transaction.push(data.completiondata.transaction);
                    $scope.taskcomplete22=true;
                    task.completed=1;
                }
                $scope.submitted22 += $scope.done22.length;
                $scope.added22 = 0;
                $scope.s3success22 = false;
                toaster.pop('success', "Task 2", "Your photo was uploaded successfully.");
            }
            else
            {
                $window.location = '/logout';
            }
        }).error(function(err){

            console.log(err);
            toaster.pop('failure', "Task 2", "There was an error submitting your task, please try again");


        });

    };

}]);

viberApp.controller('vbGoodvibesMindCtrl',['$scope','$upload', '$http','toaster','$rootScope','$window',function($scope, $upload, $http, toaster, $rootScope,$window){

    var user_tasks = $scope.identity.currentUser.user_tasks;
    var task = _.where(user_tasks,{'task_id':'53d1e8c9bb5c82917b3a3a43'})[0];
    $scope.s3success23 = false;
    $scope.submitted23 = 0;
    $scope.added23 = 0;
    $scope.serSubmitted23 = [];
    $scope.done23 = [];
    $scope.taskcomplete23=false;
    $scope.zeroselected23 = true;


    _.each(task.answers, function (answer) {
        $scope.submitted23 += answer.name.length;
        _.each(answer.name, function (names) {
            $scope.serSubmitted23.push(names);
            //$scope.serSubmitted.push(names);
        });
    });

    if(angular.isObject(task) && task.completed==1)
        $scope.taskcomplete23=true;

    $scope.onFileSelecttask3 = function($files){

        var fbid = $scope.identity.currentUser.facebookid;
        $scope.files23 = $files;
        $scope.upload23 =[];
        $scope.s3added23 = [];
        if($scope.files23.length>0) {
            $scope.zeroselected23 = false;
            var file = $scope.files23[0];
            var ran_num = Math.round(Math.random() * 1000);
            $scope.done23[0] = fbid + '$' + ran_num + '$' + file.name;
            $scope.upload23[0] = $upload.upload({
                url: 'https://viber-uploads.s3-ap-southeast-1.amazonaws.com/',
                method: 'POST',
                data: {
                    'key': 'level2task3/' + fbid + '$' + ran_num + '$' + file.name,
                    'acl': 'public-read',
                    'Content-Type': 'application',
                    'AWSAccessKeyId': 'AKIAITP3AH32R7ZKQ4XQ',
                    'success_action_status': '201',
                    'Policy': 'eyJleHBpcmF0aW9uIjoiMjAxNS03LTI2VDEyOjAwOjAwLjAwMFoiLCJjb25kaXRpb25zIjpbWyJzdGFydHMtd2l0aCIsIiRrZXkiLCJsZXZlbDJ0YXNrMy8iXSx7ImJ1Y2tldCI6InZpYmVyLXVwbG9hZHMifSx7ImFjbCI6InB1YmxpYy1yZWFkIn0sWyJzdGFydHMtd2l0aCIsIiRDb250ZW50LVR5cGUiLCJhcHBsaWNhdGlvbiJdLHsic3VjY2Vzc19hY3Rpb25fc3RhdHVzIjoiMjAxIn1dfQ==',
                    'Signature': 'HfuP7Wr/G2I1IsRIWoGgmM6GWvM='
                },
                file: file
            }).then(function (response) {
                if (response.status === 201) {
                    $scope.added23 += 1;
                    var xmlDoc;
                    //xml parser
                    if (window.DOMParser) {
                        parser = new DOMParser();
                        xmlDoc = parser.parseFromString(response.data, "text/xml");
                    }
                    else // Internet Explorer
                    {
                        xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
                        xmlDoc.async = false;
                        xmlDoc.loadXML(txt);
                    }
                    $scope.s3added23.push(xmlDoc.getElementsByTagName("Location")[0].childNodes[0].nodeValue);
                    $scope.s3success23 = true;
                    //$scope.serSubmitted.push(ran_num + '$' + file.name);
                }
            });

        }
    };
    $scope.onFileUploadtask3 = function(){

        var reqbody =  {
            "answers" : {
                "name" : $scope.done23
            },
            c : $scope.identity.currentUser.c,
            "taskid" : '53d1e8c9bb5c82917b3a3a43'

        };
        $scope.serSubmitted23.push($scope.done23[0]);
        $scope.s3added23 = [];
        $scope.zeroselected23 = true;
        $http.put('/uploadphoto', reqbody).success(function(data) {
            if(angular.isObject(data)){
                if(angular.isObject(data.completiondata)){
                    $scope.identity.currentUser.complete2 += data.completiondata.level;
                    $scope.identity.currentUser.points += data.completiondata.points;
                    //$rootScope.level2stagecompletion += data.completiondata.level;
                    if($scope.identity.currentUser.complete2==100){
                        $rootScope.style2 = {'font-size':'14px'};
                        $rootScope.level2iscompleted = true;
                    }
                    $scope.identity.currentUser.vibes_transaction.push(data.completiondata.transaction);
                    $scope.taskcomplete23=true;
                    task.completed=1;
                }
                $scope.submitted23 += $scope.done23.length;
                $scope.added23 = 0;
                $scope.s3success23 = false;
                toaster.pop('success', "Task 3", "Your photo was uploaded successfully.");
            }
            else
            {
                $window.location = '/logout';
            }
        }).error(function(err){

            console.log(err);
            toaster.pop('failure', "Task 3", "There was an error submitting your task, please try again");


        });

    };

}]);

viberApp.controller('vbTaskYuwaCtrl',['$scope','$http','toaster','$rootScope','$window',function($scope, $http,toaster,$rootScope,$window){
    $scope.rateyuwa = undefined;
    var user_tasks = $scope.identity.currentUser.user_tasks;
    var task= _.where(user_tasks,{'task_id':'53d1e90cbb5c82917b3a3a44'})[0];

    $scope.taskcomplete24=false;
    if(angular.isObject(task) && task.completed==1)
        $scope.taskcomplete24=true;

        $scope.submitForml2t4 = function (isValid) {
            if (isValid) {
                var reqbody = {
                    "answers": {
                        "rate": $scope.rateyuwa
                    },
                    c : $scope.identity.currentUser.c,
                    "taskid": '53d1e90cbb5c82917b3a3a44'
                };

                $http.put('/rating', reqbody).success(function (data) {
                    if (angular.isObject(data)) {
                        if (angular.isObject(data.completiondata)) { // because the service will not return Level inside completiondata if the user is doing the same task again
                            $scope.identity.currentUser.complete2 += data.completiondata.level;
                            $scope.taskcomplete24 = true;
                            task.completed = 1;
                            $scope.identity.currentUser.points += data.completiondata.points;
                            //$rootScope.level2stagecompletion += data.completiondata.level;
                            if($scope.identity.currentUser.complete2==100){
                                $rootScope.style2 = {'font-size':'14px'};
                                $rootScope.level2iscompleted = true;
                            }
                            toaster.pop('success', "Task 4", "You have successfully finished the fourth task");
                            $scope.identity.currentUser.vibes_transaction.push(data.completiondata.transaction);
                        }
                    }
                    else
                    {
                        $window.location = '/logout';
                    }
                }).error(function(err){

                    console.log(err);
                    toaster.pop('failure', "Task 4", "There was an error submitting your task, please try again");


                });
            }
        }


}]);

viberApp.controller('vbSupportYuwaCtrl',['$scope','$upload','$http','toaster','$rootScope','$window',function($scope, $upload, $http, toaster,$rootScope,$window){

    var user_tasks = $scope.identity.currentUser.user_tasks;
    var task = _.where(user_tasks,{'task_id':'53d1ec3bbb5c82917b3a3a45'})[0];
    $scope.s3success25 = false;
    $scope.submitted25 = 0;
    $scope.added25 = 0;
    $scope.serSubmitted25 = [];
    $scope.done25 = [];
    $scope.taskcomplete25=false;
    $scope.zeroselected25 = true;

    if(angular.isObject(task.answers)) {
        _.each(task.answers, function (answer) {
            $scope.submitted25 += answer.name.length;
            _.each(answer.name, function (names) {
                $scope.serSubmitted25.push(names);
            });
        });
    }
    if(angular.isObject(task) && task.completed==1)
        $scope.taskcomplete25=true;

    $scope.onFileSelecttask5 = function($files){

        var fbid = $scope.identity.currentUser.facebookid;
        $scope.files25 = $files;
        $scope.upload25 =[];
        $scope.s3added25 = [];
        if($scope.files25.length>0) {
            $scope.zeroselected25 = false;
            var file = $scope.files25[0];
            var ran_num = Math.round(Math.random() * 1000);
            $scope.done25[0] = fbid + '$' + ran_num + '$' + file.name;
            $scope.upload25[0] = $upload.upload({
                url: 'https://viber-uploads.s3-ap-southeast-1.amazonaws.com/',
                method: 'POST',
                data: {
                    'key': 'level2task5/' + fbid + '$' + ran_num + '$' + file.name,
                    'acl': 'public-read',
                    'Content-Type': 'application',
                    'AWSAccessKeyId': 'AKIAITP3AH32R7ZKQ4XQ',
                    'success_action_status': '201',
                    'Policy': 'eyJleHBpcmF0aW9uIjoiMjAxNS03LTI2VDEyOjAwOjAwLjAwMFoiLCJjb25kaXRpb25zIjpbWyJzdGFydHMtd2l0aCIsIiRrZXkiLCJsZXZlbDJ0YXNrNS8iXSx7ImJ1Y2tldCI6InZpYmVyLXVwbG9hZHMifSx7ImFjbCI6InB1YmxpYy1yZWFkIn0sWyJzdGFydHMtd2l0aCIsIiRDb250ZW50LVR5cGUiLCJhcHBsaWNhdGlvbiJdLHsic3VjY2Vzc19hY3Rpb25fc3RhdHVzIjoiMjAxIn1dfQ==',
                    'Signature': '4JcfOEgNdZIIEtFIaQ+PzmcZqN4='
                },
                file: file
            }).then(function (response) {
                if (response.status === 201) {
                    $scope.added25 += 1;
                    var xmlDoc;
                    //xml parser
                    if (window.DOMParser) {
                        parser = new DOMParser();
                        xmlDoc = parser.parseFromString(response.data, "text/xml");
                    }
                    else // Internet Explorer
                    {
                        xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
                        xmlDoc.async = false;
                        xmlDoc.loadXML(txt);
                    }
                    $scope.s3added25.push(xmlDoc.getElementsByTagName("Location")[0].childNodes[0].nodeValue);
                    $scope.s3success25 = true;
                    //$scope.serSubmitted.push(ran_num + '$' + file.name);
                }
            });

        }
    };
    $scope.onFileUploadtask5 = function(){

        var reqbody =  {
            "answers" : {
                "name" : $scope.done25
            },
            c : $scope.identity.currentUser.c,
            "taskid" : '53d1ec3bbb5c82917b3a3a45'
        };
        $scope.serSubmitted25.push($scope.done25[0]);
        $scope.s3added25 = [];
        $scope.zeroselected25 = true;
        $http.put('/uploadphoto', reqbody).success(function(data) {
            if(angular.isObject(data)){
                if(angular.isObject(data.completiondata)){
                    $scope.identity.currentUser.complete2 += data.completiondata.level;
                    $scope.identity.currentUser.points += data.completiondata.points;
                    //$rootScope.level2stagecompletion += data.completiondata.level;
                    if($scope.identity.currentUser.complete2==100){
                        $rootScope.style2 = {'font-size':'14px'};
                        $rootScope.level2iscompleted = true;
                    }
                    $scope.identity.currentUser.vibes_transaction.push(data.completiondata.transaction);
                    $scope.taskcomplete25=true;
                    task.completed=1;
                }
                $scope.submitted25 += $scope.done25.length;
                $scope.added25 = 0;
                $scope.s3success25 = false;
                toaster.pop('success', "Task 5", "Your photo was uploaded successfully.");
            }
            else
            {
                $window.location = '/logout';
            }
        }).error(function(err){

            console.log(err);
            toaster.pop('failure', "Task 5", "There was an error submitting your task, please try again");
        });

    };

}]);

viberApp.controller('vbGoodvibesMeanCtrl',['$scope','$upload','$http','toaster','$rootScope','$window',function($scope, $upload, $http, toaster,$rootScope,$window){

    var user_tasks = $scope.identity.currentUser.user_tasks;
    var task = _.where(user_tasks,{'task_id':'53db763c68425b29ecc82f4e'})[0];
    $scope.s3success31 = false;
    $scope.submitted31 = 0;
    $scope.added31 = 0;
    $scope.serSubmitted31 = [];
    $scope.done31 = [];
    $scope.taskcomplete31=false;
    $scope.zeroselected31 = true;
    $rootScope.tasklimit31 = false;

    if(angular.isObject(task.answers)) {
        _.each(task.answers, function (answer) {
            $scope.submitted31 += answer.name.length;
            _.each(answer.name, function (names) {
                $scope.serSubmitted31.push(names);
            });
        });
    }
    if($scope.submitted31>=10)
        $rootScope.tasklimit31 = true;

    if(angular.isObject(task) && task.completed==1)
        $scope.taskcomplete31=true;

    $scope.onFileSelectl3task1 = function($files){

        var fbid = $scope.identity.currentUser.facebookid;
        $scope.files31 = $files;
        $scope.upload31 =[];
        $scope.s3added31 = [];
        if($scope.files31.length>0) {
            $scope.zeroselected31 = false;
            var file = $scope.files31[0];
            var ran_num = Math.round(Math.random() * 1000);
            $scope.done31[0] = fbid + '$' + ran_num + '$' + file.name;
            $scope.upload31[0] = $upload.upload({
                url: 'https://viber-uploads.s3-ap-southeast-1.amazonaws.com/',
                method: 'POST',
                data: {
                    'key': 'level3task1/' + fbid + '$' + ran_num + '$' + file.name,
                    'acl': 'public-read',
                    'Content-Type': 'application',
                    'AWSAccessKeyId': 'AKIAITP3AH32R7ZKQ4XQ',
                    'success_action_status': '201',
                    'Policy': 'eyJleHBpcmF0aW9uIjoiMjAxNS04LTJUOTowMDowMC4wMDBaIiwiY29uZGl0aW9ucyI6W1sic3RhcnRzLXdpdGgiLCIka2V5IiwibGV2ZWwzdGFzazEvIl0seyJidWNrZXQiOiJ2aWJlci11cGxvYWRzIn0seyJhY2wiOiJwdWJsaWMtcmVhZCJ9LFsic3RhcnRzLXdpdGgiLCIkQ29udGVudC1UeXBlIiwiYXBwbGljYXRpb24iXSx7InN1Y2Nlc3NfYWN0aW9uX3N0YXR1cyI6IjIwMSJ9XX0=',
                    'Signature': 't7RlrgHklk3bjuh6HIsUTWtpQrM='
                },
                file: file
            }).then(function (response) {
                if (response.status === 201) {
                    $scope.added31 += 1;
                    var xmlDoc;
                    //xml parser
                    if (window.DOMParser) {
                        parser = new DOMParser();
                        xmlDoc = parser.parseFromString(response.data, "text/xml");
                    }
                    else // Internet Explorer
                    {
                        xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
                        xmlDoc.async = false;
                        xmlDoc.loadXML(txt);
                    }
                    $scope.s3added31.push(xmlDoc.getElementsByTagName("Location")[0].childNodes[0].nodeValue);
                    $scope.s3success31 = true;
                    //$scope.serSubmitted.push(ran_num + '$' + file.name);
                }
            });

        }
    };
    $scope.onFileUploadl3task1 = function(){

        var reqbody =  {
            "answers" : {
                "name" : $scope.done31
            },
            c : $scope.identity.currentUser.c,
            "taskid" : '53db763c68425b29ecc82f4e'
        };
        $scope.serSubmitted31.push($scope.done31[0]);
        $scope.s3added31 = [];
        $scope.zeroselected31 = true;
        $http.put('/uploadphoto', reqbody).success(function(data) {
            if(angular.isObject(data)){

                $scope.submitted31 += $scope.done31.length;
                $scope.added31 = 0;
                $scope.s3success31 = false;
                if($scope.submitted31>=10)
                    $rootScope.tasklimit31 = true;
                //If get completion data then update level 3 completion
                if(angular.isObject(data.completiondata)){
                    if(data.completiondata.level)
                        $scope.identity.currentUser.complete3 += data.completiondata.level;

                    $scope.identity.currentUser.points += data.completiondata.points;
                    if($scope.identity.currentUser.complete3==100){
                        $rootScope.style3 = {'font-size':'14px'};
                        if($rootScope.tasklimit31 == true)
                            $rootScope.level3iscompleted = true;
                    }
                    $scope.identity.currentUser.vibes_transaction.push(data.completiondata.transaction);
                    $scope.taskcomplete31=true;
                    task.completed=1;
                }
                toaster.pop('success', "Task 1", "Your photo was uploaded successfully.");
            }
            else
            {
                $window.location = '/logout';
            }
        }).error(function(err){

            console.log(err);
            toaster.pop('failure', "Task 1", "There was an error submitting your task, please try again");
        });
    };
}]);

viberApp.controller('vbThinkofViberCtrl',['$scope','$upload','$http','toaster','$rootScope','$window',function($scope, $upload, $http, toaster,$rootScope,$window){

    var user_tasks = $scope.identity.currentUser.user_tasks;
    var task = _.where(user_tasks,{'task_id':'53db77ab68425b29ecc82f51'})[0];
    $scope.s3success32 = false;
    $scope.submitted32 = 0;
    $scope.added32 = 0;
    $scope.serSubmitted32 = [];
    $scope.done32 = [];
    $scope.taskcomplete32=false;
    $scope.zeroselected32 = true;

    if(angular.isObject(task.answers)) {
        _.each(task.answers, function (answer) {
            $scope.submitted32 += answer.name.length;
            _.each(answer.name, function (names) {
                $scope.serSubmitted32.push(names);
            });
        });
    }
    if(angular.isObject(task) && task.completed==1)
        $scope.taskcomplete32=true;

    $scope.onFileSelectl3task2 = function($files){

        var fbid = $scope.identity.currentUser.facebookid;
        $scope.files32 = $files;
        $scope.upload32 =[];
        $scope.s3added32 = [];
        if($scope.files32.length>0) {
            $scope.zeroselected32 = false;
            var file = $scope.files32[0];
            var ran_num = Math.round(Math.random() * 1000);
            $scope.done32[0] = fbid + '$' + ran_num + '$' + file.name;
            $scope.upload32[0] = $upload.upload({
                url: 'https://viber-uploads.s3-ap-southeast-1.amazonaws.com/',
                method: 'POST',
                data: {
                    'key': 'level3task2/' + fbid + '$' + ran_num + '$' + file.name,
                    'acl': 'public-read',
                    'Content-Type': 'application',
                    'AWSAccessKeyId': 'AKIAITP3AH32R7ZKQ4XQ',
                    'success_action_status': '201',
                    'Policy': 'eyJleHBpcmF0aW9uIjoiMjAxNS04LTJUMTQ6MDA6MDAuMDAwWiIsImNvbmRpdGlvbnMiOltbInN0YXJ0cy13aXRoIiwiJGtleSIsImxldmVsM3Rhc2syLyJdLHsiYnVja2V0IjoidmliZXItdXBsb2FkcyJ9LHsiYWNsIjoicHVibGljLXJlYWQifSxbInN0YXJ0cy13aXRoIiwiJENvbnRlbnQtVHlwZSIsImFwcGxpY2F0aW9uIl0seyJzdWNjZXNzX2FjdGlvbl9zdGF0dXMiOiIyMDEifV19',
                    'Signature': 'f8f0rDODccKRMiUXSKMpH+FAU7Y='
                },
                file: file
            }).then(function (response) {
                if (response.status === 201) {
                    $scope.added32 += 1;
                    var xmlDoc;
                    //xml parser
                    if (window.DOMParser) {
                        parser = new DOMParser();
                        xmlDoc = parser.parseFromString(response.data, "text/xml");
                    }
                    else // Internet Explorer
                    {
                        xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
                        xmlDoc.async = false;
                        xmlDoc.loadXML(txt);
                    }
                    $scope.s3added32.push(xmlDoc.getElementsByTagName("Location")[0].childNodes[0].nodeValue);
                    $scope.s3success32 = true;
                    //$scope.serSubmitted.push(ran_num + '$' + file.name);
                }
            });

        }
    };
    $scope.onFileUploadl3task2 = function(){

        var reqbody =  {
            "answers" : {
                "name" : $scope.done32
            },
            c : $scope.identity.currentUser.c,
            "taskid" : '53db77ab68425b29ecc82f51'
        };
        $scope.serSubmitted32.push($scope.done32[0]);
        $scope.s3added32 = [];
        $scope.zeroselected32 = true;
        $http.put('/uploadphoto', reqbody).success(function(data) {
            if(angular.isObject(data)){
                if(angular.isObject(data.completiondata)){
                    $scope.identity.currentUser.complete3 += data.completiondata.level;
                    $scope.identity.currentUser.points += data.completiondata.points;
                    //$rootScope.level2stagecompletion += data.completiondata.level;
                    if($scope.identity.currentUser.complete3==100){
                        $rootScope.style3 = {'font-size':'14px'};
                        $rootScope.level3iscompleted = true;
                    }
                    $scope.identity.currentUser.vibes_transaction.push(data.completiondata.transaction);
                    $scope.taskcomplete32=true;
                    task.completed=1;
                }
                $scope.submitted32 += $scope.done32.length;
                $scope.added32 = 0;
                $scope.s3success32 = false;
                toaster.pop('success', "Task 2", "Your photo was uploaded successfully.");
            }
            else
            {
                $window.location = '/logout';
            }
        }).error(function(err){

            console.log(err);
            toaster.pop('failure', "Task 2", "There was an error submitting your task, please try again");
        });
    };
}]);


viberApp.controller('vbBacktoSchoolCtrl',['$scope','$upload','$http','toaster','$rootScope','$window',function($scope, $upload, $http, toaster,$rootScope,$window){

    var user_tasks = $scope.identity.currentUser.user_tasks;
    var task = _.where(user_tasks,{'task_id':'53db781e68425b29ecc82f6a'})[0];
    $scope.s3success33 = false;
    $scope.submitted33 = 0;
    $scope.added33 = 0;
    $scope.serSubmitted33 = [];
    $scope.done33 = [];
    $scope.taskcomplete33=false;
    $scope.zeroselected33 = true;

    if(angular.isObject(task.answers)) {
        _.each(task.answers, function (answer) {
            $scope.submitted33 += answer.name.length;
            _.each(answer.name, function (names) {
                $scope.serSubmitted33.push(names);
            });
        });
    }
    if(angular.isObject(task) && task.completed==1)
        $scope.taskcomplete33=true;

    $scope.onFileSelectl3task3 = function($files){

        var fbid = $scope.identity.currentUser.facebookid;
        $scope.files33 = $files;
        $scope.upload33 =[];
        $scope.s3added33 = [];
        if($scope.files33.length>0) {
            $scope.zeroselected33 = false;
            var file = $scope.files33[0];
            var ran_num = Math.round(Math.random() * 1000);
            $scope.done33[0] = fbid + '$' + ran_num + '$' + file.name;
            $scope.upload33[0] = $upload.upload({
                url: 'https://viber-uploads.s3-ap-southeast-1.amazonaws.com/',
                method: 'POST',
                data: {
                    'key': 'level3task3/' + fbid + '$' + ran_num + '$' + file.name,
                    'acl': 'public-read',
                    'Content-Type': 'application',
                    'AWSAccessKeyId': 'AKIAITP3AH32R7ZKQ4XQ',
                    'success_action_status': '201',
                    'Policy': 'eyJleHBpcmF0aW9uIjoiMjAxNS04LTJUMTA6MDA6MDAuMDAwWiIsImNvbmRpdGlvbnMiOltbInN0YXJ0cy13aXRoIiwiJGtleSIsImxldmVsM3Rhc2szLyJdLHsiYnVja2V0IjoidmliZXItdXBsb2FkcyJ9LHsiYWNsIjoicHVibGljLXJlYWQifSxbInN0YXJ0cy13aXRoIiwiJENvbnRlbnQtVHlwZSIsImFwcGxpY2F0aW9uIl0seyJzdWNjZXNzX2FjdGlvbl9zdGF0dXMiOiIyMDEifV19',
                    'Signature': 'JNIFDKa05RXxCcLXJ6KLUQc9fAs='
                },
                file: file
            }).then(function (response) {
                if (response.status === 201) {
                    $scope.added33 += 1;
                    var xmlDoc;
                    //xml parser
                    if (window.DOMParser) {
                        parser = new DOMParser();
                        xmlDoc = parser.parseFromString(response.data, "text/xml");
                    }
                    else // Internet Explorer
                    {
                        xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
                        xmlDoc.async = false;
                        xmlDoc.loadXML(txt);
                    }
                    $scope.s3added33.push(xmlDoc.getElementsByTagName("Location")[0].childNodes[0].nodeValue);
                    $scope.s3success33 = true;
                    //$scope.serSubmitted.push(ran_num + '$' + file.name);
                }
            });

        }
    };
    $scope.onFileUploadl3task3 = function(){

        var reqbody =  {
            "answers" : {
                "name" : $scope.done33
            },
            c : $scope.identity.currentUser.c,
            "taskid" : '53db781e68425b29ecc82f6a'
        };
        $scope.serSubmitted33.push($scope.done33[0]);
        $scope.s3added33 = [];
        $scope.zeroselected33 = true;
        $http.put('/uploadphoto', reqbody).success(function(data) {
            if(angular.isObject(data)){
                if(angular.isObject(data.completiondata)){
                    $scope.identity.currentUser.complete3 += data.completiondata.level;
                    $scope.identity.currentUser.points += data.completiondata.points;
                    //$rootScope.level2stagecompletion += data.completiondata.level;
                    if($scope.identity.currentUser.complete3==100){
                        $rootScope.style3 = {'font-size':'14px'};
                        $rootScope.level3iscompleted = true;
                    }
                    $scope.identity.currentUser.vibes_transaction.push(data.completiondata.transaction);
                    $scope.taskcomplete33=true;
                    task.completed=1;
                }
                $scope.submitted33 += $scope.done33.length;
                $scope.added33 = 0;
                $scope.s3success33 = false;
                toaster.pop('success', "Task 3", "Your photo was uploaded successfully.");
            }
            else
            {
                $window.location = '/logout';
            }
        }).error(function(err){

            console.log(err);
            toaster.pop('failure', "Task 3", "There was an error submitting your task, please try again");
        });
    };
}]);

viberApp.controller('vbDoodleWarCtrl',['$scope','$upload','$http','toaster','$rootScope','$window',function($scope, $upload, $http, toaster,$rootScope,$window){

    var user_tasks = $scope.identity.currentUser.user_tasks;
    var task = _.where(user_tasks,{'task_id':'53db787f68425b29ecc82f6b'})[0];
    $scope.s3success34 = false;
    $scope.submitted34 = 0;
    $scope.added34 = 0;
    $scope.serSubmitted34 = [];
    $scope.done34 = [];
    $scope.taskcomplete34=false;
    $scope.zeroselected34 = true;

    if(angular.isObject(task.answers)) {
        _.each(task.answers, function (answer) {
            $scope.submitted34 += answer.name.length;
            _.each(answer.name, function (names) {
                $scope.serSubmitted34.push(names);
            });
        });
    }
    if(angular.isObject(task) && task.completed==1)
        $scope.taskcomplete34=true;

    $scope.onFileSelectl3task4 = function($files){

        var fbid = $scope.identity.currentUser.facebookid;
        $scope.files34 = $files;
        $scope.upload34 =[];
        $scope.s3added34 = [];
        if($scope.files34.length>0) {
            $scope.zeroselected34 = false;
            var file = $scope.files34[0];
            var ran_num = Math.round(Math.random() * 1000);
            $scope.done34[0] = fbid + '$' + ran_num + '$' + file.name;
            $scope.upload34[0] = $upload.upload({
                url: 'https://viber-uploads.s3-ap-southeast-1.amazonaws.com/',
                method: 'POST',
                data: {
                    'key': 'level3task4/' + fbid + '$' + ran_num + '$' + file.name,
                    'acl': 'public-read',
                    'Content-Type': 'application',
                    'AWSAccessKeyId': 'AKIAITP3AH32R7ZKQ4XQ',
                    'success_action_status': '201',
                    'Policy': 'eyJleHBpcmF0aW9uIjoiMjAxNS04LTJUMTA6MDA6MDAuMDAwWiIsImNvbmRpdGlvbnMiOltbInN0YXJ0cy13aXRoIiwiJGtleSIsImxldmVsM3Rhc2s0LyJdLHsiYnVja2V0IjoidmliZXItdXBsb2FkcyJ9LHsiYWNsIjoicHVibGljLXJlYWQifSxbInN0YXJ0cy13aXRoIiwiJENvbnRlbnQtVHlwZSIsImFwcGxpY2F0aW9uIl0seyJzdWNjZXNzX2FjdGlvbl9zdGF0dXMiOiIyMDEifV19',
                    'Signature': 'MyJrMv29eIlEBmTu+LrHNM680Fo='
                },
                file: file
            }).then(function (response) {
                if (response.status === 201) {
                    $scope.added34 += 1;
                    var xmlDoc;
                    //xml parser
                    if (window.DOMParser) {
                        parser = new DOMParser();
                        xmlDoc = parser.parseFromString(response.data, "text/xml");
                    }
                    else // Internet Explorer
                    {
                        xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
                        xmlDoc.async = false;
                        xmlDoc.loadXML(txt);
                    }
                    $scope.s3added34.push(xmlDoc.getElementsByTagName("Location")[0].childNodes[0].nodeValue);
                    $scope.s3success34 = true;
                    //$scope.serSubmitted.push(ran_num + '$' + file.name);
                }
            });

        }
    };
    $scope.onFileUploadl3task4 = function(){

        var reqbody =  {
            "answers" : {
                "name" : $scope.done34
            },
            c : $scope.identity.currentUser.c,
            "taskid" : '53db787f68425b29ecc82f6b'
        };
        $scope.serSubmitted34.push($scope.done34[0]);
        $scope.s3added34 = [];
        $scope.zeroselected34 = true;
        $http.put('/uploadphoto', reqbody).success(function(data) {
            if(angular.isObject(data)){
                if(angular.isObject(data.completiondata)){
                    $scope.identity.currentUser.complete3 += data.completiondata.level;
                    $scope.identity.currentUser.points += data.completiondata.points;
                    //$rootScope.level2stagecompletion += data.completiondata.level;
                    if($scope.identity.currentUser.complete3==100){
                        $rootScope.style3 = {'font-size':'14px'};
                        $rootScope.level3iscompleted = true;
                    }
                    $scope.identity.currentUser.vibes_transaction.push(data.completiondata.transaction);
                    $scope.taskcomplete34=true;
                    task.completed=1;
                }
                $scope.submitted34 += $scope.done34.length;
                $scope.added34 = 0;
                $scope.s3success34 = false;
                toaster.pop('success', "Task 4", "Your photo was uploaded successfully.");
            }
            else
            {
                $window.location = '/logout';
            }
        }).error(function(err){

            console.log(err);
            toaster.pop('failure', "Task 4", "There was an error submitting your task, please try again");
        });
    };
}]);

viberApp.controller('vbdaysofGoodvibesCtrl',['$scope','$http','toaster','$rootScope','$window',function($scope, $http,toaster,$rootScope,$window){
    $scope.link = "https://www.youtube.com/watch?v=qQLhhS0vI8E&list=UUzeiZ7_xnJMepZN8h0kONig";
    var user_tasks = $scope.identity.currentUser.user_tasks;
    var task= _.where(user_tasks,{'task_id':'53db790668425b29ecc82f6d'})[0];

    $scope.taskcomplete35=false;
    if(angular.isObject(task) && task.completed==1)
        $scope.taskcomplete35=true;

    if (angular.isObject($scope.identity.currentUser.facebook) && $scope.identity.currentUser.facebook.authorized == '1') $scope.checkedfb = true;

    window.fbAsyncInit = function() {
        FB.init({
            appId     : '493599764105814',
            //appId      : '247429375447674',// App ID
            status     : true, // check login status
            cookie     : true, // enable cookies to allow the server to access the session
            xfbml      : true  // parse XFBML
        });
    };
    (function(d){
        var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement('script'); js.id = id; js.async = true;
        js.src = "//connect.facebook.net/en_US/all.js";
        ref.parentNode.insertBefore(js, ref);
    }(document));

    $scope.sharevideo = function (isValid) {

        if (isValid) {

            FB.ui(
                {
                    method: 'feed',
                    name: '#Goodvibes community video',
                    link: 'https://www.youtube.com/watch?v=qQLhhS0vI8E&list=UUzeiZ7_xnJMepZN8h0kONig',
                    //caption: 'Reference Documentation',
                    description: 'Take a look at the #GoodVibes community. Feel the excitement! Feel the passion! Feel the #GoodVibes',
                    user_message_prompt: 'Share your thoughts about RELL'
                },
                function(response) {
                    if (response && response.post_id) {
                        var reqObj = {
                            answers: {message: "Post was published on facebook",
                                link: response.post_id
                            },
                            platform: {facebook: 1},
                            c : $scope.identity.currentUser.c,
                            taskid: '53db790668425b29ecc82f6d'
                        };
                        $http.post('/socialshare', reqObj).success(function (data) {

                            if (angular.isObject(data)) {
                                if (angular.isObject(data.completiondata)) {
                                    $scope.identity.currentUser.complete3 += data.completiondata.level;
                                    $scope.identity.currentUser.points += data.completiondata.points;
                                    //$rootScope.level2stagecompletion += data.completiondata.level;
                                    if ($scope.identity.currentUser.complete3 == 100) {
                                        $rootScope.style3 = {'font-size': '14px'};
                                        $rootScope.level3iscompleted = true;
                                    }
                                    $scope.identity.currentUser.vibes_transaction.push(data.completiondata.transaction);
                                    $scope.taskcomplete35 = true;
                                    task.completed = 1;
                                }
                                toaster.pop('success', "Task 5", "Your Message has been posted successfully to Facebook");
                            }
                            else {
                                $window.location = '/logout';
                            }
                        }).error(function (err) {

                            console.log(err);
                            toaster.pop('failure', "Facebook Post", "There was an error in publishing your post");
                        });
                    } else {
                       toaster.pop('failure', "Facebook Post", "There was an error in publishing your post");
                    }
                }
            );
        };
    };
}]);

viberApp.controller('vbLetsMakeDifferenceCtrl',['$scope','$upload','$http','toaster','$rootScope','$window',function($scope, $upload, $http, toaster,$rootScope,$window){
    var user_tasks = $scope.identity.currentUser.user_tasks;
    var task = _.where(user_tasks,{'task_id':'53f43394aa1725fd72ea601c'})[0];
    $scope.s3success41 = false;
    $scope.submitted41 = 0;
    $scope.added41 = 0;
    $scope.serSubmitted41 = [];
    $scope.done41 = [];
    $scope.taskcomplete41=false;
    $scope.zeroselected41 = true;

    if(angular.isObject(task.answers)) {
        _.each(task.answers, function (answer) {
            $scope.submitted41 += answer.name.length;
            _.each(answer.name, function (names) {
                $scope.serSubmitted41.push(names);
            });
        });
    }
    if(angular.isObject(task) && task.completed==1)
        $scope.taskcomplete41=true;

    $scope.onFileSelectl4task1 = function($files){

        var fbid = $scope.identity.currentUser.facebookid;
        $scope.files41 = $files;
        $scope.upload41 =[];
        $scope.s3added41 = [];
        if($scope.files41.length>0) {
            $scope.zeroselected41 = false;
            var file = $scope.files41[0];
            var ran_num = Math.round(Math.random() * 1000);
            $scope.done41[0] = fbid + '$' + ran_num + '$' + file.name;
            $scope.upload41[0] = $upload.upload({
                url: 'https://viber-uploads.s3-ap-southeast-1.amazonaws.com/',
                method: 'POST',
                data: {
                    'key': 'level4task1/' + fbid + '$' + ran_num + '$' + file.name,
                    'acl': 'public-read',
                    'Content-Type': 'application',
                    'AWSAccessKeyId': 'AKIAITP3AH32R7ZKQ4XQ',
                    'success_action_status': '201',
                    'Policy': 'eyJleHBpcmF0aW9uIjoiMjAxNS04LTIxVDEwOjAwOjAwLjAwMFoiLCJjb25kaXRpb25zIjpbWyJzdGFydHMtd2l0aCIsIiRrZXkiLCJsZXZlbDR0YXNrMS8iXSx7ImJ1Y2tldCI6InZpYmVyLXVwbG9hZHMifSx7ImFjbCI6InB1YmxpYy1yZWFkIn0sWyJzdGFydHMtd2l0aCIsIiRDb250ZW50LVR5cGUiLCJhcHBsaWNhdGlvbiJdLHsic3VjY2Vzc19hY3Rpb25fc3RhdHVzIjoiMjAxIn1dfQ==',
                    'Signature': 'LZJsJqreaSQUAIDF3jhnK3MtLh4='
                },
                file: file
            }).then(function (response) {
                if (response.status === 201) {
                    $scope.added41 += 1;
                    var xmlDoc;
                    //xml parser
                    if (window.DOMParser) {
                        parser = new DOMParser();
                        xmlDoc = parser.parseFromString(response.data, "text/xml");
                    }
                    else // Internet Explorer
                    {
                        xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
                        xmlDoc.async = false;
                        xmlDoc.loadXML(txt);
                    }
                    $scope.s3added41.push(xmlDoc.getElementsByTagName("Location")[0].childNodes[0].nodeValue);
                    $scope.s3success41 = true;
                    //$scope.serSubmitted.push(ran_num + '$' + file.name);
                }
            });

        }
    };
    $scope.onFileUploadl4task1 = function(){

        var reqbody =  {
            "answers" : {
                "name" : $scope.done41
            },
            c : $scope.identity.currentUser.c,
            "taskid" : '53f43394aa1725fd72ea601c'
        };
        $scope.serSubmitted41.push($scope.done41[0]);
        $scope.s3added41 = [];
        $scope.zeroselected41 = true;
        $http.put('/uploadphoto', reqbody).success(function(data) {
            if(angular.isObject(data)){
                if(angular.isObject(data.completiondata)){
                    $scope.identity.currentUser.complete4 += data.completiondata.level;
                    $scope.identity.currentUser.points += data.completiondata.points;
                    //$rootScope.level2stagecompletion += data.completiondata.level;
                    if($scope.identity.currentUser.complete4==100){
                        $rootScope.style4 = {'font-size':'14px'};
                        $rootScope.level4iscompleted = true;
                    }
                    $scope.identity.currentUser.vibes_transaction.push(data.completiondata.transaction);
                    $scope.taskcomplete41=true;
                    task.completed=1;
                }
                $scope.submitted41 += $scope.done41.length;
                $scope.added41 = 0;
                $scope.s3success41 = false;
                toaster.pop('success', "Task 1", "Your photo was uploaded successfully.");
            }
            else
            {
                $window.location = '/logout';
            }
        }).error(function(err){

            console.log(err);
            toaster.pop('failure', "Task 1", "There was an error submitting your task, please try again");
        });
    };

}]);

viberApp.controller('vbWeekendGoaCtrl',['$scope','$upload','$http','toaster','$rootScope','$window',function($scope, $upload, $http, toaster,$rootScope,$window){
    var user_tasks = $scope.identity.currentUser.user_tasks;
    var task = _.where(user_tasks,{'task_id':'53f433a9aa1725fd72ea601d'})[0];
    $scope.s3success42 = false;
    $scope.submitted42 = 0;
    $scope.added42 = 0;
    $scope.serSubmitted42 = [];
    $scope.done42 = [];
    $scope.taskcomplete42=false;
    $scope.zeroselected42 = true;

    if(angular.isObject(task.answers)) {
        _.each(task.answers, function (answer) {
            $scope.submitted42 += answer.name.length;
            _.each(answer.name, function (names) {
                $scope.serSubmitted42.push(names);
            });
        });
    }
    if(angular.isObject(task) && task.completed==1)
        $scope.taskcomplete42=true;

    $scope.onFileSelectl4task2 = function($files){

        var fbid = $scope.identity.currentUser.facebookid;
        $scope.files42 = $files;
        $scope.upload42 =[];
        $scope.s3added42 = [];
        if($scope.files42.length>0) {
            $scope.zeroselected42 = false;
            var file = $scope.files42[0];
            var ran_num = Math.round(Math.random() * 1000);
            $scope.done42[0] = fbid + '$' + ran_num + '$' + file.name;
            $scope.upload42[0] = $upload.upload({
                url: 'https://viber-uploads.s3-ap-southeast-1.amazonaws.com/',
                method: 'POST',
                data: {
                    'key': 'level4task2/' + fbid + '$' + ran_num + '$' + file.name,
                    'acl': 'public-read',
                    'Content-Type': 'application',
                    'AWSAccessKeyId': 'AKIAITP3AH32R7ZKQ4XQ',
                    'success_action_status': '201',
                    'Policy': 'eyJleHBpcmF0aW9uIjoiMjAxNS04LTIxVDEwOjAwOjAwLjAwMFoiLCJjb25kaXRpb25zIjpbWyJzdGFydHMtd2l0aCIsIiRrZXkiLCJsZXZlbDR0YXNrMi8iXSx7ImJ1Y2tldCI6InZpYmVyLXVwbG9hZHMifSx7ImFjbCI6InB1YmxpYy1yZWFkIn0sWyJzdGFydHMtd2l0aCIsIiRDb250ZW50LVR5cGUiLCJhcHBsaWNhdGlvbiJdLHsic3VjY2Vzc19hY3Rpb25fc3RhdHVzIjoiMjAxIn1dfQ==',
                    'Signature': 'QyLA547dCVjmNcnnCztl3DY80Cg='
                },
                file: file
            }).then(function (response) {
                if (response.status === 201) {
                    $scope.added42 += 1;
                    var xmlDoc;
                    //xml parser
                    if (window.DOMParser) {
                        parser = new DOMParser();
                        xmlDoc = parser.parseFromString(response.data, "text/xml");
                    }
                    else // Internet Explorer
                    {
                        xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
                        xmlDoc.async = false;
                        xmlDoc.loadXML(txt);
                    }
                    $scope.s3added42.push(xmlDoc.getElementsByTagName("Location")[0].childNodes[0].nodeValue);
                    $scope.s3success42 = true;
                    //$scope.serSubmitted.push(ran_num + '$' + file.name);
                }
            });

        }
    };
    $scope.onFileUploadl4task2 = function(){

        var reqbody =  {
            "answers" : {
                "name" : $scope.done42
            },
            c : $scope.identity.currentUser.c,
            "taskid" : '53f433a9aa1725fd72ea601d'
        };
        $scope.serSubmitted42.push($scope.done42[0]);
        $scope.s3added42 = [];
        $scope.zeroselected42 = true;
        $http.put('/uploadphoto', reqbody).success(function(data) {
            if(angular.isObject(data)){
                if(angular.isObject(data.completiondata)){
                    $scope.identity.currentUser.complete4 += data.completiondata.level;
                    $scope.identity.currentUser.points += data.completiondata.points;
                    //$rootScope.level2stagecompletion += data.completiondata.level;
                    if($scope.identity.currentUser.complete4==100){
                        $rootScope.style4 = {'font-size':'14px'};
                        $rootScope.level4iscompleted = true;
                    }
                    $scope.identity.currentUser.vibes_transaction.push(data.completiondata.transaction);
                    $scope.taskcomplete42=true;
                    task.completed=1;
                }
                $scope.submitted42 += $scope.done42.length;
                $scope.added42 = 0;
                $scope.s3success42 = false;
                toaster.pop('success', "Task 2", "Your photo was uploaded successfully.");
            }
            else
            {
                $window.location = '/logout';
            }
        }).error(function(err){

            console.log(err);
            toaster.pop('failure', "Task 2", "There was an error submitting your task, please try again");
        });
    };

}]);

viberApp.controller('vbMemeComeTrueCtrl',['$scope','$upload','$http','toaster','$rootScope','$window',function($scope, $upload, $http, toaster,$rootScope,$window){
    var user_tasks = $scope.identity.currentUser.user_tasks;
    var task = _.where(user_tasks,{'task_id':'53f433beaa1725fd72ea601e'})[0];
    $scope.s3success43 = false;
    $scope.submitted43 = 0;
    $scope.added43 = 0;
    $scope.serSubmitted43 = [];
    $scope.done43 = [];
    $scope.taskcomplete43=false;
    $scope.zeroselected43 = true;
    $scope.memeradio = undefined;

    window.fbAsyncInit = function() {
        console.log('initiating facebook');
        FB.init({
            appId     : '493599764105814',
            //appId: '247429375447674',// App ID
            status: true, // check login status
            cookie: true, // enable cookies to allow the server to access the session
            xfbml: true  // parse XFBML
        });
    };
    (function(d){
        var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement('script'); js.id = id; js.async = true;
        js.src = "//connect.facebook.net/en_US/all.js";
        ref.parentNode.insertBefore(js, ref);
    }(document));

    if(angular.isObject(task.answers)) {
        _.each(task.answers, function (answer) {
            $scope.submitted43 += answer.name.length;
            _.each(answer.name, function (names) {
                $scope.serSubmitted43.push(names);
            });
        });
    }
    if(angular.isObject(task) && task.completed==1)
        $scope.taskcomplete43=true;

    $scope.onFileSelectl4task3 = function($files){
        console.log($scope.memeradio);
        var fbid = $scope.identity.currentUser.facebookid;
        $scope.files43 = $files;
        $scope.upload43 =[];
        $scope.s3added43 = [];
        if($scope.files43.length>0) {
            $scope.zeroselected43 = false;
            var file = $scope.files43[0];
            var ran_num = Math.round(Math.random() * 1000);
            $scope.done43[0] = fbid + '$' + ran_num + '$' + file.name;
            $scope.upload43[0] = $upload.upload({
                url: 'https://viber-uploads.s3-ap-southeast-1.amazonaws.com/',
                method: 'POST',
                data: {
                    'key': 'level4task3/' + fbid + '$' + ran_num + '$' + file.name,
                    'acl': 'public-read',
                    'Content-Type': 'application',
                    'AWSAccessKeyId': 'AKIAITP3AH32R7ZKQ4XQ',
                    'success_action_status': '201',
                    'Policy': 'eyJleHBpcmF0aW9uIjoiMjAxNS04LTIxVDEwOjAwOjAwLjAwMFoiLCJjb25kaXRpb25zIjpbWyJzdGFydHMtd2l0aCIsIiRrZXkiLCJsZXZlbDR0YXNrMy8iXSx7ImJ1Y2tldCI6InZpYmVyLXVwbG9hZHMifSx7ImFjbCI6InB1YmxpYy1yZWFkIn0sWyJzdGFydHMtd2l0aCIsIiRDb250ZW50LVR5cGUiLCJhcHBsaWNhdGlvbiJdLHsic3VjY2Vzc19hY3Rpb25fc3RhdHVzIjoiMjAxIn1dfQ==',
                    'Signature': 'yEThizlvLwJYr9bMHA8KMIEstdE='
                },
                file: file
            }).then(function (response) {
                if (response.status === 201) {
                    $scope.added43 += 1;
                    var xmlDoc;
                    //xml parser
                    if (window.DOMParser) {
                        parser = new DOMParser();
                        xmlDoc = parser.parseFromString(response.data, "text/xml");
                    }
                    else // Internet Explorer
                    {
                        xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
                        xmlDoc.async = false;
                        xmlDoc.loadXML(txt);
                    }
                    $scope.s3added43.push(xmlDoc.getElementsByTagName("Location")[0].childNodes[0].nodeValue);
                    $scope.s3success43 = true;
                    //$scope.serSubmitted.push(ran_num + '$' + file.name);
                }
            });

        }
    };
    $scope.onFileUploadl4task3 = function(){
        if($scope.done43.length != 0)
            $scope.linktoshare = "https://viber-uploads.s3-ap-southeast-1.amazonaws.com/level4task3/"+$scope.done43;
        else
            $scope.linktoshare = "https://s3-ap-southeast-1.amazonaws.com/viber-uploads/"+$scope.memeradio;
        //https://viber-uploads.s3-ap-southeast-1.amazonaws.com/level4task3/$scope.done43

        FB.getLoginStatus(function(response) {
            console.log(response);
            if (response.status === 'connected') {
                    FB.api( "/me/photos", "POST",
                        {"url": $scope.linktoshare }
                    , function (response) {

                            if(response && response.post_id) {
                                $scope.postid = response.post_id

                                var reqbody =  {
                                    "answers" : {
                                        "name" : $scope.postid,
                                        "post" : 1
                                    },
                                    c : $scope.identity.currentUser.c,
                                    "taskid" : '53f433beaa1725fd72ea601e'
                                };

                                $scope.serSubmitted43.push($scope.done43[0]);
                                $scope.s3added43 = [];
                                $scope.zeroselected43 = true;
                                $http.put('/fbsharepost', reqbody).success(function(data) {
                                    if (angular.isObject(data)) {
                                        if (angular.isObject(data.completiondata)) {
                                            $scope.identity.currentUser.complete4 += data.completiondata.level;
                                            $scope.identity.currentUser.points += data.completiondata.points;
                                            //$rootScope.level2stagecompletion += data.completiondata.level;
                                            if ($scope.identity.currentUser.complete4 == 100) {
                                                $rootScope.style4 = {'font-size': '14px'};
                                                $rootScope.level4iscompleted = true;
                                            }
                                            $scope.identity.currentUser.vibes_transaction.push(data.completiondata.transaction);
                                            $scope.taskcomplete43 = true;
                                            task.completed = 1;
                                        }
                                        $scope.submitted43 += $scope.done45.length;
                                        $scope.added43 = 0;
                                        $scope.s3success43 = false;
                                        toaster.pop('success', "Task 3", "Your photo was uploaded successfully.");
                                    }
                                    else {
                                        $window.location = '/logout';
                                    }
                                }).error(function(err) {

                                    console.log(err);
                                    toaster.pop('failure', "Task 3", "There was an error submitting your task, please try again");
                                });
                            }
                    });
//                FB.api( "/690783934290236_711288332239796/likes"
//                    , function (response) {
//                        console.log(response);
//                    });
//                FB.api( "/690783934290236_711288332239796"
//                    , function (response) {
//                        console.log("Data  " + JSON.stringify(response));
//                    });
            }
            else {
                console.log("Not connected");
            }
        });
    };

}]);

viberApp.controller('vbGoodvibesMeanLevel4Ctrl',['$scope','$http','toaster','$rootScope','$window',function($scope, $http, toaster,$rootScope,$window){

    var user_tasks = $scope.identity.currentUser.user_tasks;
    var task = _.where(user_tasks,{'task_id':'53f433cbaa1725fd72ea601f'})[0];
    $scope.taskcomplete44=false;
    //$scope.postmessage = undefined;

    window.fbAsyncInit = function() {
        FB.init({
            appId     : '493599764105814',
            //appId: '247429375447674',// App ID
            status: true, // check login status
            cookie: true, // enable cookies to allow the server to access the session
            xfbml: true  // parse XFBML
        });
    };
    (function(d){
        var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement('script'); js.id = id; js.async = true;
        js.src = "//connect.facebook.net/en_US/all.js";
        ref.parentNode.insertBefore(js, ref);
    }(document));

    if(angular.isObject(task) && task.completed==1)
        $scope.taskcomplete44=true;

    $scope.sharePost = function(isValid){
        if(isValid){

            FB.getLoginStatus(function(response) {
                console.log(response);
                if (response.status === 'connected') {
                    FB.api(
                        "/me/feed",
                        "POST",
                        {
                            "message": $scope.postmessage
                        },
                        function (response) {
                            console.log(response);
                            if (response && !response.error) {

                                console.log(response);
                                console.log(FB.getAuthResponse());
                                $scope.postid = response.id;
                                var reqbody = {
                                    "answers": {
                                        "name": $scope.postid,
                                        "post": 1
                                    },
                                    c: $scope.identity.currentUser.c,
                                    "taskid": '53f433cbaa1725fd72ea601f'
                                };
                                $http.put('/fbsharepost', reqbody).success(function (data) {
                                    if (angular.isObject(data)) {
                                        if (angular.isObject(data.completiondata)) {
                                            $scope.identity.currentUser.complete4 += data.completiondata.level;
                                            $scope.identity.currentUser.points += data.completiondata.points;
                                            //$rootScope.level2stagecompletion += data.completiondata.level;
                                            if ($scope.identity.currentUser.complete4 == 100) {
                                                $rootScope.style4 = {'font-size': '14px'};
                                                $rootScope.level4iscompleted = true;
                                            }
                                            $scope.identity.currentUser.vibes_transaction.push(data.completiondata.transaction);
                                            $scope.taskcomplete44 = true;
                                            task.completed = 1;
                                        }
                                        toaster.pop('success', "Task 4", "Your status is posted successfully.");
                                    }
                                    else {
                                        $window.location = '/logout';
                                    }
                                }).error(function (err) {

                                    console.log(err);
                                    toaster.pop('failure', "Task 4", "There was an error submitting your task, please try again");
                                });
                            }
                        }
                    );
                }
            });
        }
    }
}]);

viberApp.controller('vbGoodvibesDesktopCtrl',['$scope','$upload','$http','toaster','$rootScope','$window',function($scope, $upload, $http, toaster,$rootScope,$window){
    var user_tasks = $scope.identity.currentUser.user_tasks;
    var task = _.where(user_tasks,{'task_id':'53f433daaa1725fd72ea6020'})[0];
    $scope.s3success45 = false;
    $scope.submitted45 = 0;
    $scope.added45 = 0;
    $scope.serSubmitted45 = [];
    $scope.done45 = [];
    $scope.taskcomplete45=false;
    $scope.zeroselected45 = true;
    $scope.tasklimit45 = false;

    if(angular.isObject(task.answers)) {
        _.each(task.answers, function (answer) {
            $scope.submitted31 += answer.name.length;
            _.each(answer.name, function (names) {
                $scope.serSubmitted45.push(names);
            });
        });
    }
    if($scope.submitted45>=2)
        $scope.tasklimit45 = true;

    if(angular.isObject(task) && task.completed==1)
        $scope.taskcomplete45=true;

    $scope.onFileSelectl4task5 = function($files){
        var fbid = $scope.identity.currentUser.facebookid;
        $scope.files45 = $files;
        $scope.upload45 =[];
        $scope.s3added45 = [];
        if($scope.files45.length>0) {
            $scope.zeroselected45 = false;
            var file = $scope.files45[0];
            var ran_num = Math.round(Math.random() * 1000);
            $scope.done45[0] = fbid + '$' + ran_num + '$' + file.name;
            $scope.upload45[0] = $upload.upload({
                url: 'https://viber-uploads.s3-ap-southeast-1.amazonaws.com/',
                method: 'POST',
                data: {
                    'key': 'level4task5/' + fbid + '$' + ran_num + '$' + file.name,
                    'acl': 'public-read',
                    'Content-Type': 'application',
                    'AWSAccessKeyId': 'AKIAITP3AH32R7ZKQ4XQ',
                    'success_action_status': '201',
                    'Policy': 'eyJleHBpcmF0aW9uIjoiMjAxNS04LTIxVDExOjAwOjAwLjAwMFoiLCJjb25kaXRpb25zIjpbWyJzdGFydHMtd2l0aCIsIiRrZXkiLCJsZXZlbDR0YXNrNS8iXSx7ImJ1Y2tldCI6InZpYmVyLXVwbG9hZHMifSx7ImFjbCI6InB1YmxpYy1yZWFkIn0sWyJzdGFydHMtd2l0aCIsIiRDb250ZW50LVR5cGUiLCJhcHBsaWNhdGlvbiJdLHsic3VjY2Vzc19hY3Rpb25fc3RhdHVzIjoiMjAxIn1dfQ==',
                    'Signature': 'NeYPZ7D9RCmr+UEMqVB7VOTNiYY='
                },
                file: file
            }).then(function (response) {
                if (response.status === 201) {
                    $scope.added45 += 1;
                    var xmlDoc;
                    //xml parser
                    if (window.DOMParser) {
                        parser = new DOMParser();
                        xmlDoc = parser.parseFromString(response.data, "text/xml");
                    }
                    else // Internet Explorer
                    {
                        xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
                        xmlDoc.async = false;
                        xmlDoc.loadXML(txt);
                    }
                    $scope.s3added45.push(xmlDoc.getElementsByTagName("Location")[0].childNodes[0].nodeValue);
                    $scope.s3success45 = true;
                    //$scope.serSubmitted.push(ran_num + '$' + file.name);
                }
            });

        }
    };
    $scope.onFileUploadl4task5 = function(){

        var reqbody =  {
            "answers" : {
                "name" : $scope.done45
            },
            c : $scope.identity.currentUser.c,
            "taskid" : '53f433daaa1725fd72ea6020'
        };
        $scope.serSubmitted45.push($scope.done45[0]);
        $scope.s3added45 = [];
        $scope.zeroselected45 = true;
        $http.put('/uploadphoto', reqbody).success(function(data) {

            if(angular.isObject(data)){

                if(angular.isObject(data.completiondata)){
                    if(data.completiondata.level) {
                        $scope.identity.currentUser.complete4 += data.completiondata.level;
                        $scope.taskcomplete45 = true;
                        task.completed = 1;
                    }
                    $scope.identity.currentUser.points += data.completiondata.points;
                    if($scope.identity.currentUser.complete4==100){
                        $rootScope.style4 = {'font-size':'14px'};
                        $rootScope.level4iscompleted = true;
                    }
                    $scope.identity.currentUser.vibes_transaction.push(data.completiondata.transaction);
                }
                $scope.submitted45 += $scope.done45.length;
                $scope.added45 = 0;
                $scope.s3success45 = false;
                if($scope.submitted45>=2)
                    $scope.tasklimit45 = true;
                toaster.pop('success', "Task 5", "Your photo was uploaded successfully.");
            }
            else
            {
                $window.location = '/logout';
            }
        }).error(function(err){

            console.log(err);
            toaster.pop('failure', "Task 5", "There was an error submitting your task, please try again");
        });
    };

}]);