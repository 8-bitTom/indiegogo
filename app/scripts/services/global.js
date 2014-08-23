'use strict';

/**
 * @ngdoc service
 * @name iggApp.global
 * @description
 * # global
 * Service in the iggApp.
 */
angular.module('iggApp')
  .service('global', function global() {
    // I will keep global vars here where the don't pollute my beautiul namespace. Also I can test them or set up Notifications
		var apiKey = "e88bd0a00305bfdfb18003a75665643b";

		//getters for our private singleton
		return {
			getApiKey : apiKey
		};
  });
