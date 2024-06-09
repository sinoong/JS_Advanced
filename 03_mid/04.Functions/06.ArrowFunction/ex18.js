/**
 * 일반 함수와 화살표 함수의 차이
 * 1. this 바인딩
 */

// 크롬에서 실행
// 1. 렉시컬 환경에 this 포인터
{
  const friend = 'CodingMax';
  function greet1() {
    // 일반함수는 globalThis를 렉시컬 환경의 this로 바인딩한다.
    console.log(`Hello ${this.friend}`);
  }
  greet1();
  this.greet1();
  globalThis.greet1();
  window.greet1();
}

{
  const friend = 'CodingMax';
  var myname = 'CodingMax';
  const greet2 = () => {
    // 화살표 함수는 자신이 선언된 곳의 렉시컬 환경 this를 상속 받아 사용한다.
    // 화살표 함수만의 this 바인딩을 가지고 있지 않다.
    console.log(this === globalThis); // true
    console.log(`Hello ${this.friend}`); // friend는 script 스코프에 있어서 this로 접근이 불가능하다.
    console.log(`Hello ${globalThis.friend}`); // friend는 script 스코프에 있어서 this로 접근이 불가능하다.
    console.log(`I'm ${this.myname}`); // myname은 global scope에 있기 때문에 this(globalThis)로 접근 가능하다.
  }

  greet2();
}

// 2. 객체의 메서드로 사용될 경우
{
  const obj = {
    name: 'CodingMax',
    greet1: function () {
      console.log(`Hello ${this.name}`);
    },
    greet2: () => {
      // 화살표 함수는 선언된 주변 스코프의 this를 상속받는다.
      // 따라서 undefined or window object가 된다.
      // obj가 되지 않는다.
      console.log(this);
      // 따라서 아래와 같이 obj의 name 속성에 접근할 수 없다.
      console.log(`Hello ${this.name}`);
    },
    greet3: function () {
      // 일반함수가 객체의 메서드로 사용될 때에는 렉시컬 환경의 this는 자신을 호출한 객체로 설정된다.
      // 따라서 여기에서의 this는 obj이다.
      console.log(this);
      const arrowFunc = () => {
        // 화살표 함수가 함수 내부에 선언되어 있으므로
        // 자신의 상위 스코프가 함수가 된다.
        // 따라서 함수의 렉시컬 this를 상속 받는다.
        console.log(`Hello ${this.name}`);
      };
      arrowFunc();
    },
    greet4: function () {
      // 또는 선언과 동시에 즉시실행한다.
      (() => {
        // 화살표 함수가 함수 내부에 선언되어 있으므로
        // 자신의 상위 스코프가 함수가 된다.
        // 따라서 함수의 렉시컬 this를 상속 받는다.
        console.log(`Hello ${this.name}`);
      })();
    }
  };


  obj.greet2();
  obj.greet3();
}

/**
 * 화살표 함수는 자신이 선언된 곳의 상위 렉시컬 환경의 this를 상속 받는다.
 * 
 * 1. 여기서 혼동하는 사람들이 있다. obj 내부에 선언되어 있으니 상위 스코프가 obj라서 화살표 함수도 obj를 this로 상속 받아야 하는 것 아닌가?
 * - 아니다!!!
 * - 렉시컬 환경(!!!)의 this를 상속 받는다
 * - 렉시컬 환경은 글로벌 실행 컨텍스트와 함수를 실행할 때 함수 실행 컨텍스트를 만들 때 렉시컬 환경이 만들어 진다.
 * - 객체를 만들 때는 렉시컬 환경이 만들어 지지 않는다!
 * - 따라서 위 코드에서 obj는 전역 스코프를 갖는 전역 실행 컨텍스트에 정의되어 있기 때문에 전역 렉시컬 환경의 this를 상속 받게 되어
 * - 화살표 함수의 this는 전역 스코프의 this가 된다.
 */

/**
 * greet3 처럼 하면 obj 객체를 this로 가질 수 있다.
 */

// 따라서 아래와 같이 콜백 함수나 비동기 함수의 핸들러로 화살표 함수를 사용하면 표현식이 간결해 진다.
const process = {
  name: 'Request Some Data API',
  procJob: function () {
    console.log(`START: ${this.name}`);
    setTimeout(() => {
      console.log(`FINISH: ${this.name}`);
    }, 1000);
  }
}

process.procJob();