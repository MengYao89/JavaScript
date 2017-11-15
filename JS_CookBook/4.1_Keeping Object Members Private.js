// 4.1. Keeping Object Members Private
// Problem: You want to keep one or more object properties private, so they can’t be accessed outside the object instance.

// When creating the private data members, do not use the this keyword with the member:
function Tune(song,artist) { 
  var _title = song; 
  this.concat = function() {
    return _title + " " + artist; }
}
  var happySongs = [];
  happySongs[0] = new Tune("Putting on the Ritz", "Ella Fitzgerald"); 
  console.log(happySongs[0]._title); // undefined
  happySongs[0]._title = "new title";
  console.log(happySongs[0]._title); // new title

  console.log(happySongs[0].concat()); // prints out correct title and artist

  // different ways to create javascript object from the below url.
  // url: https://coderwall.com/p/p5cf5w/different-ways-of-creating-an-object-in-javascript