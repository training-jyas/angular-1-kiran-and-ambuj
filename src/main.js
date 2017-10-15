import angular from 'angular';
// here we are importing the ui router module
import router from '@uirouter/angularjs';

// we import sample module here
// these are my sub modules
import sampleModule from './app/sample';

// router module is added as a dependency to the main application module
let app = angular.module('myApp', [router, sampleModule.name]);

// here i am bootstrapping the angular application
angular.bootstrap(document, [app.name]);