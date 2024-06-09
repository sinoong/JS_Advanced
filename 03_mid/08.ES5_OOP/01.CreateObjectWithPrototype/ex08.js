/**
 * 함수 객체의 constructor 와 new 연산자. 그리고 생성자 함수
 */

/**
 * 자바스크립트에서 함수 또한 객체다. 
 * 그래서 함수 객체도 프토토타입을 가지고 있다.
 * 디버거를 실행해서 a함수의 속성을 확인해 보자.
 */
{
    function a() {
        console.log('a!');
    }
    a();
}

/**
 * 위 코드 실행 결과 a 는 [[Prototype]] 에 Function constructor 객체를 갖는다.
 * Function constructor 는 함수를 생성하는 객체다.
 * 그래서 아래와 같이 위의 a 함수를 생성할 수 있다.
 */
{
    const a_func = new Function(`console.log('a!')`);
    a_func();
}

/**
 * 파라미터가 있는 함수는 아래와 같이 만들 수 있다.
 * 따라서 우리가 함수를 정의하면 자바스크립트 엔진이 아래와 같이 Function 생성자 함수로
 * 함수 객체를 만드는 것이다.
 */
{
    const sum = new Function('a', 'b', 'return a + b');
    console.log(sum(10, 20));
}

/**
 * 그리고 a 함수는 일반 객체({})와 다르게 prototype 이라는 속성을 또 가지고 있다.
 * 이 prototype은 생성자 함수로 만든 객체만 가지고 있는 속성이다.
 * 그래서 a_func도 Function이라는 생성자 함수로 만들었기 때문에 prototype 속성이 있는 것이다.
 * 그리고 이것은 Object.getPrototypeOf가 반환하는 값과 동일하다.
 * 즉, 생성자 함수로 만든 객체는 
 * FuncName.prototype === Object.getPrototypeOf(obj); 이 true 이다.
 * 왜 그럴까?
 * 
 * 그리고 이 prototype 에 constructor 함수 객체가 존재한다.
 * 그리고 constructor는 새로 생성하는 객체의 속성을 생성하고 값을 초기화한다.
 * 따라서 자바스크립트에서 모든 함수는 생성자 함수로 사용될 수 있다.
 */
{
    function a() {
        console.log('a!');
    }
    const obj = new a();


    // true
    console.log(a.prototype == obj.__proto__);
}

/**
 * 따라서 new 연산자가 하는 일은 아래와 같다.
 * 함수 객체 prototype 객체의 constructor 함수에 새로 생성하는
 * 객체를 this로 바인딩하여 호출한다. 그래서 객체에 속성을 할당한다.
 * 그리고 나서 새로 생성하는 객체의 [[Prototype]] 내부 슬롯에 함수 객체의 prototype 객체를 할당한다.
 * [[Prototype]] 에 특정 prototype 객체를 설정하는 방법은 아래와 같다.
 * 1. Object.setPrototypeOf 메서드 사용하기
 * 2. 객체의 __proto__ 속성 사용하기
 */
{
    // const obj = new hello();
    function hello() {
        console.log('Hello!');
    }
    const obj = {};
    hello.prototype.constructor.call(obj);
    // 인스턴스 속성 및 메서드를 obj의 프로토타입으로 설정해 프로토타입 체인을 완성한다.
    Object.setPrototypeOf(obj, hello.prototype);
    // 또는
    // obj.__proto__ = hello.prototype;

    console.log(obj); // hello {}

    // {constructor: f hello()}
    console.log(Object.getPrototypeOf(obj));
    // 또는
    console.log(obj.__proto__);
}

/**
 * 일반 함수와 생성자로 쓰이는 함수를 구분하기 위해서
 * 생성자 함수는 대문자로 시작한다.
 */
{
    function Person() {
        this.myname = 'CodingMax';
    }
    const person = new Person();
    console.log(person);
    console.log(person.myname);
    console.log(Object.getPrototypeOf(person));
}

/**
 * person 객체에 myname 속성이 생성된 것을 알 수 있다.
 */
{
    function Person() {
        this.myname = 'CodingMax';
    }
    const person = {};
    Person.prototype.constructor.call(person);
    Object.setPrototypeOf(person, Person.prototype);

    console.log(person);
    console.log(person.myname);
    console.log(Object.getPrototypeOf(person));
}

/**
 * __proto__ 와 prototype 구분하기
 */

/**
 * prototype 은 함수 객체에만 있는 속성으로 프로토타입 객체다.
 * 이 프로토타입 객체는 constructor 함수 객체를 속성으로 갖는다.
 * 생성자 함수와 new 연산자로 새로운 객체를 생성하면
 * prototype.constructor 로 새로운 객체에 속성을 만들고
 * 새로운 객체의 __proto__ 속성에 prototype 객체를 설정한다.
 */