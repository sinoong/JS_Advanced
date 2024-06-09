/**
 * 주의할 점
 * 여러분 렉시컬 스코프와 렉시컬 this 가 결정되는 방법 또는 시기를 혼동하면 안 됩니다.
 * - 렉시컬 스코프는 함수가 선언된 위치를 기준으로 결정이 되어 시기를 굳이 말하자면 코드를 작성할 때이고
 * - 렉시컬 this는 함수를 호출할 때, 함수 실행 컨텍스트가 만들어지면서 렉시컬 환경의 this 바인딩을 통해 결정이 됩니다.
 */

/**
 * This 바인딩
 * 1. 일반 함수의 This 바인딩
 * - CodeSandbox는 strict mode 여서 globalThis가  undefined 이다.
 * - strict mode 가 아닌 경우일 때도 살펴 봐야 하기 때문에 크롬탭에서 코드 실습.
 * - strict mode 는 다른 섹션에서 설명할 예정
 */
{
    function getThisBinding(함수종류) {
        switch (함수종류) {
            case '일반함수':
                return strictMode ? undefined : globalThis;
            case '메서드':
                return '메서드를 호출한 객체';
            case '생성자함수':
                return '새로 생성된 객체';
            case 'apply/bind/call':
                return '개발자가 명시적으로 this 설정';
            case '화살표함수':
                return '상위 Lexical Context에서 this 상속';
        }
    }
}

/**
 * 일반함수의 this는 strict mode를 제외하면 globalThis로 바인딩 된다.
 * 따라서 
 */
{
    function a_func() {
        console.log(this);
        console.log('Hello');
    }
    a_func();
}

/**
 * 일반 함수의 렉시컬 this 바인딩
 * none strict mode
 */
{
    function noneStrictMode() {
        console.log(this); // globalThis
    }
    noneStrictMode();
}

{
    var a_value = 10;
    function noneStrictMode() {
        console.log(this); // globalThis
        // 객체 속성 접근법으로 접근 가능
        console.log(this.a_value); 
        console.log(window.a_value);

        // 스코프체인 이용
        console.log(a_value); 
    }
    noneStrictMode();
}

/**
 * 일반 함수의 렉시컬 this 바인딩
 * strict mode
 */
{
    function strictMode() {
        'use strict';
        console.log(this); // undefined
    }
    strictMode();
}

{
    var a_value = 10;
    function strictMode() {
        'use strict';
        console.log(this); // undefined

        // this 포인터로 접근 불가능
        // console.log(this.a_value);

        // 글로벌 스코프를 관리하는 window 객체 속성 접근법으로 접근 가능
        console.log(window.a_value);

        // 스코프 체인으로 접근 가능
        console.log(a_value);
    }
    strictMode();
}

{
    let a_let = 10;
    let a_const = 20;

    function strictMode() {
        'use strict';

        // 스코프체인으로만 접근 가능
        console.log(a_let);
        console.log(a_const);
    }
    strictMode();
}


/**
 * 내부 중첩 함수도 렉시컬 this는 모두 globalThis
 * 그 이유는 일반함수의 this는 항상 globalThis가 되기 때문이다. 
 * 
 * # 렉시컬 this와 렉시컬 스코프를 혼동하지 말자.
 * 참고로 스코프는 함수가 선언되고 정의된 위치에 따라 결정되는
 * 렉시컬 스코프의 정의에 따라 선언된 위치의 상위 스코프를 부모 스코프로 갖는다. 
 * 따라서 
 * a 는 global Scope를
 * b 는 a함수에 대한 클로저 스코프 (메모리 절약을 위해서 b함수가 a함수 내부에 있는 변수 중 실제로 참조 하는 것만 클로저 스코프에 기록(캡쳐)한다.)
 * c 는 b함수에 대한 클로저 스코프 (메모리 절약을 위해서 c함수가 b함수 내부에 있는 변수 중 실제로 참조 하는 것만 클로저 스코프에 기록(캡쳐)한다.)
 */
{
    function a() {
        function b() {
            function c() {
                console.log(name, this);
            }
            c();
        }
        b();
    }

    a();
}