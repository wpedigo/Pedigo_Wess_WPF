// Wess Pedigo
// July 25,2013
// Assignment: Conditionals
// Conditionals_Industry

// Calculating the cost of a web design project and verifying if it's within a company's budget.

// Client budget estimate calculator.

var budget = Number(prompt("Please enter in the total budget for your project. Example $15,000", ""));

//validate the number typed into budget

var validateBudget = budget != "" && !isNaN(budget) ? true : false;    //created ternary to validate if value for budget is blank or not a number(googled the isNaN function to determine if it's a number or not.) 

// how many project managers are there.


