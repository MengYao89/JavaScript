// 3.5. Creating a Function That Remembers Its State
// Probelm: You want to create a function that can remember data, 
// but without having to use global variables and without resending the same data with each function call.

// but the outer function cannot access the argument passed to the inner function
function greetingMaker(greeting) { 

	// The inner function can access both its argument and the outer function’s argument
	function addName(name) {
		return greeting + " " + name; 
	}
	return addName; 
}
    // Now, create new partial functions
var daytimeGreeting = greetingMaker("Good Day to you"); 
var nightGreeting = greetingMaker("Good Evening");

console.log(daytimeGreeting("Day time sr"));  // if daytime

console.log(nightGreeting("Night time sr")); // if night

/* 
	Good Day to you Day time sr
	Good Evening Night time sr
*/

/*
	We want to avoid cluttering up the global space with variables, as much as possible. 
	However, there are times when you need to store data to be used across several function calls, 
	and you don’t want to have to repeatedly send this information to the function each time.

	A way to persist this data from one function to another is to create one of the functions within the other, 
	so both have access to the data, and then return the inner function from the outer.

	Returning one function from another, when the returned function is using the outer function’s scope, 
	is known as a function closure.
*/
