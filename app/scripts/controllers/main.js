'use strict';

/**
 * @ngdoc function
 * @name iggApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the iggApp
 */
angular.module('iggApp')
  .controller('MainCtrl', function ($scope, campaigns) {
    //Use our Campaigns service to get the data with a promise and then put it in scope
    campaigns.get().then(function(data){
        $scope.campaigns = data;
    });
  });
