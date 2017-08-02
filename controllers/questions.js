(function () {

	angular
	.module('quizApp')

	.controller('questions', Questions);

	Questions.$injector = ['AllData'];

	function Questions($scope,AllData) {

		$scope.languages = ["Ruby","PYTHON","JAVASCRIPT","SWIFT"];
		$scope.AllData = AllData;


		$scope.setValue = true;

		$scope.toggle_window = function() {

			$scope.setValue = false;


		}

		$scope.buttons = AllData.allDetails;


		$scope.showQues = function(button) {

			$scope.question =button.question;
			$scope.options = button.options;
			$scope.selected = button.selected;
			$scope.button_id = button;

		}

		$scope.clicked = function(getAns,btn_no) {

			if (getAns != null || getAns != " ") 
			{
				AllData.changeSelected(getAns,btn_no,"done");
			};

		}

				$scope.Submit = false;



		$scope.checkSubmit = function() {

			var flag = false;
			console.log();
			for(var i=0; i < AllData.allDetails.length;i++)
			{

				if (AllData.allDetails[i].choosen == null) 
				{
					flag = true;
				}

			}

			if (flag == true)
			 {
			 	alert('all the questions are not answered:');
			 }
			else
			{
				$scope.Submit = true;
			}
		}	


		$scope.check = function(data) {
			// alert(data);
			alert(data);
		}


	} //end of Main Function 

})();