// 3.2. Passing a Function As an Argument to Another Function

function otherFunction(x, y, z) {
  x(y, z);
}

var param = function (arg1, arg2) {
  console.log(arg1 + " " + arg2);
};

otherFunction(param, "Hello", "World");
// or 
otherFunction(function (arg1, arg2) {
  console.log(arg1 + " " + arg2);
}, "Hi", "Alex");


/* 
	The main benefit with naming the function expression is when you’re debugging your JavaScript, 
	the named function appears by its name in a stack trace, rather than just an anonymous function.
*/
var param = function inner() {
  return typeof inner;
}
console.log(param()); // "function"

// Problem: sum all the numbers in an array.
var nums = [1, 45, 2, 16, 9, 12];
var sum = 0;
for (var i = 0; i < nums.length; i++) {
  sum += nums[i];
}
console.log("sum = " + sum); // 85

// The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
var sum2 = nums.reduce(function (accumulator, item) { return accumulator + item; });
console.log("sum2 = " + sum2); // 85

var sum3 = 0;
nums.forEach((element) => sum3 += element)
console.log("sum3 = " + sum3)
/*
	A function that always delivers the same result given the same argument values, 
	and that never modifies any external data or triggers any side effects is known as a pure function.
*/
