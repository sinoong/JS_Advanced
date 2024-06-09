let a = 10;
let b = 20;

function test1() {
  console.log(a);
  console.log(b);
  console.log(c); // ReferenceError: c is not defined
}

function test2() {
  let c = 30;
}

test1();
