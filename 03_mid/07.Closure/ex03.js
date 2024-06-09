/**
 * 중첩 클로저는 자신이 참조하는 변수를 담고 있는 상위 스코프에 대해서만 클로저 스코프를 만든다.
 * 아래 예는 b함수 스코프에 있는 c 함수 객체를 c함수 내부에서 사용하고 있으므로
 * c함수는 클로저가 되고 b 함수 스코프를 위한 클로저 스코프를 생성한다.
 */
{
    function a() {
        function b() {
            function c() {
                console.log(c.name);
            }
            return c;
        }
        return b;
    }
    const inner_b = a();
    const inner_c = inner_b();
    inner_c();
}

/**
 * 이 경우에 c 함수는 a 함수 스코프를 위한 클로저와 b 함수 스코프를 위한 클로저 b를 생성한다.
 * 왜냐하면 c 함수에서 a_const와 b_const를 모두 사용하고 있기 때문이다.
 */
{
    function a() {
        const a_const = 10;
        function b() {
            const b_const = 20;
            function c() {
                return a_const * b_const;
            }
            return c;
        }
        return b;
    }

    const inner_b = a();
    const inner_c = inner_b();
    inner_c();
}


/**
 * 이 경우, c 함수는 외부 스코프의 변수를 참조하지 않기 때문에 클로저 스코프를 단 한 개도 생성하지 않는다.
 * 따라서 이 경우 엄밀히 말하면 c는 단순한 중첩 함수가 된다.
 */
{
function a() {
    function b() {
        function c() {
            return 10;
        }
        return c;
    }
    return b;
}

const inner_b = a();
const inner_c = inner_b();
inner_c();
}