/**
 * Generator와 Recursive
 */

/**
 * yield* 를 사용하여 자기 자신을 호출해서 재귀적으로 제너레이터를 사용할 수 있다.
 */
{
    function* recursive(n) {
        yield n;
        // 재귀에는 이렇게 탈출 조건이 있는게 좋다.
        if (n === 0) {
            return 0;
        }
        // yield* 로 자기 자신을 호출한다.
        yield* recursive(n - 1);
    }
      
    const iterator = recursive(3);
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());          
}

/**
 * 피보나치 수열을 Generator로 만들어 보자
 * fib(0) = 0;
 * fib(1) = 1;
 * fib(n) = f(n - 1) + f(n - 2);
 */
{
    // 피보나치 수열은 n = 2일 때부터
    // 자신의 앞에 있는 두 수를 더 해서 만드는 것이다.
    function* fib(a = 0, b = 1) {
        yield a;
        yield* fib(b, a + b);
    }
      
    const iterator = fib();
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());      
}