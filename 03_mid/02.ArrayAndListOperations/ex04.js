/**
 * 배열 메서드와 선언형 프로그래밍(리스트 연산)
 * - 문자열로 변환
 */

/**
 * 자바스크립트 배열은 배열 원소를 모아서 하나의 문자열로 변환하는 join 메서드를 제공한다.
 * 인자로 구분자를 받는다. 배열 원소를 연결할 때 원소 사이를 구분자로 연결해서 문자열로 
 * 만든다.
 */
{
  const numbers = Array.of(1, 2, 3, 4, 5);
  // 구분자가 없으면 기본으로 콤마(,)가 사용된다.
  console.log(numbers.join());

  // 인자값으로 구분자를 넣으면 해당 구분자
  console.log(numbers.join('-'));
  // 긴 문자열도 구분자로 사용할 수 있다.
  console.log(numbers.join('===>'));
  // 빈문자열로 연결할 수 있다.
  console.log(numbers.join(''));
}

/**
 * toString
 * 배열 원소를 구분자 콤마(,)로 연결해서 하나의 문자열로 변환한다.
 */
{
  const numbers = Array.from([1, 2, 3, 4, 5], (v) => v * 10000);
  console.log(numbers);
  console.log(numbers.toString());

  // 배열이 중첩 되어 있어도 하나의 문자열로 만들어 준다.
  console.log([1, 2, [3, [4, 5]], 6, [7, 8, [9, [10, 11]]]].toString());

  // toLocalString을 사용하면 로케일에 맞는 문자열로 만들어준다.
  // 언어 코드는 아래 사이트나 인터엣의 다른 사이트에서 확인할 수 있다.
  // http://www.lingoes.net/en/translator/langcode.htm
  console.log(numbers.toLocaleString());
  // 이집트
  console.log(numbers.toLocaleString('ar-EG'));
  // 한국
  console.log(numbers.toLocaleString('ko-KR'));
}