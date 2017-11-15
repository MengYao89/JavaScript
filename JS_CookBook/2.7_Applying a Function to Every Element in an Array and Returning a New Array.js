// 2.7_Applying a Function to Every Element in an Array and Returning a New Array.js

// Use the Array map() method to create a new array consisting of elements 
// from the old array that have been modified via a callback function passed to the method:
var decArray = [23, 255, 122, 5, 16, 99];
var hexArray = decArray.map(function(element) { 
	return element.toString(16);
});
console.log(hexArray); // ["17", "ff", "7a", "5", "10", "63"]

/* 
   Like the forEach() method in Recipe 2.5, 
   the map() method applies a callback function to each array element. 
   Unlike forEach(), though, the map() method results in a new array rather than modifying the original array. 
   You don’t return a value when using forEach(), 
   but you must return a value when using map().

   The function that’s passed to the map() method has three parameters: 
   1. the current array element, and, optionally, 
   2. the array index 
   3. and the array itself. Only the first is required.
*/

var defaultArray = [1, 2, 3, 4, 5];
var newArray = defaultArray.map((element)=>element+=1);
console.log(newArray);

// function for map must return a element not like forEach();
function toString(element){
	return element.toString();
}
var strArray = defaultArray.map(toString);
console.log(strArray);