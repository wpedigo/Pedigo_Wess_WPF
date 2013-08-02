// Wess Pedigo
// August 1,2013
// Assigment: Functions
// Functions_Industry

// Estimate how many "real" hits your website will get within a certain time frame?

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

var howManyYears = prompt("Please enter how many years the hits will be tracked." , 3);

	if(howManyYears != "" && !isNaN(howManyYears)){
		console.log("You have entered " + howManyYears + " years.");
	}else{
		console.log("You have entered and invalid number \"" + howManyYears + "\", whichi is an invalid value.  Please refreash the webpage and try again. Thank you.");
	}
	
//create a function that will calculate total hits. 


