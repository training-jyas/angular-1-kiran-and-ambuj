var LoginController = function($scope){
    $scope.username = '';
    $scope.password = '';
    
    $scope.submit = function() {
        var user = {
            username: $scope.username,
            password: $scope.password
        };
    }
};