// Wess Pedigo
// July 21,2013
// Conditionals_worksheet
// Group 1 - Last Chance for Gas!

//Can a driver make it 200 miles across the desert with their current fuel?

// Ask the user to input mpg 
var mpg = Number(prompt("How many miles per gallon does your car get?",35));  

// Ask the user to input percentage of gas left in the tank
var gasLeftInTank = Number(prompt("What is the percentage of gas left in the tank",.50));

// Ask the user to input number of gallons of gas the tank will hold.
var tankCapacity = Number(prompt("How many gallons of gas will your car hold?",15));



//If the car has enough gas to drive 200 miles.

// multiple the (tankCapacity * gasLeftInTank) * mpg = 
 
var milesLeft = (tankCapacity * gasLeftInTank) * mpg;

// divide milesleft by mpg
var gallonsLeft = (milesLeft/mpg);

if(milesLeft >= 200){
	console.log("Yes, you can make it without stopping for gas!"); //Print out if miles left is 200 or great
}else{
	console.log("You only have " + gallonsLeft + " gallons of gas in your tank, better get gas now while you can!");  //print out if miles left is less than 200.
}

