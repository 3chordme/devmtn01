angular.module('userProfiles').controller('MainController', function($scope, MainService){

  $scope.test = "Success!";

  $scope.getUsers = function() {
    $scope.users = MainService.getUsers();
  };

  $scope.getUsers();

});
