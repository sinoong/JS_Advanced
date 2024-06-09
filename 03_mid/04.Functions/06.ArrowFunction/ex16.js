/**
 * 일반 함수와 화살표 함수의 같은 점
 * 1. name 속성은 존재합니다.
 */

function printFuncName() {
}
console.log(printFuncName.name);

const printArrowName = () => { 
};
console.log(printArrowName.name);

/**
 * 일반 함수와 화살표 함수의 같은 점
 * 2. 파라미터 length 속성은 존재합니다.
 */
function printFuncParamsLength(a, b) {
}
console.log(printFuncParamsLength.length);

const printArrowParamsLength = (a, b) => { 
};
console.log(printArrowName.length);