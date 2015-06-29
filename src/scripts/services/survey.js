
angular.module('survey')
	.factory('$surveyservice',['$resource','apiconstants',function($resource,apiconstants){
		console.log(apiconstants);
		return {
		
			question: $resource(apiconstants.url)
		}

	}]);