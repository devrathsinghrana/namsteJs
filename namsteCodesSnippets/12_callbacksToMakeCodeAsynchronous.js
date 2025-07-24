// callbacks basically refers to function passed as parameters of function definition or arguments of function invocation
// they are called callbacks as we are giving another function the responsibility to invoke the function we passed as parameter when it is ready to do so later dow the code execution

// Make counter asynchronous using setTimeout

console.log("Start of the code");
const i = 1;
setTimeout(() => {
  // This function will be executed after 1 second
  console.log("Inside the setTimeout callback");
  console.log(i);
}, 1000); // This will execute after 1 second
console.log("End of the code");
