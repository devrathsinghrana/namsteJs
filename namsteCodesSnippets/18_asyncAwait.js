// what is async/await?
// async/await vs .then
// Promise.all
// Promise.allSettled
// Promise.race
// Promise.any
// what happens if we return non promise object in async function

// async/await is syntactical sugar built on top of promises.
// when you make a function async, it means it will always return a promise.
// await is used to wait for a promise to resolve or reject.
// async/await makes asynchronous code look synchronous, making it easier to read and write.
// even if non promise object is returned async function itself wrap it around a promise.

const P1flag = true;
const P2flag = true;
const P3flag = true;

const P1 = new Promise((resolve, reject) => {
  let startTime = Date.now();
  let endTime = startTime;
  while (endTime - startTime < 5000) {
    endTime = Date.now();
  }
  P1flag ? resolve("Promise 1 resolved") : reject("Promise 1 rejected");
});

const P2 = new Promise((resolve, reject) => {
  let startTime = Date.now();
  let endTime = startTime;
  while (endTime - startTime < 5000) {
    endTime = Date.now();
  }
  P2flag ? resolve("Promise 2 resolved") : reject("Promise 2 rejected");
});

const P3 = new Promise((resolve, reject) => {
  let startTime = Date.now();
  let endTime = startTime;
  while (endTime - startTime < 5000) {
    endTime = Date.now();
  }
  P3flag ? resolve("Promise 3 resolved") : reject("Promise 3 rejected");
});

async function fetchData() {
  return "Data fetched successfully";
}

async function main() {
  try {
    const data = await fetchData();
    console.log(data); // "Data fetched successfully"
  } catch (error) {
    console.error("Error:", error);
  }
}

async function fetchAndReturnPromiseP1() {
  return P1;
}

async function fetchAndReturnPromiseP2() {
  return P2;
}

async function fetchAndReturnPromiseP3() {
  return P3;
}

main();
console.log(fetchData());
console.log(fetchAndReturnPromiseP1());

const inputPromiseArray = [P1, P2, P3];
(async () => {
  // Using iiffe to use async await
  console.log(await Promise.all(inputPromiseArray));
  console.log(await Promise.allSettled(inputPromiseArray));
  console.log(await Promise.race(inputPromiseArray));
  console.log(await Promise.any(inputPromiseArray));
})();
console.log(Promise.all(inputPromiseArray));
console.log(Promise.allSettled(inputPromiseArray));
console.log(Promise.race(inputPromiseArray));
console.log(Promise.any(inputPromiseArray));
