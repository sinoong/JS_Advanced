/**
 * Tagged 템플릿 함수
 * 체이닝도 가능
 * 단, 첫번째 태그 템플릿 함수에서 템플릿 리터럴의 표현식이 모두 적용되어 한 문자열만 반환된다.
 * 그래서 그 이후 체이닝에서는 모두 strings 가 문자열 1개만 있는 배열만 된다.
 */

function capitalize(strings, ...values) {
    let result = '';
  
    for (let i = 0; i < strings.length; i++) {
      result += strings[i].toUpperCase();
  
      if (i < values.length) {
        result += values[i].toUpperCase();
      }
    }
  
    return result;
  }
  
  function reverse(strings, ...values) {
    let result = '';
  
    for (let i = 0; i < strings.length; i++) {
      result += strings[i];
  
      if (i < values.length) {
        result += values[i];
      }
    }
  
    let reversed = '';
    for (let i = result.length - 1; i >= 0; i--) {
      reversed += result[i];
    }
  
    return reversed;
  }
  
  const name = 'CodingMax';
  console.log('1', capitalize(reverse`Hello, ${name}!`));
  console.log('2', reverse(capitalize`Hello, ${name}!`));
  