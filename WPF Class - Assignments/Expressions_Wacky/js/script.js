// Wess Pedigo
// July 18,2013
// Assignment: Expressions
// Expressions_Wacky

// Calculating a baseball player's hitting average.

var batter1 = new Array();   //Pre-setting array variable
var batter2 = new Array();   //Pre-setting array for second variable.

batter1["atBats"] = prompt("How many at bats does the first batter have?",500);  //prompts the user to enter in how many at bats batter has.

batter1["hits"] = prompt("How many hits does batter 1 generate?",300);  // adding a prompt to have user enter how many hits the batter generated.

batter2["atBats"] = prompt("How many at bats did the second batter have?",500);  //added prompt to have the user enter how many at bats batter 2 had.

batter2["hits"] = prompt("How many hits does batter 2 generate?",300); //added the last prompt for the user to enter in how many hits the batter generated. 

var batter1Avg = batter1["hits"] / batter1["atBats"];   //created a variable with the value of an equation, which provides the batter's hitting average.

var batter2Avg = batter2["hits"] / batter2["atBats"];  //created the same equation from batter one to batter 2.

console.log("Batter 1's batting average is " + batter1Avg.toFixed(3) + ".");   //added console.lot, in order to display the outcome of the equation.

console.log("Batter 2's batting average is " + batter2Avg.toFixed(3) + ".");