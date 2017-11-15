// 2.2. Flattening a Two-Dimensional Array
var num = [1,2,3,4,5,6];

//var max = Math.max(...num);
var max = Math.max.apply(null, num);
console.log("max is : " + max);

var fruitarray = [];
fruitarray[0] = ['strawberry','orange']; 
fruitarray[1] = ['lime','peach','banana']; 
fruitarray[2] = ['tangerine','apricot']; 
fruitarray[3] = ['raspberry','kiwi'];

// The apply() method allows us to apply the function being called (concat) given an array of arguments.
var newArray = fruitarray.concat.apply([],fruitarray);


// var newArray = fruitarray[0].concat(fruitarray[1],fruitarray[2],fruitarray[3]); 
// if the array has several members, this approach is tedious and error prone

console.log(newArray); // tangerine