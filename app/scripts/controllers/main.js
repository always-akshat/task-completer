'use strict';

angular.module('viberApp')
  .controller('MainCtrl', function ($scope) {

        $scope.users=[

            {
                'name':'Ankit Saxena',
                'college':'M.S Ramaiah Institute of Technology',
                'city':'Bangalore',
                'goodvibes':'500',
                'fbid':'690323644'


            },

            {
                'name':'Arti Sharma',
                'college':'M.S Ramaiah Institute of Technology',
                'city':'Bangalore',
                'goodvibes':'500',
                'fbid':'100003303986564'


            },

            {
                'name':'Mayank Goyal',
                'college':'M.S Ramaiah Institute of Technology',
                'city':'Bangalore',
                'goodvibes':'500',
                'fbid':'100001081843471'


            },
            {
                'name':'Rahul Saxena',
                'college':'M.S Ramaiah Institute of Technology',
                'city':'Bangalore',
                'goodvibes':'500',
                'fbid':'100001105429407'


            }

        ];




  });

viberApp.controller('lbCntrl', function($scope){

    $scope.users=[

        {
            'name':'Ankit Saxena',
            'college':'M.S Ramaiah Institute of Technology',
            'city':'Bangalore',
            'goodvibes':'500',
            'fbid':'690323644'


        },

        {
            'name':'Arti Sharma',
            'college':'M.S Ramaiah Institute of Technology',
            'city':'Bangalore',
            'goodvibes':'500',
            'fbid':'100003303986564'


        },

        {
            'name':'Mayank Goyal',
            'college':'M.S Ramaiah Institute of Technology',
            'city':'Bangalore',
            'goodvibes':'500',
            'fbid':'100001081843471'


        },
        {
            'name':'Rahul Saxena',
            'college':'M.S Ramaiah Institute of Technology',
            'city':'Bangalore',
            'goodvibes':'500',
            'fbid':'100001105429407'


        }

    ];

});

viberApp.controller('signupCntrl',function($scope,$http,$location){

    $scope.User = {};
    $scope.errorMessage ='Error';

    $scope.Register = function(){
        console.log('tryoing to send data');
        $http({
            method  : 'POST',
            url     : '/signup',
            data    : $.param($scope.User),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
        }).
            success(function(data){

                $location.path('/');

            }).error(function(err){

                $scope.errorMessage = err;

            });

    }


});