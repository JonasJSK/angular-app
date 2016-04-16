(function () {
	'use strict';

	angular.module("app", [
		"ui.router",
		"app.layout",
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