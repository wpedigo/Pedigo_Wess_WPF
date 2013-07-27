// Wess Pedigo
// July 25, 2013
// Assignment: Conditionals 
// Conditionals_Wacky

// Calculating the kill death ratio for battlefield three on Xbox 360.

// Ask the user to enter in the number of kills during a game.
	var numKills = Number(prompt("Please input the total number of kills you got.", ""));

// validate the value the user inputed for the number of kills.
	var validateNumKills = numKills != "" && !isNaN(numKills) ? true : false;

	var killMessage = validateNumKills ? "Thank you.  The number of kills you entered was: " + numKills : "Sorry, but you have entered an invalid number for kills.";
	console.log(killMessage);
	
// Ask the user to enter in the number of deaths during the game.
	var numDeaths = Number(prompt("Please input the total number of deaths you received.", ""));
	
// Validate the value the user input to the number of deaths prompt.