/**
 * instaceof 연산자
 * - 객체가 특정 생성자 함수의 인스턴스인지 검사한다.
 * - 만약 객체의 프로토타입 체인에 특정 생성자 함수(constructor의 프로토타입)이 있으면
 * - true를 반환한다.
 */
{
    function Person(name) {
        this.name = name;
    }
    const person = new Person('CodingMax');

    // true
    console.log(person instanceof Person);

    // true
    // 자바스크립트에서 모든 객체는 Object.prototype을 상속한다.
    console.log(person instanceof Object);
    
    // false
    console.log(person instanceof Array);
}