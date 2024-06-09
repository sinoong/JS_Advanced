

/**
 * 일반 함수와 화살표 함수의 차이
 * 1. arguments 속성이 없습니다.
 */

function printArgumentsFunc(a, b) {
    console.log(arguments);
}

printArgumentsFunc(10, 20);


const printArgumentsArrow = (a, b) => {
    console.log(arguments);
}


/**
 * 2. 함수 프로토타입이 없습니다.
 */
function printPrototypeFunc() {

 }
console.log(printPrototypeFunc.prototype);

const printPrototypeArrow = () => { 

};
console.log(printPrototypeArrow.prototype);


