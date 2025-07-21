// window and this is created along with global execution context
// this points to window in global scope
// variables and functions in global scope are properties of the window object
console.log(this);
console.log(window);    
console.log(this === window); // true
console.log(this.x); // undefined
console.log(window.x); // undefined
var x=10;
console.log(this.x); // 10  
console.log(window.x); // 10
function getName() {
  console.log("Hello, World!");
}
console.log(this.getName); // function getName() { ... }
console.log(window.getName); // function getName() { ... }
console.log(this.getName === window.getName); // true
this.getName(); // Hello, World!