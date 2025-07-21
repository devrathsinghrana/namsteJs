console.log(square);
console.log(cube);
console.log(quad);
console.log(square(5));
function square(x) {
  return x ** 2;
}
try {
  console.log(cube(2)); //give error
} catch (e) {
  console.log(e.message);
}
var cube = (x) => x ** 3;
console.log(cube(2));

try {
  console.log(quad(2)); //give error
} catch (e) {
  console.log(e.message);
}
var quad = function (x) {
  return x ** 4;
};
console.log(quad(2));
