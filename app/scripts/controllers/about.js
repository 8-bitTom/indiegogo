'use strict';

/**
 * @ngdoc function
 * @name iggApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the iggApp
 */
angular.module('iggApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
