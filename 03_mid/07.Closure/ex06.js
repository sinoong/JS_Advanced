/**
 * 클로저는 함수 표현식으로도 정의할 수 있다.
 */
function outer() {
    const a = 10;
    return function() {
        return a * 20;
    }
}

const f = outer();
f();