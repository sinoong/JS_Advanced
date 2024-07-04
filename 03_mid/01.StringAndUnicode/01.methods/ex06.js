/**
 * 문자열 배열 합치기
 * - join 메서드를 사용하면 배열로 주어진 문자열 요소들을 하나의 문자열로 합칠 수 있다.
 * - Array<string>.join(separator?: string | undefined): string
 */

{
  const msg = 'Hello,My,World';
  const components = msg.split(',');
  console.log(components);

  // join 메서드는 인자로 구분자(seperator)를 받는다.
  console.log(components.join(','));
  console.log(components.join('-'));
  console.log(components.join(' '));
  console.log(msg.split('').join(''))
}