'use strict';

angular.module('shopNg')

//this is for the blog
  .controller('PostsCtrl', function ($scope, $location, PostsSvc) {

// <!-- create Post is used to save the content from the new blog post form-->
    $scope.createPost = function(post) {
    	$location.path('/new');
    };
    // <!-- newPost is used to allow peeps to link to the spot to make a new post-->
    $scope.newPost = function() {
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
  	}
  })
  
  .controller('ShopCtrl', function ($scope, $location, ProductSvc) {

    $scope.createProduct = function() {
      $location.path('/admin');
    };
    $scope.newProduct = function(product) {
      ProductSvc.create(product)
      $location.path('/shop');
    };
    $scope.products = ProductSvc.query();
  })

  });
