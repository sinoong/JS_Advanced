/**
 * Iterator 디자인 패턴
 * - Iterator 디자인 패턴은 크게 Iterable과 Iterator 로 나뉘어진다.
 * - Iterable은 순회 가능한 Collection 또는 Aggregate를 나타낸다.
 *  - 예를 들면 자바스크립트 Array가 Iterable이다.
 * - Iterator 는 Iterable을 순회하는 방법을 제공하는 인터페이스다.
 *  - 예를 들어, 순방향으로 순회하는 Iterator 또는 역방향으로 순회하는 Iterator 등이 있을 수 있다.
 */

/**
 * 이번 예제에서는 Iterator 인터페이스와 Collection(Iterable) 인터페이스를 정의하고
 * 문자열을 순방향 또는 역방향으로 순회할 수 있는 Iterator를 만들어서 사용해 본다.
 */

// Iterator interface
class Iterator {
  // 컬렉션에 다음 아이템이 있는지를 조사하는 메서드
  hasNext() {
    throw new Error('Iterator를 상속해서 hasNext()를 구현해 주세요.');
  }

  // 현재 위치의 item을 반환하고 이터레이터의 현재 위치를 다음 위치로 옮기는 메서드
  next() {
    throw new Error('Iterator를 상속해서 next()를 구현해 주세요.');
  }
}

// 순방향 Iterator
class ForwardCollectionIterator extends Iterator {
  constructor(collection) {
    super();
    this.collection = collection;
    this.index = 0;
  }

  hasNext() {
    return this.index < this.collection.length;
  }

  next() {
    const item = this.collection[this.index];
    this.index += 1;
    return item;
  }
}

// 역방향 Iterator
class BackwardCollectionIterator extends Iterator {
  constructor(collection) {
    super();
    this.collection = collection;
    this.index = this.collection.length - 1;
  }

  hasNext() {
    return this.index >= 0;
  }

  next() {
    const item = this.collection[this.index];
    this.index -= 1;
    return item;
  }
}

// Collection interface
// 컬렉션은 컬렉션을 순회하는 Iterator를 제공해야 한다.
class Collection {
  createForwardIterator() {
    throw new Error('Collection을 상속해서 createForwardIterator()을 구현해 주세요.');
  }

  createReverseIterator() {
    throw new Error('Collection을 상속해서 createReverseIterator()을 구현해 주세요.');
  }
}

// 문자열 컬렉션
class StringCollection extends Collection {
  constructor(str) {
    super();
    this.str = str;
  }

  createForwardIterator() {
    return new ForwardCollectionIterator(this.str);
  }

  createReverseIterator() {
    return new BackwardCollectionIterator(this.str);
  }
}


// 사용 예제
const stringCollection = new StringCollection('abcde');

const forwardIterator = stringCollection.createForwardIterator();
while (forwardIterator.hasNext()) {
  console.log(forwardIterator.next());  // a, b, c, d, e 순서로 출력
}

const reverseIterator = stringCollection.createReverseIterator();
while (reverseIterator.hasNext()) {
  console.log(reverseIterator.next());  // e, d, c, b, a 순서로 출력
}


/**
 * 만약 배열 컬렉션을 만들고 싶다면 아주 쉽게 정의할 수 있다.
 * 즉, 컬렉션의 실제 종류와 상관 없이 동일한 Iterator 패턴으로 배열 컬렉션을 순회할 수 있다.
 */
{
  class ArrayCollection extends Collection {
    constructor(items) {
      super();
      this.items = items;
    }

    createForwardIterator() {
      return new ForwardCollectionIterator(this.items);
    }

    createReverseIterator() {
      return new BackwardCollectionIterator(this.items);
    }
  }

  const arrayCollection = new ArrayCollection([1, 2, 3, 4, 5]);

  const forwardIterator = arrayCollection.createForwardIterator();
  while (forwardIterator.hasNext()) {
    console.log(forwardIterator.next());  // a, b, c, d, e 순서로 출력
  }

  const reverseIterator = arrayCollection.createReverseIterator();
  while (reverseIterator.hasNext()) {
    console.log(reverseIterator.next());  // e, d, c, b, a 순서로 출력
  }
}
