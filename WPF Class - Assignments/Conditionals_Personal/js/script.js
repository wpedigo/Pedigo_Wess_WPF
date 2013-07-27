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
	var secondRound = Number(prompt("Please enter the stroke count for the second round", ""));