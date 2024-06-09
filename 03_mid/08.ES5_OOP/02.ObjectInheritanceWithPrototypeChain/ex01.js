/**
 * 동적으로 변경 가능한 __proto__ 속성
 */

/**
 * __proto__는 자바스크립트의 모든 객체 인스턴스가 갖는 속성이다.
 * [[Prototype]] 내부 슬롯과 동일한 값을 가지고 있다.
 * 즉, 객체 인스턴스 자신이 상속받은 프로토타입 객체(prototype object)를
 * 가리킨다.
 * 
 * 참고로 __proto__는 ES5까지는 공식 속성이 아니었는데 브라우저 벤더들이 비공식적으로
 * 사용하고 있어 ES6에서 표준으로 도입되었다.
 * 따라서 ES5에서 객체 인스턴스의 __proto__ 속성을 얻고 설정하는 방법은
 * Object.getPrototypeOf 와
 * Object.setPrototypeOf 만 존재했다.
 */
{
    const proto1 = {
        specise: 'Animal',
        greet: function () {
            console.log('Waff Waff');
        }
    }

    const proto2 = {
        specise: 'Human',
        greet: function () {
            console.log('안녕하세요');
        }
    }

    const obj1 = {};
    Object.setPrototypeOf(obj1, proto1);
    // OR
    obj1.__proto__ = proto1;
    console.log(obj1);
    console.log(obj1.specise);
    obj1.greet();

    // Object.setPrototypeOf(obj1, proto2);
    obj1.__proto__ = proto2;
    console.log(obj1);
    console.log(obj1.specise);
    obj1.greet();
}

/**
 * 위 예제와 같이 객체의 [[Prototype]] 슬롯 값은 자유롭게 변경이 가능하다.
 * 이 점을 활용해 상속을 흉내내 수 있다.
 */