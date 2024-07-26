/**
 * ES2023에서 배열과 관련된 메서드 6개가 새로 추가되었다.
 * - 이미 같이 살펴본 findLast, findLastIndex 이외에
 * - toSorted, toReversed, toSpliced, with 메서드다.
 * - 이번 시간에 살펴볼 위 4개의 메서든 모두 원본 배열의 복사본을 반환한다는 공통점이 있다.
 * - 왜 이러한 메서드가 필요했을까?
 */

/**
 * 선언형으로 데이터의 흐름을 프로그래밍하다가 정렬한 후 
 * 다시 reduce 함수를 실행해서 문자열로 누산한다고 생각해 보자
 */
{
  const source = Array.of(3, 4, 2, 1, 5)
  const result = source
    .sort()
    .reduce((acc, value) => `${acc}${value}`, '');
  console.log(result);

  const result1 = source
    // 원본 원소 그대로 문자열로 묶고 싶다.
    // 하지만 sort는 원본을 수정하기 때문에 source를 재사용할 수 없다.
    .reduceRight((acc, value) => `${acc}${value}`, '');
  console.log(result1);
}

/**
 * 사실 원본을 수정하는 것은 안전하지 않다. 
 * 특히 멀티스레드 같은 환경에서 원본을 사용하는 스레드가 한 개 이상일 수 있기 때문에
 * 원본을 수정해서 발생하는 버그는 매우 심각하거나 찾기 힘든 버그가 될 수 있다.
 * 따라서 원본의 immutable을 지키기 위해서 원본을 복사해서 사용해야 안전하다. 
 * 그래서 toSorted, toReversed, toSpliced, with가 ES2023에 소개된 것이다.
 */
{
  const source = Array.of(3, 4, 2, 1, 5)
  const result = source
    .toSorted()
    .reduce((acc, value) => `${acc}${value}`, '');
  console.log(result);

  const result1 = source
    .reduce((acc, value) => `${acc}${value}`, '');
  console.log(result1);
}

/**
 * 원본 배열이 복사된다는 점을 빼면 sort 메서드와 동일하다.
 */
{
  const source = Array.of(3, 4, 2, 1, 5)
  const result = source
    .toSorted((a, b) => a < b ? -1 : a > b ? 1 : 0)
    .reduce((acc, value) => `${acc}${value}`, '')
  console.log(result);

  const result1 = source
    .toSorted((a, b) => a < b ? 1 : a > b ? -1 : 0)
    .reduce((acc, value) => `${acc}${value}`, '')
  console.log(result1);
}

/**
 * toReversed
 * 원본 배열이 복사되는 점을 빼면 reverse와 동일하다.
 */
{
  const source = Array.of(3, 4, 2, 1, 5)
  const result = source
    .toSorted((a, b) => a < b ? -1 : a > b ? 1 : 0)
    .toReversed()
    .reduce((acc, value) => `${acc}${value}`, '')
  console.log(result);

  const result1 = source
    .toSorted((a, b) => a < b ? 1 : a > b ? -1 : 0)
    .toReversed()
    .reduce((acc, value) => `${acc}${value}`, '')
  console.log(result1);
}

/**
 * toSpliced(start, deleteCount, item1, item2, ...)
 * 새로운 배열을 반환하는 것을 제외하면 splice와 동일하다.
 * 배열에 새로운 원소를 추가하거나 기존의 원소를 삭제할 수 있다.
 */
{

  const source = Array.from({ length: 5 }, (_, index) => index + 1);
  // toSpliced를 사용하면 source를 복사해서 사용하기 때문에 
  // 같은 source로 부터 다양한 splice연산을 할 수 있다.
  // (n번째 원소부터, n개 삭제, 추가)

  // 첫번째 원소 삭제
  console.log(source.toSpliced(0, 1));

  // 첫번째 원소 10으로 교체
  console.log(source.toSpliced(0, 1, 10));

  // 제일 첫번째에 0 추가
  console.log(source.toSpliced(0, 0, 0));

  // 첫번째와 두번째를 -1, -2 로 변경
  console.log(source.toSpliced(0, 2, -1, -2));
}

/**
 * with(index, value)
 * 원본 배열을 복사해서 index 위치에 있는 값을 value로 변경한
 * 새로운 배열을 반환한다.
 */
{
  const source = Array.from({ length: 5 }, (_, index) => index + 1);
  console.log(source.with(0, 'one'));
  console.log(source.with(1, 'two'));
}

/**
 * 아래와 같이 배열의 다양한 연산자를 통해서
 * 선언적으로 리스트 연산을 할 수 있게 된다.
 */
{
  const result = Array.of(1, 2, 3, 4, 5)
    .map((n) => n ** 2)
    .flatMap((n) => Array.from({ length: n }).fill(n))
    .filter((n) => n < 10)
    .with(0, 'one')
    .toReversed()
    .with(0, 'nine')
    .filter((item) => typeof item === 'string')
    .toSpliced(0, 1);

  console.log(result);
}