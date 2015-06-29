'use strict';

angular.module('survey')
.controller('QuestionAddCtrl',['$scope','$surveyservice',function($scope,$surveyservice){
	$scope.question = null;
	
	$scope.saveQuestion = function(){
		$surveyservice.question.save($scope.question);
	}
}]);