/**
 * 객체 속성의 여러 특성을 동시에 설정할 수 있다.
 */

/**
 * 나이를 변경 불가능하게 만들고 
 * 삭제가 불가능하게 만든다.
 * 단, 속성 조회는 가능하게 만든다.
 */
{
    const person = {
        name: 'CodingMax'
    };

    Object.defineProperty(person, 'age', {
        value: 25,
        writable: false,
        enumerable: true,
        configurable: false
    });

    console.log(person.age);
    console.log('age' in person);

    person.age = 10;
    delete person.age;
}

/**
 * Object.defineProperties 를 사용하면 동시에 여러 속성을 속성 설명자와 함께
 * 정의할 수 있다.
 */
{
    const person = {
        name: 'CodingMax'
    };

    Object.defineProperties(person, {
        age: {
            value: 25,
            writable: false,
            enumerable: true,
            configurable: false
        },
        city: {
            value: 'Seoul',
            writable: true,
            enumerable: true,
            configurable: false
        }
    });

    console.log(person);
}