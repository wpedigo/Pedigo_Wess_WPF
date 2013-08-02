// Wess Pedigo
// August 1, 2013
// Functions: Assignment
// Functions_Wacky

// Fire Hose Friction Loss Formula

// The formula for calculating friction loss is  FL = C * (Q/100)^2 * L/100

// First value needed is to calculate is the diameter of the hose.

var diameter = Number(prompt("Please enter the diameter of the fire hose.", 1.5));

// Second value needed to calculate is the length of the hose being used. 

var sectionLength = Number(prompt("Please enter the total length of the hose you are using.", 150));

//Third piece of information needed to be collected from the user is the gallons per minute. 

var gallonsPerMinute = Number(prompt("Please enter the gallons per minute or flow rate.",100));


// The last piece of the calculation involves getting the coefficient, which is determined by the hose diameter.

// Creating a function to provide the coefficient for diameter of the hose entered. 

function getCoefficient(diameter){      //parameter, normal function
	var coefficient = "";    //declaring variable coefficient
	if(diameter == .75){
		coefficient = 1100;
	}else if(diameter == 1){	//created an else if statement in case the user does not enter .75
		coefficient = 150;
	}
}