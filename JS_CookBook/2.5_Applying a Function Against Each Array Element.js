// 2.5_Applying a Function Against Each Array Element.js

// Use the Array method forEach() to apply a callback function to each array element:
var charSets = ["ab","bb","cd","ab","cc","ab","dd","ab"];

// Don’t return a value from the function passed to the forEach() method, as the value will be discarded.
function replaceElement(element,index,array) { 
	if (element == "ab") array[index] = "**";
}
// apply function to each array element
// forEach need a function reference not like function();
// The forEach() method takes one argument, the callback function.
charSets.forEach(replaceElement);
console.log(charSets); // ["**", "bb", "cd", "**", "cc", "**", "dd", "**"]

// use the arrow function to forEach
charSets.forEach((element, index, array)=>(element == "**") && (array[index] = "--"));
console.log(charSets);

charSets.forEach((element, index, array)=>{
	if (element == "--") array[index] = "++";
});
console.log(charSets);
