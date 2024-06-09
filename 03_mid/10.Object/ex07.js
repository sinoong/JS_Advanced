/**
 * Object.preventExtensions
 * Object.seal 과 달리 새로운 속성 추가만 금지한다.
 * 기존의 상태를 삭제하는 것은 가능하다.
 */
{
    const person = {
        name: 'CodingMax'
    };

    Object.preventExtensions(person);

    // 가능
    delete person.name;
    
    // 불가능
    person.age = 10;
    
}

{
    class FinalPerson {
        constructor(name) {
            this.name = name;
            Object.preventExtensions(this);
        }
    }

    const person = new FinalPerson('CodingMax');
    delete person.name;

    class Test extends FinalPerson {
        constructor(name, age) {
            super(name);
            this.age = age;
        }
    }

    const t = new Test('CodingMax', 10);
}

/**
 * Object.freeze는 상수 같은 객체를 만들 때 사용한다.
 * Object.seal은 final class 로 생성한 것 같은 객체를 만들 때 사용한다.
 * 속성 삭제가 필요 없다면 Object.preventExtensions 보다는 Object.seal을 사용하자.
 */