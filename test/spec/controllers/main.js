'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('iggApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach campaigns to the scope', function () {
    expect(scope.campaigns).toBe('');
  });

	it('should attach an empty search to the scope', function () {
		expect(scope.search).toBe('');
	});

});
