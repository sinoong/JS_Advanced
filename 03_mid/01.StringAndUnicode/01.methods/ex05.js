/**
 * 문자열 분리
 * - split 메서드는 구분자(seperator)로 문자열을 분리하여 결과를 배열로 반환한다.
 * - split(separator: string | RegExp, limit?: number | undefined): string[]
 */

{
  const msg = 'Hello,My,World';
  // , 로 문자열을 분리한다.
  console.log(msg.split(','));

  // 구분자 뒤에 숫자값을 주면 최대 몇개까지 결과로 받을지 설정할 수 있다.
  console.log(msg.split(',', 2));
}