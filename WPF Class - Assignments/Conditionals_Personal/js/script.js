// Wess Pedigo
// July 25,2013
// Assignment: Conditionals
// Conditionals_Personal

//Calculating my home course handicap

//Ask the user to input the number of strokes for the first round of golf.
	var firstRound = Number(prompt("Please enter the stroke count for the first round", ""));

//validate the number of strokes
	var validateFirstRound = firstRound != "" && !isNaN(firstRound) ? true : false;
	
//ask the user to input the number of stokes for the 2nd round of golf.
	var secondRound = Number(prompt("Please enter the stroke count for the second round.", ""));
	
//validate the value for the 2nd round stroke count.
	var validateSecondRound = secondRound != "" && !isNaN(secondRound) ? true : false;

//Ask the user to input the stroke count for the thrid round of golf.
	var thirdRound = Number(prompt("Please enter the stroke count for the third round.", ""));
	
//validate the input the user placed in for the 3rd round of golf.
	var validateThirdRound = thirdRound != "" && !isNaN(thirdRound) ? true : false;

//Prompt the user to input the number of strokes for the 4th round.
	var fourthRound = Number(prompt("Please enter the stroke count for the fourth round", ""));
	
//validate the value of the 4th round stroke count entered by the user.
	var validatefourthRound = fourthRound != "" && !isNaN(fourthRound) ? true : false;
	
//Ask the user for the fifth round number of strokes.
	var fifthRound = Number(prompt("Please enter the stroke count for the fifth round", ""));
	
//validate the value of the fifth round stroke count entered.
	var validateFifthRound = fifthRound != "" && !isNaN(fifthRound) ? true : false;
	
//Ask the user to enter the course rating.
	var courseRating = Number(prompt("Please enter the course rating. Example of course rating is 71.2", ""));
	
//validate the value of the course rating value that the user entered.
	var validateCourseRating = courseRating != "" && !isNaN(courseRating) ? true : false;
	
//Ask the user to enter the slope of the course
	var courseSlope = Number(prompt("Please enter the course slope.  Example of the course slope is 112", ""));
	
//validate the value the user entered for the slope.
	var validateSlope = Number(prompt("Please enter the course slope.  Example of the course slope is 112", ""));
	
//Creating an equation to obtain the diferencial used to calculate the handicap.
var round1Dif = ((firstRound - courseRating) * 113 / courseSlope);
var round2Dif = ((secondRound - courseRating) * 113 / courseSlope);

