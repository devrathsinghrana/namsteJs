// Lexical Environment is Local scope+ parent lexical environment
// Scope Chain is the chain of lexical environments
var x = 10;
function a() {
  var y = 3;
  function b() {
    console.log(x);
    console.log(y);
  }
  b();
}
a();
try {
  console.log(y);
} catch (error) {
  console.log(error.message);
}
