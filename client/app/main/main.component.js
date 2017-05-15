'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './main.routes';

export class MainComponent {
  /*@ngInject*/
  constructor($uibModal, Auth) {
    this.uibModal = $uibModal;
    this.isLoggedIn = Auth.isLoggedInSync;
  }

  $onInit() {
    if (this.isLoggedIn) {
      console.log("no");
      this.mmodal = this
        .uibModal
        .open({
          template: "<div class='popup-contenedor'>    <h3 class='titlePop fbebas'>!REGíSTRATE!</h3> " +
              "   <oauth-buttons classes='btn-block'></oauth-buttons>    <a class='popup-cerrar" +
              "' href='#' ng-click='$dismiss()'>X</a>  </div>"
        });
    }
    else{
      console.log("si");
    }
  }
}

export default angular
  .module('dcd20App.main', [uiRouter])
  .config(routes)
  .component('main', {
    template: require('./main.html'),
    controller: MainComponent
  })
  .name;
