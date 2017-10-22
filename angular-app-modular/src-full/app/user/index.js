import angular from 'angular';
import userComponent from './user.component';
import userDirective from './user.directive';

let userModule = angular.module('userModule', []);
userModule.component('user', userComponent);
userModule.directive('userAction', userDirective);

export default userModule;