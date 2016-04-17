(function () {
	'use strict';

	angular.module('app.core')
		.config(function ($stateProvider, $urlRouterProvider) {

			$urlRouterProvider.otherwise("/");

			$stateProvider
				.state("home", {
					url: "/",
					menu: {
						text: "Home",
						icon: "home"
					}
				});
		});
})();