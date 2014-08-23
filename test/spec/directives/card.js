'use strict';

describe('Directive: card', function () {

  // load the directive's module
  beforeEach(module('iggApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<card></card>');
    element = $compile(element)(scope);
    expect(element.length).toBe(1);
  }));
});
