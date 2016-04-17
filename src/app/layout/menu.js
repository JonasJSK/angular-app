(function () {
	'use strict';

	angular
		.module('app.layout')
		.directive('jkMenu', jkMenu);

	function jkMenu() {
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
	function MenuController($state) {
		var vm = this;
		
		vm.state = $state;
		vm.states = $state.get().filter(function(state) {
			return state.menu;
		});
		
		console.log($state.get());
	}
})();