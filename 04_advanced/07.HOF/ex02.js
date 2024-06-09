/**
 * forEach 구현하기
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
  }

  // forEach 사용
  _.chain([1, 2, 3, 4])
    .forEach(console.log);
}