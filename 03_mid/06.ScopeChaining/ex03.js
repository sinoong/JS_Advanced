/**
 * 3. 스코프체이닝
 * - var변수와 스코프체인
 */

/**
 * 디버거로 실행해 봅시다.
 * - 함수실행컨텍스트는 함수가 실행될 때 만들어지고 
 * - 그 때 참조하고 있는 변수를 스코프체인을 따라 검색합니다.
 */
(() => {
    const functions = new Array(5);
    for (var i = 0; i<functions.length; i++) {
        functions[i] = function () {
            console.log(i);
        }
    }

    for (let j = 0; j<functions.length; j++) {
        functions[j]();
    }
})();

/**
 * 블록 스코프를 갖는 let 또는 const 변수를 사용하면 해결할 수 있다.
 */
(() => {
    const functions = new Array(5);
    for (let i = 0; i<functions.length; i++) {
        functions[i] = function () {
            console.log(i);
        }
    }

    for (let j = 0; j<functions.length; j++) {
        functions[j]();
    }
})();