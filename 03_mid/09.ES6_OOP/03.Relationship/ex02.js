/**
 * HAS-A 관계
 * - 어떤 클래스 A의 인스턴스가 다른 클래스의 인스턴스 B를
 * - A의 속성으로 가지고 있는 관계이다. 
 * - 그래서 A 클래스 인스턴스가 메모리에서 제거되면 B 클래스의 객체 인스턴스도 같이 메모리에서 제거된다.
 * - 아래 예제처럼 자동차는 엔진을 가지고 있다.
 * - Composition 관계라고도 부른다.
 * - Composition 관계는 컴포넌트로 갖는 부품의 수명을 관리한다.
 * - 예를 들어, 자동차는 엔진이 없으면 움직일 수 없다. 자동차라 할 수 없다.
 * - 그래서 어떤 객체 A를 구성하는 부품이 하나라도 없으면 안되는 강한 관계를 의미한다.
 * - 즉, Car 객체가 소멸되면 Engine 객체도 같이 소멸된다.
 */

class Engine {
    constructor(type) {
        this.type = type;
    }

    start() {
        console.log(`The ${this.type} engine is starting.`);
    }
}

class Car {
    constructor(brand, engineType) {
        this.brand = brand;
        // Car객체는 Engine객체를 속성으로 갖는다.
        this.engine = new Engine(engineType);
    }

    start() {
        console.log(`The ${this.brand} car is starting.`);
        this.engine.start();
    }
}

const myCar = new Car('KIA', '1.6L a 1591 cc, 4 cylinder Petrol');
myCar.start();