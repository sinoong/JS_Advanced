/**
 * yield 키워드는 어떻게 사용할까?
 */

/**
 * yield 키워드는 제너레이터에서 3가지 용도로 사용된다.
 * 1. 제너레이터의 함수를 일시 정지 한다.
 * 2. 외부로 IteratorResult를 반환하다.
 * 3. 외부에서 제너레이터로 입력을 받는다.
 */


/**
 * 1. 제너레이터의 함수를 일시 정지 한다.
 */
{
    function* generator() {
        console.log('숫자 생성기를 시작합니다.');
        let n = 0;
        while (n < 10) {
            yield n;
            n++;
        }
    }

    const iter = generator();
    console.log(iter.next());
}

/**
 * 2. 외부로 IteratorResult를 반환하다.
 * - 그렇기 때문에 iterable에 적용할 수 있는 연산과 문을 모두 사용할 수 있다.
 */
{
    function* generator() {
        console.log('숫자 생성기를 시작합니다.');
        let n = 0;
        while (n < 10) {
            yield n;
            n++;
        }
    }

    /**
     * for...of 문을 사용할 수 있다.
     */
    const iter = generator();
    for (const number of iter) {
        console.log(number);
    }
    
    /**
     * Spread 연산자를 사용할 수 있다.
     */
    const iter2 = generator();
    console.log([...iter2]);

    /**
     * 배열 분해를 사용할 수 있다.
     */
    const iter3 = generator();
    const [a, b, c] = iter3;
    console.log({ a, b, c });
}

/**
 * 3. 외부에서 제너레이터로 입력을 받는다.
 * - 아주 중요한 특징이다. 
 * - yield 키워드는 값을 반환하면서 실행을 중지하는데
 * - 다음 next() 함수에 인자값을 주면 멈춘 yield 키워드의 반환값이
 * - next() 함수에 준 인자값이 전달된다.
 * 즉, yield 키워드는 2단계의 실행 과정이 있다.
 * 1. 값을 외부로 반환 -> 여기까지 실행하고 실행을 일시 정지한다.
 * 2. 외부의 입력값을 제너레이터 내부로 전달 -> 다음 next()를 실행하면 여기 2번부터 다음 yield의 1번까지 실행한다.
 */
{
    function* generator() {
        console.log('숫자 생성기를 시작합니다.');
        let n = 0;
        let exit = false;
        while (!exit) {
          exit = yield n;
          console.log({ exit });
          n++;
        }
    }
      
    const iter = generator();
    // yield n으로 값을 반환하고 실행을 종료한다.
    console.log(iter.next());
    // 아무 인자값도 없다면 exit에 undefined가 전달된다.
    console.log(iter.next());
    console.log(iter.next());
    // exit에 true가 전달된다.
    console.log(iter.next(true));
    console.log(iter.next());
}