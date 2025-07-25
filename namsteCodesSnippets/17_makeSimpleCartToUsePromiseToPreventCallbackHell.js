// Callback hell is a common problem in JavaScript, especially when dealing with asynchronous operations.
// Callbacks can lead to deeply nested code that is hard to read and maintain.
// Callbacks also make error handling more complex.
// Callbacks can also lead to inversion of control, where the flow of the program is dictated by the callback functions rather than the main program logic.
// Promises can help to avoid callback hell by allowing us to chain asynchronous operations in a more readable way.
// First what is a promise?
// A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// A promise can be in one of three states: pending, fulfilled, or rejected.
// A promise is created using the Promise constructor, which takes a function as an argument.
// The function takes two arguments: resolve and reject.
// The resolve function is called when the asynchronous operation is successful, and it takes the resulting value as an argument.
// The reject function is called when the asynchronous operation fails, and it takes an error as an argument.
// In this example, we will convert a simple cart system to use promises to prevent callback hell

const cart = [
  { id: 1, name: "Apple", price: 100 },
  { id: 2, name: "Banana", price: 50 },
  { id: 3, name: "Cherry", price: 75 },
];

function validateCart(cart) {
  return cart.length > 0;
}

function createCart(cart) {
  return new Promise((resolve, reject) => {
    if (!validateCart(cart)) return reject("Cart is empty");
    const orderId = 123; // Simulating an order ID
    console.log("Cart created successfully with order ID:", orderId);
    return resolve(orderId);
  });
}

function processPayment(orderId) {
  return new Promise((resolve, reject) => {
    console.log(`Processing payment for order ID: ${orderId}`);
    // Simulating payment processing
    const paymentSuccess = true; // Change to false to simulate payment failure
    if (!paymentSuccess) {
      return reject("Payment failed");
    }
    return resolve(`Payment successful for order ID: ${orderId}`);
  });
}

createCart(cart)
  .then((orderId) => {
    return orderId;
  })
  .catch((error) => {
    console.error("Error creating cart:", error);
  })
  .then((orderId) => {
    return processPayment(orderId);
  })
  .then((paymentMessage) => {
    console.log(paymentMessage);
  })
  .catch((error) => {
    console.error("Error processing payment:", error);
  })
  .finally(() => {
    console.log("Cart processing completed.");
  });
