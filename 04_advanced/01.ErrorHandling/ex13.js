/**
 * 이전 예제에서 함수의 반환값이었던
 * result 튜플을 Result<Value, Error> 로 추상화할 수 있다.
 */
{
    class Result {
        get isOk() {
            throw new Error('구현해 주세요');
        }

        get isError() {
            throw new Error('구현해 주세요');
        }

        map(fn) {
            throw new Error('구현해 주세요');
        }

        unwrap() {
            throw new Error('구현해 주세요');
        }
    }

    class OkResult extends Result {
        constructor(value) {
            super();
            this.value = value;
        }

        get isOk() {
            return true;
        }

        get isError() {
            return false;
        }

        map(fn) {
            return new OkResult(fn(this.value));
        }

        unwrap() {
            return this.value;
        }
    }

    class ErrorResult extends Result {
        constructor(error) {
            super();
            this.error = error;
        }

        get isOk() {
            return false;
        }

        get isError() {
            return true;
        }

        // 오류는 항상 오류로 남겨둔다
        map() {
            return this;
        }

        unwrap() {
            return this.error;
        }
    }

    const value = new OkResult(5).map(v => v * 20).unwrap();
    console.log(value);

    const error = new ErrorResult(new Error('오류입니다')).map(e => 10).unwrap(); // map 은 동작하지 않아야 한다.
    console.log(error.message);
}

/**
 * Result에 ok와 error static method를 추가하면 좀 더 코드가 깔끔해진다.
 */
{
    class Result {
        static ok(value) {
            return new OkResult(value)
        }

        static error(error) {
            return new ErrorResult(error);
        }

        get isOk() {
            throw new Error('구현해 주세요');
        }
    
        get isError() {
            throw new Error('구현해 주세요');
        }
    
        map(fn) {
            throw new Error('구현해 주세요');
        }
    
        unwrap() {
            throw new Error('구현해 주세요');
        }
    }
    
    class OkResult extends Result {
        constructor(value) {
            super();
            this.value = value;
        }
    
        get isOk() {
            return true;
        }
    
        get isError() {
            return false;
        }
    
        map(fn) {
            return Result.ok(fn(this.value));
        }
    
        unwrap() {
            return this.value;
        }
    }
    
    class ErrorResult extends Result {
        constructor(error) {
            super();
            this.error = error;
        }
    
        get isOk() {
            return false;
        }
    
        get isError() {
            return true;
        }
    
        // 오류는 항상 오류로 남겨둔다
        map() {
            return this;
        }
    
        unwrap() {
            return this.error;
        }
    }
    
    const value = Result.ok(5).map(v => v * 20).unwrap();
    console.log(value);
    
    const error = Result.error(new Error('오류입니다')).map(e => 10).unwrap(); // map 은 동작하지 않아야 한다.
    console.log(error.message);

    /**
     * 앞에서 튜플을 사용한 코드를 Result로 변경해 보자.
     */
    function program(a, b, operation) {
        try {
            const func = new Function('a', 'b', `return ${operation}`);
            return Result.ok(func(a, b));
        } catch (error) {
            return Result.error(error);
        }
    }

    // const result = program(10, 20, 'aa + b');
    const result = program(10, 20, 'aa + b');
    if (result.isError) {
        const error = result.unwrap();
        console.log(error.message);
    } else {
        const data = result.unwrap();
        console.log(data);
    }
}