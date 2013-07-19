// Wess Pedigo
// July 18,2013
// Assignment: Expressions

// Calculate Profit based on Cost, Retail and Units sold for an ecommerce store

var cost = prompt("Please enter the cost of the product", 25);
var retail = prompt("Please enter the retail price", 50);
var units = prompt("Please enter units sold", 2);

// Set profit to retail
var profit = retail;  

// Subtract cost
profit -= cost;

//Multiply by units sold
profit *= units

// Make Profit
console.log("You have a profit of $" + profit.toFixed(2));










