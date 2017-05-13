'use strict';

import angular from 'angular';

export default angular.module('dcd20App.constants', [])
  .constant('appConfig', require('../../server/config/environment/shared'))
  .name;
