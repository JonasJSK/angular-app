(function () {
	'use strict';

	angular.module('test', [])
		.config(function ($stateProvider, $urlRouterProvider) {
			
			$stateProvider.otherwise("/");
			
			$stateProvider
				.state("test",
				{
					url: "/test",
					templateUrl: "test.html"
				});
				
		});
})();