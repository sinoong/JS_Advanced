/**
 * Private 속성과 메서드
 */

/**
 * 아래 코드의 문제점은 instanceCount와 specise가 외부에서 변경된다는 점이다.
 * 이는 의도치 않은 버그 또는 논리에 맞지 않는 문제를 일으킨다.
 */
{
    class Person {
        static instanceCount = 0;
        static increment() {
            Person.instanceCount += 1;
        }

        specise = 'Human';
        constructor(name) {
            this.name = name;
            Person.increment();
        }

        greet() {
            console.log(`Hello, I'm ${this.myname}`);
        }
    }
    const p1 = new Person('CodingMax');
    const p2 = new Person('Jun');
    console.log(Person.instanceCount); // 2
    console.log(p1.instanceCount); // undefined

    Person.instanceCount = 100;
    p2.specise = 'Cat';

    console.log(Person.instanceCount); // 100
    console.log(p2.specise); // Cat
}

/**
 * 따라서 이러한 수정을 막아야 한다.
 * ES6에서 private 한 속성과 메서드를 구현할 수 있는 방법으로 # 키워드를 
 * 제시했다.
 */
{
    class Person {
        static #instanceCount = 0;
        static #increment() {
            Person.#instanceCount += 1;
        }

        #specise = 'Human';
        constructor(name) {
            this.name = name;
            Person.#increment();
        }

        greet() {
            console.log(`Hello, I'm ${this.myname}`);
        }
    }
    const p1 = new Person('CodingMax');
    const p2 = new Person('Jun');

    // 값을 읽을 수 없다.
    console.log(Person.instanceCount); // undefined
    console.log(p1.instanceCount); // undefined

    
    // 새로운 속성이 생긴다.
    Person.instanceCount = 100;
    p2.specise = 'Cat';

    console.log(Person.instanceCount); // 100
    console.log(p2.specise); // Cat
}
