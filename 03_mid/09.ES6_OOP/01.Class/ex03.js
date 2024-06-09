/**
 * 메서드와 메서드 축약법
 */

/**
 * 더이상 prototype에 속성을 정의하고 함수를 할당하여 객체의 메서드를 정의하지 않는다.
 */
{
    function Person(name) {
        this.name = name;
    }
    Person.prototype.greet = function () {
        console.log(`Hello, My name is ${this.name}!`);
    }
}

/**
 * 아래와 같이 ES6에서 도입된 메서드 축약법을 사용한다.
 * ES6 부터는 아래와 같이 정의된 함수만 객체의 메서드로 인정한다.
 * 메서드 축약법으로 정의한 메서드만 상속 관계에서 super 키워드를 사용할 수 있다.
 */
{
    class Person {
        constructor (name) {
            this.name = name;
        }

        greet() {
            console.log(`Hello, My name is ${this.name}!`);
        }
    }
}

/**
 * 아래와 같이 객체 메서드를 정의할 수는 있지만 절대 추천하지 않는다.
 */
{
    class Person {
        constructor (name) {
            this.name = name;
        }

        greet = function() {
            console.log(`Hello, My name is ${this.name}!`);
        }
    }
}