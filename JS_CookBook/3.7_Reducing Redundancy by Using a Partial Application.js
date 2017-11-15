// 3.7. Reducing Redundancy by Using a Partial Application
// Problem: You have a function with three arguments (has an arity of three (3)) but the first two arguments are typically repeated based on specific use. 
// You want to eliminate the rep‐ etition of arguments whenever possible.

function makeString(ldelim, str, rdelim) {
  return ldelim + str + rdelim;
}

function quoteString(str) {
  return makeString("'", str, "'");
}

function barString(str) {
  return makeString("-", str, "-");
}

function namedEntity(str) {
  return makeString("&#", str, ";");
}

console.log(quoteString("apple")); // "'apple'" 
console.log(barString("apple")); // "-apple-"
console.log(namedEntity(169)); // "&#169; - copyright symbol


// ************ A Partial Function Factory ****************//
function makeNewString(ldelim, rdelim, str) {
  return ldelim + str + rdelim;
}

/*
  The apply() method accepts an array-like list of arguments, rather than an actual array of arguments like call().
*/
function partial(fn) {
  var args = [].slice.call(arguments, 1);
  return function() {
    return fn.apply(this, args.concat([].slice.call(arguments)));
  }
}

var namedEntity = partial(makeNewString, "--", "--");
console.log(namedEntity("name"));
// **********************************************************//



// *************** Using bind() to Partially Provide Arguments **************//
// The bind() method returns a new function, setting this to whatever is provided as first argument.
function makeString(ldelim, rdelim, str) { 
  return ldelim + str + rdelim;
}
var named = makeString.bind(undefined, "&#", ";");
console.log(named(169)); // "&#169;"


// ***************************************************************************//