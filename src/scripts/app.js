'use strict';

angular.module('survey',['ngRoute','ngResource','toaster', 'ngAnimate'])
	.config(function ($routeProvider) {
			$routeProvider
				.when('/home', {
					templateUrl: '/src/views/home.html',
					controller: 'HomeCtrl'
				})
				.when('/question', {
					templateUrl: '/src/views/questionList.html',
					controller: 'QuestionListCtrl'
				})
				.when('/question/add', {
					templateUrl: '/src/views/questionAdd.html',
					controller: 'QuestionAddCtrl'
				})
				.otherwise({
					redirectTo: '/home'
				});
		})
		.config(function ($httpProvider) {
			$httpProvider.defaults.useXDomain = true;
			$httpProvider.defaults.xsrfCookieName = 'csrftoken';
			$httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
		});