// 3.6. Converting Function Arguments into an Array
// Probelm: You want to use Array functionality on a function’s arguments, but the arguments object isn’t an array.

/* 
function someFunc() {
	var args = Array.prototype.slice.call(arguments); 
}
or
*/

function someFunc() {
  // The slice() method returns a shallow copy of a portion of an array, 
  // or all of an array if a begin or ending value is not given.
  // The slice() method is also a function, which means functional methods like call() can be used with it.
  var args = [].slice.call(arguments);

  args.forEach((element) => console.log(element))
}

someFunc("aaa", "bbb");

function sumRounds() {
  var args = [].slice.call(arguments);

  return args.reduce(function (val1, val2) {
    return parseInt(val1, 10) + parseInt(val2, 10);
  });
}
var sum = sumRounds("2.3", 4, 5, "16", 18.1);
console.log(sum); // 45

/*
	The call() method’s first argument is a this value—typically the calling object itself, 
	followed by any number of arguments. In the solution, this is the slice() method, 
	and the outer function’s arguments are passed as arguments for slice(). 
	What this technique has effectively done is coerce the outer function’s arguments into an acceptable format to serve as argument for slice().
*/

/*
// This approach can also be used to convert a NodeList into an array. Given HTML with the following:
// <div>test</div> 
// <div>test2</div> 
// <div>test3</div>

var nlElems = document.querySelectorAll('div'); 
var aElems = [].slice.call(nlElems);

aElems.forEach(function(elem) { 
	console.log(elem.textContent);
});

// test
// test2
// test3
*/







