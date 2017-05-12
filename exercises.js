// JS date objects exercises
/* 	1. Write a function that prints out the current date and time in 
	the following format: "Today is: DayOfTheWeek, HH:MM DD/MM/YYYY".
	Ex. "Today is: Monday, 7:00 13/3/2017"
*/
var today = new Date();
var DayOfTheWeek = function() {
	 var day = today.getDay();
	if (day=== 0) {
		return ("Sunday");
	}
	if (day === 1) {
		return ("Monday");
	}
	if (day === 2) {
		return ("Tuesday");
	}
	if (day === 3) {
		return ("Wednesday");
	}
	if (day === 4) {
		return ("Thursday");
	}
	if (day === 5) {
		return ("Friday");
	}
	if (day === 6) {
		return ("Saturday");
	}
}

console.log("Today is: " + DayOfTheWeek()+"," + " " + today.getHours() + ":" + today.getMinutes() + " " + today.getDate() + "/" + (today.getMonth()+1) + "/" + today.getFullYear());

// another way to get the Day names 

// var DaysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// console.log("Today is: " + DayOfTheWeek[today.getDay()]+"," + " " + today.getHours() + ":" + today.getMinutes() + " " + today.getDate() + "/" + (today.getMonth()+1) + "/" + today.getFullYear());


/*  2. Write a function to see if a given year is a leap year.
	A year is a leap year if it is divisible by 4, except for 
	years that are divisible by 100. The years that are divisible
	by 400 however are leap years.
*/

var leapYr = function(year) {

	if (year % 400 === 0) {
		console.log("this is a leap year");
	} 
	
	else if (year % 100 === 0) {
		console.log("this is not a leap year");
	} 

	else if (year % 4 === 0) {
		console.log("this is a leap year");
	}

	else {
		console.log("this is not a leap year");
	}
}



/*  3. Write a function that plays a guessing game.
	-pick a random number between 1-20
	-use prompt() to get user input
	-check if guess matches or not
		-if match -> give congratulations message with # of tries
		-if fail -> reprompt for next guess 
*/
function guessGame() {
	var answer = Math.ceil(20*Math.random());
	var keepTry = true;
	var numGuess = 0;
	while (keepTry === true) {
		var userGuess = prompt("Guess a number between 1 and 20: ");
		userGuess = Number(userGuess);
		numGuess++;
	
		if (answer === userGuess) {
			console.log("You got it! It took you " + numGuess + " tries");
			break;
		} 
		else {
			console.log("Try again please!"); 
		}
	}
}

/* 	4. Write a function which takes a string and a letter. It console.log(s 
	the number of times the letter appears in the string
*/

function letter_count(string,letter) {
	var Lcount = 0;
	for (var i = 0; i<string.length; i++) {
		if (string[i]===letter) {
			Lcount++;
		}
	}

console.log("The letter " + letter + " appears " + Lcount + " times in the string " + string);
}


/* 	5. Write a function that takes an array of numbers and prints the 
	smallest and largest numbers from the array.
*/

var nums= [1,2,3,5,7];
var number =[100,140,234,456,678,235];

function smLg(array){
	largest=array[0];
	smallest=array[0];
	for (var i=0; i<array.length; i++){
		if (array[i]>largest)
			largest=array[i];
		}
		if (array[i]<smallest){
			smallest=array[i];
		}

console.log(largest,smallest);
}


/*	6. Write a function which takes an object as a parameter and prints
	all the property names and their values. Also give the total number of
	properties in the object.
*/

var superman = {
	name: "Clark Kent",
	height: 75,
	weight: 235,
	hero: true,
	villain: false
}; 
function property_value(superman) {
	var count = 0;
	for (var elements in superman) {
		count++;
		console.log(elements + ": " + superman[elements]);	
	} 
	
	console.log("In this object there are "  + count + " properties");
}
	// 7. Use the following array for this problem.

	var library = [ 
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
   }];	

   // Write a function which takes as its parameter the above array. Then 
   // for each of the elements write a log to the console. Here are example
   // logs: "I am reading 'The Road Ahead' by Bill Gates",
   // 		 "I will read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins"
   // If the readingStatus is true, then it should say "am reading", and
   // if the readingStatus is false, then it should say "will read".
 

var read = function(library) {
	
	for (var i=0; i<library.length; i++){
		
		if (library[i].readingStatus === true) {
		console.log("I am reading " + library[i].title + " by " + library[i].author);
		}
		else {
			console.log("I will read "+ library[i].title + " by " + library[i].author);
		}
	} 

}