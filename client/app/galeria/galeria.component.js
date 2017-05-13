'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './galeria.routes';

export class GaleriaComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('dcd20App.galeria', [uiRouter])
  .config(routes)
  .component('galeria', {
    template: require('./galeria.html'),
    controller: GaleriaComponent,
    controllerAs: 'galeriaCtrl'
  })
  .name;
