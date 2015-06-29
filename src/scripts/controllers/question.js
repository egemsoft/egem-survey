'use strict';

angular.module('survey')
	.controller('QuestionListCtrl',['$scope','$surveyservice',function($scope,$surveyservice){
		

		$scope.questions = $surveyservice.question.query();

		$scope.deleteQuestion = function(id){
			$surveyservice.question.remove({id:id});
		};
		
	}]);