/**
 * 오류 또는 예외를 잡아서 처리하기
 * try-catch-finally
 */

/**
 * 던져진 예외는 try-catch 문으로 잡아서 처리할 수 있다.
 * try catch 문의 문법은 아래와 같다.
 */
{
    try {
        // 오류가 던질 수 있는 코드가 실행되는 블럭
    } catch (error) {
        // 던져진 오류를 잡아서 처리하는 블럭
        // error 인자값으로 던져진 오류 객체가 전달된다.
    }
}

/**
 * 선택적으로 finally를 사용할 수 있다.
 * finally는 오류 또는 예외가 던져지든 말든 항상 실행되는 블럭이다.
 * - 만약 예외가 발생하지 않았다면
 *  - try 블럭 -> finally 블럭 순으로 실행된다.
 * - 만약 예외가 발생했다면
 *  - try 블럭 -> catch 블럭 -> finally 블럭 순으로 실행된다.
 */
{
    try {
        // 오류가 던질 수 있는 코드가 실행되는 블럭
    } catch (error) {
        // 던져진 오류를 잡아서 처리하는 블럭
        // error 인자값으로 던져진 오류 객체가 전달된다.
    } finally {
        // 항상 실행되는 블럭
    }
}


/**
 * 예외는 호출 스택을 거슬러 전파되기 때문에
 * 호출 스택에 등장하는 함수나 전역 실행 컨텍스트 중 한 곳에서
 * 던져진 예외를 잡아(catch) 처리할 수 있다.
 */
{
    function a() {
        b()
    }

    function b() {
        c();
    }

    function c() {
        throw new Error('오류가 발생했습니다');
    }

    try {
        a();
    } catch (error) {
        console.error(`전역 실행 컨텍스트에서 오류를 캐치해서 처리했습니다.`);
        console.error(`${error.name} :: ${error.message}`);
    } finally {
        console.log('항상 실행됩니다.');
    }
}

{
    function a() {
        try {
            b();
        } catch (error) {
            console.log(`a함수에서 오류를 캐치해서 처리했습니다.`);
            console.log(`${error.name} :: ${error.message}`);
        } finally {
            console.log('항상 실행됩니다.');
        } 
    }

    function b() {
        c();
    }

    function c() {
        throw new Error('오류가 발생했습니다');
    }

    /**
     * a 함수에서 던져진 오류를 잡아서 처리했기 때문에 전역 실행 컨텍스트까지
     * 예외가 전파되지 않는다.
     * 따라서 finally 블럭만 실행된다.
     */ 
    try {
        a();
    } catch (error) {
        console.log(`전역 실행 컨텍스트에서 오류를 캐치해서 처리했습니다.`);
        console.log(`${error.name} :: ${error.message}`);
    } finally {
        console.log('항상 실행됩니다.');
    }
}

{
    function a() {
        b();
    }

    function b() {
        try {
            c();
        } catch (error) {
            console.log(`b함수에서 오류를 캐치해서 처리했습니다.`);
            console.log(`${error.name} :: ${error.message}`);
        } finally {
            console.log('항상 실행됩니다.');
        } 
    }

    function c() {
        throw new Error('오류가 발생했습니다');
    }

    a();
}

/**
 * 아래 c함수처럼 예외를 던지자 마자 바로 잡아서 처리할 수 있다.
 */
{
    function a() {
        b();
    }

    function b() {
        c();
    }

    function c() {
        try {
            throw new Error('오류가 발생했습니다');
        } catch (error) {
            console.log(`c함수에서 오류를 캐치해서 처리했습니다.`);
            console.log(`${error.name} :: ${error.message}`);
        } finally {
            console.log('항상 실행됩니다.');
        } 
    }

    a();
}