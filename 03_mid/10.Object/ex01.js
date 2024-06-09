/**
 * 속성 설명자란?(Property Descriptor)
 */

/**
 * 속성 설명자는 어떤 객체의 특정 속성을 설명하는 객체로 아래 값을 담고 있다.
 * - value
 * - writable
 * - enumerable
 * - configurable
 */
{
    const person = {
        name: 'CodingMax'
    };

    const descriptor = Object.getOwnPropertyDescriptor(person, 'name');
    console.log(descriptor);
}

/**
 * 클래스로 생성한 객체에서도 동일하게 속성 설명자를 얻을 수 있다.
 */
{
    class Person {
        constructor(name) {
            this.name = name;
        }
    }
    const person = new Person('CodingMax');
    const descriptor = Object.getOwnPropertyDescriptor(person, 'name');
    console.log(descriptor);
}

/**
 * 속성 설명자의 속성 중
 * value는 객체 속성의 값이다.
 */
{
    const person = {
        name: 'CodingMax'
    };

    const descriptor = Object.getOwnPropertyDescriptor(person, 'name');
    console.log(descriptor.value);
}

/**
 * 속성 설명자의 속성 중
 * writable은 속성이 쓰기 가능한지 즉, 변경 가능한지를 나타낸다. 
 * true이면 쓰기 가능하다.
 * false이면 쓰기 불가능한다.
 */
{
    const person = {
        name: 'CodingMax'
    };

    const descriptor = Object.getOwnPropertyDescriptor(person, 'name');
    console.log(descriptor.writable);
    person.name = 'Jun';
}

/**
 * 속성 설명자의 속성 중
 * enumerable은 속성이 for...in 루프나 Object.keys()로 열거(나열)가 가능한지를 나타낸다.
 * true이면 열거가 가능하다.
 * false이면 열거가가 불가능하다.
 */
{
    const person = {
        name: 'CodingMax'
    };

    const descriptor = Object.getOwnPropertyDescriptor(person, 'name');
    console.log(descriptor.enumerable);
    for(const key in person) {
        console.log(key);
    }
    console.log(Object.keys(person));
}

/**
 * 속성 설명자의 속성 중
 * configurable은 속성을 변경하거나 delete 연산자로 삭제가 가능한지를 나타낸다.
 * true이면 변경 및 삭제가 가능하다.
 * false이면 변경 및 삭제가 불가능한다.
 */
{
    const person = {
        name: 'CodingMax'
    };

    const descriptor = Object.getOwnPropertyDescriptor(person, 'name');
    console.log(descriptor.configurable);

    delete person.name;

    console.log(person);
}