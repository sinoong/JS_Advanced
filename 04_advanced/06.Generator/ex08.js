/**
 * 무한 수열과 제너레이터
 */

/**
 * 제너레이터는 무한 수열을 만들고자 할 때 아주 유용하다.
 * 앞에서 작성했던 재귀 피보나치 제너레이터를 아래와 같이 정의할 수 있다.
 * 무한 루프를 사용하지만 메인스레드가 블럭킹 되지 않는 것은 함수 실행 일시 정지될 때, 
 * 제너레이터 함수 실행 컨텍스트가 함수의 콜 스택에서 제거되기 때문에 
 * 다른 코드의 실행을 차단하지 않기 때문이다.
 */
{
    function* fib(a = 0, b = 1) {
        let current = a;
        let next = b;
      
        while (true) {
          yield current;
          [current, next] = [next, current + next];
        }
    }
      
    let i = 0;
    for (const n of fib()) {
        if (i > 20) {
            break;
        }
        console.log(`fib(${i}) = ${n}`);
        i++;
    }
}

/**
 * 소수(Prime Number) 구하기
 */
{
    /**
     * 소수를 구하는 방법에는 여러가지가 있다. 여기서는
     * 주어진 수 n을 2부터 그 숫자의 제곱근까지 모든 숫자로 나눠보는 방법을 사용한다.
     * 만약 나눠지는 숫자가 하나도 없다면 주어진 수 n은 소수다
     */
    function isPrime(n) {
        // 2보다 작으면 false
        if (n < 2) {
            return false;
        }
        // 2는 소수
        if (n === 2) {
            return true;
        }
        // 짝수이면 소수가 아니다.
        if (n % 2 === 0) {
            return false;
        }

        // 제곱근 구하기
        const sqrt = Math.sqrt(n);
        // 3부터 홀수만 검사한다.
        for (let i = 3; i <= sqrt; i += 2) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }

    function* primes(start = 2) {
        let current = start;

        while (true) {
            if (isPrime(current)) {
                yield current;
            }
            current += 1;
        }
    }

    let n = 1;
    for (const prime of primes()) {
        if (n > 100) {
            break;
        }
        console.log(`${n}번째 소수는 ${prime}입니다.`);
        n++;
    }
}
