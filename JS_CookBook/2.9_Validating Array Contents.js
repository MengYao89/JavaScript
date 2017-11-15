// 2.9. Validating Array Contents
// You want to ensure that array contents meet certain criteria.

// test function
function testValue (element,index,array) {
	var textExp = /^[a-zA-Z]+$/;
	return textExp.test(element); 
}

var elemSet = ["**",123,"aaa","abc","-",46,"AAA"]; // run test
// every() test every element until return false.
var result = elemSet.every(testValue);
console.log(result); // false

var elemSet2 = ["elephant","lion","cat","dog"];
    result = elemSet2.every(testValue);
console.log(result); // true

// some() test every element until return true.
var someResult = elemSet.some(testValue);
console.log(someResult);

/*
	The solution demonstrates that the same callback function can be used for both the every() and some() methods.
	The difference is that when using every(), as soon as the function returns a false value, the processing is finished, 
	and the method returns false. 

	The some() method continues to test against every array element until the callback function returns true. 
	At that time, no other elements are validated, and the method returns true. 
	However, if the callback function tests against all elements, and doesn’t return true at any point, 
	some() returns false.

	If all array elements must meet certain criteria, then use every(); otherwise, use some().
*/

/*
	The pros for using named function
	1. it shows up in a stack trace when you’re debugging your code, while an anonymous function doesn’t. 
	2. can use it in multiple places
	3. named functions perform better in all browsers than anonymous functions in the context of an Array method callback.
*/