// 10.2. Creating a Collection of Non-Duplicated Values
// Problem: You want to create a collection of unique values.

// Use the new ECMAScript 6 Set object to create the collection:
var col1 = new Set();
col1.add("apple");
col1.add("apple"); // ignored
col1.add("oranges");
col1.add("banana");
col1.delete("banana");
console.log(col1.size); // 2
col1.has("apple"); // ture

col1.forEach(function (value) {
  console.log(value);
})

// use spread operator to convert Set to Array. 
var arr = [...col1];
arr.forEach(function (ele, indx, array) {
  console.log("ele = " + ele);
  console.log("indx = " + indx);
})
/*
col1.forEach(function(element, index, itself){
  console.log("elemtns = " + element); // apple
  console.log("index is = " + index); // apple there is no index
})
*/

// Before ECMAScript 6, the only object JavaScript provided for collections was the Array.
// But it is is lack of ability to enforce uniqueness of collection members without having to do some computationally expensive processing.
/*
Unlike some other JavaScript functionality, the Set does not do any type coercion. If you add 5 and "5", 
both will be added and treated as two distinct Set members. 
Think of how strict equality works: the only time Set won’t add a member is if they are strictly equal.
*/


// Create a Set from an array literal
var col2 = new Set(['one','two', 'two', 'three']); 
console.log(col2.size); // 3

// Clear all the member of Set.
col1.clear();
console.log(col1.size); // 0

/*
  There’s also a variation of Set that accepts only objects, and that’s WeakSet. 
  The entire reason for this second object is that references to objects contained in the collection are weakly held. 
  When there is no other reference to the object in the collection, 
  it can be garbage collected. The advantage to using WeakSet is that it helps prevent memory leaks. 
  However, because of their nature, you can’t enumerate through the collection members with a WeakSet, like you can with Set.
*/