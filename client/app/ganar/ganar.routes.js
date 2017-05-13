'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('ganar', {
      url: '/ganar',
      template: '<ganar></ganar>'
    });
}
