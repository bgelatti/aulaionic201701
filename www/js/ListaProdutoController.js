angular.module('starter')
.controller('ListaProdutoController', function(
  $scope, ProdutoService) {

  $scope.reordering = false;
  $scope.produtos = ProdutoService.list();

  $scope.remove = function(produtoId) {
    ProdutoService.remove(produtoId);
  };

  $scope.move = function(produto, fromIndex, toIndex) {
    ProdutoService.move(produto, fromIndex, toIndex);
  };

  $scope.toggleReordering = function() {
    $scope.reordering = !$scope.reordering;
  };

});