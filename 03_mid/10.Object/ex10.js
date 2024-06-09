/**
 * Mixin: 객체의 수평적 확장 그리고 in 연산자와 Duck 타이핑
 */

/**
 * 객체를 수직적으로 확장하는 상속과 달리 
 * Mixin 은 객체를 다른 객체와 합성(레고를 조립하듯)하여 수평적으로 확장한다.
 */
{
    class Animal {
        constructor(type) {
            this.type = type;
        }
    }

    const runnable = {
        run() {
            console.log(`${this.type} 달린다.`);
        }
    };

    const flyable = {
        fly() {
            console.log(`${this.type} 하늘을 난다.`);
        }
    };

    const cat = Object.assign(new Animal('고양이'), runnable);
    cat.run();

    const bird = Object.assign(new Animal('참새'), runnable, flyable);
    bird.run();
    bird.fly();
}

/**
 * 주의할 점.
 * - 같은 이름의 속성 또는 메서드가 있을 때는 나중에 합성한 객체의 속성과 메서드로 Overwrite가 된다.
 */
{
    /**
     * Object.assign 은 객체를 복사할 때, 열거 가능한 속성만 복사한다.
     * 따라서 프로토타입 등을 복사할 때는 불완전하다. 
     * 이럴 때, Object.getOwnPropertyNames 를 사용하면 Symbol을 제외한
     * 모든 속성 목록을 얻을 수 있다.
     * mixin 함수를 Object.getOwnPropertyNames 를 사용해 만드는 것이 좋다.
     */
    function mixin(object, ...components) {
        for (const component of components) {
            for (const prop of Object.getOwnPropertyNames(component)) {
                object[prop] = component[prop];
            }
        }
        return object;
    }
}

{
    // Overwrite를 막고 싶다면 아래와 같이 속성의 유무를 검사한 다음 없는 속성만 합성하면 된다.
    function mixin(object, ...components) {
        for (const component of components) {
          for (const prop of Object.getOwnPropertyNames(component)) {
            if (!(prop in object)) {
              object[prop] = component[prop];
            }
          }
        }
        return object;
    }
}

/**
 * 
 */
{
    function mixin(object, ...components) {
        for (const component of components) {
          for (const prop of Object.getOwnPropertyNames(component)) {
            if (!(prop in object)) {
              object[prop] = component[prop];
            }
          }
        }
        return object;
    }

    class Animal {
        constructor(type) {
            this.type = type;
        }
    }

    const runnable = {
        run() {
            console.log(`${this.type} 달린다.`);
        }
    };

    const flyable = {
        fly() {
            console.log(`${this.type} 하늘을 난다.`);
        }
    };

    const cat = mixin(new Animal('고양이'), runnable);
    cat.run();

    const bird = mixin(new Animal('참새'), runnable, flyable);
    bird.run();
    bird.fly();
}
