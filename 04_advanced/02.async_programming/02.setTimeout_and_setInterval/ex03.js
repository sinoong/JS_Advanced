/**
 * setTimeout과 setInterval
 * - 대표적인 비동기 함수
 */

/**
 * timeoutId = setTimeout(callback, delay)
 * setTimeout은 밀리초 단위인 delay 후에 callback 함수를 실행한다.
 * 더 정확하게 말하자면 setTimeout은 콜 스택에 추가된 후 실행되면
 * 바로 반환되어 콜 스택에서 제거된다. 그리고 delay 초 후에 Queue에
 * 콜백 함수를 추가한다.Q
 * 
 * 반환되는 timeoutId 사용하여 타임아웃을 취소할 수 있다. 
 * 이 때 clearTimeout에 timeoutId를 전달하면 타임아웃이 취소된다.
 */

{
    setTimeout(() => {
        console.log('1초 뒤에 출력됩니다.');
    }, 1000);
}

{
    // 바로 취소되기 때문에 아무것도 출력되지 않는다.
    const timeoutId = setTimeout(() => {
        console.log('1초 뒤에 출력됩니다.');
    }, 1000);
    clearTimeout(timeoutId);
}
