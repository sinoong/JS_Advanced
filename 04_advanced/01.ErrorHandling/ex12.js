/**
 * 오류를 처리하는 다른 패턴
 * [Value, Error]
 */

/** 
 * 오류를 처리하는 방법이 try-catch만 있는 것은 아니다.
 * Go언어처럼 try-catch 문이 언어 자체에 없는 언어도 있다.
 * 오류를 처리하는 다른 기법(패턴)을 알아보자.
 *  
 * 만약 모든 함수가 [Value, Error] 를 튜플로 묶어서 반환한다면 어떨까?
 */
{
    function div(a, b) {
        if (b === 0) {
            return [null, new Error('0으로 나눌 수 없습니다')];
        }
        return [a / b, null];
    }

    const result = div(10, 0);
    if (result[1]) {
        const error = result[1];
        console.log(error.message);
    } else {
        console.log(`계산 결과는 ${result[0]} 입니다.`);
    }
}

/**
 * 자바스크립트의 경우, 예외를 던지는 경우가 많기 때문에 
 * 함수 자체에서 try-catch를 사용하여 result 튜플을 만들 수 있다.
 */
{
    function program(a, b, operation) {
        try {
            const func = new Function('a', 'b', `return ${operation}`);
            return [func(a, b), null];
        } catch (error) {
            return [null, error];
        }
    }

    // const result = program(10, 20, 'aa + b');
    const [value, error] = program(10, 20, 'aa + b');
    if (error) {
        console.log(error.message);
    } else {
        console.log(value);
    }
}
