// In js as we know about the event loop, we have a queue of callbacks that are waiting to be executed.
// If the call stack is busy with synchronous code, these callbacks cannot be executed until the call stack is empty.
// This can lead to a situation where callbacks are "starved" and cannot run, even if they are ready to execute.
// This is known as starvation of callbacks in the callback queue.
// These callbacks are also responsible for achieving concurrency in JavaScript.
// As we know js is single threaded, so it can only execute one piece of code at a time. But we can achieve concurrency by using callbacks, promises, and async/await.

console.log("Concurrency Model in JavaScript Start");
setTimeout(() => {
  // This is a setTimeout callback that will execute after 5 seconds due to below blocking code. SO we should know how concurrency is achieved in JavaScript to write such code
  console.log(
    "This is a setTimeout callback that will execute after 2 seconds"
  );
}, 2000);
const startTime = Date.now();
let endTime = startTime;
while (endTime - startTime < 5000) {
  // Simulating a blocking operation for 5 seconds
  endTime = Date.now();
}
console.log("Concurrency Model in JavaScript END");
