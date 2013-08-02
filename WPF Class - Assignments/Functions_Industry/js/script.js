// Wess Pedigo
// August 1,2013
// Assigment: Functions
// Functions_Industry

// How many real hits your website get within a certain time frame?

// totalHits = (hits * 365 * year)
// spamHits = totalHits * (percent / 100) 
// realHits = totalHits - spamHits   


//prompting the user to enter number of hits per day
var hitsPerDay = prompt("Please enter the number of hits your website gets per day.", 3000);

if(hitsPerDay != "" && !isNaN(hitsPerDay)){
	console.log("The number of hits you entered is " + hitsPerDay + ".");
}else{
	console.log("You have entered \"" + hitsPerDay + "\", which is an invalid value.  Please refreash the webpage and try again.  Thank you.");
}


//Prompting the user to enter the number of years he wants forcasted. 

