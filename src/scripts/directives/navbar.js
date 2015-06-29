'use strict';


angular.module('survey')
 .directive('navbar',
	function () {
		return {
			restrict: 'E',
			link: function ($scope, $element, $attrs) {
				$scope.navbarElements = [
				{name:'Home',url:'#/home'},
				{name:'Question',url:'#/question'},
				{name:'Add Question',url:'#/question/add/'}
				];
				$scope.brand = 'Egemsoft';
			},
			templateUrl: '/src/views/navbar.html',
			controller: function ($scope) {

			}
		};
	});