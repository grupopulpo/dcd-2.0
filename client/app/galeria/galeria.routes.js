'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('galeria', {
      url: '/galeria',
      template: '<galeria></galeria>'
    });
}
