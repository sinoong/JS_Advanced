/**
 * 함수의 일급 객체
 * 변수에 저장할 수 있다.
 */

const addOne = function(n) {
    return n + 1;
}

const double = function (n) {
    return n * 2;
}

const compose = function (f, g) {
    return function (n) {
        return g(f(n));
    }
}

const myFunction = compose(addOne, double);
console.log(myFunction(3));