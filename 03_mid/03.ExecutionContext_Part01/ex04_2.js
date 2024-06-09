/**
 * 함수 실행 컨텍스트
 * 상위(또는 Parent) 스코프란 무엇인가?
 */

function a_func1() {
    const n = 10;
    a_func2();
    console.log(`n is ${n}`);
}

function a_func2() {
    console.log(`a_func2's name is ${a_func2.name}`);
}

console.log('START');
a_func1();