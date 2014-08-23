'use strict';

/**
 * @ngdoc overview
 * @name iggApp
 * @description
 * # iggApp
 *
 * Main module of the application.
 */
angular
  .module('iggApp', [
    'ngAnimate',
    'ngRoute',
	'pieDirective'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).config(['$httpProvider', function ($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
    ]);
