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
  .controller('ShopCtrl', function ($scope, $location, ShopSvc) {
     $scope.createProduct = function() {
      $location.path('/shop');
    };

    $scope.newProduct = function(product) {
      ShopSvc.create(product)
      $location.path('/admin');
    };
    $scope.product = ShopSvc.query();
  });


