angular.module('shopNg.directives')
	.directive('bloggyDirective', function(){
		return{
			restrict:'E',
			templateUrl: 'views/directives.html'
		}
	});
	// .directive('authorDirective', function(){
	// 	return{
	// 		restrict:'EA',
	// 		scope:{
	// 			author: '@'
	// 		}
	// 		templateUrl: 'views/authordirective.html',
	// 		link: function(scope, element, attrs){
	// 			element.find('.authorname').append(html);
	// 		}
	// 	}
	// });

