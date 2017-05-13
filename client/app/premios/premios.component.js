'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './premios.routes';

export class PremiosComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('dcd20App.premios', [uiRouter])
  .config(routes)
  .component('premios', {
    template: require('./premios.html'),
    controller: PremiosComponent,
    controllerAs: 'premiosCtrl'
  })
  .name;
