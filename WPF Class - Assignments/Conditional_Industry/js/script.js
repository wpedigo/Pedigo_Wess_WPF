// Wess Pedigo
// July 25,2013
// Assignment: Conditionals
// Conditionals_Industry

//creating an array to provide how much each position charges per hour.
var positions = new Array();
positions["Project Manager"] = 200;
positions["Designer"] = 45;
positions["Frontend Developer"] = 65;
positions["Backend Developer"] = 55;

// Calculating the cost of a web design project and verifying if it's within a company's budget.

// Client budget estimate calculator.
	var budget = Number(prompt("Please enter in the total budget for your project. Example $15,000", ""));

//validate the number typed into budget

	var validateBudget = budget != "" && !isNaN(budget) ? true : false;    //created 	ternary to validate if value for budget is blank or not a number(googled the isNaN  function to determine if it's a number or not.) 
	
//created a variable to print to the console wether the outcome was true or false.	
	var budgetMessage = validateBudget ? "Thank you. The number you entered for your budget was: " + budget : "Sorry, but you have entered an invalid number for your budget.";
	console.log(budgetMessage);

// how many project managers are there.
	var projectManager = Number(prompt("Please enter the number of project managers.", 	""));

//created a variable for project manager and a prompt.
	

//validate the number of project managers.
	var validateProjectManager = projectManager != "" && !isNaN(projectManager) ? true : 	false;
	
	var projectManagerMessage = validateProjectManager ? "Thank you.  The number of project managers you entered was: " + projectManager : "Sorry, but you have entered an invalid 	number for your budget.";
	console.log(projectManagerMessage); 
	
//how many designers 
	var designer = Number(prompt("Please enter the number of designers." ,""));
	
//validate the number entered for designers
	var validateDesigner = designer != "" && !isNaN(designer) ? true : false;
	
	var designerMessage = validateDesigner ? "Thank you.  The number of designers entered was: " + designer : "Sorry, but you have entered an invalid number for designers.";
	console.log(designerMessage);
	
//Enter the number of front end developers
	var frontEnd = Number(prompt("Please enter the number of front end developers.", ""));

//validate the number of front end developers.	
	var validateFrontEnd = frontEnd != "" && !isNaN(frontEnd) ? true : false;
	
	var frontEndMessage = validateFrontEnd ? "Thank you.  The number of front end developers was: " + frontEnd : "Sorry, but you have entered an invalid number for front end developers.";
	console.log(frontEndMessage);
	
//enter the number of backend developers.
	var backEnd = Number(prompt("Please enter the number of back developers.", ""));
	
//validate the value entered for back end developers
	var validateBackEnd = backEnd != "" && !isNaN(backEnd) ? true : false;
	
	var backEndMessage = validateBackEnd ? "Thank you.  The number of back end developers was: " + backEnd : "Sorry, but you have entered an invalid number for back end developers.";
	console.log(backEndMessage);
	
//Enter the total number of hours for the project
	var projectHours = Number(prompt("Please enter the total number of project hours.", ""));
	
//validate the value for project hours
	var validateProjectHours = projectHours != "" && !isNaN(projectHours) ? true : false;
	
	var projectHoursMessage = validateProjectHours ? "Thank you.  The number of total project hours was: " + projectHours : "Sorry, but you have entered an invalid number for project hours.";
	console.log(projectHoursMessage);
	
//creating variable that holds and equation for number of project managers entered and multiplying that by the amount help in the array.
	var projectManagerTotals = projectManager * poistions["Project Manager"] * projectHours;
	console.log("Total cost for the number of project managers on your project is: " + projectManagerTotals);
	
//creating varialbe that holds the equation for the number of designers entered times the value in the "Designer" array.
	var designerTotals = designer * positions["Designer"] * projectHours;
	console.log("Total cost for the number of developers on your project is: " + designerTotals);
	
//creating variable that holds the equation for the number of front end delopers entered times the value in the  "Frontend Developer" array and multiply it by number of project hours.
	var frontEndTotals = frontEnd * positions["Frontend Developer"] * projectHours;
	console.log("Total cost for the number of Frontend Developers on your project is: " + frontEndTotals);	

//creating a variable that holds the value that comes from multiplying the numeber of backend users times the value in the array and multiply that by the number of project hours.
	var backEndTotals = backEnd * positions["Backend Developer"] * projectHours;
	console.log("Total cost for the number of backend developers on your project is: " + backEndTotals);
	
//creating a varialbe for the total cost of all positions.
var totalCost = projectManagerTotals + designerTotals + frontEndTotals + backEndTotals;

//creating a variable to calculate the total cost per hour.
var totalCostPerHour = totalCost / projectHours;

if(totalCost > budget){
	console.log("The estimated cost of the project is $" + (totalCost - budget) + " over your budget.  The total estimated cost of the project is $" + totalCost + " and the estimated cost per hour is $" + totalCostPerHour + ".");
}else{
	console.log("The estimated cost of this project is under your set budget of $" + budget + ".  The total estimated cost of the project is $" + totalCost + " and the estimated cost per hour is $" + totalCostPerHour + ".");
}
	

