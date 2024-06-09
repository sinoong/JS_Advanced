/**
 * 동기 실행과 Blocking
 * (크롬브라우저 콘솔에서 실행해 주세요)
 */
function delay(duration_ms) {
    const delayUntil = Date.now() + duration_ms;
    while(Date.now() < delayUntil) {
        ;
    }
    console.log(`${duration_ms}동안 delay했습니다`);
}

// 1초 Blocking
delay(1000);
console.log('Hello');
// 2초 Blocking
delay(2000);
console.log('World');
// 3초 Blocking
delay(3000);
console.log('This is Blocking!');

// 만약 매우 오랫동안 Blocking 하면 어떻게 될까?
// 60초 Blocking
delay(60 * 1000);
// 60초 동안 아무것도 할 수 없다.