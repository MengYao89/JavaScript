// 2.4_Extracting a Portion of an Array.js

// The Array slice() method extracts a shallow copy of a portion of an existing array:
var animals = ['elephant','tiger','lion','zebra','cat','dog','rabbit','goose'];
var domestic = animals.slice(4,7);
domestic[0] = "bbbbb";

console.log(domestic); // ['cat','dog','rabbit'];
console.log(animals);

// If the array element is a primitive data type, such as a string or number, the elements are copied by value
// changes to the new array won’t be reflected in the old.

// But if the array element is a objects like array object etc., the value will be copied by reference.
var mArray = [];
mArray[0] = ['apple','pear']; 
mArray[1] = ['strawberry','lemon']; 
mArray[2] = ['lime','peach','berry'];
var nArray = mArray.slice(1,2); 
console.log(mArray[1]); // ['strawberry','lemon']
nArray[0][0] = 'raspberry'; 
console.log(nArray[0]); // ['raspberry','lemon'] 
console.log(mArray[1]); // ['raspberry','lemon']