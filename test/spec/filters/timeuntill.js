'use strict';

describe('Filter: timeUntill', function () {

  // load the filter's module
  beforeEach(module('iggApp'));

  // initialize a new instance of the filter before each test
  var timeUntill;
  beforeEach(inject(function ($filter) {
    timeUntill = $filter('timeUntill');
  }));

  it('should return 2 days left"', function () {
    var tomorrow = new Date(new Date().getTime() + 49 * 60 * 60 * 1000)
    expect(timeUntill(tomorrow)).toBe('2 days left');
  });

	it('should return 1 hours"', function () {
		var tomorrow = new Date(new Date().getTime() + 61 * 60 * 1000)
		expect(timeUntill(tomorrow)).toBe('1 hours');
	});

	it('should return 4 minutes"', function () {
		var tomorrow = new Date(new Date().getTime() + 4 * 60 * 1000)
		expect(timeUntill(tomorrow)).toBe('4 minutes');
	});

});
