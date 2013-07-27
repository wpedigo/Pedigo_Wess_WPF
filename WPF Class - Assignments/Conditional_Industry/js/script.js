// Wess Pedigo
// July 25,2013
// Assignment: Conditionals
// Conditionals_Industry

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
	var projectHours = Number(prompt("Please enter the total number of project hours.", "");
	
//validate the value for project hours
	var validateProjectHours = projectHours != "" && !isNaN(projectHours) ? true ; false;
	
	var projectHoursMessage = validateProjectHours ? "Thank you.  The number of total project hours was: " + projectHours : "Sorry, but you have entered an invalid number for project hours.";
	console.log(projectHoursMessage);
	

