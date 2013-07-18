// Wess Pedigo
// July 17,2013
// Expression Worksheet

// Discounts
// Calculate how many slices of pizze Sparky receives after each party person gets an even // amount of slices.

var slicesOfPizza = 7;  //number of slices per person
var partygoers = 24;    //number of people at the party
var pizzasOrdered = 9;  //number of pizzas ordered
 
var leftOverPizza = pizzasOrdered * slicesOfPizza % partygoers; //Using modulo to calculate the remainder of pizza left over for Sparky.


//Print out number of slices Sparky will receive.   
console.log("Sparky got " + leftOverPizza + " slices of pizza.");








