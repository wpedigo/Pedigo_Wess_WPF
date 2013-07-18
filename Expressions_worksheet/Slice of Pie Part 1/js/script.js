// Wess Pedigo
// July 17,2013
// Expression Worksheet

// Slice of Pie part 1
// Calculate how much pizza each party goer receives.

var slicesOfPizza = 8;  //number of slices per person
var partygoers = 24;    //number of people at the party
var pizzasOrdered = 9;  //number of pizzas ordered

//Multiply pizzas ordered by slices of each pizza, and then divided the total by number of //partygoers.

var slicesReceived = (pizzasOrdered * slicesOfPizza)/partygoers;       

//Print out number of slices each person received.   
console.log("Each person ate " + slicesReceived + " slices of pizza at the party.");








