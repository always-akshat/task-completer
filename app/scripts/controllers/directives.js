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

viberApp.directive('clusterManager', function(){

    return{

        restrict : 'E',
        templateUrl : 'views/manage.html',
        controller : 'vbClusterCtrl'

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


viberApp.directive('inviteFbFriends', function(){

    return{

        restrict : 'E',
        templateUrl : 'views/invitefbfriends.html',
        controller : 'vbinviteFrndsCtrl'

    }
});

    viberApp.directive('likenFollow', function() {

        return{

            restrict: 'E',
            templateUrl: 'views/likenfollow.html',
            controller: 'vblikenfollowCtrl'

        }


    });

viberApp.directive('taskYuwa', function(){

    return{

        restrict : 'E',
        templateUrl : 'views/taskyuwa.html',
        controller : 'vbTaskYuwaCtrl'

    }


});
viberApp.directive('supportYuwa', function(){

    return{

        restrict : 'E',
        templateUrl : 'views/supportyuwa.html',
        controller : 'vbSupportYuwaCtrl'

    }


});
viberApp.directive('taskKnowviber', function(){

    return{

        restrict : 'E',
        templateUrl : 'views/taskknowviber.html',
        controller : 'vbKnowViberCtrl'

    }


});
viberApp.directive('activateFriends', function(){

    return{

        restrict : 'E',
        templateUrl : 'views/activatefriends.html',
        controller : 'vbActivateCtrl'

    }


});
viberApp.directive('goodvibesMind', function(){

    return{

        restrict : 'E',
        templateUrl : 'views/goodvibesmind.html',
        controller : 'vbGoodvibesMindCtrl'

    }


});




