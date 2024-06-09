/**
 * Custom Error 객체
 * Error 객체를 상속하여 커스텀 오류 객체를 만들 수 있다.
 * name과 message이외에도 추가적인 속성과 메서드를 담을 수 있다.
 * 오류의 종류와 오류가 발생한 계층에 맞는 커스텀 오류 객체
 */
class InvalidArgumentError extends Error {
    constructor(message, argumentValue) {
        super(message);
        this.name = this.constructor.name;
        this.argumentValue = argumentValue;
    }
}

function div(a, b) {
    if (typeof a !== 'number')  {
        throw new TypeError(`a 인자값은 숫자값이어야 합니다.`);
    }
    if (typeof b !== 'number') {
        throw new TypeError(`b 인자값은 숫자값이어야 합니다.`);
    }
    if (b === 0) {
        throw new InvalidArgumentError(`b 인자값은 0이 될 수 없습니다.`, b);
    }
    return a / b;
}

try {
    div('Hello', 10);
} catch (error) {
    // instanceof 로 타입을 검사하여 InvalidArgumentError 타입의 오류인지 검사한다.
    if (error instanceof InvalidArgumentError) {
        console.log(`${error.name} :: ${error.message}`);
        console.log(`--> 입력하신 인자값: ${error.argumentValue}`);
    } else {
        console.log(error.message);
    }
}



/**
 * 만약 오류를 잡아서 처리하지 않는다면 아래와 같이 커스텀 오류 객체이름이 출력되어 쉽게 어떤 오류인지 파악할 수 있다.
 * Uncaught InvalidArgumentError: a 인자값은 숫자값이어야 합니다.
    at sum (<anonymous>:11:15)
    at <anonymous>:1:1
 */
div('Hello', 10);
div(10, 0);