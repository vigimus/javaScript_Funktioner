//<script type="text/javascript" src="script.js"></script> är hur man länkar i html



//"Function declaration"
function sagHej() {
	console.log("Hej!");
}

sagHej();

//"Function expression"
//Här har vi skapat en funktion och stoppat in den i variabeln sejHajda
//I det här fallet har självaste funktionen inget namn så det är en "Anonymous function"
//Man kan ge funktionen här ett namn t.ex function byebye() { } men det är överkurs
var sejHajda = function() {
	console.log("Hejdå!");
}

sejHajda();

// Att vi använder argumentet song gör att det är lättare att ändra koden i framtiden
function sing(song) {
	console.log(song);
}

sing("Jadadidadu");
sing("Duda duda");
sing("Jadalidadu");

//För att vi ska få en output behöver vi använda "return" i detta fallet
function multiply(a, b) {
	//console.log(a, b); kan användas i felsökningsyfte
	// Efter return så stänger funktionen så man kan inte använda flera return under varandra
	return a * b;
}

multiply(10, 5);

//Om första return blir en else så kommer den andra return användas annars första
function multiply2(a, b) {
	if (a > 10 || b > 10) {
		return "Det är för svårt";
	} else {
		return a*b;
	}
}

alert(multiply2(3, 2));