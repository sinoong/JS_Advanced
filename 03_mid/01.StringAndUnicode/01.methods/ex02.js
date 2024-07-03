/**
 * 부분 문자열 추출하기
 * substring(start: number, end?: number | undefined): string
 */

/**
 * 문자열도 컬렉션이기 때문에 일부분을 추출하고 검색하는 방법이 중요하다.
 */
{
               
  const msg = '01234567890';
  // msg.substring(startIndex, endIndex);
  console.log(msg.substring(0, 5)); // 이상 미만

  // endIndex를 생략할 수 있다.
  console.log(msg.substring(6));
}