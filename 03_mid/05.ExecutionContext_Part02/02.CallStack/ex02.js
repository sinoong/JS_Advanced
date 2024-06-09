/**
 * 2. Call Stack과 함수 실행 컨텍스트 Stack
 * 2-2. 재귀 호출 트리 그려보기 
 * - 재귀함수가 느린 이유와 개선 방법
 */

// fibonacci(n)
// n = 0, return 0
// n = 1, return 1
// n > 1, (n - 1) + (n - 2)
function fib(n) {
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    return fib(n - 1) + fib(n - 2);
}

/**
 * 함수 실행 시간 측정
 * f(10), f(20), f(30), f(40)
 */
function timeTracking(n) {
    console.time('time');
    const result = fib(n);
    console.log(`fib(${n}) = ${result}`);
    console.timeEnd('time');
}

timeTracking(10);

/**
 * 메모이제이션
 */
const cache = new Map();
function fib(n) {
    if (cache.has(n)) {
        return cache.get(n);
    }
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    const result = fib(n - 1) + fib(n - 2);
    cache.set(n, result);
    return result;
}

timeTracking(10);

/**
 * for 루프 사용
 */
function fib(n) {
    let a = 0;
    let b = 1;
    let temp = 0;
    for(let i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

timeTracking(10);