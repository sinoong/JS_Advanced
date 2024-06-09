/** 
 * yield* 는 왜 필요할까?
 */

/**
 * Generator가 정말 중요한 의미를 갖는 것은 yield* 를 사용해서
 * Generator 내부에서 다른 Generator를 중첩해서 사용할 수 있다는 점이다.
 * 이것은 Generator를 합성하고 합성해서 다양한 Generator로 쉽게 확장할 수 있다는 의미이다.
 * Iterable과 Iterator는 실행을 중지할 수 없기 때문에 이전 강좌에서 본 것처럼 상태를 만들고
 * 관리해야 한다. 따라서 Iterator와 Iterator를 합성해서 사용하는 것이 매우 어렵다. 코드가 복잡해 진다.
 * 하지만 Generator는 매우 간단하게 할 수 있다.
 */
{
    function* gen1() {
        yield 1;
        yield 2;
    }

    function* gen2() {
        yield 'a';
        yield 'b';
    }

    function* generator() {
        yield* gen1();
        yield* gen2();
    }

    // 순차적으로 실행된다
    const iterator = generator();
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
}

/**
 * 아래와 같이 하면 병렬로도 실행할 수 있다.
 * 이 예제의 중요한 점은 아래와 같이 제너레이터에서 iterator를 얻어서 특정 로직에 따라 값을 yield 할 수 있다는 점이다!
 */
{
    function* gen1() {
        yield 1;
        yield 2;
    }

    function* gen2() {
        yield 'a';
        yield 'b';
    }

    function* generator() {
        const iter1 = gen1();
        const iter2 = gen2();

        while (true) {
            const result1 = iter1.next();
            const result2 = iter2.next();

            if (result1.done && result2.done) {
                break;
            }
            yield [result1.value, result2.value];
        }
    }

    // 이렇게 병렬로도 실행할 수 있다.
    const iterator = generator();
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
}

/**
 * yield* 주의할 점
 */
{
    function* gen1() {
        yield 1;
        return 2;
    }

    function* gen2() {
        yield 'a';
        return 'b';
    }

    function* generator() {
        yield* gen1();
        yield* gen2();
    }

    // yield* 는 yield로 반환된 것만 반환한다. return으로 반환한 것은 반환하지 않는다.
    const iterator = generator();
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());

    // 이것을 수정하려면 yield나 return 값을 다시 yield 하면 된다.
    function* generator2() {
        yield yield* gen1();
        yield yield* gen2();
    }
    const iterator2 = generator2();
    console.log(iterator2.next());
    console.log(iterator2.next());
    console.log(iterator2.next());
    console.log(iterator2.next());
    console.log(iterator2.next());
}


/**
 * 이전 시간에 만들어 본 Range iterable을 제너레이터로 변경해 보자.
 * 아래와 같이 정방향과 역방향 Iterator를 Generator를 사용하여 
 * Range Iterable을 만들 수 있다.
 */
{
    function* forwardRangeIterator(start, end) {
        for (let i = start; i <= end; i++) {
            yield i;
        }
    }

    function* backwardRangeIterator(start, end) {
        for (let i = end; i >= start; i--) {
            yield i;
        }
    }


    class Range {
        constructor(start, end, reverse = false) {
            this.start = start;
            this.end = end;
            this.reverse = reverse;
        }

        [Symbol.iterator]() {
            return this.reverse ? backwardRangeIterator(this.start, this.end) : forwardRangeIterator(this.start, this.end);
        }
    };

    const range = new Range(1, 10);
    for (const number of range) {
        console.log(number);
    }
}


/**
 * 하지만 Generator는 Iterator 이면서 동시에 Iterable이다. 
 * 따라서 Range 클래스를 작성하지 않고 range 제너레이터를 만들 수 있다.
 * 이럴 때 range 제너레이터에서 다른 제너레이터를 사용할 수 있을까?
 * 사용할 수 있다.
 * 그리고 이를 Generator Delegation 또는 Generator Composition이라고 한다.
 * 즉, 다른 제너레이터에게 실행을 위임을 하는 것이다.
 * 제너레이터 실행을 위임하기 위해서는 yield* 를 사용한다. 
 * 그리고 yield* 뒤에 제너레이터 함수를 호출한다.
 */
{
    function* forwardRangeIterator(start, end) {
        for (let i = start; i <= end; i++) {
            yield i;
        }
    }

    function* backwardRangeIterator(start, end) {
        for (let i = end; i >= start; i--) {
            yield i;
        }
    }

    // Generator의 합성으로 Range 클래스를 단 하나의 함수로 변경할 수 있다.
    function* range(start, end, reverse) {
        reverse
            ? yield* backwardRangeIterator(start, end)
            : yield* forwardRangeIterator(start, end);
    }

    for (const number of range(1, 10)) {
        console.log(number);
    }

    const value = 'Hello, World';
    for (const index of range(0, value.length - 1)) {
        console.log(value[index]);
    }
}