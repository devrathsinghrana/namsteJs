// // STARVATION of Callback Queue in JavaScript Event Loop
// // This demonstrates how synchronous blocking code can starve callbacks in the callback queue
// // starvation means that we are keeping th callstack busy with synchronous code so that the callbacks in the callback queue can't be executed
// // This can lead to delayed execution of callbacks, which is a common issue in JavaScript programming

console.log("=== STARVATION OF CALLBACKS DEMONSTRATION ===");

setTimeout(() => {
  console.log("⏰ Timer 1: This should execute after 0ms");
}, 0);

const startTimes = Date.now();
let endTimes = startTimes;
while (endTimes - startTimes < 5000) {
  // Simulating a blocking operation for 5 seconds
  endTimes = Date.now();
}

new Promise((resolve) => {
    // The Key Point:
// The Promise doesn't create a microtask until it resolves. The setTimeout inside the Promise constructor delays the resolution, so no microtask is created until much later.
  setTimeout(() => {
    resolve("✅ Promise callback executed after blocking operation");//this code will execute only after 0 seconds setTimeout above
  }, 10000);
}).then((res) => {
  console.log(res);
});

new Promise((resolve) => {
  const startTimes = Date.now();
let endTimes = startTimes;
while (endTimes - startTimes < 10000) {
  // Simulating a blocking operation for 10 seconds
  endTimes = Date.now();
}
resolve("🚀 Promise resolved after blocking operation 10 seconds");
}).then((res) => {
  console.log(res);
});

console.log("END OF STARVATION OF CALLBACKS DEMONSTRATION");