/**
 * Throwable과 Uncaught Error
 * (크롬브라우저 콘솔에서 실습해 주세요.)
 */

/**
 * 자바스크립트에서 오류와 예외는 던져질 수 있다.
 * 이 때, throw 문을 사용한다.
 * throw expression;
 * 
 * expression에는 어떤 값이든 가능하다.
 */
{
    throw 10 + 20;
    throw '던져졌다';
}

/**
 * 그러나 좋은 코드를 작성하기 위해 Error 객체나 Error 객체를 상속한 Custom Error 객체를 
 * 오류와 예외로 던지는 것이 좋다.
 * 그러면 어떤 실행과정에서 오류가 발생했는지를 알 수 있는 호출 스택 내용을 같이 확인할 수 있다.
 */
{
    throw new Error('어떤 오류가 발생했습니다.');
}

/**
 * 이렇게 던져진 오류 또는 예외는 호출 스택을 거슬러 올라가며 전파된다.
 * 아주 중요한 내용이다.
 */
function a() {
    b()
}

function b() {
    c();
}

function c() {
    throw new Error('오류가 발생했습니다');
}

a();

/**
 * Uncaught Error: 오류가 발생했습니다
    at c (<anonymous>:10:11)
    at b (<anonymous>:6:5)
    at a (<anonymous>:2:5)
    at <anonymous>:13:1
 * 
 * 만약 오류 또는 예외가 호출 스택의 맨 끝인 <anonymous>(전역 실행 컨텍스트)까지
 * 전파 되었을 때, 예외가 처리(handling)되지 않았다면
 * Uncaught Error가 되고 프로그램은 종료가 된다.
 * 그렇다면 던져진 예외를 어떻게 처리할 수 있을까?
 * 바로 잡아서(catch) 처리한다.
 */