/**
 * Generator
 */

/**
 * Generator는 function 키워드에 *를 붙여서 함수를 선언하면 Generator가 된다.
 * 제너레이터는 특별한 종류의 함수로 함수의 실행을 중간에 멈추었다가 다시 필요할 때 재개 할 수 있다.
 * 보통 일반 함수는 한번 실행하면 함수가 값을 반환하거나 종료될 때까지 한번에 실행된다. 중간에 실행을 잠깐 정지할 수 없다.
 * 
 * 제너레이터가 실행을 잠깐 정지 했다가 다시 실행할 수 있는 것은 
 * 제너레이터를 실행하면 즉시 실행되지 않고 Iterator를 반환하기 때문이다.
 * 
 * 제너레이터가 반환한 Iterator의 next() 메서드를 호출하면 제너레이터 안의 yield 키워드까지 실행을하고
 * yield 가 반환하는 값을 IteratorResult로 반환하다.
 * 
 * 그리고 다음 next() 를 호출할 때까지 제너레이터의 실행이 정지하는 한다.
 * 이 후 Iterator의 next() 를 실행하면 제너레이터의 중단된 지점부터 실행을 재개한다.
 * 
 * 정리하면 제너레이터는 이터레이터를 사용하여 값을 생성하는 함수다.
 * 
 */
{
    function* generator() {
        console.log('Hello');
        yield 'World';
    }

    // iterator 반환
    const iterator = generator();

    // Hello 출력
    console.log(iterator.next()); // { value: 'World', done: false }
    console.log(iterator.next()); // { done: true }

    // 즉, generator는 Iterable 을 함수로 정의할 수 있게 해주는 방법이며
    // yield 는 IteratorResult를 반환해 Iterator처럼 반복이 가능하게 해 주는 것이다.
    // 즉, 제너레이터를 사용하면 Iterable 이자 Iterator 인 객체를 함수를 통해서 아주 쉽고
    // 간결하게 작성할 수 있게 해 주는 것이다.
    // 또한 yield와 yield 사이에 추가 코드를 아주 쉽게 작성할 수 있기 때문에
    // 반복 과정에 필요한 다양한 코드를 순차적으로 실행할 수 있다.
}

/**
 * Generator는 무엇일까?
 * - Generator를 사용하면 아주 쉽게 Iterator를 만들 수 있다. => yield 키워드 하나로 IteratorResult를 반환할 수 있다.!!
 * - 또한 IteratorResult를 반환하는 과정에서 추가적인 로직을 아주 자연스럽게 실행할 수 있다.
 * - 그리고! 실행을 일시 정지 시킬 수 있다!
 * - next() 를 호출하면 yield 까지 실행한다! 그리고 yield는 IteratorResult를 반환한다!
 * - 또한 함수이기 때문에 다른 함수(또 다른 제너레이터)와 쉽게 합성할 수 있다!!!!
 * - 그리고 아주 중요한 양방향 통신!
 * - next() 메서드에 인자를 넣어 Generator 안으로 인자값을 넣어 줄 수 있다.
 */



/**
 * Generator를 사용하면 아주 쉽게 Iterator를 만들 수 있다.
 * 또한 IteratorResult를 반환하는 과정에서 추가적인 로직을 아주 자연스럽게 실행할 수 있다.
 */
function* myGenerator() {
    console.log('First yield');
    yield 1;
    console.log('Second yield');
    yield 2;
}
  
const iterator = myGenerator();
console.log(iterator.next()); // First yield, { value: 1, done: false }
console.log(iterator.next()); // Second yield, { value: 2, done: false }
console.log(iterator.next()); // { value: undefined, done: true }

/**
 * 위 Generator 코드를 Iterator로 변경한다면 아래와 같이 해야 한다.
 * 코드가 정말 복잡해 진다. 하지만 Generator(*)와 yield 키워드를 사용하면
 * 코드가 무척 깔끔해 지는 것을 알 수 있다.
 */
{
    class MyIterator {
        #index = 0;
        next() {
            this.#index += 1;
            if (index === 1) {
                console.log('First yield');
            } else if (index === 2) {
                console.log('Second yield');
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
 * 제너레이터의 return 문은 { value: return value, done: true } 인 IteratorResult를 반환한다.
 */
{
    function* generator() {
        console.log('하나');
        yield 1;
        console.log('둘');
        yield 2;
        return 3;
    }

    const iterator = generator();
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
}

