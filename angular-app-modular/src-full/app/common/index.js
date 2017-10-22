import angular from 'angular';
import userService from './user.svc';
import constants from './app.constants';
import appFactory from './app.factory';
import userNameFilter from './user.filter';

let commonModule = angular.module('common', []);
commonModule.service('userService', userService);
commonModule.constant('constants', constants);
commonModule.factory('helper', appFactory);
commonModule.filter('username', userNameFilter);

export default commonModule;