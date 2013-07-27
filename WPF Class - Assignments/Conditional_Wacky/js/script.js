// Wess Pedigo
// July 25, 2013
// Assignment: Conditionals 
// Conditionals_Wacky

// Calculating the kill death ratio for battlefield three on Xbox 360.

// Ask the user to enter in the number of kills during a game.
	var numKills = Number(prompt("Please input the total number of kills you got.", ""));

// validate the value the user inputed for the number of kills.
	var validateNumKills = numKills != "" && !isNaN(numKills) ? true : false;
