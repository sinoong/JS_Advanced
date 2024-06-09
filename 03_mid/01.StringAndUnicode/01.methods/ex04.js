/**
 * 부분 문자열 교체
 * - replace 메서드로 문자열의 일부분을 새로운 문자열로 교체할 수 있다.
 * - replace(searchValue: string | RegExp, replaceValue: string): string
 */

{
  const msg = 'Hello World';
  console.log(msg.replace('World', 'Korea'));

  // 정규표현식을 사용할 수 있다.
  const email = 'jun@codingmax.net';
  console.log(email.replace(/\.net$/, '.com'));

  // replace는 제일 처음 일치하는 부분 문자열만 교체한다.
  // 정규표현식을 사용하면 문자열 전체에서 일치하는 모든 부분 문자열을 교체할 수 있다.
  // //g 정규표현식 뒤에 g 플래그를 두어 정규표현식이 문자열 전체 범위에 적용되도록 한다.
  console.log(/l/g, 'L');
}