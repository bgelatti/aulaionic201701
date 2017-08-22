angular.module('starter', ['ionic'])

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
  $stateProvider

  .state('menu', {
    url: "/menu",
    templateUrl: "templates/menu.html",
    controller: 'MenuController'
  })
  .state('produto', {
    url: "/produto",
    templateUrl: "templates/cadastroProduto.html",
    controller: 'CadastroProdutoController'
  })
  
  $urlRouterProvider.otherwise('/menu');
});
