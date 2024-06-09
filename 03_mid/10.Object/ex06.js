/**
 * Object.seal
 * 객체의 기존 속성 값은 변경 가능하나
 * 객체에 새로운 속성을 추가하거나 삭제하는 것만 막기
 */
{
    const person = {
        name: 'CodingMax',
        age: 20
    };

    Object.seal(person);

    person.name = 'Jun';
    person.age = 30;
    console.log(person);
    
    person.city = 'Seoul';
    delete person.name;
    console.log(person);
}

{
    class SealedPerson {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            Object.seal(this);
        }
    }

    const person = new SealedPerson('CodingMax', 30);

    person.name = 'Jun';
    person.age = 30;
    console.log(person);
    
    person.city = 'Seoul';
    delete person.name;
    console.log(person);
}