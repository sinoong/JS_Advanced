/**
 * 이름이 있는 일반 함수
 */

function customTrim(str) {
    let start = 0;
    let end = str.length - 1;

    // 문자열 시작에서 공백이 아닌 위치(인덱스)를 찾는다.
    while (start <= end && str.charAt(start) === ' ') {
        start++;
    }

    // 끝에서 부터 공백이 아닌 위치(인덱스)를 찾는다.
    while (end >= start && str.charAt(end) === ' ') {
        end--;
    }

    return str.substring(start, end + 1);
}
  
var originalString = "  Hello, world!  ";
var trimmedString = customTrim(originalString);
console.log(trimmedString);

// 이렇게 하는게 함수 테스트할 때 좋아요
console.assert('Hello, world!' === customTrim('   Hello, world!    '), 'customTrim 이 정상 동작하지 않습니다.');

// 개선
// 다른 공백 문자도 제거
function customTrim(str) {
    let start = 0;
    let end = str.length - 1;
    const spaces = [' ', '\n', '\r', '\t', '\v', '\f'];
  
    // 문자열 시작에서 공백이 아닌 위치(인덱스)를 찾는다.
    while (start <= end && spaces.includes(str.charAt(start))) {
      start++;
    }
  
    // 끝에서 부터 공백이 아닌 위치(인덱스)를 찾는다.
    while (end >= start && spaces.includes(str.charAt(end))) {
      end--;
    }
  
    return str.substring(start, end + 1);
}
  
var originalString = "  \n\r\t\v\fHello, world!\n\r\t\v\f  ";
var trimmedString = customTrim(originalString);
console.log(trimmedString);

// 이렇게 하는게 함수 테스트할 때 좋아요
console.assert('Hello, world!' === customTrim('  \n\r\t\v\fHello, world!\n\r\t\v\f  '), 'customTrim 이 정상 동작하지 않습니다.');


// 개선
// 정규표현식 사용하기
function customTrim(str) {
    let start = 0;
    let end = str.length - 1;
    const spaces = /\s/;
  
    // 문자열 시작에서 공백이 아닌 위치(인덱스)를 찾는다.
    while (start <= end && spaces.test(str.charAt(start))) {
      start++;
    }
  
    // 끝에서 부터 공백이 아닌 위치(인덱스)를 찾는다.
    while (end >= start && spaces.test(str.charAt(end))) {
      end--;
    }
  
    return str.substring(start, end + 1);
}
  
var originalString = "  \n\r\t\v\fHello, world!\n\r\t\v\f  ";
var trimmedString = customTrim(originalString);
console.log(trimmedString);

// 이렇게 하는게 함수 테스트할 때 좋아요
console.assert('Hello, world!' === customTrim('  \n\r\t\v\fHello, world!\n\r\t\v\f  '), 'customTrim 이 정상 동작하지 않습니다.');
