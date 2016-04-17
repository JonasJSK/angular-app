(function () {
	'use strict';

	angular.module('app.test')
		.config(function ($stateProvider, $urlRouterProvider) {
			
			console.log("hej");
			
			$stateProvider
				.state("test",
				{
					url: "/test",
					templateUrl: "test/test.html",
					menu: {
						text: "Test",
						icon: "plus"
					}
				})
				.state("test2",
				{
					url: "/test2",
					templateUrl: "test/test.html",
					menu: {
						text: "Test2",
						icon: "plus"
					}
				});
				
		});
})();