
/**
 * Getter/Setter 속성
 * 외부에서 수정이 불가능하도록 데이터를 보호했지만 외부에서 읽을 수 없는 문제가 발생했다.
 * 그리고 새로운 속성이 생기기까지 했다. 이것을 막는 방법은?
 * ES6에서는 getter/setter 속성을 제시했다.
 */
{
    class Person {
        static #instanceCount = 0;
        static #increment() {
            Person.#instanceCount += 1;
        }

        static get instanceCount() {
            return Person.#instanceCount;
        }

        #specise = 'Human';
        constructor(name) {
            this.name = name;
            Person.#increment();
        }

        greet() {
            console.log(`Hello, I'm ${this.myname}`);
        }

        get specise() {
            return this.#specise;
        }
    }
    const p1 = new Person('CodingMax');
    const p2 = new Person('Jun');

    // 값을 읽을 수 없다.
    console.log(Person.instanceCount); // 2
    console.log(p1.instanceCount); // undefined

    
    // 동일한 이름의 getter 속성이 있어서 새로운 속성을 만들 수 없고
    // 수정도 불가능하다.
    Person.instanceCount = 100;
    p2.specise = 'Cat';

    console.log(Person.instanceCount); // 2
    console.log(p2.specise); // Human
}