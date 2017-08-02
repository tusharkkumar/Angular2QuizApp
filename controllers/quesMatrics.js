(function() {



	angular
	.module('quizApp')

	.factory('AllData',FactoryData);


	function FactoryData(){

		var quesobj = {
			allDetails: ques,
			changeSelected: ChangeTheSelect


		}

		return quesobj;

	}


	function ChangeTheSelect(getAns,btn_no,done) {
		// console.log(ques.btn_no);
		btn_no.selected = done;
		btn_no.choosen = getAns;
		console.log(getAns);
	}


	var ques = [


		{
			type: "text",
			question: "Do you know HtML?",
			options:[
			{
				answer:"Basic"
			},
			{

				answer:"NO"
			},
			{
				answer:"Intermediate "

			},
			{
				answer:"Expert"

			}
			],
			selected:null,
			choosen:null


		},
		{

			type: "text",
			question: "What Technology you like?",
			options:[
			{
				answer:"Robotics"
			},
			{

				answer:"Virtual Reality"
			},
			{
				answer:"Agumented Reality"

			},
			{
				answer:"Nano Science"

			}
			],
			selected:null,
			choosen:null

		}
		,
		{

			type: "text",
			question: "Which Framework of Javascript do you like?",
			options:[
			{
				answer:"Electron"
			},
			{

				answer:"Node Js"
			},
			{
				answer:"Angular Js"

			},
			{
				answer:"Amber js"

			}
			],
			selected:null,
			choosen:null

		}
		,
		{

			type: "text",
			question: "Which Language did you like?",
			options:[
			{
				answer:"Html"
			},
			{

				answer:"Javascript"
			},
			{
				answer:"Ruby"

			},
			{
				answer:"Python"

			}
			],
			selected:null,
			choosen:null

		}



	]

})();