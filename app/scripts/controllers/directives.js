/**
 * Created by Ankit Saxena on 25-06-2014.
 */

var viberApp = angular
    .module('viberApp');

viberApp.directive('navBar', function(){

    return{

        restrict : 'E',
        templateUrl : 'views/navbar.html',
        controller : 'vbNavBarCtrl'

    }


});

viberApp.directive('loginBar', function(){

    return{

        restrict : 'E',
        templateUrl : 'views/loginbar.html',
        controller : 'vbLoginBarCtrl'

    }


});


viberApp.directive('taskUploadPhotos', function(){

    return{

        restrict : 'E',
        templateUrl : 'views/taskuploadphotos.html',
        controller : 'vbUploadPhotosCtrl'

    }


});

viberApp.directive('taskInsertLinks', function(){

    return{

        restrict : 'E',
        templateUrl : 'views/taskinsertlinks.html',
        controller : 'vbInsertLinksCtrl'

    }


});

viberApp.directive('taskInsertMobile', function(){

    return{

        restrict : 'E',
        templateUrl : 'views/taskinsertmobile.html',
        controller : 'vbInsertMobileCtrl'

    }


});

viberApp.directive('taskSurvey', function(){

    return{

        restrict : 'E',
        templateUrl : 'views/tasksurvey.html',
        controller : 'vbSurveyCtrl'

    }


});

viberApp.directive('miniLeaderboard', function(){

    return{

        restrict : 'E',
        templateUrl : 'views/minileaderboard.html',
        controller : 'vbMiniLeaderBoardCtrl'

    }


});

viberApp.directive('socialConnect', function(){

    return{

        restrict : 'E',
        templateUrl : 'views/socialconnect.html',
        controller : 'vbSocialConnectCtrl'

    }


});

viberApp.directive('cheatBox', function(){

    return{

        restrict : 'E',
        templateUrl : 'views/cheatbox.html',
        controller : 'vbCheatBoxCtrl'

    }


});

