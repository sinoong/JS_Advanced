let a = 10;
let b = 20;

{
  let c = 30; // 블록 스코프 내에서 선언
}

function test1() {
  console.log(a);
  console.log(b);
  console.log(c); // ReferenceError: c is not defined
}

test1();
