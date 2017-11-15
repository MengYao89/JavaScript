// 1.5. Replacing Patterns with New Strings

var searchString = "Now is the time, this is the tame";
// var re = /t\w{2}e/g;
var re = new RegExp('t\\w{2}e',"g"); // This is a built-in RegExp object.
var replacement = searchString.replace(re, "place"); console.log(replacement); // Now is the place, this is the place

/*
If we didn’t use the global flag (g), only the first match would trigger a replacement.

You can use a regular expression literal or a RegExp object instance interchangeably. 
The primary difference is that the RegExp constructor allows you to create the regular expression dynamically.
*/