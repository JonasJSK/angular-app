(function () {
	'use strict';

	angular
		.module('app.layout')
		.directive('menu', menu);

	function menu() {
		var directive = {
			bindToController: true,
			controller: MenuController,
			controllerAs: 'vm',
			restrict: 'A',
			templateUrl: "layout/menu.html",
			scope: {
			}
		};
		return directive;

		function link(scope, element, attrs) {
		}
	}
	
	/* @ngInject */
	function MenuController($stateProvider) {
		var vm = this;
		
		vm.menu = $stateProvider;
	}
})();