'use strict';

import angular from 'angular';
import SignupController from './signup.controller';

export default angular.module('dcd20App.signup', [])
  .controller('SignupController', SignupController)
  .name;
