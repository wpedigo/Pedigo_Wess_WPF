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
	
	
//Prompting the user to enter the estimated percentage of spam hits that would occur.

var spamHits = prompt("Please enter an estimated percentage of spam hits your site will recieve", 95);

	if(spamHits != "" && !isNaN(spamHits)){
		console.log("Thank you. You have entered " + spamHits + "%.");
	}else{
		console.log("Sorry, but you have entered an incorrect value of \"" + spamHits + "\". Please refresh your browser and try again.");
	}


//Call the functions and subtract the spam hits from the total hits.
var totalHitsPerDay = totalHitsPerDay(hitsPerDay, howManyYears);

var totalSpamHits = totalHitsPerDay * (spamHits / 100);

//var estimatedTotalHits = totalHitsPerDay - totalSpamHits;
	console.log("The estimated total number of \"real\" hits to your webpage is " + estimatedTotalHits + " for " + howManyYears + " year/years.");
	 

	
//create a function that will calculate total hits. 

function totalHitsPerDay(hits, year){		// two different parameters, normal function
	var total = hits * 365 * year;
	return total;
}



