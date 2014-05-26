'use strict';

angular
  .module('shopNg', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .when('/blog', {
        templateUrl: 'views/blog-list.html',
        controller: 'PostsCtrl'
      })
      .when('/new', {
        templateUrl: 'views/blog-create.html',
        controller: 'PostsCtrl'
      })
      .when('/blog/:id', {
        templateUrl: 'views/blog-detail.html',
        controller: 'PostCtrl'
      })
      .when('/blog/:id/edit', {
        templateUrl: 'views/blog-editDetail.html',
        controller: 'PostCtrl'
      })
      .when('/admin', {
         templateUrl: 'views/product-create.html',
        controller: 'ProductsCtrl'
      })
      .when('/shop', {
        templateUrl: 'views/product-list.html',
        controller: 'ProductsCtrl'
      })
      .when('/shop/:id', {
        templateUrl: 'views/product-detail.html',
        controller: 'ProductCtrl'
      })
      .when('/shop/:id/edit', {
        templateUrl: 'views/product-editDetail.html',
        controller: 'ProductCtrl'
      })
      .when('/cart', {
         templateUrl: 'views/cart-create.html',
        controller: 'ProductsCtrl'
      })
      .when('/cart/:id', {
        templateUrl: 'views/cart-detail.html',
        controller: 'ProductCtrl'
      })
      .when('/cart/:id/edit', {
        templateUrl: 'views/cart-editDetail.html',
        controller: 'ProductCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
