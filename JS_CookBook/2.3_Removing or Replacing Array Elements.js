// 2.3_Removing or Replacing Array Elements

// You want to find occurrences of a given value in an array, 
// and either remove the element or replace with another value.

var animals = new Array("dog","cat","seal","walrus","lion", "cat");

// remove the element from array 
animals.splice(animals.indexOf("walrus"),1); // dog,cat,seal,lion,cat
// splice in new element
animals.splice(animals.lastIndexOf("cat"),1,"monkey"); // dog,cat,seal,lion,monkey

console.log(animals.toString());

// The splice() method takes three parameters:
// 1. index where the splicing is to take place
// 2. the number of elements to remove
// 3. is a set of the replacement elements


//  If the index is negative, the elements will be spliced from the end rather than the beginning of the array:
var animals = ["cat","walrus","lion", "cat"]; // splice in new element
animals.splice(-1,1,"monkey"); // cat,walrus,lion,monkey

// If the number of elements to splice is not provided, all elements from the index to the
// end will be removed:
var animals = ["cat","walrus","lion", "cat"]; // remove all elements after second
animals.splice(2); // cat,walrus

// The last parameter, the replaced value, can be a set of replacement elements, separated
// by commas:
var animals = ["cat","walrus","lion", "cat"]; // replace second element with two
animals.splice(2,1,"zebra","elephant"); // cat,walrus,zebra,elephant,cat

// Example 2-1. Using looping and splice to replace and remove elements
var charSets = ["ab","bb","cd","ab","cc","ab","dd","ab"];
// replace element
while (charSets.indexOf("ab") != -1) { 
	charSets.splice(charSets.indexOf("ab"),1,"**");
}
// ["**", "bb", "cd", "**", "cc", "**", "dd", "**"]
console.log(charSets);
// delete new element
while(charSets.indexOf("**") != -1) { 
	charSets.splice(charSets.indexOf("**"),1);
}
console.log(charSets); // ["bb", "cd", "cc", "dd"]
