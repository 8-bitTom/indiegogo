'use strict';

/**
 * @ngdoc filter
 * @name iggApp.filter:truncate
 * @function
 * @description
 * # truncate
 * Filter in the iggApp.
 */
angular.module('iggApp')
  .filter('truncate', function () {
		return function ( input, length ) {
			if ( !input ) {
				input = '-';
			}

			if ( length && input.length > length ) {
				return input.substring( 0, length - 3 ) + '...';
			} else {
				return input;
			}
		};
  });
