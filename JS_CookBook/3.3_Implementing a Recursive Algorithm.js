// 3.3. Implementing a Recursive Algorithm
// Problem: You want to implement a function that will recursively traverse an array and return a string of the array element values, in reverse order.

var reverseArray = function(x,indx,str) {
	return indx == 0 ? str : reverseArray(x,--indx,(str+= x[indx] + " "));
}

var arr = ['apple','orange','peach','lime']; 
var str = reverseArray(arr,arr.length,""); 
console.log(str);

var arr2 = ['car','boat','sun','computer']; 
str = reverseArray(arr2,arr2.length,""); 
console.log(str);


// This is a recursive implementation of factorial.
/* 
factorial(4) --> 4 * factorial(3) --> 3 * factorial(2) --> 2 * factorial(1) == 1 = 2
*/
function factorial(n) {
	return n == 1 ? 1 : n * Factorial(n -1);
}