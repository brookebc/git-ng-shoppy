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
       .when('/shop', {
        templateUrl: 'views/shop.html',
        controller: 'ShopCtrl'
      })
        .when('/shop/:id', {
        templateUrl: 'views/shop/product-detail.html',
        controller: 'ShopCtrl'
      })
       .when('/admin', {
        templateUrl: 'views/admin.html',
        controller: 'ShopCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
