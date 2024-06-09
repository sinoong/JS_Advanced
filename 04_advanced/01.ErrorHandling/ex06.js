/**
 * 자바스크립트는 오류를 좀 더 세분화한 오류 객체를 제공한다.
 * 크롬브라우저 콘솔에서 실습해 주세요.
 */

/**
 * 1. SyntaxError
 * - 코드에서 문법을 지키지 않아 발생하는 오류다.
 * - Uncaught SyntaxError: missing ) after argument list
 */
console.log('Hello World';

/**
 * 2. ReferenceError
 * - 접근할 수 있는 스코프 체인에 정의되지 않은 변수나 함수를 사용하려고 할 때 발생하는 오류다.
 * - Uncaught ReferenceError: someValue is not defined
 */
console.log(someValue);
someFunction();

/**
 * 3. TypeError
 * - 타입의 값 또는 객체가 지원하지 않는 연산을 실행하려고 할 때 발생한다.
 * - Uncaught TypeError: null is not a function
 * - Uncaught TypeError: undefined is not a function
 * - Uncaught TypeError: Cannot read properties of null (reading 'toUpperCase')
 */
null();
undefined();
null.toUpperCase();


/**
 * 4. RangeError
 * - 값이 유요한 범위를 넘었을 때 발생하는 오류다.
 * - Uncaught RangeError: Invalid array length
 * - Uncaught RangeError: Maximum call stack size exceeded 오류가 발생한다.
 */
new Array(-1);
new Array(Infinity);
function a() {
   a();
}
a();

/**
 * 5. URIError
 * - URI(Uniform Resource Identifier) 를 인코딩하거나 디코딩할 때, 유효한 값이 아니면 해당 오류가 발생한다.
 * - Uncaught URIError: URI malformed
 */
decodeURIComponent('%');
encodeURIComponent('\uD800');