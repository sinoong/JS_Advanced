/**
 * Promise의 executor는 언제, 어디서 실행되는가?
 */

/**
 * 우리가 Promise는 비동기 작업을 수행하기 위한 것이라고 생각한다.
 * 하지만 그렇지 않다. Promise의 executor 함수는 Promise를 생성하자 마자
 * 바로 Main Thread에서 실행된다.
 */
new Promise((resolve, reject) => {
    console.log('바로 실행됩니다');
    console.log('executor 함수의 내용이 비동기로 실행되는 것이 아닙니다!');
});



/**
 * 위 내용을 잘 알고 있어야 한다. 
 * 그렇지 않다면 아래와 같이 Main Thread를 오랜시간동안 Blocking 하는 코드를 작성할 수 있다.
 * 아래 코드를 크롬의 콘솔탭에서 실행해 보자.
 */
function delay(duration_ms) {
    const delayUntil = Date.now() + duration_ms;
    while(Date.now() < delayUntil) {
        ;
    }
    console.log(`${duration_ms}ms 동안 delay했습니다`);
}

const blocking = new Promise((resolve, reject) => {
    delay(10 * 60 * 1000);
    resolve('finished');
});
blocking.then((value) => console.log(value));

/**
 * Promise의 작업을 실행하는 executor 함수는 Main Thread에서 동기 방식으로 실행된다.
 * 비동기로 절대 실행되지 않는다.
 * 이 점을 반드시 기억해야 한다.
 * 그럼 언제 비동기로 실행되는 것일까?
 * 바로! Promise의 작업을 실행하는 함수 안에서 비동기 WebAPI를 사용할 때다!
 */
const nonBlocking = new Promise((resolve, reject) => {
    setTimeout(() => resolve('finished'), 10 * 60 * 1000);
});
nonBlocking.then((value) => console.log(value));

/**
 * 위 두 코드의 실행과정을 이해해 보자.
 */