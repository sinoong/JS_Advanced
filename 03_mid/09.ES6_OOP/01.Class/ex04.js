/**
 * 객체 인스턴스 속성
 */
{
    function Person(name) {
        this.name = name;
    }
    Person.prototype.greet = function () {
        console.log(`Hello, My name is ${this.name}!`);
    }
    Person.prototype.specise = 'Human';
    const p1 = new Person('CodingMax');
    p1.greet();
}

/**
 * 디버거를 실행해 보자.
 * specise 는 프로토타입 체인에 존재하지 않고 Person 의 자체 속성이 된다.
 */
{
    class Person {
        specise = 'Human';
        constructor(name) {
            this.name = name;
        }

        greet() {
            console.log(`Hello, My name is ${this.name}!`);
        }
    }
    const p1 = new Person('CodingMax');
    p1.greet();
}