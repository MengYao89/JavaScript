// 10.3. Creating Unique Key/Value Pairs with Uniquely Different Keys
// Problem: You want to create a set of key/value pairs, but not all of the keys are strings.

var myMap = new Map();
myMap.set("value1", "this is value");
myMap.set(3, "another value");
myMap.set(NaN, "isn't this interesting");
myMap.set(global, "really now");
myMap.set('mykey', 100);
myMap.delete('mykey');

console.log(myMap.get("value1")); // this is a value 
console.log(myMap.get(NaN)); // isn't this interesting 
console.log(myMap.get(3)); // another value 
console.log(myMap.get(global)); // really now

//  implicit entries() method. is myMap.entries()
for (var [key, value] of myMap) {
  console.log(key + " = " + value);
}
// iterating through keys
for (var key of myMap.keys()) {
  console.log(key);
}
// iterating through values
for (var value of myMap.values()) {
  console.log(value);
}
// using forEach
myMap.forEach(function (value) {
  console.log(value);
});

// The entries(), keys(), and values() function all return iterators, which also means we can use the following syntax with each
var mapIter = myMap.keys();
console.log(mapIter.next().value); // "value1" 
console.log(mapIter.next().value); // 3 
console.log(mapIter.next().value); // NaN

// You can also discover if a specific key is contained in a Map collection with has(): 
myMap.set(23, 'value');
console.log(myMap.has(23)); // true

/*
  In the following code snippet, two object literals, an array, and window are used to set members in the Map. 
  The code tries to access the Array object’s value using another equivalent array literal, 
  but it doesn’t work. Only when I use the exact same object (whether through the original variable, 
  or a new one assigned the object), can the application access the value:
*/
console.log("**********************************");
var b = { first: 'apple', second: 'pear' }; 
var c = { first: '5', second: '1' };
var d = [1, 2, 3, 4];
var e = b;

var new_d = d;

var myMap = new Map();
myMap.set(b, 'first');
myMap.set(c, 'second');
myMap.set(d, 'array');

console.log(myMap.get([1,2,3,4])); // undefined 
console.log(myMap.get(d)); // 'array' 
console.log(myMap.get(new_d)); // 'array' 
console.log(myMap.get(e)); // 'first'

