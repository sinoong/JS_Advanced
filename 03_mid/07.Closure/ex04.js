/**
 * 글로벌 스코프 변수는 어떤 함수 실행 컨텍스트(렉시컬 환경)에 속한 것이 아니기도 하고 
 * 최상위 스코프이기 때문에 클로저 스코프를 만들 필요가 없다. 
 * 또한 글로벌 변수는 프로그램이 종료될 때까지 계속 살아있기 때문에 메모리를 추가적으로 소비하여
 * 클로저 스코프에 참조를 유지할 필요가 없다.
 * 따라서 아래와 같은 경우, inner 함수는 글로벌 스코프를 위한 클로저를 만들지 않는다.
 */
var a = 10;
function outer() {
    function inner() {
        return a * 20;
    }
    return inner;
}

const f = outer();
f();


/**
 * 아래 함수를 실행하면 inner_a 함수도 Closure (outer) 클로저 스코프를 갖는다.
 * 현재 inner_b 함수가 outer 함수의 로컬 스코프에 있는 변수 b를 참조하기 때문에
 * inner_b 함수만 Closure (outer) 클로저 스코프를 가져야 할 것 같지만 그렇지 않다.
 * 
 * 그 이유는 클로저 스코프를 내부 함수마다 만들지 않고 메모리를 절약하기 위해서
 * 상위 스코프 함수마다 만들기 때문이다.
 * 따라서 outer 함수에 내부 함수가 100개, 1000개가 되어도 클로저 스코프는
 * 단 1개만 생성된다.
 */
var a = 10;
function outer() {
    var b = 10;
    function inner_a() {
        return a * 10;
    }
    function inner_b() {
        return a * b * 10;
    }
    return [inner_a, inner_b];
}

const [fa, fb] = outer();
fa();
fb();