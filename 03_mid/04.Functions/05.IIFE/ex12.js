/**
 * 즉시 실행 함수
 * 당연히 값도 반환할 수 있습니다.
 */
const result = (function () {
    return 10 + 20;
})();

console.log(`10 + 20 = ${result}`);