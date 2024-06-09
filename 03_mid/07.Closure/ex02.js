/**
 * strong capture 란?
 */
{
let original_func_variable = { name: 'Hello' };
// strong capture
let closure_capture_varialbe = original_func_variable; 

// original_func_variable 변수는 G.C되어 사라지지만 객체값은 그대로 살아있게 된다. 
// 왜냐면 closure_capture_varialbe 변수가 객체값을 strong 포인터로 캡쳐했기 때문이다.
original_func_variable = null; 
console.log(closure_capture_varialbe);
}

/**
 * 클로저는 자신이 정의된 스코프를 벗어나서 실행될 수 있다.
 */
function outer() {
    const a = 10;
    function inner() {
        console.log({ a });
    }
    return inner;
}

// outer() 함수는 실행되고 종료되었기 때문에 
// outer 함수의 실행 컨텍스트는 생성되었다가 소멸되었다.
const f = outer();


// 하지만 outer 스코프를 벗어난 곳에서 inner함수를 호출할 수 있다.
// 또한 outer의 로컬 스코프에 존재하던 a 변수도 outer 함수와 함께 소멸되지 않고
// outer 스코프를 벗어나 실행 되었다.
// 이렇게 할 수 있는 이유는 inner 함수가 outer 함수에 대한 클로저 스코프를 가지고 있고
// 해당 클로저 스코프에서 a 변수와 inner 함수객체를 strong 포인터로 참조(캡쳐)해 놓았기 때문이다.
// 이처럼 클로저는 자신의 상위 스코프의 변수를 참조할 때, strong 포인터로 캡쳐하여 해당 값이 G.C되지 않도록 한다.
f();
