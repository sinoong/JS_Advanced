/**
 * 처리할 수 없는 문제를 오류(Error)라고 하고
 * 처리할 수 있는 문제를 예외(Exception)이라고 한다.
 * 자바스크립트는 이 둘을 크게 구분하지 않고 혼용하여 사용한다.
 * (크롬브라우저 콘솔에서 실습해 주세요.)
 */

/**
 * 자바스크립트는 오류 또는 예외를 나타내는 Error 객체가 있다.
 * Error객체는 모든 오류를 포괄하는 범용적인 오류를 나타낸다.
 */

/**
 * 브라우저 콘솔에서 아래 코드를 실행해 보면 
 * Error 객체는 
 * - name
 * - message
 * - toString()
 * 속성과 메서드를 갖는다.
 * 이 속성과 메서드로 오류에 대한 내용을 제공한다.
 */ 
console.log(Error.prototype);

/**
 * Error 객체는 아래와 같이 생성하여 사용할 수 있다.
 */
const myError = new Error('Error의 message 입니다.');
console.log(myError.name); // 이 때 name은 Error
console.log(myError.message);


