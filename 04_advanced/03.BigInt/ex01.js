/**
 * 자바스크립트의 number 타입의 정수는 표현할 수 있는 수의 범위가 정해져 있다.
 * 때에 따라서는 정수 범위를 범위를 벗어난 더 큰 수를 사용해야 할 때도 있기 때문에
 * BigInt Primitive 타입을 소개했다.
 */

/**
 * 아래 코드를 실행해 보자
 */
{
    // 자바스크립트는 Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER 범위의 정수만 표현할 수 있기 때문에
    // 9999_9999_9999_9999 은 Number.MAX_SAFE_INTEGER 보다 커서 정수값이 올바르게 표현되지 않는다.
    console.log(Number.MAX_SAFE_INTEGER <= 9999_9999_9999_9999);
    // 그래서 10000000000000000 이 출력된다. 왜냐하면 Number.MAX_SAFE_INTEGER 보다 큰 수는 반올림이 발생하기 때문이다.
    console.log(9999_9999_9999_9999);

    // 9007199254740991
    console.log(Number.MAX_SAFE_INTEGER);
    
    // Number.MAX_SAFE_INTEGER 보다 큰 수는 반올림이 발생한다.
    console.log(9007199254740991 === 9007199254740992); // false
    
    // 그래서 이 연산과 같은 예상치 못 한 결과를 만들 수 있다
    // false가 나와야 하지만 true가 나온다.
    console.log(9007199254740992 === 9007199254740993); // true

    console.log(9007199254740994 === 9007199254740995); // false

    // -9007199254740991
    console.log(Number.MIN_SAFE_INTEGER);

    // 아래 두 수가 모두 같다! 이런 결과는 의도치 않은 버그를 만든다.
    // -9007199254740996
    console.log(Number.MIN_SAFE_INTEGER - 4);
    // -9007199254740996
    console.log(Number.MIN_SAFE_INTEGER - 5);
}

/**
 * BigInt 생성하기
 * - BigInt 함수를 사용해 생성할 수 있다.
 * - 또한 숫자의 제일 끝에 n을 붙여서 BigInt를 생성할 수 있다.
 */
{
    const n1 = BigInt(123456);
    const n2 = 123456n;
    console.log(n1 === n2);
    console.log(typeof n1);
    console.log(typeof n2);

    const n3 = 123456;
    // 값일치는 true
    console.log(n1 == n3);

    // 값타입일치는 false
    console.log(n1 === n3);
}
