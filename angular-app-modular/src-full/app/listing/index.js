import angular from 'angular';
import userModule from '../user';
import listingComponent from './listing.component';
import listingConfig from './listing.config';

let listingModule = angular.module('listing', [userModule.name]);
listingModule.component('listingComponent', listingComponent);
listingModule.config(listingConfig);

export default listingModule;