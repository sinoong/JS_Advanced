/**
 * Generator가 실행을 일시 정지하고 재개할 수 있는 것은 왜 좋을까? => 코드 명확 깔끔!!!
 * 그리고 그 과정에서 무엇이 필요할까? => 상태!!!
 */

/**
 * 먼저 일반함수를 사용하여 함수의 실행이 멈추었다가 실행되는 것을 흉내내어 보자.
 * 반환값을 iterator 객체로 만들어 보자.
 */
{
    function mimicGenerator() {
        let state = 0;
        return {
          next() {
            state += 1;
            if (state === 1) {
              console.log('하나');
              return { value: 1, done: false};
            } else if (state === 2) {
              console.log('둘');
              return { value: 2, done: false};
            } else if (state === 3) {
              console.log('셋');
              return { value: 3, done: false};
            } else {
              console.log('종료');
              return { value: undefined, done: true };
            }
          }
        };
      }
      
      const iterator = mimicGenerator();
      console.log(iterator.next());
      console.log(iterator.next());
      console.log(iterator.next());
      console.log(iterator.next());
      console.log(iterator.next());
}


/**
 * 즉, 일반함수를 여러번 호출할 때, 정지했다가 실행을 재개하는 것처럼 보이기 위해서는
 * state라는 상태가 필요하다.(중요!!!) 그리고 코드가 매우 지저분해 지는 것을 알 수 있다.
 * 
 * 제너레이터를 사용하면 동일한 기능을 아주 깔끔하게 구현할 수 있다.
 * 제너레이터는 자체적으로 상태를 갖고 있고 관리하기 때문이다.
 */
{
    function* generator() {
        console.log('하나');
        yield 1;
        console.log('둘');
        yield 2;
        console.log('셋');
        yield 3;
        console.log('종료');
    }

    const iterator = generator();
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
}

/**
 * 그리고 Generator함수는 순차과정에 각 단계마다의 다른 실행 내용을 매우 쉽게
 * 구현할 수 있다. 그냥 일반 함수처럼 구현하면 되기 때문이다.
 */
/**
 * 먼저 각 단계마다 다른 내용을 출력해야 하는 코드는 Iterator로 작성해 보자.
 * 코드가 정말 복잡해 진다. 하지만 Generator(*)와 yield 키워드를 사용하면
 * 코드가 무척 깔끔해 지는 것을 알 수 있다.
 */
{
    class MyIterator {
        #index = 0;
        next() {
            this.#index += 1;
            if (this.#index === 1) {
                console.log('첫번째 결과를 반환하기 위해서 필요한 작업을 수행 중 입니다.');
            } else if (this.#index === 2) {
                console.log('두번째 결과를 반환하기 위해서 필요한 작업을 수행 중 입니다.');
            } else {
                return { done: true };
            }
            return { value: this.#index, done: false };
        }
    }

    // Iterable은 Symbol.iterator 메서드를 구현해서 Iterator를 반환해야 한다.
    class MyIterable { 
        [Symbol.iterator]() {
            return new MyIterator();
        }
    }
    const iterable = new MyIterable();

    const iterator = iterable[Symbol.iterator]();
    console.log(iterator.next());
    console.log(iterator.next());
}

/**
 * 위 코드를 Generator로 작성하면 아래와 같다.
 * 코드가 매우 깔끔해지고 명확해 진다. 읽기가 쉬워져 의미 파악이 쉬워진다.
 */
{
    function* myGenerator() {
        console.log('첫번째 결과를 반환하기 위해서 필요한 작업을 수행 중 입니다.');
        yield 1;
        console.log('두번째 결과를 반환하기 위해서 필요한 작업을 수행 중 입니다.');
        yield 2;
    }
      
    const iterator = myGenerator();
    console.log(iterator.next()); // First yield, { value: 1, done: false }
    console.log(iterator.next()); // Second yield, { value: 2, done: false }
    console.log(iterator.next()); // { value: undefined, done: true }
}