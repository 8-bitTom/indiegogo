'use strict';

describe('Filter: truncate', function () {

  // load the filter's module
  beforeEach(module('iggApp'));

  // initialize a new instance of the filter before each test
  var truncate;
  beforeEach(inject(function ($filter) {
    truncate = $filter('truncate');
  }));

  it('should return 100 carachters"', function () {
    var text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor lectus id metus varius, a cursus velit suscipit. Quisque in libero ut orci iaculis dignissim eu vehicula massa. Vestibulum venenatis luctus mi, vitae auctor mauris imperdiet a. Praesent nec est ultricies, porttitor sapien eu, lacinia odio. Curabitur sodales, ligula at fringilla commodo, tellus nulla imperdiet arcu, sed porta arcu leo aliquet diam. Sed vulputate nunc nec orci ullamcorper, in euismod erat maximus. Nam eleifend fermentum egestas. Praesent mattis sem ipsum, vitae lacinia tellus cursus tempus. Etiam quis sapien nec velit posuere aliquam suscipit a lectus. Proin volutpat diam vel varius.';
    var truncatedString = truncate(text, 100);
	expect(truncatedString.length).toBe(100);
  });

});
