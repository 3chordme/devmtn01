app.controller('productsCtrl', function($scope, productService, $stateParams) {

  var socksOrShoes = $stateParams.id;

  if (socksOrShoes === 'shoes') {
    $scope.products = productService.shoeData;
  } else if (socksOrShoes === 'socks') {
    $scope.products = productService.sockData;
  }

});
