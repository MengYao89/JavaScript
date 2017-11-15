// 2.11. Using a Destructuring Assignment to Simplify Code
// You want to assign array element values to several variables, but you really don’t want to have assign each, individually.

var stateValues = [459, 144, 96, 34, 0, 14];
var [Arizona, Missouri, ...rest] = stateValues;
console.log(Missouri); // 144
console.log(rest);

function sum() {
  var args = [].slice.call(arguments);
  var result = args.filter(function (elements) {
    return elements % 2 != 0;
  }).reduce((sum, number) => sum + number);
  console.log(result);
}

var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
sum(...numberArray);
// or
sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// The value of rest is the array of the remaining array elements.