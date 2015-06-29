'use strict';

angular.module('survey')
	.controller('HomeCtrl',['$scope', function($scope){
		$scope.topic = 'Topic';

		$scope.$watch('topic',function(val){
			console.log(val);
		})
	}]);