/**
 * 클로저는 외부 함수의 파라미터도 캡쳐할 수 있다.
 */
function outer(n) {
    const a = 20;
    return function () {
        return a * n;
    }
}

const f = outer(10);
f();