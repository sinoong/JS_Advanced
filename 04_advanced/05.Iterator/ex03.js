/**
 * 사용자 정의 Iterator
 */

/**
 * Iterator 프로토콜을 구현해서 사용자 정의 Iterator를 만들 수 있다.
 */
{
    class MyIterator {
        next() {
            return { value: 'Hello', done: false };
        }
    }
}

/**
 * 그리고 Iterator를 사용하여 순회할 수 있는 객체를 Iterable이라고 한다.
 */
{
    class MyIterator {
        next() {
            return { value: 'Hello', done: false };
        }
    }

    // Iterable은 Symbol.iterator 메서드를 구현해서 Iterator를 반환해야 한다.
    class MyIterable { 
        [Symbol.iterator]() {
            return new MyIterator();
        }
    }
    const iterable = new MyIterable();

    // iterable에서 Symbol.iterator 메서드를 실행해서 iterator를 얻을 수 있다.
    const iterator = iterable[Symbol.iterator]();
    console.log(iterator.next());
    console.log(iterator.next());
}

/**
 * 만약 { done: true } 가 없다면 끝 없이 순회하는 Iterator가 된다.
 */
{
    class InfiniteIterator {
        #count = 0;
        next() {
            this.#count += 1;
            return { value: this.#count, done: false }
        }
    }

    class InfiniteCounter {
        [Symbol.iterator]() {
            return new InfiniteIterator();
        }
    }

    const iterable = new InfiniteCounter();
    const iterator = iterable[Symbol.iterator]();
    console.log(iterator.next());
    console.log(iterator.next());

    // 따라서 아래와 같이 for..of 문에 사용할 경우 반드시 루프를 끝내는 조건을 만들어야 한다.
    for (const count of iterable) {
        if (count > 10) {
            break;
        }
        console.log(count);
    }
}

/**
 * 끝이 있는 iterator는 반드시 종료 조건일 때, { done: true } 를 반환해야 한다.
 */
{
    class Iterator {
        constructor(end) {
            this.end = end;
        }
        #count = 0;
        next() {
            if (this.#count < this.end) {
                this.#count += 1;
                return { value: this.#count, done: false };
            } else {
                return { done: true };
            }
        }
    }

    class Counter {
        constructor(end) {
            this.end = end;
        }

        [Symbol.iterator]() {
            return new Iterator(this.end);
        }
    }

    const counter = new Counter(10);
    // 루프를 종료하는 조건이 없어도 10까지 출력되면 Iterator의 순회가 끝나기 때문에
    // for...of 루프가 종료된다.
    for (const count of counter) {
        console.log(count);
    }
}

/**
 * 만약 iterator와 iterable을 하나의 객체로 통합하고 싶다면 아래와 같이 할 수 있다.
 */
{
    class Counter {
        #count = 0;
        
        constructor(end) {
            this.end = end;
        }

        [Symbol.iterator]() {
            return this;
        }

        next() {
            if (this.#count < this.end) {
                this.#count += 1;
                return { value: this.#count, done: false };
            } else {
                return { done: true };
            }
        }
    }

    const counter = new Counter(10);
    for (const count of counter) {
        console.log(count);
    }
}