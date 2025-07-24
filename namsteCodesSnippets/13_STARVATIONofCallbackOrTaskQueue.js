// STARVATION of Callback Queue in JavaScript Event Loop
// This demonstrates how synchronous blocking code can starve callbacks in the callback queue
// starvation means that we are keeping th callstack busy with synchronous code so that the callbacks in the callback queue can't be executed
// This can lead to delayed execution of callbacks, which is a common issue in JavaScript programming

console.log("=== CALLBACK STARVATION DEMONSTRATION ===\n");

// Example 1: Timer callbacks getting starved by blocking synchronous code
console.log("1. Setting up timers...");

setTimeout(() => {
    console.log("⏰ Timer 1: This should execute after 0ms");
}, 0);

setTimeout(() => {
    console.log("⏰ Timer 2: This should execute after 100ms");
}, 100);

setTimeout(() => {
    console.log("⏰ Timer 3: This should execute after 200ms");
}, 200);

console.log("2. Starting blocking synchronous operation...");

// Blocking synchronous operation that starves the callback queue
const startTime = Date.now();
let count = 0;

// This loop blocks the call stack for approximately 3 seconds
while (Date.now() - startTime < 3000) {
    count++;
    // Simulating heavy computation
    if (count % 10000000 === 0) {
        // Occasional check to prevent infinite loop issues
    }
}

console.log(`3. Blocking operation completed after ${Date.now() - startTime}ms`);
console.log(`   Loop iterations: ${count}`);
console.log("4. Now callbacks can finally execute:\n");

// Example 2: Demonstrating with Promise callbacks (microtask queue)
console.log("\n=== MICROTASK QUEUE vs CALLBACK QUEUE ===");

setTimeout(() => {
    console.log("📞 Callback Queue: setTimeout callback");
}, 0);

Promise.resolve().then(() => {
    console.log("🚀 Microtask Queue: Promise.then callback");
});

console.log("Setting up another blocking operation...");

// Another shorter blocking operation
const startTime2 = Date.now();
while (Date.now() - startTime2 < 1000) {
    // 1 second block
}

console.log("Second blocking operation completed");

// Example 3: Demonstrating starvation with setInterval
console.log("\n=== INTERVAL STARVATION ===");

let intervalCount = 0;
const intervalId = setInterval(() => {
    intervalCount++;
    console.log(`🔄 Interval callback #${intervalCount} executed at ${new Date().toLocaleTimeString()}`);
    
    if (intervalCount >= 3) {
        clearInterval(intervalId);
        console.log("Interval cleared");
        
        // Example 4: Show recovery after starvation
        setTimeout(() => {
            console.log("\n=== RECOVERY DEMONSTRATION ===");
            console.log("✅ Normal callback execution resumed");
            console.log("🎯 Event loop is now free to process callbacks normally");
        }, 100);
    }
}, 500); // Should execute every 500ms

// But first, let's starve it with another blocking operation
setTimeout(() => {
    console.log("Starting final blocking operation during interval...");
    const startTime3 = Date.now();
    while (Date.now() - startTime3 < 2000) {
        // 2 second block that will delay interval callbacks
    }
    console.log("Final blocking operation completed");
}, 1000);

// Example 5: Practical implications
console.log("\n=== PRACTICAL IMPLICATIONS ===");
console.log("❌ Don't do: Heavy synchronous operations in main thread");
console.log("✅ Do instead: Use Web Workers, or break work into chunks with setTimeout");

// Demonstrating the solution - breaking work into chunks
function heavyWorkInChunks(totalWork, chunkSize, callback) {
    let completed = 0;
    
    function processChunk() {
        const chunkEnd = Math.min(completed + chunkSize, totalWork);
        
        // Simulate work
        for (let i = completed; i < chunkEnd; i++) {
            // Some computation
        }
        
        completed = chunkEnd;
        
        if (completed < totalWork) {
            // Allow other callbacks to run by using setTimeout
            setTimeout(processChunk, 0);
        } else {
            callback();
        }
    }
    
    processChunk();
}

setTimeout(() => {
    console.log("\n🔧 Demonstrating NON-BLOCKING heavy work:");
    heavyWorkInChunks(1000000, 10000, () => {
        console.log("✅ Heavy work completed without blocking other callbacks!");
    });
}, 3000);

setTimeout(() => {
    console.log("🎉 This callback executes normally even during chunked work");
}, 3500);

console.log("\n📚 Key Takeaways:");
console.log("1. Synchronous code blocks the call stack");
console.log("2. Blocked call stack prevents callback queue processing");
console.log("3. This causes 'starvation' of waiting callbacks");
console.log("4. Use asynchronous patterns to avoid blocking");
console.log("5. Microtasks (Promises) have higher priority than callbacks");
