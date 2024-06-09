/**
 * 고차함수(High Order Function)란?
 */

/**
 * 고차함수는 함수를 인자값으로 받거나 함수를 결과로 반환할 수 있는 함수를 말한다.
 * 즉, 함수를 변수처럼 사용할 수 있는 함수가 고차함수다. 
 * 고차함수에 대한 내용은 다양한 함수 종류 섹션에서 일급 객체인 함수를 다루며 고차함수를 다루었다.
 * 따라서 이 섹션에서는 배열이 제공하는 다양한 고차함수를 직접 구현하며 이해해 보려고 한다.
 */

/**
 * 배열은 자신의 아이템을 순차적으로 처리할 수 있는 고차함수를 제공한다.
 * 대표적으로 forEach, map, filter, reduce 등이 있는데 하나하나 직접 구현해 보자.
 */
{
  // Lodash를 약간 흉내 내서 작은 Lodash라는 이름으로 Sodash로 구현해 보자
  // 메서드 체이닝을 위해서 클래스로 구현하고 Sodash는 singleton 으로 구현해 보자
  class Sodash {
    static #instance;
    static get shared() {
      if (!Sodash.#instance) {
        Sodash.#instance = new Sodash();
      }
      return Sodash.#instance;
    }
  
    constructor() {
      if (Sodash.#instance) {
        return Sodash.#instance;
      }
      Sodash.#instance = this;
    }
  }
  const _ = Sodash.shared;
}

{
  /**
   *  그리고 고차함수를 배열 아이템 연산을 위한 연산자로 제공하는 Chain 클래스를 구현하자.
   */
  class SodashChain {
    #iterable;
    constructor(iterable) {
      // 복사해서 저장한다.
      this.#iterable = [...iterable];
    }
  }

  /**
   * 그런 다음 Sodash에 chain 메서드를 구현하고 SodashChain 인스턴스를 반환한다.
   */
  class Sodash {
    static #instance;
    static get shared() {
      if (!Sodash.#instance) {
        Sodash.#instance = new Sodash();
      }
      return Sodash.#instance;
    }
  
    constructor() {
      if (Sodash.#instance) {
        return Sodash.#instance;
      }
      Sodash.#instance = this;
    }

    chain(iterable) {
      return new SodashChain(iterable);
    }
  }
  const _ = Sodash.shared;

  // 그러면 아래와 같이 사용할 수 있는 것이다.
  _.chain([1, 2, 3, 4])
    //.map()
    //.filter()
    //...
}