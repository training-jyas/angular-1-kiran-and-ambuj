import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import loginModule from './app/login';
import registrationModule from './app/registration';
import listingModule from './app/listing';
import commonModule from './app/common';

let app = angular.module('app', [uiRouter, loginModule.name, registrationModule.name, listingModule.name,
    commonModule.name
]);

// here i am bootstrapping the angular application
angular.bootstrap(document, ['app']);