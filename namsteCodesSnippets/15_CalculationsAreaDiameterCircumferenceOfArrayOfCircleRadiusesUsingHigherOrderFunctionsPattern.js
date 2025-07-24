// Higher Order Functions is a common pattern in functional programming where we pass functions as arguments to other functions.
const area = (radius) => Math.PI * radius * radius;
const diameter = (radius) => 2 * radius;
const circumference = (radius) => 2 * Math.PI * radius;
const radiuses = [1, 2, 3, 4, 5];
// Using higher-order functions to calculate area, diameter, and circumference of an array of circle radiuses. Attaching to array prototype for reusability
Array.prototype.calculateCircleProperties = function (
  calculationLogicCallback
) {
  const results = [];
  for (const radius of this) {
    results.push(calculationLogicCallback(radius));
  }
  return results;
};

console.log("Area of circles:", radiuses.calculateCircleProperties(area));
console.log(
  "Diameter of circles:",
  radiuses.calculateCircleProperties(diameter)
);
console.log(
  "Circumference of circles:",
  radiuses.calculateCircleProperties(circumference)
);
