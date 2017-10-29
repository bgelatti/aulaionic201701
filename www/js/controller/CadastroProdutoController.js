angular.module('starter')
	.controller("CadastroProdutoController",function($scope, 
		$state, ProdutoService, $cordovaBarcodeScanner, $timeout){
  
		if ($state.params.produtoId) {
			ProdutoService.getById($state.params.produtoId)
			.then(function (data) {
	      		$scope.produto = data.data;
	  		});
		} else {
			$scope.produto = {
				nome: '',
				codigoBarra: '',
				descricao: '',
				preco: '',
				dt_cadastro: ''
			};
		}
		
		$scope.save = function() {
			ProdutoService.save($scope.produto).then(function () {
				$scope.$emit('produto:atualizarLista');
				$state.go('listaProduto');
			});
		};

		$scope.getBarcode = function () {
			$cordovaBarcodeScanner.scan().then(function(imageData) {
		        $scope.produto.codigoBarra = imageData.text;
		    }, function(error) {
		        console.log("An error happened -> " + error);
		    });
		};
  
});