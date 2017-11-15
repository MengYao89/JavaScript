// 2.1. Searching Through an Array

var animals = new Array("dog","cat","seal","walrus","lion", "cat"); 
console.log(animals.indexOf("cat")); // prints 1, search from head to tail.
console.log(animals.lastIndexOf("cat")); // prints 5, search from tail to head.

/*
var animals = ["dog","cat","seal","walrus","lion", "cat"]; 
console.log(animals.indexOf("cat",2)); // prints 5
console.log(animals.lastIndexOf("cat",4)); // prints 1
*/

var nums=[2,4,19,15,183,6,7,1,1];
var over = nums.findIndex(function(element){
	console.log(element);
	return (element >= 100);
}); // findIndex or find have 3 arguments, 1->element, 2->index, 3->array itself.
console.log(nums[over]);

var allNum=[2,4,19,15,183,6,7,1,1];
// allNum.find(function(element, index, array){
// 	if(element == 15) array[index] = 1000;
// });
allNum.find((element, index, array)=>((element == 15) && (array[index] = 999)))
console.log(allNum);

// This findIndex will only return 1 matched index or undefined if nothing matched.

/*
A comparable ES 6 Array method is find(), which does the same process but returns the value of the element that successfully passes the given test. 
Both methods take a callback function, and an optional second argument to act as this in the function. 
The callback function has three arguments, the array element, index, and array, itself, but only the first is required. 
Neither method mutates the original array.

*/