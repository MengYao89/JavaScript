// 2.8. Creating a Filtered Array
// filter element values in an array and assign the results to a new array.

var charSet = ["**","bb","cd","**","cc","**","dd","**"];
var newArray = charSet.filter(function(element) { 
	return (element !== "**");
});
console.log(newArray); // ["bb", "cd", "cc", "dd"]

/*
	The function passed as a parameter to the filter() method returns either true or false based on some test against the array elements. 
	This returned value determines if the array element is added to a new array:
		it’s added if the function returns true; 
		otherwise, it’s not added.

	The function has three parameters: the array element, and, optionally, the index for the element and the original array.
*/

var valueArray = [1,2,3,4,5,6,7,8,9,10];
var oddArray = valueArray.filter((element)=>(element%2 != 0));
var evenArray = valueArray.filter((element)=>(element%2 == 0));
console.log(oddArray);
console.log(evenArray);

