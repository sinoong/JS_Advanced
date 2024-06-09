/**
 * Symbol.hasInstance
 * - instanceof 연산자에 대한 결과를 커스텀하게 만들 수 있다.
 * - instanceof 연산자의 인스턴스가 인자값으로 전달된다.
 */
{
    class List {
        static [Symbol.hasInstance](instance) {
            return Array.isArray(instance);
        }
    }

    // true
    console.log([] instanceof List);

    // false
    console.log({} instanceof List);
}

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

    }

    class Flyable {        
        fly() {
            console.log('하늘을 날 수 있어요');
        }
    }

    const bird = mixin(new Animal(), Flyable.prototype);
    bird.fly();

    console.log(bird instanceof Animal);
    console.log(bird instanceof Flyable);
}

{
    class Flyable {
        static [Symbol.hasInstance](instance) {
            return 'fly' in instance;
        }

        fly() {
            console.log('하늘을 날 수 있어요');
        }
    }
}