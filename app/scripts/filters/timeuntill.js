'use strict';

/**
 * @ngdoc filter
 * @name iggApp.filter:timeUntill
 * @function
 * @description
 * # timeUntill
 * Filter in the iggApp.
 */
angular.module( 'iggApp' )
	.filter( 'timeUntill', function () {
		return function ( input ) {
			//Let's Calculate the time left before the Campaign ends!
			var now = new Date();
			var then = new Date( input );
			var timeLeft, days, hours, minutes;

			var minute = 1000 * 60;
			var hour = minute * 60;
			var day = hour * 24;

			if ( now.getTime() > then.getTime() ) {
				return 'Completed';
			} else {
				timeLeft = then.getTime() - now.getTime();
				if(timeLeft > day){
					return Math.floor(timeLeft / (day)) + ' days left';
				}else if(timeLeft > hour){
					return Math.floor(timeLeft / (hour)) + ' hours';
				}else{
					//Round this up so we don't get left at 0 Minutes when there is still time on the clock
					return Math.ceil(timeLeft / (minute)) + ' minutes';
				}
			}
		};
	} );
