// Wess Pedigo
// July 31, 2013
// Assignment:Functions
// Functions_Personal

//Calculating a homeowner's tax bill and then splitting it up into monthly payments. 

var assessedValue = myPrompt("Please enter the current assessed value for your home.", 150000, "Sorry, but you must enter a number for the value of your home.");  

var millageRate = myPrompt("Please enter the millage rate set by the tax office.", 5.0, "Sorry, but you must enter a number for the millage rate.");



//Need to create a funtion that will calculate the assessed value * (millage rate * .001) / 12 months.

var calculateTaxes = function(assessment, mills){   // Anonymous Function, parameters
	var payment = (assessment * (mills * .001)) / 12;  //calculation within function
	return payment = payment.toFixed(2);    //added the .toFixed(2) method in order to give amount with two decimal places.
}

var paymentPerMonth = calculateTaxes(assessedValue, millageRate);  

console.log("Your monthly payment is $" + paymentPerMonth + ".");



//create a function to validate the information the user put in for the assessedValue and millageRate variables.



function myPrompt(msg, example, errMsg){		//normal function, parameters

	var value = Number(prompt(msg, example));	
	
	if(isNaN(value)){		//isNaN will determine if the value entered into value is a number or string
		
	}
	
	
}
	



