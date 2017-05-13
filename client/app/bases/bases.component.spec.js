'use strict';

describe('Component: BasesComponent', function() {
  // load the controller's module
  beforeEach(module('dcd20App.bases'));

  var BasesComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    BasesComponent = $componentController('bases', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
