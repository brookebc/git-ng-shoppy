'use strict';
angular.module('shopNg')
	.factory('PostsSvc', function($resource) {
		return $resource('api/collections/bestshopblog',
			{},
			{
				query: { method: 'GET', isArray: true },
				create: { method: 'POST'}
			});
	})
	.factory('PostSvc', function($resource) {
		return $resource('api/collections/bestshopblog/:id',
			{
				id: '@_id'
			},
			{
				show: { method: 'GET'},
				edit: { method: 'PUT'},
				delete: { method: 'DELETE'}
			});
	})
	.factory('ProductsSvc', function($resource) {
		return $resource('api/collections/bestshop',
			{},
			{
				query: { method: 'GET', isArray: true },
				create: { method: 'POST'}
			});
	})
	.factory('ProductSvc', function($resource) {
		return $resource('api/collections/bestshop/:id',
	 		{
	 			id: '@_id'
	 		},
			{
				show: { method: 'GET'},
				edit: { method: 'PUT'},
	 			delete: { method: 'DELETE'}
	 		});	
	})
	.factory('CartItemsSvc', function($resource) {
		return $resource('api/collections/shoppingcart',
			{},
			{
				query: { method: 'GET', isArray: true },
				create: { method: 'POST'}
			});
	})
	.factory('CartItemSvc', function($resource) {
		return $resource('api/collections/shoppingcart/:id',
			{
				id: '@_id'
			},
			{
				show: { method: 'GET'},
				edit: { method: 'PUT'},
				delete: { method: 'DELETE'}
			})
	});
	

