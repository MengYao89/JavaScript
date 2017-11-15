// 10.6. Creating Functions that Gracefully Yield
// Problem: It’s simple to break out of a function with return, but you want to be able to get back into the function at that point in the future, and then have it resume.
// Use an ES 6 generator function:
function* taskRunner() {
  console.log('doing something');
  yield function () {
    console.log('hello from a');
  };
  console.log('doing something after a');
  yield function () {
    console.log('hello from b');
  }
  console.log('doing something after b');
}

var tasks = taskRunner();
tasks.next().value();
tasks.next().value();
tasks.next();
/*
    doing something
    hello from a
    doing something after a
    hello from b
    doing something after b
*/

function* HelloGen() {
  yield 100;
  yield 400;
}

var gen = HelloGen();

console.log(gen.next()); // {value: 100, done: false}
console.log(gen.next()); // {value: 400, done: false}
console.log(gen.next()); // {value: undefined, done: true}