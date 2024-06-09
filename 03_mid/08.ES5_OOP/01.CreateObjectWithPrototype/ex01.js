/**
 * ES5의 OOP
 */

/**
 * 1. 객체란 무엇인가?
 * - 자바스크립트에서 객체는 키와 값으로 구성된 속성의 집합.
 * - 자바스크립트 객체는 속성의 값으로 함수를 가질 수 있기 때문에 객체의 메서드를 표현할 수 있다. 
 */
const person = {
    myname: 'CodingMax',
    greet: function () {
        console.log(`Hello!, I'm ${this.myname}`);
    }
}

/**
 * 2. 자바스크립트에서 객체를 생성하는 방법
 * - 1. 객체 리터럴
 * - 2. 생성자 함수
 * - 3. Object.create 함수
 */

// 1. 객체 리터럴
const obj1 = {
    myname: 'CodingMax'
};
console.log(obj1);

// 2. 생성자 함수
function Obj() {
    this.myname = 'CodingMax';
}
const obj2 = new Obj();
console.log(obj2);

// 3. Object.create 함수
const prototype = { myname: 'CodingMax'};
const obj3 = Object.create(prototype);
console.log(obj3);
console.log(obj3.myname);
console.log(Object.getPrototypeOf(obj3));

/**
 * 1번 객체 리터럴 방법은 같은 속성을 가진 객체를 매번 다시 생성해야 하지만
 * 2번 생성자 함수와 3번 방법은 그렇지 않다. 
 * 즉, 객체를 찍어 낼 수 있는 틀 또는 타입을 정의하는 기능을 제공한다.
 * 이번 ES5 OOP 섹션에서는 2번과 3번 방법을 중심으로 프로토타입, 객체 속성, 객체 상속 등을
 * 배웁니다.
 */