import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import loginModule from './app/login';

let app = angular.module('app', [uiRouter, loginModule.name]);

// here i am bootstrapping the angular application
angular.bootstrap(document, ['app']);