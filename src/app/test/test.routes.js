(function () {
	'use strict';

	angular.module('test', [])
		.config(function ($stateProvider, $urlRouterProvider) {
			
			
			$stateProvider
				.state("test",
				{
					url: "/test",
					templateUrl: "test/test.html"
				});
				
		});
})();