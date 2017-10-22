import angular from 'angular';
import registrationConfig from './registration.config';
import registrationComponent from './registration.component';

let registrationModule = angular.module('RegistrationModule', []);
registrationModule.config(registrationConfig);
registrationModule.component('register', registrationComponent);

export default registrationModule;