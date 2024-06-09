/**
 * Object.defineProperty 를
 * 속성 설명자를 사용하여 객체에 새로운 속성을 추가로 정의할 수 있다.
 * 또한 이미 정의된 속성의 특성을 변경할 수 있다.
 */

/**
 * value를 사용하여 속성에 값을 설정할 수 있다.
 */
{
    const person = {
        name: 'CodingMax'
    };

    Object.defineProperty(person, 'age', {
        value: 25
    });

    console.log(person.age);
}

/**
 * 쓰기를 금지하면 속성의 값은 변경되지 않는다. 
 */
{
    const person = {
        name: 'CodingMax'
    };

    Object.defineProperty(person, 'name', {
        writable: false
    });

    person.name = 'Jun';

    console.log(person.name); 
}

/**
 * 열거를 금지하면 속성은 for...in 루프나 Object.keys()로 조회할 수 없다.
 */
{
    const person = {
        name: 'CodingMax'
    };

    Object.defineProperty(person, 'name', {
        enumerable: false
    });
    // name
    for (const prop in person) {
        console.log(prop);
    }
    // [name]
    console.log(Object.keys(person));    
}

/**
 * configurable을 금지하면 속성을 delete 연산자로 삭제할 수 없다.
 */
{
    const person = {
        name: 'CodingMax'
    };

    Object.defineProperty(person, 'name', {
        configurable: false
    });
    delete person.name;
    console.log(Object.keys(person));
}