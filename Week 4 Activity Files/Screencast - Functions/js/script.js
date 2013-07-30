// Screencast: Functions

/* function functionName(){
	//code the function runs
}
*/

/* function outptMsg(){
	console.log("Hello World");
	
}

function calcArea(){
	var width = 20;
	var height = 30;
	var area = width * height;
	console.log(area);
}

*/

// Functions have to be called or invoked. 


/* function outptMsg(){
	console.log("Hello World");
	
}

function calcArea(){
	var width = 20;
	var height = 30;
	var area = width * height;
	console.log(area);
}

calcArea();
calcArea();
calcArea();

*/


/*// Variable scope 


var width = 5;

function calcArea(){
	var width = 20;
	var height = 30;
	var area = width * height;
	console.log(area);
}
console.log(width);
calcArea();
*/


//Arguments and Parameters

/*funcName(argument1, argument2);

function funcName(parameter1, parameter2){
	//code the function runds
}
*/

/*var total = calcArea(30, 20);

function calcArea(w, h){
	var area = w * h;
	return area; //function spitting the info out
}
console.log(total);*/


/*function dogYears(age){
	var dogYears = age * 7;
	console.log("Sparky is " + dogYears + " years old.")
}

var age1 = Number(prompt("Please enter the age of your dog in human years.",""));

var age2 = Number(prompt("Please enter your other dogs age in human years."));

dogYears(age1);
dogYears(age2);
*/

/*
var width = 5;

function calcArea(){
	var width = 20;
	var height = 30;
	var area = width * height;
	console.log(area);
}
console.log(width);
calcArea();
*/

/*function dogYears(age){
	var dogYears = age * 7;
	console.log("Sparky is " + dogYears + " years old.")
}

var age1 = 4;
dogYears(age1);
dogYears(5);
dogYears(4);
*/

/* var total = calcArea(30, 20);

function calcArea(w, h){
	var area = w * h;
	return area;  //function is spitting the info out.
}

console.log(total);
*/

var calcArea = function(width, height){
	var area = width * height;
	return area;
}

var a = calcArea(20, 30);
console.log(a);