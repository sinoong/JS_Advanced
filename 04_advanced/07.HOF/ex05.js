/**
 * reduce 구현하기
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

    /**
     * reduce 는 iterable의 모든 아이템을 하나의 아이템으로 누적하여 
     * 하나의 값으로 만들어주는 연산자다.
     * 누산기와 초기값을 받는다. 초기값이 없으면 배열의 제일 첫 아이템을 초기값으로 사용한다.
     * 초기값도 없는 상태에서 빈 배열이면 누적할 값이 없기 때문에 오류를 던진다.
     */
    reduce(accumulator, initialValue) {
      let accumValue;
      let startIndex = 0;

      // 초기값이 있으면 누적값에 초기값을 할당해 놓는다.
      if (initialValue) {
        accumValue = initialValue; 
      } else {
        // 초기값이 없는데 빈 배열이 오류를 던진다
        if (this.#iterable.length === 0) {
          throw new Error('초기값이 없는 상태에서 빈 배열을 누적할 수 없습니다.');
        }
        // 초기값을 배열을 첫번째 값으로 하고 시작인덱스를 1로 설정한다.
        accumValue = this.#iterable[0];
        startIndex = 1;
      }

      for (let i = startIndex; i < this.#iterable.length; i++) {
        const item = this.#iterable[i];
        // 누산기에 현재 누적값과 아이템값을 전달해서 새로운 누적값을 계산한다.
        accumValue = accumulator(accumValue, item);
      }
      // reduce도 iterable이 아닌 누적값을 반환하기 때문에 SodashChain을 계속 이어 나갈 수 없다.
      return accumValue;
    }
  }

  // reduce 사용
  const result = _.chain([1, 2, 3, 4])
    .map((it, index) => it * index)
    .map((it) => it ** 2)
    .filter((it) => it > 0)
    .reduce((acc, it) => acc + it);

  console.log(result);
}