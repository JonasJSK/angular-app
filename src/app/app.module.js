(function () {
	'use strict';

	angular.module("app", [
		"ui.router",
		"test"
	])
		.config(function ($stateProvider, $urlRouterProvider) {
			
			$urlRouterProvider.otherwise("/");
			
			$stateProvider
				.state("home", {
					url: "/"
				});
		});
})();