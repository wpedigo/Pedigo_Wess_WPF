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
		coefficient = .05; 	   //use this coefficient if other hose diameters are being used that are bigger than 5. 
	}
	
	return coefficient;
}