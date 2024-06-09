let a = 10;
let b = 20;

function a_test1() {
    console.log(a);
    console.log(b);
    console.log(c); // undefined 참조오류 발생하지 않음
}

a_test1();

var c = 30;
