/**
 * 생각해 볼 문제
 * - 콜백 함수의 this
 */


/**
 * 콜백함수를 일반함수로 정의해서 사용하면 콜백 함수의 this도 globalThis가 된다.
 */
{
    function a_func(callback) {
        console.log('a_func', this);
        callback();
    }
    a_func(function () {
        console.log('callback', this);
    });
}

/**
 * 여기에서 문제가 발생한다.
 * a_func 에 this를 명시적으로 바인딩하여 호출하면
 * a_func 의 this는 obj가 된다.
 * 하지만 일반함수로 정의한 콜백함수는 
 * 자신을 호출한 a_func 렉시컬 환경의 this를 무시하고(바인딩하지 않는다)
 * 전역 globalThis 를 자신의 실행 컨텍스트 렉시컬 this 로 바인딩한다.
 */
{
    const obj = {};
    function a_func(callback) {
        console.log('a_func', this);
        callback();
    }
    a_func.call(obj, function () {
        console.log('callback', this);
    });
}

/**
 * 따라서 콜백 함수에서 객체의 속성에 접근하고자 할 때 문제가 발생한다.
 * 아래 코드에서 this 는 globalThis 로 브라우저에서는 window 객체다
 * window 객체이는 myname 이 없기 때문에 undefined 가 출력된다.
 */
{
    const obj = { myname: 'CodingMax' };
    function a_func(callback) {
        console.log('a_func', this);
        console.log('a_func', this === obj);
        callback();
    }
    a_func.call(obj, function () {
        console.log('callback', this.myname); // undefiend
    });
}

/**
 * 이 것을 해결하기 위해서 콜백함수에도 명시적으로 this 를 바인딩해 주는 것이다.
 */
{
    const obj = { myname: 'CodingMax' };
    function a_func(callback) {
        console.log('a_func', this);
        console.log('a_func', this === obj);
        callback.call(this);
    }
    a_func.call(obj, function () {
        console.log('callback', this.myname); // undefiend
    });
}

/**
 * 이것은 화살표 함수를 사용해도 마찬가지이다.
 * 화살표 함수는 실행할 때가 아닌 자신이 선언(정적)된 곳의 상위 스코프에서
 * this를 상속 받기 때문에 this는 window 객체가 된다.
 * 이런 점이 자바스크립트를 매우 어렵게 하는 것이다.
 */
{
    const obj = { myname: 'CodingMax' };
    function a_func(callback) {
        console.log('a_func', this);
        console.log('a_func', this === obj);
        callback();
    }
    a_func.call(obj, () => {
        console.log('callback', this.myname); // undefiend
    });
}

/**
 * 또한 화살표 함수는 자체적인 this가 없기 때문에 apply/bind/call을 호출해서 
 * this를 바인딩할 수 없다!
 */
{
    const obj = { myname: 'CodingMax' };
    function a_func(callback) {
        console.log('a_func', this);
        // 화살표 함수는 this가 없어서 바인딩할 수 없다.
        callback.call(this);
    }
    a_func.call(obj, () => {
        console.log('callback', this.myname); // undefiend
    });
}

/**
 * 위 문제는 아래와 같이 객체 안에 a_func 를 정의해도 해결 되지 않는다.
 */
{
    const obj = {
        myname: 'CodingMax',
        a_func: function (callback) {
            console.log('a_func', this);
            callback();
        }
    }

    obj.a_func(function () {
        // 콜백 함수의 this 는 window 
        console.log(this);
        console.log(this.myname);
    });

    obj.a_func(() => {
        // 콜백 함수의 this 는 window
        console.log(this);
        console.log(this.myname);
    });
}

/**
 * 위 문제는 아래와 같이 객체 안에 a_func 를 정의해도 해결 되지 않는다.
 * 즉, 정리하면 이렇다.
 * - 객체 메서드가 내부가 아닌 곳에서 콜백 함수를 사용할 때, 해당 콜백에서 
 * - 객체 내부의 속성에 접근할 때는 주의를 해야 한다.
 * - 콜백 함수가 일반 함수일 때는 apply/bind/call 을 사용해 
 * - 그나마 객체로 this 포인터를 명시적으로 바인딩할 수 있지만
 * - 화살표 함수는 자체 this가 없고 자신이 정의된 곳의 상위 스코프의 this를 상속 받기 때문에
 * - apply/bind/call 을 사용해 명시저긍로 this 를 바인딩할 수 없다.
 */
{
    const obj = {
        myname: 'CodingMax',
        a_func: function (callback) {
            console.log('a_func', this);
            callback.call(this);
        }
    }

    obj.a_func(function () {
        // 콜백 함수의 this 는 obj 
        console.log(this);
        console.log(this.myname);
    });

    obj.a_func(() => {
        // 콜백 함수의 this 는 window
        // 화살표 함수는 apply/bind/call로 명시적으로 this를 바인딩할 수 없다.
        console.log(this);
        console.log(this.myname); // undefined
    });
}

/**
 * 만약 화살표 함수를 꼭 사용해야 한다면 원칙에 따라 화살표 함수의 구현을 객체 내부의 메서드로 옮겨야 한다.
 */
{
    const obj = {
        myname: 'CodingMax',
        a_func: function (callback) {
            console.log('a_func', this);
            callback();
        },
        execute: function () {
            // obj.execute로 실행하면 execute 메서드의 this는 obj가 된다.

            // 화살표 함수는 자신이 선언된 곳 상위 스코프의 this를 상속 받으므로
            // 화살표 함수로 정의한 콜백 함수의 내부 this는 obj가 된다.
            this.a_func(() => {
                console.log(this); // obj
                console.log(this.myname); // CodingMax
            });
        }
    }
    obj.execute();
}
