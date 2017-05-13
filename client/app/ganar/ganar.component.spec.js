'use strict';

describe('Component: GanarComponent', function() {
  // load the controller's module
  beforeEach(module('dcd20App.ganar'));

  var GanarComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    GanarComponent = $componentController('ganar', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
