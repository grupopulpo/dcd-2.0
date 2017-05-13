'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './ganar.routes';

export class GanarComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('dcd20App.ganar', [uiRouter])
  .config(routes)
  .component('ganar', {
    template: require('./ganar.html'),
    controller: GanarComponent,
    controllerAs: 'ganarCtrl'
  })
  .name;
