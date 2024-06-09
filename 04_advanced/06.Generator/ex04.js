/**
 * Iterator의 return과 throw 메서드
 */

/**
 * 사실 Iterator는 next() 메서드 이외에도 return() 과 throw() 메서드를 선택적으로
 * 구현할 수 있다. Generator가 반환하는 iterator 객체는 next() 메서드를 포함해서
 * return() 과 throw() 메서드를 모두 가지고 있다.
 */

/**
 * return 메서드는 함수가 return 하여 끝내 듯이 
 * Iterator를 명시적으로 중지할 때 사용한다.
 * 즉, 순회가 완료되었다고 설정하는 것이다.
 */
{
    function* numbers() {
        let n = 0;
        while (true) {
            n++;
            yield n;
        }
    }

    const iterator = numbers();
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());

    // {value:10, done:true} 가 되어 iterator의 순회가 완료 된다.
    console.log(iterator.return(10));
    console.log(iterator.next());

    const iter2 = numbers();
    for (const number of iter2) {
        // 이렇게도 for...of 루프를 멈출 수도 있다.
        if (number > 5) {
            iter2.return();
        } else {
            console.log(number);
        }
    }
}

/**
 * 함수가 return 문을 사용해 값을 반환하고 함수를 종료할 수 있는 것처럼
 * 제너레이터 함수도 제너레이터 함수 안에서 return 문을 사용해 값을 반환하고
 * 제너레이터 함수를 종료할 수 있다.
 */
{
    function* numbers(start = 0) {
        if (typeof start !== 'number') {
            return 'start는 number타입 값이어야 합니다.';
        }

        let n = start;
        while (true) {
            n++;
            yield n;
        }
    }

    const iter = numbers('a');
    console.log(iter.next());
    console.log(iter.next());

    const iter2 = numbers('a');
    // 바로 done이 true가 되어 아래 for...of 는 실행되지 않는다.
    for (const number of iter2) {
        console.log(number);
    }
}

/**
 * throw() 메서드
 * throw() 메서드는 제너레이터 함수 내부에서 throw문으로 오류를 던진 것과 동일하다.
 * throw() 메서드를 직접 사용하여 아래와 같이 오류를 던질 수 있다.
 * 오류가 던져지면 iterator의 순회가 종료되기 때문에 제너레이터도 더 이상 값을 생성할 수 없다.
 */
{
    function* numbers(start = 0) {
        let n = start;
        while (true) {
            n++;
            yield n;
        }
    }

    const iter = numbers();
    try {
        console.log(iter.next());
        console.log(iter.throw(new Error('오류입니다.')));
        // 여기는 실행되지 않는다.
        console.log(iter.next());
    } catch (error) {
        console.log('오류를 처리합니다.');
        // 오류처리 이후 iterator는 종료된다.
        console.log(iter.next());
        console.log(iter.next());
    }
}

/**
 * 따라서 아래와 같이 작성할 수 있다.
 */
{
    function* numbers(start = 0) {
        if (typeof start !== 'number') {
            throw new Error('start는 number타입 값이어야 합니다.');
        }

        let n = start;
        while (true) {
            n++;
            yield n;
        }
    }

    try {
        const iter = numbers('a');
        console.log(iter.next());
        console.log(iter.next());
    } catch (error) {
        console.log(error);
    }

    try {
        const iter2 = numbers('a');
        for (const number of iter2) {
            console.log(number);
        }
    } catch (error) {
        console.log(error);
    }
}