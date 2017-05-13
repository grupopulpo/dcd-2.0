'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './bases.routes';

export class BasesComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('dcd20App.bases', [uiRouter])
  .config(routes)
  .component('bases', {
    template: require('./bases.html'),
    controller: BasesComponent,
    controllerAs: 'basesCtrl'
  })
  .name;
