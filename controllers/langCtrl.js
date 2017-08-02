(function () {

	angular
	.module('quizApp')

	.controller('quiz', listLang);

	listLang.$injector = ['AllData'];


	function listLang($scope,AllData) {

		$scope.languages = ["Ruby","PYTHON","JAVASCRIPT","SWIFT"];
		$scope.AllData = AllData;


		$scope.setValue = true;


		$scope.toggle_window = function() {

			$scope.setValue = false;




		}

	}




})();