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
  })

  .controller('CartItemsCtrl', function ($scope, $location, CartItemsSvc) {
    $scope.addItem = function() {
      $location.path('/shop');
    };
    $scope.newItem = function(product) {
      CartItemsSvc.create(product)
      $location.path('/cart');
    };
    $scope.products = CartItemsSvc.query();
  })

  .controller('CartItemCtrl', function($scope, $location, $routeParams, CartItemSvc) {
    $scope.product = CartItemSvc.show({ id: $routeParams.id });
    $scope.delete = function() { 
      CartItemSvc.delete({ id: $routeParams.id });
      $location.path('/cart');
    };
    $scope.edit = function() {
      CartItemSvc.edit($scope.product);
      $location.path('/cart');
    };
  })

  .controller('carouselCtrl', function($scope) {
  $scope.myInterval = 5000;
  var slides = $scope.slides = [];
  $scope.addSlide = function() {
    var newWidth = 600 + slides.length;
    slides.push({
      image: 'http://placekitten.com/' + newWidth + '/300',
      text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
        ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
    });
  };
  for (var i=0; i<4; i++) {
    $scope.addSlide();
  }
});

  module.directive ('carousel', function() {
    return {
        restrict: 'E',
        transclude: true,
        scope: { id: '@' },
        controller: function($scope, $element) {
            var items = $scope.items = [];
            $scope.selectedIndex = 0;

            $scope.select = function (index) {
                if ( index >= $scope.items.length || index < 0 ) {
                    return;
                }

                angular.forEach (items, function(item) {
                    item.selected = false;
                });

                items[index].selected = true;
                $scope.selectedIndex = index;
            }

            this.addItem = function(item) {
                items.push(item);

                if (items.length == 1)
                    $scope.select (0);
            }
        },
        template:
        '<div class="carousel slide">' +
            '<ol class="carousel-indicators">' +
                '<li ng-repeat="item in items" data-target="#{{id}}" '+
                 'data-slide-to="{{$index}}" ng-click="select($index)"'+
                 'ng-class="{active:item.selected}"></li>' +
            '</ol>' +
            '<div class="carousel-inner" ng-transclude>' +
            '</div>' +
            '<a class="carousel-control left" ' +
            'href="#{{id}}" ng-click="select(selectedIndex-1)">&lsaquo;</a>' +
            '<a class="carousel-control right" ' +
            'href="#{{id}}" ng-click="select(selectedIndex+1)" >&rsaquo;</a>' +
        '</div>',
        replace: true
    };
});

module.directive('carouselItem', function() {
    return {
        require: '^carousel',
        restrict: 'E',
        transclude: true,
        scope: {  },
        link: function(scope, element, attrs, carouselCtrl) {
            carouselCtrl.addItem(scope);
        },
        template:
        '<div class="item" ng-class="{active: selected}" ng-transclude>' +
        '</div>',
        replace: true
    };
});



