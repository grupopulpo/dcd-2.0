'use strict';

import angular from 'angular';
import {
  UtilService
} from './util.service';

export default angular.module('dcd20App.util', [])
  .factory('Util', UtilService)
  .name;
