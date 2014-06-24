/**
 * Created by Akshat Goel on 23-06-2014.
 */


var viberApp = angular.module('viberApp');

viberApp.factory('vbIdentity', function(){

    return {

        currentUser : undefined,
        isAuthenticated : function(){

            return !!this.currentUser;
        }

    }

});
