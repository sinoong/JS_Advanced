/**
 * 자바스크립트는 String, Array, Map, Set 처럼 다양한 컬렉션을 제공한다.
 * 개발자가 각각의 컬렉션을 통일된(표준화된) 방법으로 사용할 수 있도록 Iterator 패턴을 사용한다.
 * 자바스크립트는 Iterator 패턴을 지원하기 위해서 Symbol.iterator 와 Symbol.asyncIterator를 제공한다.
 * Symbol.iterator 는 동기적으로 컬렉션을 순회(Iteration)할 수 있게 인터페이스를 제공하고
 * Symbol.asyncIterator 는 비동기적으로 컬렉션을 순회(Iteration)할 수 있게 인터페이스를 제공한다.
 * 또한 사용자가 정의하는 객체도 Symbol.iterator와 Symbol.asyncIterator를 사용해 인터페이스를 지켜 메서드를 
 * 구현하면 해당 객체도 Iterator 패턴을 사용해 순회(Iteration)이 가능한 객체로 만들 수 있다.
 * 그렇게 되면 해당 객체를 for...of 문을 사용해 쉽게 순회할 수 있다.
 */

/**
 * Symbol.iterator
 * 자바스크립트에서 Iterator 패턴을 구현한 순회가 가능한 iterable 객체는 
 * Symbol.iterator 메서드를 통해서 iterator 객체를 직접 사용할 수 있다.
 * 바로 이 iterator 객체가 Iterator Protocol 을 구현한 객체다.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol
 */
{
    const numbers = [1, 2, 3];
    const iterator = numbers[Symbol.iterator]();

    // iterator의 next() 메서드를 호출해서 컬렉션 아이템을 하나 하나 얻을 수 있다.
    console.log(iterator.next()); // { value: 1, done: false }
    console.log(iterator.next()); // { value: 2, done: false }
    console.log(iterator.next()); // { value: 3, done: false }
    // 컬렉션의 모든 아이템을 순회 했다면 done이 true가 되고 value는 undefined가 된다.
    console.log(iterator.next()); // { value: undefined, done: true }
}
/**
 * Symbol.iterator 메서드가 반환하는 Iterator 객체는 Iterator Protocol 을 구현한 객체로
 * next() 메서드를 가지고 있다.
 * 이 next() 메서드는 항상 IteratorResult를 반환해야 한다.
 * IteratorResult는 { value: any, done: boolean } 로 정의된다.
 * value는 Iterator가 컬렉션을 순회하면서 반환하는 컬렉션 값이다.
 * done은 Iterator가 컬렉션의 순회를 완료했는지 아닌지를 나타내는 플래그 값이다.
 * done이 true일 때는 value를 생략할 수 있다.
 */
{
    const str = 'Hello';
    const iterator = str[Symbol.iterator]();

    console.log(iterator.next()); // { value: "H", done: false }
    console.log(iterator.next()); // { value: "e", done: false }
    console.log(iterator.next()); // { value: "l", done: false }
    console.log(iterator.next()); // { value: "l", done: false }
    console.log(iterator.next()); // { value: "o", done: false }
    console.log(iterator.next()); // { value: undefined, done: true }
}

/**
 * Iterator 패턴을 구현한 객체는 이렇게 for...of 문을 사용할 수 있다.
 * 위에서 개발자가 직접 iterator 객체를 사용한 것처럼 for...of 문이 내부에서 
 * iterator 를 바탕으로 주어진 컬렉션 객체를 순회한다.
 * 즉, IteratorResult 에서 done이 true일 때까지 for 루프를 실행하고
 * Iterator의 value를 아래 예에서 number 변수에 할당해 주는 것이다.
 */
{
    const numbers = [1, 2, 3];
    for (const number of numbers) {
        console.log(number);
    }
}