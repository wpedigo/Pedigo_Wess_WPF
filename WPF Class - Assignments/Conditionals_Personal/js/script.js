// Wess Pedigo
// July 25,2013
// Assignment: Conditionals
// Conditionals_Personal

//Calculating my home course handicap

//Ask the user to input the number of strokes for the first round of golf.
	var firstRound = Number(prompt("Please enter the stroke count for the first round", ""));

//validate the number of strokes
	var validateFirstRound = firstRound != "" && !isNaN(firstRound) ? true : false;
	
//ask the user to input the number of stokes for the 2nd round of gold.
	var secondRound = Number(prompt("Please enter the stroke count for the second round.", ""));
	
//validate the value for the 2nd round stroke count.
	var validateSecondRound = secondRound != "" && !isNaN(secondRound) ? true : false;

//Ask the user to input the stroke count for the thrid round of golf.
	var thirdRound = Number(prompt("Please enter the stroke count for the third round.", ""));
	
//validate the input the user placed in for the 3rd round of golf.
	var validateThirdRound = thirdRound != "" && !isNaN(thirdRound) ? true : false;

//Prompt the user to input the number of strokes for the 4th round.
	var fourthRound = Number(prompt("Please enter the stroke count for the fourth round", ""));
	
//validate the value of the 4th round value entered by the user.
	var validatefourthRound = fourthRound != "" && !isNaN(fourthRound) ? true : false;
	
