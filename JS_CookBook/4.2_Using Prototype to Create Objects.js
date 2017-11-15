// 4.2. Using Prototype to Create Objects
// Problem: You want to create a new object, but you don’t want to add all the properties and methods into the constructor function.
function Tune(title, artist) {
  this.concatTitleArtist = function () {
    return title + " " + artist;
  }
}

// create instance, print out values
var happySong = new Tune("Putting on the Ritz", "Ella Fitzgerald");
// extend the object
Tune.prototype.addCategory = function (categoryName) {
  this.category = categoryName;
}
// add category
happySong.addCategory("Swing");
// print song out to new paragraph
var song = "Title and artist: " + happySong.concatTitleArtist() + "\n" + "Category: " + happySong.category;
console.log(song);



/*
  Object is the ancestor for every object in JavaScript; objects inherit methods and properties from the Object via the Object prototype. 
  It’s through the prototype that we can add new methods to existing objects:
*/
var str = 'one';
String.prototype.exclaim = function () {
  if (this.length == 0) return this;
  return this + '!';
}
var str2 = 'two';
console.log(str.exclaim()); // one! 
console.log(str2.exclaim()); // two!

/*
  If you define the method using prototype directly in the constructor function, 
  it is created in the scope of the function and does have access to the private data, 
  but the data is overridden each time a new object instance is created:
*/
function Tune(title, artist) {
  var title = title;
  var artist = artist;
  Tune.prototype.concatTitleArtist = function () {
    return title + " " + artist;
  }
}
var sad = new Tune('Sad Song', 'Sad Singer');
var happy = new Tune('Happy', 'Happy Singer');
console.log(sad.concatTitleArtist()); // Happy Happy Singer

/* *** note ***
  The only data unique to the prototype function is what’s available via this.
  Generally, if your function must deal with private data, it should be defined within the function constructor, 
  and without using prototype. Otherwise, the data should be available via this, 
  or static and never changing once the object is created.
*/