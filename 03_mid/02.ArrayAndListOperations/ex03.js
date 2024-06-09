/**
 * 배열 메서드와 선언형 프로그래밍(리스트 연산)
 * - 검색
 */

/**
 * 자바스크립트 Array는 원소를 찾기 위한 두 갈래의 메서드 그룹을 제공한다.
 * - 1. 검색 조건에 맞는 원소를 찾아 반환하는 메서드
 * - 2. 검색 조건에 맞는 원소를 찾아 해당 원소의 인덱스를 반환하는 메서드
 */

/**
 * find
 * - find 메소드는 배열에서 주어진 조건을 만족하는 첫 번째 원소를 반환하는 메소드
 */
{
  const numbers = Array.of(1, 2, 3, 4, 5);
  const five = numbers.find((number) => number === 5);
  console.log(five);

  // 조건에 맞는 원소가 없으면 undefined 가 반환된다.
  const six = numbers.find((number) => number === 6);
  console.log(six);

  // 첫번째 짝수 찾기
  const firstEven = numbers.find(n => n % 2 === 0);
  console.log(firstEven);

  const people = [
    {name: 'Kim', age: 10 },
    {name: 'Lee', age: 22 },
    {name: 'Han', age: 38 },
    {name: 'Joo', age: 43 },
    {name: 'Park', age: 58 },
  ];

  // 첫번째 30대 찾기
  console.log(people.find((person) => 30 <= person.age && person.age < 40));
}

/**
 * findLast
 * - 검색 조건에 맞는 제일 마지막 원소 찾기
 */
{
  const numbers = Array.of(1, 2, 3, 4, 5);

  // 마지막 짝수 찾기
  const lastEven = numbers.findLast(n => n % 2 === 0);
  console.log(lastEven);

  const people = [
    {name: 'Kim', age: 10 },
    {name: 'Lee', age: 22 },
    {name: 'Han', age: 38 },
    {name: 'Joo', age: 43 },
    {name: 'Ko', age: 32 },
    {name: 'Park', age: 58 },
  ];

  // 마지막 30대 찾기
  console.log(people.findLast((person) => 30 <= person.age && person.age < 40));
}

/**
 * 인덱스 반환 검색
 */

/**
 * indexOf
 * 원소 비교에 === 을 사용한다.
 * indexOf 메소드는 배열에서 특정한 원소의 인덱스를 찾는 메서드다. 
 * 주어진 값과 일치하는 첫 번째 원소의 인덱스를 반환한다.
 * 일치하는 원소가 없으면 -1을 반환한다.
 */
{
  const numbers = Array.of(1, 2, 3, 4, 5, 1, 2, 3, 4, 5);
  console.log(numbers.indexOf(3));
  console.log(numbers.indexOf(10) < 0 ? '10이 없습니다' : '10이 있습니다.');

  // 값타입 일치 연산자를 사용하기 때문에 객체 비교는 메모리 주소를 비교한다.
  // 따라서 같은 속성을 갖는 객체라도 서로 다른 메모리 주소에 있기 때문에
  // -1 이 반환된다.
  const users = [{ name: 'Jin' }, { name: 'CodingMax' }];
  console.log(users.indexOf({ name: 'CodingMax' }));
}

/**
 * lastIndexOf
 * 주어진 값과 일치하는 마지막 원소의 인덱스를 반환한다.
 */
{
  const numbers = Array.of(1, 2, 3, 4, 5, 1, 2, 3, 4, 5);
  console.log(numbers.lastIndexOf(3));
}

/**
 * findIndex
 * findIndex는 indexOf 와 달리 검색식을 적용해서 조건에 맞는 첫번째 원소의 인덱스를 반환한다.
 */
{
  // 객체를 다시 검색해 보자.
  const users = [{ name: 'Jin' }, { name: 'CodingMax' }];
  console.log(users.findIndex((user) => user.name === 'CodingMax'));

  // 첫번째 홀수 인덱스 찾기
  const numbers = Array.of(1, 2, 3, 4, 5, 1, 2, 3, 4, 5);
  console.log(numbers.findIndex((number) => number % 2 === 1));

  // 조건에 맞는 원소가 없으면 -1이 반환된다.
  console.log(numbers.findIndex((number) => number > 10));
}

/**
 * findLastIndex
 * findIndex와 달리 검색식을 적용해서 조건에 맞는 마지막 원소의 인덱스를 반환한다.
 */
{
  // 첫번째 홀수 인덱스 찾기
  const numbers = Array.of(1, 2, 3, 4, 5, 1, 2, 3, 4, 5);
  console.log(numbers.findLastIndex((number) => number % 2 === 1));

  // 조건에 맞는 원소가 없으면 -1이 반환된다.
  console.log(numbers.findLastIndex((number) => number > 10));
}

/**
 * includes
 * includes 메서드는 배열에 특정 원소가 포함되어 있는지를 확인할 때 사용한다.
 * 이 메서드는 특정 원소가 포함되어 있으면 true를 반환하고, 그렇지 않으면 false를 반환한다.
 */
{
  const numbers = Array.of(1, 2, 3, 4, 5, 1, 2, 3, 4, 5);
  console.log(numbers.includes(3));

  // 검색을 시작할 인덱스를 설정할 수 있다.
  console.log(numbers.includes(3, 5));

  // 검색 시작 인덱스 때문에 false가 반환된다.
  console.log(numbers.includes(3, 8));
}

/**
 * every
 * every 메소드는 배열의 모든 원소가 주어진 조건을 만족하는지를 검사할 때 사용한다.
 * 모든 원소가 조건을 만족하면 true, 그렇지 않으면 false를 반환한다.
 */
{
  const numbers = Array.of(1, 2, 3, 4, 5, 1, 2, 3, 4, 5);
  // 모두 양수인가?
  console.log(numbers.every((number) => number > 0));
  // 모두 짝수인가?
  console.log(numbers.every((number) => number % 2 === 0));
}

/**
 * some
 * some 메소드는 주어진 조건을 만족하는 원소가 하나라도 있는지 검사할 때 사용한다.
 * 조건을 만족하는 원소가 하나라도 있으면 true, 그렇지 않으면 false를 반환한다.
 */
{
  const numbers = Array.of(1, 2, 3, 4, 5, 1, 2, 3, 4, 5);
  // 음수가 하나라도 있는가?
  console.log(numbers.some((number) => number < 0));
  // 짝수가 하나라도 있는가?
  console.log(numbers.some((number) => number % 2 === 0));
}