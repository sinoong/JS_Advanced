/**
 * 문자열 반복
 * - repeat 메서드를 사용해 문자열을 반복할 수 있다.
 * - repeat(count: number): string
 */

{
  const msg = 'Hello';
  console.log(msg.repeat(3));

  // 단, 0을 입력하면 빈문자열이 반환된다.
  console.log(msg.repeat(0));

  // -1을 입력하면 RangeError가 발생한다.
  console.log(msg.repeat(-1));
}
