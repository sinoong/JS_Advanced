let a = 10;
let b = 20;

function a_test1() {
    console.log(a);
    console.log(b);
    console.log(c); // TDZ, 참조오류 발생
}

a_test1();

let c = 30;
