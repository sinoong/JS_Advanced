/**
 * 함수 실행 컨텍스트
 * 상위(또는 Parent) 스코프란 무엇인가? 
 */

// 상위스코프 캡쳐링이 없을 때,
function a_func1() {
    const n = 10;
    const a_func2 = function () {
        console.log(`a_func2's name is ${a_func2.name}`);
    }
    a_func2();
    console.log(`n is ${n}`);   
}

console.log('START');
a_func1();


// 상위스코프 캡쳐링이 있을 때,
function a_func1() {
    const n = 10;
    const a_func2 = function () {
        console.log(`a_func2's name is ${a_func2.name}`);
        console.log(`n is ${n}`);
    }
    a_func2();
    console.log(`n is ${n}`);   
}

console.log('START');
a_func1();