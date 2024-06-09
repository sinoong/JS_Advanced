/**
 * 변경이 불가능한 객체 만들기
 */

/**
 * Object.freeze
 * - 객체의 속성값을 변경하거나 새로운 속성을 정의(추가)하는 것을 방지한다.
 */
{
    const person = {
        name: 'CodingMax',
        age: 20
    };

    Object.freeze(person);

    person.name = 'Jun';
    person.age = 30;
    person.city = 'Seoul';

    console.log(person);
}

{
    class ImmutablePerson {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            Object.freeze(this);
        }
    }

    const person = new ImmutablePerson('CodingMax', 20);
    
    person.name = 'Jun';
    person.age = 30;
    person.city = 'Seoul';

    console.log(person);
}