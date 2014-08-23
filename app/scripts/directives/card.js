'use strict';

/**
 * @ngdoc directive
 * @name iggApp.directive:card
 * @description
 * # card
 */
angular.module('iggApp')
  .directive('card', function () {
    return {
      templateUrl: 'views/card.html',
      restrict: 'E',
	    scope: {
	           item : '=item'
	    }
//      link: function postLink(scope, element, attrs) {
//        element.text('this is the card directive');
//      }
    };
  });
