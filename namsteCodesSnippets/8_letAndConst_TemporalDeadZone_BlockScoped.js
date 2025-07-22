// This code demonstrates the Temporal Dead Zone (TDZ) for `let` and `const` variables.
// The variable `a` is declared with `let` and is in the TDZ until it is initialized.
// Accessing `a` before its declaration results in a ReferenceError.
// The variable `b` is declared with `var`, which is hoisted and initialized to `undefined`.
// Accessing `b` before its declaration does not throw an error, but logs `undefined`.
// After the declarations, both variables can be accessed without errors.
try {
  console.log(a);
} catch (error) {
  console.log("An error occurred:", error);
}
console.log(b);
let a = 10;
console.log(a);
var b = 23;
console.log(b);

//  block scoped variables and block statement also known as compound statement
{
  let x = 5;
  console.log("Inside block, x =", x);
}
try {
  console.log("Outside block, x is not accessible here.", x);
} catch (error) {
  console.log("An error occurred:", error);
}

//Redeclaring let and const variables in the same scope will throw an error but var can be redeclared
try {
  let m;
  m = 10;
  m = 20;
} catch (error) {
  console.log("An error occurred:", error);
}
// const needs to be declared and initialized in the same statement
try {
  const z = 1;
} catch (error) {
  console.log("An error occurred:", error);
}

// block statements also known as compound statements because they can contain multiple statements where js expects only one statement
// Using block statements to group multiple statements
if (true) {
  let y = 10;
  console.log("Inside if block, y =", y);
}
if (true) console.log("this is a single statement");