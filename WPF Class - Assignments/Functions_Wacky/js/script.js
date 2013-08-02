// Wess Pedigo
// August 1, 2013
// Functions: Assignment
// Functions_Wacky

// Fire Hose Friction Loss Formula

// The formula for calculating friction loss is  FL = C * (Q/100)^2 * L/100

// First value needed is to calculate is the diameter of the hose.

	var diameter = Number(prompt("Please enter the diameter of the fire hose.", 1.5));

	var validateDiameter = diameter != "" && !isNaN(diameter) ? true : false;

	var diameterMessage = validateDiameter ? "Thank you.  The diameter for the fire hose you entered was " + diameter + " inches." : "Sorry, but you have entered an invalid number for diameter.";
	console.log(diameterMessage);



// Second value needed to calculate is the length of the hose being used. 

	var sectionLength = Number(prompt("Please enter the total length of the hose you are using.", 150));

	var validateSectionLength = sectionLength != "" && !isNaN(sectionLength) ? true : false;

	var sectionLengthMsg = validateSectionLength ? "Thank you.  The section length of the hose you entered was " + sectionLength + " feet." : "Sorry, but you have entered an invalid number for section length.";
		console.log(sectionLengthMsg);
	
	

//Third piece of information needed to be collected from the user is the gallons per minute. 

	var gallonsPerMinute = Number(prompt("Please enter the gallons per minute or flow rate.",100));
	
	

	var coefficient = getCoefficient(diameter);

	var frictionLoss = getFrictionLoss(sectionLength, gallonsPerMinute, coefficient);
		console.log("Your fricton loss is " + frictionLoss + " psi.");    

// The last piece of the calculation involves getting the coefficient, which is determined by the hose diameter.

// Creating a function to provide the coefficient for diameter of the hose entered. 

	function getCoefficient(diameter){      //parameter, normal function
		var coefficient = "";    //declaring variable coefficient
			if(diameter == .75){
				coefficient = 1100;
			}else if(diameter == 1){	//created an else if statement in case the user does not enter .75
				coefficient = 150;
			}else if(diameter == 1.25){
				coefficient = 80;
			}else if(diameter == 1.5){
			coefficient = 24;
			}else if(diameter == 1.75){
				coefficient = 15.5;
			}else if(diameter == 2){
				coefficient = 8;
			}else if(diameter == 2.5){
				coefficient = 2;
			}else if(diameter == 3){
				coefficient = .677;
			}else if(diameter = 3.5){
				coefficient = .34;
			}else if(diameter == 4){
				coefficient = .2;
			}else if(diameter == 4.5){
			coefficient = .1;
			}else if(diameter == 5){
				coefficient = .08;
			}else{
				coefficient = .05;
			} 
	
	return coefficient;
}

function getFrictionLoss(sectionLength, gallonsPerMinute, coefficient){     //function to calculate friction loss.
	var loss = coefficient * (Math.pow(gallonsPerMinute / 100, 2)) * (sectionLength / 100);     //created variable to hold the value of the equation.  Used Math.pow due to tried using the ^ sign, but it did not like the sign for some reason.  
	return loss;
}










