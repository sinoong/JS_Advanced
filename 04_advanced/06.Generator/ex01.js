/**
 * Generate 란?
 */

/**
 * Generate는 자바스크립의 특별한 함수다.
 * 제너레이터가 특별한 이유는
 * - 제너레이터 함수는 함수의 실행을 중간에 멈추었다가 
 * - 다시 필요할 때 재개 할 수 있으면서도 스스로 함수 실행의 상태를 관리하기 때문이다.
 * 
 * 보통 일반 함수는 한번 실행하면 함수가 값을 반환하거나 종료될 때까지 한번에 실행된다. 
 * 중간에 실행을 잠깐 정지할 수 없다. 또한 일반 함수는 실행을 할 때마다 함수의 블럭의 
 * 모든 변수가 정의되기 때문에 상태가 초기화 되어 상태가 없다고 볼 수 있다.
 */

/**
 * Generator를 정의하는 문법은 아래와 같다.
 * - 제너레이터는 함수의 한 종류로 function 키워드를 사용하여 정의한다.
 * - 다만 일반 함수와 다르게 function 키워드 바로 뒤에 * 를 붙여서 함수를 정의한다.
 */
{
    function* generator() {

    }
}

/**
 * 제너레이터는 일반 함수와 동일하게 인자값을 받을 수 있고 값도 반환할 수 있다
 */
 {
    function* generator(a, b) {
        return a + b;
    }
}

/**
 * 일반 함수와 다른 가장 큰 차이점은 제너레이터 함수 실행을 중간이 일시 정지할 수 있다는 점이다.
 * - 그럼 어디에서 함수 실행을 일시 정지할까?
 * - 바로 yield 키워드를 실행하고 함수 실행을 일시 정지한다.
 */
{
    function* generator(a, b) {
        console.log(`a값은 ${a}입니다.`);
        yield;
        console.log(`b값은 ${b}입니다.`);
        yield;
        console.log('a + b를 반환합니다');
        return a + b;
    }
}

/**
 * 지금까지 정의한 generator 함수를 실행해 보자.
 * - 실행 결과가 어떻게 될까?
 */
{
    function* generator(a, b) {
        console.log(`a값은 ${a}입니다.`);
        yield;
        console.log(`b값은 ${b}입니다.`);
        yield;
        console.log('a + b를 반환합니다');
        return a + b;
    }

    // 아무것도 출력되지 않는다?
    generator(10, 20);
}

/**
 * 위 코드를 실행하면 아무것도 출력되지 않는다. 왜 그럴까?
 * - 사실 Generator 함수는 Generator 함수를 호출하면 함수의 몸체 코드를
 * - 바로 실행하지 않고 Iterable 이면서 Iterator 인 객체를 반환한다.
 */
{
    function* generator(a, b) {
        console.log(`a값은 ${a}입니다.`);
        yield;
        console.log(`b값은 ${b}입니다.`);
        yield;
        console.log('a + b를 반환합니다');
        return a + b;
    }

    // Iterable & Iterator 객체를 반환한다.
    const iter = generator(10, 20);
    // Symbol.iterator 메서드가 있으면 iterable이다.
    console.log(iter[Symbol.iterator]);
    // next 메서드를 가지고 있으면 iterator다.
    console.log('next' in iter);
}

/**
 * 즉, Generator는 yield 단위로 실행할 코드를 담고 있는 컬렉션으로 볼 수 있다.
 * 해당 컬렉션을 순회하면서 코드를 실행하기 위해서 Generator는 Iterator 를 반환하는 것이다.
 * 따라서 Generator 코드를 실행하기 위해서 Iterator의 next() 메서드를 호출해야 한다.
 */
{
    function* generator(a, b) {
        console.log(`a값은 ${a}입니다.`);
        yield;
        console.log(`b값은 ${b}입니다.`);
        yield;
        console.log('a + b를 반환합니다');
        return a + b;
    }

    // Iterable & Iterator 객체를 반환한다.
    const iter = generator(10, 20);
    // a값은 10입니다. 가 출력되고 첫번째 yield까지 실행된다.
    // 그리고 yield는 무엇인가를 반환하는데 
    // 그 모양을 보면 IteratorResult를 반환하는 것을 알 수 있다.
    // 다만 yield 뒤에 값이 없기 때문에 { value: undefined, done: false }가
    // 반환된다.
    console.log(iter.next());

    // 또 iter.next()를 실행해 보자.
    // b값은 20입니다. 가 출력되고 첫번째 yield 다음부터 두번째 yield까지 실행된다.
    console.log(iter.next());

    // 또 iter.next()를 실행해 보자.
    // a + b를 반환합니다 가 출력되고 
    // IteratorResult 객체의 value 속성에 a + b값이 담겨 있고
    // done이 true인 것을 알 수 있다.
    // 따라서 제너레이터 함수가 값을 return 하거나 모든 코드를 실행하고 함수가 종료되면
    // Iterator의 순회가 끝났음을 알리는 { done: true } 가 반환된다.
    console.log(iter.next());
}

/**
 * 제너레이터에서 return 문을 지워보자.
 */
{
    function* generator(a, b) {
        console.log(`a값은 ${a}입니다.`);
        yield;
        console.log(`b값은 ${b}입니다.`);
        yield;
        console.log(`a + b는 ${a + b}입니다.`);
    }

    const iter = generator(10, 20);
    console.log(iter.next());
    console.log(iter.next());
    // { value: undefined, done: true } 가 출력된다.
    console.log(iter.next());
}

/**
 * 따라서 제너레이터가 무엇을 하는 함수인지 정리해 보면
 * - 제너레이터는 yield 단위로 코드 실행 블럭을 나누어 담은 컬렉션이다.
 * - 또한 해당 컬렉션을 순회하면서 코드를 실행하기 위해 iterator를 반환하는
 * - Iterable 이자 Iterator 다.
 * - 그리고 코드 실행 결과를 Iterator가 반환을 한다.
 * - 즉, 제너레이터를 코드를 yield 단위로 나누어서 실행하며 결과를 생성하는 함수다.
 * - 그래서 생성기 즉, 제너레이터라고 부른다.
 */