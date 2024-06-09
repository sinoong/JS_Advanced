/**
 * 비동기와 Non-Blocking
 * (크롬브라우저 콘솔에서 실행해 주세요)
 */
function delay(duration_ms) {
    const delayUntil = Date.now() + duration_ms;
    while(Date.now() < delayUntil) {
        ;
    }
    console.log(`${duration_ms}ms 동안 delay했습니다`);
}

setTimeout(() => {
    delay(1000);
}, 0);
console.log('Hello');

setTimeout(() => {
    delay(2000);
}, 0);
console.log('World');

setTimeout(() => {
    delay(3000);
}, 0);
console.log('This is Non Blocking');
