'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('premios', {
      url: '/premios',
      template: '<premios></premios>'
    });
}
