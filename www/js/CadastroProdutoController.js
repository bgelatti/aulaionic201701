angular.module('starter')
.controller("CadastroProdutoController",function($scope, $state, ProdutoService){
  
  if ($state.params.produtoId) {
  		$scope.produto = angular.copy(ProdutoService.get(
  			$state.params.produtoId));	
  } else {
  	$scope.produto = {
	    id: new Date().getTime().toString(),
	    nome: '',
	    preco: ''
	};
  }

  $scope.save = function() {
  	if ($state.params.produtoId) {
  		ProdutoService.update($scope.produto);
  	} else {
    	ProdutoService.create($scope.produto);
  	}
    $state.go('listaProduto');
  };

  
});