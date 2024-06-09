/**
 * 함수의 일급 객체
 * 함수를 반환값으로 반환할 수 있다.
 */
function createMultiplier(multiplier) {
    return function (n) {
        return n * multiplier;
    }
}

const double = createMultiplier(2);
console.log(double(5));
console.log(double(10));

const triple = createMultiplier(3);
console.log(triple(5));
console.log(triple(10));
