// 4.3. Inheriting an Object’s Functionality
// Problem: When creating a new object type, you want to inherit the functionality of an existing JavaScript object.

// Use Object.create() to implement the inheritance:
function origObject() {
  this.val1 = 'a'; this.val2 = 'b';
}
origObject.prototype.returnVal1 = function () {
  return this.val1;
};
origObject.prototype.returnVal2 = function () {
  return this.val2;
};

function newObject() {
  this.val3 = 'c';
  origObject.call(this); // call super constructor.
}

// // subclass extends superclass
newObject.prototype = Object.create(origObject.prototype);
newObject.prototype.constructor = newObject;

newObject.prototype.getValues = function () {
  return this.val1 + " " + this.val2 + " " + this.val3;
};

var obj = new newObject();

console.log(obj instanceof newObject); // true 
console.log(obj instanceof origObject); // true
console.log(obj.getValues()); //"a b c"

/*
  The Object.create() method creates a new object with the specified prototype object and properties.

*/


// *************** new example ***************//
function Book(title, author) {
  this.getTitle = function () {
    return "Title: " + title;
  };
  this.getAuthor = function () {
    return "Author: " + author;
  };
}

function TechBook(title, author, category) {
  this.getCategory = function () {
    return "Technical Category: " + category;
  };
  this.getBook = function () {
    return this.getTitle() + " " + author + " " + this.getCategory();
  };
  Book.apply(this, arguments); // call super constructor.
}

TechBook.prototype = Object.create(Book.prototype);
TechBook.prototype.constructor = TechBook;
// get all values
var newBook = new TechBook("The JavaScript Cookbook", "Shelley Powers", "Programming");
console.log(newBook.getBook());
// now, individually
console.log(newBook.getTitle());
console.log(newBook.getAuthor());
console.log(newBook.getCategory());