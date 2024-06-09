/**
 * Symbol.species
 * - 객체를 새로 복사할 때, 복사되는 객체 생성자의 이름을 변경할 수 있다. 
 * - 그렇게 하면, slice 처럼 배열의 아이템을 새로 복사할 때, 해당 생성자를 사용한다. 그래서 타입이 바뀌는 것이다.
 * - 보안상 취약하다.
 * - 현재 자바스크립트 스펙에서 제거를 논의하고 있다고 한다. 따라서 사용하지 않는 것이 좋다.
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/species
 */
{
    class List extends Array {
    }
    console.log(List.prototype.constructor.name);

    const myList = new List();
    const clone = myList.slice();

    // true
    console.log(clone instanceof List);

    // true
    console.log(clone instanceof Array);
}

{
    class List extends Array {
        static get [Symbol.species]() {
            return Array;
        }
    }
    console.log(List.prototype.constructor.name);

    const myList = new List();
    const clone = myList.slice();

    // false
    console.log(clone instanceof List);

    // true
    console.log(clone instanceof Array);
}


/**
 * Symbol.unscopables
 * - with문을 사용할 때, 객체에서 스코프 바인딩에서 제외할 속성을 커스텀하게 정의할 수 있다.
 * - 단, with문은 사용을 권장하지 않기 때문에 참고만 하자.
 * [크롬의 콘솔탭에서 실행해 주세요.]
 */
{
    const person = {
        name: 'CodingMax',
        age: 30,
        [Symbol.unscopables]: {
            age: true
        }
    };

    with(person) {
        // CodingMax
        console.log(name);

        // ReferenceError: age is not defined
        console.log(age);
    }
}