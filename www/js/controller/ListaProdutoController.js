angular.module('starter')
	.controller("ListaProdutoController", function($scope, ProdutoService, $rootScope) {

		$scope.reordering = false;

		$rootScope.$on('produto:atualizarLista', function() {
		    $scope.updateList();
		});

		$scope.updateList = function() {
		    ProdutoService.getList().then(function (data) {
				$scope.produtos = data.data.values;
			});
		};
		$scope.updateList();

		$scope.remove = function(produtoId) {
			ProdutoService.deleteById(produtoId).then(function () {
				ProdutoService.getList().then(function (data) {
					$scope.produtos = data.data.values;
				});
			});
		};

		$scope.move = function(produto, fromIndex, toIndex) {
			// Bancoerp.move(produto, fromIndex, toIndex);
		};

		$scope.toggleReordering = function() {
			$scope.reordering = !$scope.reordering;
		};		
});