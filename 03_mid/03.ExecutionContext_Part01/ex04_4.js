/**
 * 함수 실행 컨텍스트
 * 다시 보는 함수스코프와 블록스코프
 */

// 함수 실행 컨텍스트는 함수가 실행될 때 생성된다.
// 따라서 1초가 지난 뒤에 setTimeout의 
// 핸들러 함수가 호출되기 때문에 i 는 4 가 3 번 출력되는 것이다.
function a_counter() {
    for(var i = 1; i <= 3; i++) {
        setTimeout(function () {
            console.log(i);
        }, 1000);
    }
    console.log('for 루프 종료', i);
}
a_counter();


// 블럭스코프
function a_counter() {
    for(let i = 1; i <= 3; i++) {
        setTimeout(function () {
            console.log(i);
        }, 1000);
    }
    // 블럭스코프이므로 여기서 i에 접근할 수 없다.
    console.log('for 루프 종료');
}
a_counter();


// 즉시실행함수
// 즉, 함수 실행 컨텍스트를 바로 만들어줘서 
// 루프 변수 i 값을 즉시함수 스코프로 복사해 두는 것이다.
function a_counter() {
    for(var i = 1; i <= 3; i++) {
        (function () {
            var clone = i;
            setTimeout(function () {
                console.log(clone);
            }, 1000);
        })();
    }
    console.log('for 루프 종료', i);
}
a_counter();