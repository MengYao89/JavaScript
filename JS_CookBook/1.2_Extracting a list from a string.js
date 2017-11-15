// 1.2 Extracting a list from a string
// step 1: extract out the string containing the list of items
// step 2: convert this string into a list.
var sentence = 'This is one sentence. This is a sentence with a list of items:' + 'cherries, oranges, apples, bananas. That was the list of items.';
var start = sentence.indexOf(':');
var end = sentence.indexOf('.', start+1);

// var listStr = sentence.substring(start+1, end); // 1. start index. 2. end index.
// var listStr = sentence.substr(start+1, end-start); 1. start index. 2. substring length.
// var fruits = listStr.split(',');

var fruits = sentence.substring(start+1, end).split(',');
// var fruits = listStr.split(/\s*,\s*/); Regular expressiong to split() that trims the result before it's returned.
console.log(fruits); // [' cherries', ' oranges', ' apples', ' bananas']

fruits.forEach(function(elmnt, indx, arry){
	arry[indx] = elmnt.trim();
})

/*
The forEach() method applies the function passed as parameter (the callback) to each array element. 
The callback function supports three arguments: 
the array element value, and optionally, the array element index and the array itself.
*/

console.log(fruits); // ['cherries', 'oranges', 'apples", "bananas"]

/*
The indexOf() method takes a search value, as first parameter, and an optional begin‐ ning index position, as second.
The substring() method, passing in the two index values representing the beginning and end‐ ing positions of the string.
The substr() that begins extraction at an index position marking the start of the substring and passing in the length of the substring as the second parameter.
The split() to split the string into its individual values by passing a character.
*/

