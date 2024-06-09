/**
 * 유니코드 정규화(Normalize)
 * - 유니코드는 전 세계 모든 문자를 1문자에 1유니코드를 매핑하기 위해 만들어 졌지만
 * - 여러 가지 이유로 하나의 문자가 여러 코드를 가지는 경우가 있다. 
 * - 예를 들어, á 문자는 아래와 같이 두 가지 유니코드로 표현할 수 있다.
 * - \u00E1
 * - 'a\u0301'
 */

{
  console.log('\u00E1');
  console.log('a\u0301');
}

/**
 * 같은 문자이지만 유니코드 값이 다르기 때문에 값을 비교하거나 검색 등을 할 때 문제가 된다.
 */

{
  const a = '\u00E1';
  const b = 'a\u0301';
  console.log(a == b); // false
  console.log(a === b); // false
}

/**
 * 그래서 이를 해결하기 위해서 유니코드 표준에서는 유니코드 정규화라는 절차를 표준화해두었고
 * 자바스크립트도 String.prototype.normalize 메서드로 유니코드 정규화를 지원한다.
 * 
 * 유니코드 정규화에는 NFC, NFD, NFKC, NFKD 네 가지 방식을 지원한다.
 * 여기서는 NFC로 정규화를 해 보겠다. 인자값으로 정규화 방법을 지정하지 않으면 기본값으로 NFC가 사용된다.
 */
{
  console.log('\u00E1'.normalize('NFC'));
  console.log('a\u0301'.normalize('NFC'));

  const a = '\u00E1'.normalize('NFC');
  const b = 'a\u0301'.normalize('NFC');
  console.log(a == b); // true
  console.log(a === b); // true
}

/**
 * 따라서 유니코드 문자열을 입력으로 받을 때는 정규화를 적용한 값을 사용하는 것이 안전하다.
 */