/**
 * 배열 메서드와 선언형 프로그래밍(리스트 연산)
 * - 기타 유용한 메서드
 */

/**
 * copyWithin(target, start[, end])
 * 배열의 일부 요소를 복사하여 동일한 배열 내에서 지정된 위치로 복사한다.
 * 이 메소드는 원본 배열을 변경한다.
 */
{
  const numbers = Array.of(1, 2, 3, 4, 5);

  // end 없이 사용하면 start부터 배열 끝까지 복사하여
  // target 위치에 덮어 쓴다.
  numbers.copyWithin(0, 1);
  console.log(numbers);
}
{
  const numbers = Array.of(1, 2, 3, 4, 5);

  // end를 쓰면 복사할 범위를 설정할 수 있다.
  // target: 1, start: 0, end: 3
  // numbers 배열에서 0..<3 인덱스 아이템을 복사하여
  // 인덱스 1에 복사한다. 추가가 아니라 복사라서 덮어쓴다.
  numbers.copyWithin(1, 0, 3);
  console.log(numbers);
}

{
  const numbers = Array.of(1, 2, 3, 4, 5);

  // start에 음수 인덱스를 -3을 주면 끝에서부터 
  // 배열의 끝에서 - 3만큼 이동한 다음 
  // 그 위치에서 배열 끝까지 복사하여 target 위치에 쓴다.
  numbers.copyWithin(0, -3);
  console.log(numbers);
}

{
  const numbers = Array.of(1, 2, 3, 4, 5);

  // start에 음수 인덱스를 -3을 주고 end에 음수 -1을 주면 
  // 배열의 끝에서 -3만큼 이동한 다음 
  // 그 위치에서 끝에서부터 |-3| - |-1|개를 복사하여 target 위치에 쓴다.
  numbers.copyWithin(0, -3, -1);
  console.log(numbers);
}

/**
 * fill(value, [start, [end]])
 * fill 메서드는 배열을 value로 채운다.
 * start와 end가 없으면 배열 전체를 value로 채운다.
 */
{
  // 5개의 undefined를 담고 있다.
  const empty = Array.from({ length: 5 });
  empty.fill(0);
  console.log(empty);
}

{
  // start만 있으면 배열 끝까지 채운다
  const empty = Array.from({ length: 5 });
  empty.fill(0, 2);
  console.log(empty);
}

{
  // start, end 모두 있으면 해당 범위만 채운다
  const empty = Array.from({ length: 5 });
  empty.fill(0, 2, 4);
  console.log(empty);
}

{
  // from과 fill을 함께 사용하기도 한다.
  const whiteColor = Array.from({ length: 3 }).fill(255);
  console.log(whiteColor);
}

/**
 * flat(depth = 1)
 * 배열 내부에 있는 모든 요소들을 지정한 깊이(depth, 기본값 1)만큼 평탄화하여 
 * 새로운 배열을 반환한다. 
 * 즉, 다차원 배열을 1차원 배열로 변환한다.
 */
{
  const numbers = [1, 2, [3, [4, 5, [6, [7]]]]];
  console.log(numbers.flat());
  console.log(numbers.flat(2));
  console.log(numbers.flat(3));
  console.log(numbers.flat(4));
}

/**
 * reverse()
 * reverse 메소드는 배열의 요소들을 역순으로 정렬한다.
 * 배열 자체를 변경하기 때문에 주의해야 한다.
 */
{
  const numbers = Array.of(4, 2, 3, 1, 5);
  numbers.reverse();
  console.log(numbers);

  // 복사하여 역순하려면 slice 메서드와 같이 사용하면 된다.
  console.log(numbers.slice().reverse());
}

/**
 * sort([compareFunction])
 * 배열의 요소들을 오름차순이나 내림차순으로 정렬한다.
 * compareFunction 가 주어지면 compareFunction 반환값에 따라
 * 오름차순이나 내림차순으로 정렬한다.
 * compareFunction는 
 * a < b 이면 -1 을 반환하고
 * a > b 이면 1을 반환하고
 * a === b 이면 0을 반환하면 오름차순으로 정렬된다.
 * a < b 이면 1 을 반환하고
 * a > b 이면 -1을 반환하면 내림차순으로 정렬된다.
 */
{
  const numbers = Array.of(4, 2, 3, 1, 5);
  // 오름차순
  console.log(numbers.slice().sort());
  // 오름차순
  console.log(numbers.slice().sort((a, b) => (a < b ? -1 : a > b ? 1 : 0)));
  // 내림차순
  console.log(numbers.slice().sort((a, b) => (a < b ? 1 : a > b ? -1 : 0)));
}