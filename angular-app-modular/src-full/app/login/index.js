import angular from 'angular';
import loginComponent from './login.component';
import loginConfig from './login.config';

let loginModule = angular.module('LoginModule', []);
loginModule.config(loginConfig);
loginModule.component('login', loginComponent);

export default loginModule;