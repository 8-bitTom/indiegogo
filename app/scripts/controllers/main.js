'use strict';

/**
 * @ngdoc function
 * @name iggApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the iggApp
 */
angular.module('iggApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
