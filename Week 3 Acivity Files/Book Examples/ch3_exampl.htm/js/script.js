// Wess Pedigo
// July 21,2013


//ch3_exampl.htm

var degFahren = Number(prompt("Enter the degree Fahrenheit", 32));
var degCent;

degCent = 5/9 * (degFahren - 32);

console.log(degFahren + "\xB0 Fahrenheit is " + degCent + "\xB0 centigrade<br />");

if(degCent < 0){
	console.log("That's below the freezing point of water");
}
if(degCent == 100){
	console.log("That's the boiling point of water");
}
