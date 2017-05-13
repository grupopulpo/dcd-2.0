'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('bases', {
      url: '/bases',
      template: '<bases></bases>'
    });
}
