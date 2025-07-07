a();

function a() {
  var b = 23;
  c();
  function c() {
    console.log(b); // 23
  }
}

console.log(b); // ReferenceError: b is not defined
