/**
 * 배열 메서드와 선언형 프로그래밍(리스트 연산)
 * - 순회, Iteration
 */

/**
 * 리스트 연산의 첫번째는 리스트 원소를 순회(iteration) 또는 방문(visit)하며 
 * 어떤 연산을 수행하는 것이다.
 * 자바스크립트 Array는 배열 원소를 순회하기 위해서 forEach 메서드를 제공한다.
 * forEach 메서드를 사용하면 배열의 각 원소에 대해 한 번씩 forEach에 인자값으로
 * 전달한 함수를 실행한다.
 */
{
  const numbers = Array.of(1, 2, 3, 4, 5);
  // forEach의 반환값은 없기(void) 때문에 값의 순회를 할 때 자주 사용된다.
  numbers.forEach(function (value, index, array) {
    console.log({ value });
    console.log({ index });
    console.log(array);
  });
}

/**
 * 자바스크립트 배열은 객체이기 때문에 속성을 가지고 있다.
 * 그래서 속성키를 반환하는 keys 메서드를 제공한다.
 * 배열의 속성키는 인덱스다.
 */
{
  const chars = Array.from('abcde');
  // 주의할 점은 keys 반환값은 배열이 아니라 iterator라는 것이다.
  const iterator = chars.keys();
  // 따라서 iterator를 순회할 수 있는 for...of 루프를 사용해야 한다.
  for (const key of iterator) {
    console.log(key);
  }

  // forEach를 사용하기 위해서는 Array.from 정적 메서드를 사용해야 한다.
  Array.from(chars.keys()).forEach((key) => console.log(key));
}

/**
 * 자바스크립트 배열은 객체이기 때문에 속성을 가지고 있다.
 * 그래서 속성의 값을 반환하는 values 메서드를 제공한다.
 * 배열의 속성값은 배열 원소다.
 */
{
  const chars = Array.from('abcde');
  // 주의할 점은 values 반환값은 배열이 아니라 iterator라는 것이다.
  const iterator = chars.values();
  // 따라서 iterator를 순회할 수 있는 for...of 루프를 사용해야 한다.
  for (const value of iterator) {
    console.log(value);
  }

  // forEach를 사용하기 위해서는 Array.from 정적 메서드를 사용해야 한다.
  Array.from(chars.values()).forEach((value) => console.log(value));
}

/**
 * 자바스크립트 배열은 객체이기 때문에 속성을 가지고 있다.
 * 그래서 속성키와 값을 목록으로 반환하는 entries 메서드를 제공한다.
 */
{
  const chars = Array.from('abcde');
  // 주의할 점은 entries 반환값은 배열이 아니라 iterator라는 것이다.
  const iterator = chars.entries();
  // 따라서 iterator를 순회할 수 있는 for...of 루프를 사용해야 한다.
  // entries의 iterator는 [key, value] 튜플(자바스크립트에서는 원소가 2개인 배열)을 반환한다.
  for (const [key, value] of iterator) {
    console.log({ key, value });
  }

  // forEach를 사용하기 위해서는 Array.from 정적 메서드를 사용해야 한다.
  Array.from(chars.entries()).forEach((entry) => console.log(entry));
}

/**
 * Symbol.iterator
 * 배열은 iterable이기 때문에 순회할 수 있는 iterator를 가지고 있다.
 * 배열의 iterator는 Symbol.iterator 속성키이름을 갖는 메서드를 호출해서 얻을 수 있다.
 * iterator에 대한 자세한 내용은 섹션 Iterable과 Iterator을 참고한다.
 */
{
  const chars = Array.from('abcde');
  // Symbol.iterator]()는 배열을 순회할 수 있는 iterator를 반환한다.
  const iterator = chars[Symbol.iterator]();
  // 따라서 iterator를 순회할 수 있는 for...of 루프를 사용해야 한다.
  for (const value of iterator) {
    console.log(value);
  }

  // forEach를 사용하기 위해서는 Array.from 정적 메서드를 사용해야 한다.
  // 주의할 점은 위에서 사용한 iterator객체는 순회가 완료되어 
  // 다시 처음부터 순회할 수 없다는 점이다.
  // 따라서 iterator를 다시 만들어서 사용해야 한다.
  Array.from(chars[Symbol.iterator]()).forEach((entry) => console.log(entry));
}