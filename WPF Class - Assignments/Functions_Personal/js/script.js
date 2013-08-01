// Wess Pedigo
// July 31, 2013
// Assignment:Functions
// Functions_Personal

//Calculating a homeowner's tax bill and then splitting it up into monthly payments. 

var assessedValue = Number(prompt("Please enter the current assessed value for your home.", 150000));

var millageRate = Number(prompt("Please enter the millage rate set by the tax office.", 5.0));



//Need to create a funtion that will calculate the assessed value * (millage rate * .001) / 12 months.

function calculateTaxes(assessment, mills){   //parameters
	var payment = (assessment * (mills * .001)) / 12;  //calculation within function
	return payment = payment.toFixed(2);    //added the .toFixed(2) method in order to give amount with two decimal places.
}