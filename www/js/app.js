angular.module('starter', ['ionic', 'ngCordova'])
.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        if(window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if(window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})
.config(function($stateProvider, $urlRouterProvider){
    $stateProvider.state('menu', {
        url: "/menu",
        templateUrl: "templates/menu.html",
    })
    .state('novoProduto', {
        url: '/produto/novo',
        templateUrl: 'templates/cadastroProduto.html',
        controller: 'CadastroProdutoController'
    })
    .state('editarProduto', {
        url: '/produto/editar/:produtoId',
        templateUrl: 'templates/cadastroProduto.html',
        controller: 'CadastroProdutoController'
    })
    .state('listaProduto', {
        url: '/produto/lista',
        templateUrl: 'templates/listaProduto.html',
        controller: 'ListaProdutoController'
    });
  
    $urlRouterProvider.otherwise('/menu');
}).value('route','http://localhost:8080/erpfatecie-api')
;
