/**
 * 클로저는 화살표 함수로도 정의할 수 있다.
 */
function outer() {
    const a = 10;
    return () => {
        return a * 20;
    }
}

const f = outer();
f();