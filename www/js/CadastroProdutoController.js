angular.module('starter')
.controller("CadastroProdutoController",function($scope, $state){
  
  $scope.produto = {};

  $scope.salvar = function (produto) {
  	alert('Produto ' + produto.nome + ' salvo com sucesso');
  	$scope.produto = {};
  	$state.go('menu');
  }

  
})