// Wess Pedigo
// July 18,2013
// Assignment: Expressions
// Expressions_Industry

//Calculating profit base on cost, retail, and units sold.  Equation would be common when working as a web designer at an E-commerce store online, which is within my industry.

var cost = prompt("Please enter the cost of the product.", 25);   //created the first variable and a prompt box in order for the user to input how much the cost of the product is to the store selling the product. 

var retail = prompt("Please enter the retail price of the product.",50);  //created the second variable and a prompt box in order for the user to input how much the product will sell for at retail. 

var units = prompt("Please enter the number of units sold.", 2);  // created the 3rd variable to prompt the user to enter how many units of product were sold.

var profit = retail;      //created a new variable of profit and set it to equal retail in order to perform the next set of calculations.

profit -= cost;           //created a new equation with an assignment operator stating that profit = retail - cost.

profit *= units;  //created new equation to multiply profit by number of units sold

console.log("You made a profit of $" + profit.toFixed(2));    //added console.log in order to print the answer on the console, also googled how to add decimal places to look like currency. 













