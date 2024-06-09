/**
 * 어떻게 실행될까?
 * setTimeout 이 실행되는 과정 이해하기 (2)
 */

/**
 * 콜백 함수는 콜 스택이 비어 있을 때, 실행되는 것이므로
 * setTimeout의 delay 값이 0이어도 
 * delay 함수의 3초 지연이 끝나야 실행된다.
 */
function delay(duration_ms) {
    const delayUntil = Date.now() + duration_ms;
    while(Date.now() < delayUntil) {
        ;
    }
    console.log(`${duration_ms}ms 동안 delay했습니다`);
}

console.log(`${new Date()} start`);
setTimeout(() => {
    console.log(`${new Date()} hello`);
}, 0);
console.log(`${new Date()} end`);
delay(3 * 1000);
