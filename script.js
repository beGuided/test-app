var pos = 0, test, test_status, questions,  choice, choices, chA, chB, chC, correct = 0; 
	var questions = [
		["The following are woodwork maintenance safety tips asides ?", "Wear safety Glasses", "Leave nails and screw littering the work environment", "Avoid Drugs and Alcohol", "B" ],
		["What is woodwork machine in basic technology ?", "Machines intended for use with metal ", "Machines intended for the processing of wood ", " Machine used to create a computer", "B"],
		["The following are common maintenance problems except?", "Identification ", "Cause/effect", "Perfect working conditioned tool", "C"],
		["What is tool and Equipment, maintenance?", "Any process used to keep and care for equipment, machine or tools", "Machines intended for bending", "A processing tool", "A"],
		["Which of the following is not a maintenance strategy ", "Condition-based maintenance", "Corrective maintenance ", "Corrosive maintenance ", "C"],
		["Examples of routine maintenance include", "Replacing parts that show deterioration ", "Lubricating, cleaning, or adjusting machinery", "All of the above", "C"],
		["Fundamental skills every woodworker should possess include? ", "Understand how, wood works and behave ", "Complete Every job/ furniture, you have begun", "None of the above", "C"],
		["Tips to enhancing maintenance management system includes ?", "Keep maintenance track ", "Move to automated process ", "Keep tools untidy", "C"],
		["The following are list of woodwork tools asides?", "Coping saw", "Keyboard ", "All of the above ", "B"],	
		["The following are classes of  woodwork hand tools except__", "Boring tools", "Measuring tools ", "A & B", "C"]
	];
	function _(x){
		return document.getElementById(x);
	}
	function renderQuestion(){
		test = _("test");
		if(pos >= questions.length){
			test.innerHTML = "<h3>You got "+correct+" of "+questions.length+" questions correct</h3>" + "<br> PROJECT BY : Akpevwe Onajite ODIOKO <br> Mat NO: EDU1812288 <br> SUPERVISOR NAME: DR OGUNTUNDE ";
			_("test_status").innerHTML = "Exam Completed";
			pos = 0;
			correct =0;
			return false;
		}
		_("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
		question = questions[pos][0];
		chA = questions[pos][1];
		chB = questions[pos][2];
		chC = questions[pos][3];
		
		
		test.innerHTML = "<h3>"+question+"</h3>";
		test.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
		test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
		test.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br><br>";

		test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";	
	}
	function checkAnswer(){
		choices = document.getElementsByName("choices");
		for(var i=0; i<choices.length; i++){
			if(choices[i].checked){
				choice = choices[i].value;
			}
		}

		if(choice !=questions[pos][4]){
			alert("cottect answer is " + questions[pos][4]);
		}
		if (choice == questions[pos][4]){
			correct++;
			
		}
		pos++;
		renderQuestion();
	}
	window.addEventListener("load", renderQuestion, false);

