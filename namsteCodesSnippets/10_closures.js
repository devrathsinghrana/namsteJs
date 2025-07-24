// Functions are very powerful in JavaScript, they can be used to create closures
// and encapsulate variables, allowing for private state management.
// when function are returned from another function, they can access the variables of the outer function even after the outer function has finished executing.
// They form a closure, which is a combination of the function and the lexical environment within which that function was declared.
// This code demonstrates the concept of closures in JavaScript.

function createClosure() {
  var i = 0; // This variable is captured by the closure
  function printI() {
    console.log(i);
  }
  setTimeout(printI, 3000);
  console.log("Hello from createClosure, i =", i);
}

createClosure(); // This will log "Hello from createClosure, i = 0" immediately
// After 3 seconds, it will log "0" because the closure captures the variable `i`

// Closures can also be used to create private variables
function createCounter() {
  var count = 0; // Private variable
  return {
    increment: function () {
      count++;
      console.log("Count:", count);
    },
    decrement: function () {
      count--;
      console.log("Count:", count);
    },
    getCount: function () {
      return count;
    },
  };
}
var counter = createCounter();
counter.increment(); // Count: 1
counter.increment(); // Count: 2
counter.decrement(); // Count: 1
console.log("Current count:", counter.getCount()); // Current count: 1
try {
  console.log("Trying to access private variable count:", counter.count); // This will be undefined as count is private
} catch (error) {
  console.log("An error occurred:", error);
}

// Closures can also be used to create functions with preset parameters
function multiplyBy(factor) {
  return function (number) {
    return number * factor;
  };
}

var double = multiplyBy(2);
console.log("Double of 5:", double(5)); // Double of 5: 10
var triple = multiplyBy(3);
console.log("triple of 5:", triple(5)); // Triple of 5: 15
// Above is called function currying, where a function is transformed into a sequence of functions that each take a single argument.

// Closure related output question

// What will be the output of the following code?
function outerFunction() {
  var outerVariable = "I am from outer function";
  var i = 0;
  for (; i < 5; i++) {
    function innerFunction() {
      setTimeout(function () {
        console.log("Outer Variable:", outerVariable, "Inner Variable:", i);
      }, 1000);
    }
    innerFunction(); // This will create a closure for each iteration
  }
}

outerFunction();

// What will be the output of the following code?
function outerLetFunction() {
  var outerVariable = "I am from outer function";
  for (let i = 0; i < 5; i++) {
    function innerFunction() {
      setTimeout(function () {
        console.log("Outer Variable:", outerVariable, "Inner Variable:", i);
      }, 1000);
    }
    innerFunction(); // This will create a closure for each iteration
  }
}
outerLetFunction();
// The output will be different for the two functions due to the use of `var` and `let`.