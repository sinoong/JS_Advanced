/**
 * 프로토타입 [[Prototype]]
 */

/**
 * 자바스크립트의 모든 객체는 프로토타입을 가지고 있다고 했다.
 * 모든 객체는 내부 슬롯으로 [[Prototype]] 을 가지고 있다.
 * 이 슬롯이 객체가 가지고 있는 프로토타입이다. 그리고 이 값은
 * Object.getPrototypeOf 메서드로 가져올 수 있다.
 * 
 * 참고) 객체가 가지고 있는 프로토타입을 얻기 위해서 
 * Object.getPrototypeOf(obj) 메서드를 사bm용하거나
 * obj.__proto__ 속성을 사용할 수 있다.
 * Object.getPrototypeOf(obj) 메서드를 사용하는 것이 더 안전하다
 */
{
    const person = {
        myname: 'CodingMax'
    };

    const prototype = Object.getPrototypeOf(person);
    console.log(prototype);
}

/**
 * [[Prototype]] 이 가지고 있는 값은 다른 객체다.
 * 즉, 어떤 A객체의 프로토타입은 다른 객체 B가 되는 것이다.
 * 우리는 B객체를 프로토타입 객체라고 부른다. 
 */
{
    const person = {
        myname: 'CodingMax'
    };

    const prototype = Object.getPrototypeOf(person);
    console.log(typeof prototype); // object
}

/**
 * 중요한 사실은 프로토타입 객체도 [[Prototype]] 내부 슬롯을 가지고 있다는 점이다.
 * 바로 그렇기 때문에 객체간에 프로토타입 체인이 만들어지고
 * 이 프로토타입 체인을 구성하여 OOP의 상속 개념을 구현할 수 있다.
 */
{
    const prototype = { myname: 'CodingMax' };
    const person1 = Object.create(prototype);

    const proto2 = Object.getPrototypeOf(person1);
    console.log(proto2);
    const proto1 = Object.getPrototypeOf(proto2);
    console.log(proto1);
    const protoRoot = Object.getPrototypeOf(proto1);
    console.log(protoRoot);
}

/**
 * 위 코드에서 protoRoot는 null 이다. 
 * 객체의 어떤 속성을 사용할 때 프로토타입 체인을 타고 올라가면서 해당 속성을 찾는다.
 * 속성 검색은 프로토타입 체인의 끝인 null 이 될 때까지 타고 올라가며 찾는다.
 */
{
    // 찾게 되면 해당 값을 사용한다.
    console.log(person1.myname);

    // 프로토타입 체인의 끝까지 검색해도 찾을 수 없기 때문에
    // undefined 가 출력된다.
    console.log(person1.age);
}


/**
 * 아래 코드 결과에서 person 객체는 프로토타입으로 Object를 갖는 것을 알 수 있다.
 * 이것은 무엇을 의미하는 것일까?
 * 객체 person 이 Object를 상속 받았다는 것을 의미한다.
 * 그렇기 때문에 person은 Object 가 제공하는 다양한 메서드를 상속받는다.
 * 사실, 자바스크립트는 객체지향 프로그래밍의 상속을 구현하기 위해서 프로토타입을 사용한다.
 * 따라서 프로토타입을 이해하는 것이 자바스크립트의 OOP를 이해하는 핵심이다.
 */
{
    const person = {
        myname: 'CodingMax'
    };

    const prototype = Object.getPrototypeOf(person);
    console.log(prototype);
    console.log(prototype === Object.prototype);
}

/**
 * 그래서 아래와 같은 내용을 상속 받는다.
 * - constructor
 * - hasOwnProperty
 * - isPrototypeOf
 * - propertyIsEnumerable
 * - valueOf
 * - toString
 * - toLocaleString
 * ...
 */