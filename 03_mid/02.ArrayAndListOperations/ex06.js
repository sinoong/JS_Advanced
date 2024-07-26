/**
 * 배열 메서드와 선언형 프로그래밍(리스트 연산)
 * - map, filter, reduce
 */

/**
 * map
 * map 메소드는 배열을 순회하며 각 요소를 같은 타입의 값 또는 다른 타입의 값으로 변환한다.
 */
{
  const doubled = Array.of(1, 2, 3, 4, 5)
    .map((n) => n * 2);
  console.log(doubled);
  console.log(Array.of(1, 2, 3, 4, 5).map((n) => `${n}`)) // "1", "2", "3", "4", "5" -> 문자열로 변경 
}

{
  const count = Array.of('하나', '둘', '셋', '넷', '다섯');
  // value와 함께 index도 같이 전달된다.
  const arr = Array.from({ length: 5 }).fill(0)
    .map((_, index) => count[index])
  console.log(arr);
}

/**
 * flatMap
 * flatMap은 다른 언어의 flatMap과 다르다. 사이드 이펙트를 관리하기 보다는
 * 단순히 배열을 map 했을 때, 깊어지는 depth를 평탄화할 뿐이다.
 */
{
  const result = Array.of(1, 2, 3, 4, 5)
    //map일 때와 비교해 보자
    //.map((n) => Array.from({ length: n }).fill(n))
    .flatMap((n) => Array.from({ length: n }).fill(n))
  console.log(result);
}

/**
 * filter
 * 배열에서 특정한 조건에 부합하는 요소들만을 추출하여 새로운 배열을 생성한다.
 */
{
  // 짝수만 출력한다.
  const evens = Array.from({ length: 10 }, (_, index) => index + 1)
    .filter((n) => n % 2 === 0);
  console.log(evens);
}

/**
 * reduce
 * reduce는 배열의 모든 원소를 하나의 값으로 누산한다.
 */
{
  // 1부터 10까지 합해 보자.
  const result = Array.from({ length: 10 }, (_, index) => index + 1)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  console.log(result);
}

{
  // 하나의 값은 많은 의미를 담고 있다. 
  // 초기값을 배열로 주면 하나의 배열로 누산하는 것이다.
  const result = Array.of(1, 2, 3, 4, 5)
    .map((n) => Array.from({ length: n }).fill(n))
    .reduce((acc, value) => [...acc, value].flat(), []);
  console.log(result);
}

{
  // 최대값을 구해보자
  // 초기값이 없으면 source 배열의 첫번째 원소가 초기값이 된다.
  const result = Array.of(1, 2, 3, 4, 5)
  .reduce((max, value) => Math.max(max, value));
  console.log(result); 
}

{
  // 문자열로 누산해 보자
  const result = Array.of(1, 2, 3, 4, 5)
    .reduce((acc, value) => `${acc}${value}`, '');
  console.log(result); // 12345
}

/**
 * reduceRight -> 반대방향으로 누적하는 것 
 * 배열의 요소를 오른쪽에서 왼쪽으로 줄여나가며 연산을 수행한다.
 * reduce 메소드와는 반대 방향으로 누산하는 것이다.
 */
{
  const result = Array.of(1, 2, 3, 4, 5)
    .reduceRight((acc, value) => `${acc}${value}`, '');
  console.log(result); // 54321
}