/**
 * 변수란 무엇일까?
 */

// 변수
// mutable, mutation
var a = 10;
let b = 20;
a = 40;
b = 50;
console.log({ a, b });

// 상수
// immutable
const c = 30;
// 상수는 재할당할 수 없다.
// 아래 코드는 오류가 발생한다.
// c = 50; 