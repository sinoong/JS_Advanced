/**
 * 생성자 메서드
 */

/**
 * ES5 시절의 생성자 함수를 class의 constructor 메서드로 표현할 수 있다.
 */
{
    function Person(name) {
        this.name = name;
    }
}

{
    class Person {
        constructor(name) {
            this.name = name;
        }
    }
}