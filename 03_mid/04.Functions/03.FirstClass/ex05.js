/**
 * 함수의 일급 객체
 * 인자로 받을 수 있다.
 */
function calculator(operator, a, b) {
    return operator(a, b);
}

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

console.log(calculator(add, 10, 20));
console.log(calculator(sub, 10, 20));
console.log(calculator(mul, 10, 20));
console.log(calculator(div, 10, 20));