//create array of objects with firstName, lastName and age
const students = [
  {
    firstName: "Ram",
    lastName: "Sharma",
    age: 20,
  },
  {
    firstName: "Kl",
    lastName: "Rahul",
    age: 18,
  },
  {
    firstName: "Shewag",
    lastName: "Srivastava",
    age: 25,
  },
  {
    firstName: "Mehak",
    lastName: "Kumari",
    age: 25,
  },
];

//Make new array with fullName
console.log("=== Array Map Example ===");
const fullNames = students.map(
  ({ firstName, lastName }) => `${firstName} ${lastName}`
);
console.log(fullNames);

// make an object with count of each age group
console.log("=== Array Reduce Example ===");
const ageCount = students.reduce((acc, { age }) => {
  acc[age] = acc[age] + 1 || 1;
  return acc;
}, {});
console.log(ageCount);

// Make new array with firstName of only those who are above 18
console.log("=== Array Filter Example ===");
const adults = students
  .filter(({ age }) => age > 18)
  .map(({ firstName }) => firstName);
console.log(adults);
