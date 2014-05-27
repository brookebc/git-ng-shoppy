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
		return $resource('api/collections/cart',
			{},
			{
				create: { method: 'POST'},
				query: { method: 'GET', isArray: true }
			});
	})
	.factory('CartItemSvc', function($resource) {
		return $resource('api/collections/cart',
			{},			
			{
				id: '@_id'
			},
			{
				show: { method: 'GET', isArray: true },
				edit: { method: 'PUT'},
				delete: { method: 'DELETE'}
			});
	});


