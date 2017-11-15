// 3.4. Preventing Code Blocking with a Timer and a Callback
// Probelm: You have a piece of code that can be time consuming, and you don’t want to block the rest of the code from processing while waiting for it to finish. But you do need to perform some functionality when the time-consuming function is finished.

function factorial(n) {
	console.log(n);
	return n == 1 ? 1 : n * factorial(n -1);
}

function noBlock(n, callback) { 
	setTimeout(function() {
		var val = factorial(n);
		if (callback && typeof callback == 'function') {
      		callback(val);
    	}
	},0); 
}

console.log("Top of the morning to you"); // will show first

noBlock(3, function(n) {
	console.log('first call ends with ' + n); 
	noBlock(n, function(m) {
		console.log("final result is " + m);
  	});
});

var tst = 0;
for (i = 0; i < 10; i++) {
	tst+=i; 
}
console.log("value of tst is " + tst); // will show second

noBlock(4, function(n) { 
	console.log("end result is " + n);
});

console.log("not doing too much"); // will show third

/*
	"Top of the morning to you"
    "value of tst is 45"
    "not doing too much"

    3
    2
    1
    "first call ends with 6"

    4
    3
    2
    1
    "end result is 24"
    
    6
    5
    4
    3
    2
    1
    "final result is 720" 
*/