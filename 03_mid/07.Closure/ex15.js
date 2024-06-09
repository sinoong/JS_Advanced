/**
 * 클로저를 정의할 때 함수 표현식과 화살표 함수 무엇을 써야 할까?
 * 자바스크립트에서 항상 this가 문제다.
 * 생성자 함수 내부에서 객체의 메서드를 클로저로 구현할 때
 * 클로저 내부에서 this 포인터를 써야 할 때, 이 문제가 중요해 진다.
 */

/**
 * 생성자 함수에서 함수 표현식으로 메서드를 만들어 보자
 */
{
    function Person(name) {
        this.myname = name;
        this.greet = function () {
            console.log(`Hello! I'm ${this.myname}`);
        }
    }
    const person = new Person('CodingMax');
    // 이 때 this는 person이 되어 문제가 없다.
    person.greet()

    const greet = person.greet;
    // 함수 표현식으로 정의한 greet 메서드의 
    // this는 window가 되어 undefined 가 출력 된다.
    greet();
}

/**
 * 먼저 객체 메서드에 명시적으로 this를 바인딩 해서 문제를 해결할 수 있다.
 */
{
    function Person(name) {
        this.myname = name;
        this.greet = function () {
            console.log(`Hello! I'm ${this.myname}`);
        }.bind(this);
    }
    const person = new Person('CodingMax');
    const greet = person.greet;
    greet();
}

/**
 * 아니면 this를 클로저 스코프에 명시적으로 캡쳐를 하면 문제를 해결할 수 있다.
 * 아래 코드를 실행하면 this.greet 메서드는 클로저 스코프를 만들고 this를 self로 캡쳐해 놓는다.
 */
{
    function Person(name) {
        this.myname = name;
        const self = this;
        this.greet = function () {
            console.log(`Hello! I'm ${self.myname}`);
        }
    }
    const person = new Person('CodingMax');
    const greet = person.greet;
    greet();
}

/**
 * 화살표 함수를 사용하면 문제를 좀 더 깔끔하게 해결할 수 있다.
 * 화살표 함수로 정의한 함수 또는 클로저는 함수가 실행될 때
 * 자신이 정의된 곳의 상위 스코프의 this 를 상속 받기 때문에
 * 명시적인 this 캡쳐 없이도 항상 Person 객체가 된다.
 */
{
    function Person(name) {
        this.myname = name;
        this.greet = () => {
            console.log(`Hello! I'm ${this.myname}`);
        }
    }
    const person = new Person('CodingMax');
    const greet = person.greet;
    greet();
}