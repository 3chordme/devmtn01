var app = angular.module('miniRouting', ['ui-router']);

app.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'js/home/homeTmpl.html',
      controller: 'homeCtrl'
    })
    .state('products', {
      url: '/products/:id',
      templateUrl: 'js/products/products.html',
      controller: 'productsCtrl'
    })
    .state('settings', {
      url: '/settings',
      templateUrl: 'js/settings/settings.html',
      controller: 'settingsCtrl'
    });

  $urlRouterProvider
  .otherwise('/');


});
