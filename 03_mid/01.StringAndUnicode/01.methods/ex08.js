/**
 * 임의 문자로 여백 넣기
 * - padStart() 와 padEnd() 메서드를 사용하면 임의 문자로 여백을 넣을 수 있다.
 * - padStart(maxLength: number, fillString?: string | undefined): string
 * - padEnd(maxLength: number, fillString?: string | undefined): string
 */

{
  const msg = 'Hello';
  // maxLength 는 원본 문자열과 fillString의 길이를 더한 값으로
  // 결과 문자열의 길이는 최대 maxLength 이다
  // padStart(maxLength, fillString)
  console.log(msg.padStart(10, '*'));

  // 따라서 maxLength 가 원본 문자열 길이 보자 작으면 여백은 적용되지 않는다.
  console.log(msg.padStart(3, '*'));

  // padEnd는 문자열 끝에 여백을 추가한다.
  console.log(msg.padEnd(10, '*'));

  // 양쪽 모두 넣기
  console.log(msg.padStart(10, '*').padEnd(15, '*'));
}

/**
 * 여백 없애기
 * - trim() 메서드를 사용하면 문자열의 시작과 끝 부분에서 공백을 제거한다.
 * - trimStart() 메서드는 문자열의 시작 부분에서 공백을 제거한다.
 * - trimEnd() 메서드는 문자열의 끝 부분에서 공백을 제거한다.
 * - trim(): string
 * - trimStart(): string
 * - trimEnd(): string
 */
{
  const msg = '     Hello,     World    ';
  console.log(msg.trim());
  console.log(msg.trimStart() === 'Hello,     World    ');
  console.log(msg.trimEnd() === '     Hello,     World');
}