/**
 * 클로저 사용 예
 * - 연산자 팩토리
 */
function makeOperator(operator, a) {
    switch (operator.toLowerCase()) {
        case 'add':
            return function (b) {
                return a + b;
            }
        case 'sub':
            return function (b) {
                return a - b;
            }
        case 'mul':
            return function (b) {
                return a * b;
            }
        case 'div':
            return function (b) {
                return a / b;
            }
        default:
            return function (b) {
                console.error('What you want?');
            }
    }
}

const add5 = makeOperator('add', 5);
const mul5 = makeOperator('mul', 5);
console.log(add5(10));
console.log([1, 2, 3].map(mul5).map(String).join(','));