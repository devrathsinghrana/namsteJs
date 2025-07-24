// legal shadowing of variables in JavaScript
// This code demonstrates the differences in variable shadowing and scoping between `let`, `const`, and `var`.
x = 10;
{
  x = 20;
  console.log("Inside block, x =", x);
}
console.log("Outside block, x =", x);
// Redeclaring variables with var in the same scope

var a = 10;
{
  var a = 20; //modifies a in global scope so it causes unecessary bugs so use let and const
  console.log("Inside block, a =", a);
}
console.log("Outside block, a =", a);

let b = 10;
{
  let b = 20;
  console.log("Inside block, b =", b);
}
console.log("Outside block, b =", b);

let c = 10;
{
  let c = 20;
  console.log("Inside block, c =", c);
}
console.log("Outside block, c =", c);

// Illegal shadowing of variables in JavaScript
// try {
//   let d = 10;
//   {
//     var d = 20; // This is illegal shadowing as d points to scope in same hierarchy as script scope of above let that is in global space. This is compile time error so try catch can't be effective as it catches runtime errors. So commenting this code
//     console.log("Inside block, d =", d);
//   }
//   console.log("Outside block, d =", d);
// } catch (error) {
//   console.log("An error occurred:", error);
// }

let d = 10;
function shadowingFunction() {
  var d = 20; // This is legal shadowing as d is in function scope
  console.log("Inside function, d =", d);
}
shadowingFunction();
console.log("Outside function, d =", d);

let e = 10; //e in script space of global scope
{
  let e = 20; //e in block space of global scope which is different from above script space so not referencing to same variable
  // This is legal shadowing as e is in block scope
  console.log("Inside block, e =", e);
}
console.log("Outside block, e =", e);
