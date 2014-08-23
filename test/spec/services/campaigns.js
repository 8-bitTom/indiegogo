'use strict';

describe('Service: campaigns', function () {

  // load the service's module
  beforeEach(module('iggApp'));

  // instantiate service
  var campaigns;
  beforeEach(inject(function (_campaigns_) {
    campaigns = _campaigns_;
  }));

  it('should do something', function () {
    expect(!!campaigns).toBe(true);
  });

});
