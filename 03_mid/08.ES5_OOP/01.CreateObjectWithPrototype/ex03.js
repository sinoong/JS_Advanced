/**
 * 생성자 함수
 */

/**
 * 아래와 같이 생성자 함수가 있을 때, 어떤 문제가 있을까?
 */ 
{
    function Person(myname) {
        this.myname = myname;
        this.greet = function () {
            console.log(`Hello!, I'm ${this.myname}`);
        }
    }

    const person1 = new Person('CodingMax');
    const person2 = new Person('Jun');

    person1.greet();
    person2.greet();
}

/**
 * this.greet 메서드를 보면 greet 속성은 함수다. 그리고 그 값은 항상 동일하다.
 * 즉, 함수의 로직을 담은 코드가 동일하다.
 * 따라서 person1, person2, ..., personN 객체를 생성한다면
 * 동일한 코드가 각 객체마다 중복되는 것이다.
 * 이 중복을 막을 수 있는 방법이 있을까?
 * 
 * 바로 프로토타입이다. 프로토타입을 사용해 위 코드를 개선하면 아래와 같이 개선할 수 있다.
 */
{
    function Person(myname) {
        this.myname = myname;
    }
    Person.prototype.greet = function () {
        console.log(`Hello!, I'm ${this.myname}`);
    }

    const person1 = new Person('CodingMax');
    const person2 = new Person('Jun');

    person1.greet();
    person2.greet();
}

/**
 * 그렇다면 프로토타입은 무엇일까?
 */