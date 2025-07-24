// function definition or statement
function a() {
  console.log("a is function statement is called");
}

a(); // calling the function

// function expression
var b = function () {
  console.log("b is function expression is called");
};

// function expression can be anonymous or named
// Here it is anonymous as it does not have a name
b(); // calling the function expression

/**
function () {   
    console.log("b is function expression is called");
}
function statement without name is called anonymous function and are used with function expression as anonymous function can't be called directly
*/

// function expression can also be named
var c = function namedFunction() {
  console.log("c is named function expression is called");
  console.log(namedFunction); // This will log the function itself
};
c(); // calling the named function expression
// namedFunction(); // This will throw an error as namedFunction is not defined in the global scope, it is only accessible within the function expression.

// Arrow function expression
var d = () => {
  console.log(
    "d is arrow function expression is called with different this context than normal function defined using function keyword"
  );
};
