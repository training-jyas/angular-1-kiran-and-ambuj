console.log('angular is loaded', angular);

// here we are creating our main module
var app = angular.module('app', []);

// here we are creating a controller for module `app`
app.controller('appController', ['$scope', function($scope){
    $scope.person = 'RTST';
}]);
