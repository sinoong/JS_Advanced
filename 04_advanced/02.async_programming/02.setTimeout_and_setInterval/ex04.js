/**
 * setTimeout과 setInterval
 * - 대표적인 비동기 함수
 */

/**
 * intervalId = setInterval(callback, interval_ms);
 * setInterval 밀리초 단위인 interval_ms 마다 callback 함수를 실행한다.
 * 
 * 반환되는 intervalId를 사용하여 주기적인 실행을 취소할 수 있다.
 * clearInterval 함수에 intervalId를 전달하면 setInterval이 취소된다.
 */
{
    const intervalId = setInterval(() => {
        console.log(`${new Date()} 1초 마다 출력됩니다.`);
    }, 1000);
      
    // 3초뒤에 interval을 취소한다.
    setTimeout(() => {
        clearInterval(intervalId);
    }, 3000);
}