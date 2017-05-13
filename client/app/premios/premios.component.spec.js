'use strict';

describe('Component: PremiosComponent', function() {
  // load the controller's module
  beforeEach(module('dcd20App.premios'));

  var PremiosComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    PremiosComponent = $componentController('premios', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
