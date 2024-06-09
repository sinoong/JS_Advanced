/**
 * 사용자 정의 심볼 메서드
 * - https://tc39.es/proposal-explicit-resource-management/
 */

/**
 * 객체 메서드를 정의할 때, 개발자도 자신만의 Symbol을 정의하여 사용할 수 있다.
 */
{
    const sym_reverse = Symbol();
    Array.prototype[sym_reverse] = function () {
        return this.slice().reverse();
    }

    const numbers = [1, 2, 3, 4];
    console.log(numbers[sym_reverse]());
}

/**
 * 즉, Symbol 을 사용하여 메서드를 정의하면
 * 라이브러리를 만들때, Private 성격의 메서드를 만들 수 있고
 * 기존 객체의 프로토타입을 확장할 때도 기존에 있는 메서드를 실수로 재정의하는 
 * 실수를 방지할 수 있다.
 */

/**
 * 또한 심볼은 앞으로 자바스크립트에서 객체의 특성과 특별한 연산자를 개발할 때
 * 주로 사용될 것으로 보인다. 
 * 예를 들어,
 * https://tc39.es/proposal-explicit-resource-management/
 * 제안은 Symbol.dispose를 사용하여 명시적인 리소스 관리를 하는 
 * using 키워드에 대한 내용이다.
 * 
 * 이처럼 자바스크립트에는 점점 well-known 심볼이 늘어날 것으로 보인다.
 */