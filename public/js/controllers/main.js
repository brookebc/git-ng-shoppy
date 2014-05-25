'use strict';

angular.module('shopNg')
  .controller('PostsCtrl', function ($scope, $location, PostsSvc) {
    $scope.createPost = function() {
      $location.path('/new');
    };
    $scope.newPost = function(post) {
      PostsSvc.create(post)
      $location.path('/blog');
    };
    $scope.posts = PostsSvc.query();
  })

  .controller('PostCtrl', function($scope, $location, $routeParams, PostSvc) {
    $scope.post = PostSvc.show({ id: $routeParams.id });
    $scope.delete = function() { 
      PostSvc.delete({ id: $routeParams.id });
      $location.path('/blog');
    };
    $scope.edit = function() {
      PostSvc.edit($scope.post);
      $location.path('/blog');
    };
  })

  .controller('ProductsCtrl', function ($scope, $location, ProductsSvc) {
     $scope.createProduct = function() {
      $location.path('/admin');
    };
    $scope.newProduct = function(product) {
      ProductsSvc.create(product)
      $location.path('/shop');
    };
    $scope.products = ProductsSvc.query();
  })

  .controller('ProductCtrl', function($scope, $location, $routeParams, ProductSvc) {
    $scope.product = ProductSvc.show({ id: $routeParams.id });
    $scope.delete = function() { 
      ProductSvc.delete({ id: $routeParams.id });
      $location.path('/shop');
    };
    $scope.edit = function() {
      ProductSvc.edit($scope.product);
      $location.path('/shop');
    };
  });


