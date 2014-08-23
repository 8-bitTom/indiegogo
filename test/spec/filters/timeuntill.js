'use strict';

describe('Filter: timeUntill', function () {

  // load the filter's module
  beforeEach(module('iggApp'));

  // initialize a new instance of the filter before each test
  var timeUntill;
  beforeEach(inject(function ($filter) {
    timeUntill = $filter('timeUntill');
  }));

  it('should return the Time Untill Input"', function () {
    var tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000)
    expect(timeUntill(tomorrow)).toBe('1 days left');
  });

});
