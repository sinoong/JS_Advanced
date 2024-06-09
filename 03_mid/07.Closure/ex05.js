/**
 * 클로저는 클로저 스코프를 만들 때, 실제로 참조하는 변수만 캡쳐한다
 * 메모리를 절약하기 위해서다.
 * 따라서 inner 함수는 outer 함수의 스코프를 위한 클로저 스코프를 만들 때
 * b 만 참조한다.
 */
function outer() {
    const a = 10;
    const b = 20;
    function inner() {
        return b * 20;
    }
    return inner;
}

const f = outer();
f();