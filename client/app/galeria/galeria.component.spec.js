'use strict';

describe('Component: GaleriaComponent', function() {
  // load the controller's module
  beforeEach(module('dcd20App.galeria'));

  var GaleriaComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    GaleriaComponent = $componentController('galeria', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
