/**
 * filter 구현
 */
{
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


  class SodashChain {
    #iterable;
    constructor(iterable) {
      // 복사해서 저장한다.
      this.#iterable = [...iterable];
    }

    // forEach는 배열의 각 아이템을 인자값으로 fn을 호출한다
    // 반환값은 없다. forEach를 하면 chain은 끝나게 된다.
    forEach(fn) {
      for(let i = 0; i < this.#iterable.length; i++) {
        const item = this.#iterable[i];
        fn(item);
      }
    }

    /**
     * map 중요한 의미를 갖는다 A 타입 집합에서 -> A 타입 집합 또는
     * A 타입 집합에서 -> B 타입 집합으로 타입을 변경할 수 있는 고차함수이기
     * 때문이다.
     */
    map(fn) {
      const result = [];
      for (let i = 0; i < this.#iterable.length; i++) {
        const item = this.#iterable[i];
        const transformed = fn(item, i);
        result.push(transformed);
      }
      // 여기서 중요한 것은 SodashChain의 메서드를 체이닝을 통해서 사용할 것이기 때문에
      // 새로운 SodashChain을 만들어서 반환해야 한다.
      return new SodashChain(result);
    }

    /**
     * filter 는 predicate 조건에 충족하는 아이템만 반환한다.
     */
    filter(predicate) {
      const result = [];
      for (let i = 0; i < this.#iterable.length; i++) {
        const item = this.#iterable[i];
        if (predicate(item, i)) {
          result.push(item);
        }
      }
      return new SodashChain(result);
    }
  }

  // filter 사용
  _.chain([1, 2, 3, 4])
    .map((it, index) => it * index)
    .map((it) => it ** 2)
    .filter((it) => it > 0)
    .forEach(console.log);
}