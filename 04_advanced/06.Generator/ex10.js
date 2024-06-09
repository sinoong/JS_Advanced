/**
 * Counter 상태 저장소
 * yield로 입력을 받을 수 있는 것을 활용해서 Counter 상태 저장소를 만들어 보자.
 */
{
  function* counterStore(start) {
    let n = start;
    const action = yield;
    if (action === '+') {
      n++;
    } else if (action === '-') {
      n--;
    }
    yield n;
  }

  const iterator = counterStore(0);
  console.log(iterator.next());
  console.log(iterator.next('+'));
}

/**
 * 위와 같은 Counter는 action을 전달하는 인터페이스가 next() 여서 이름이 모호할 수 있다.
 * 이럴 때, 클래스와 제너레이터를 같이 사용하면 좋다.
 * 제너레이터는 클래스 메서드로 사용이 가능하다.
 */
{
  class Counter {
    #iterator;
    constructor(start = 0) {
      this.#iterator = this.#counterStore(start);
      console.log(this.#iterator);
    }

    // Public Generator 메서드는 이렇게 선언한다.
    // *counterStore(start) {
    //     let n = start;
    //     while (true) {
    //       const action = yield n;
    //       if (action === '+') {
    //         n++;
    //       } else if (action === '-') {
    //         n--;
    //       } else {
    //         break;
    //       }
    //     }
    // }

    // Private Generator 메서드는 이렇게 선언한다.
    *#counterStore(start) {
      let n = start;
      while (true) {
        const action = yield n;
        if (action === '+') {
          n++;
        } else if (action === '-') {
          n--;
        } else {
          break;
        }
      }
    }

    increment() {
      const { value } = this.#iterator.next('+');
      return value;
    }

    decrement() {
      const { value } = this.#iterator.next('-');
      return value;
    }

    stop() {
      this.#iterator.next('x');
    }
  }

  const counter = new Counter();
  console.log(counter.increment());
  console.log(counter.increment());
  console.log(counter.increment());
  console.log(counter.increment());
  console.log(counter.decrement());
  console.log(counter.decrement());
  console.log(counter.stop());
  console.log(counter.increment());
}