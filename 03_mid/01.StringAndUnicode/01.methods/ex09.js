/**
 * 문자열 비교하기
 * - localeCompare 메서드를 사용하면 문자열을 지역화된 순서대로 비교한다.
 * - 이는 내부에서 Intl.Collator를 사용하여 언어별 정렬 순서를 고려하여 문자열을 비교한다.
 * - A.localeCompare(B) 의 결과값은 -1, 0, 1 중 하나이다.
 * - -1 은 A순서가 B보다 순서상 앞이다.
 * - 0 은 A와 B 순서가 같다
 * - 1 은 A순서가 B보다 순서상 뒤이다.
 * - localeCompare(that: string, locales?: string | string[] | undefined, options?: Intl.CollatorOptions | undefined): number
 */

{
  const str1 = 'apple';
  const str2 = 'banana';
  const str3 = 'cherry';

  console.log(str1.localeCompare(str2));
  console.log('banana'.localeCompare(str2));
  console.log(str3.localeCompare(str1));
}