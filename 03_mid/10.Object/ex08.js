/**
 * Object.freeze 와 Object.seal의 단점
 * - Object.freeze 와 Object.seal은 최상위 객체에 대해서만 작동하기 때문에
 * - 내장 객체의 속성 직접 접근해 변경하는 내용은 막을 수 없다.
 * - 왜냐하면 아래 예에서 person.info 는 info 객체가 할당된 메모리 주소값을 담고 있다.
 * - 따라서 Object.freeze를 하면 person.info 담고 있는 메모리 주소값의 변경을 막는 것이다.
 * - person.info 를 통해 역참조하여 얻는 객체의 변경은 막지 않는다.
 */
{
    const person = {
        name: 'CodingMax',
        info: {
            age: 30,
            city: 'Seoul'
        }
    };

    Object.freeze(person);

    // 불가능
    person.name = 'Jun';

    // 가능
    person.info.age = 20;
    person.info.city = 'Jeju';
    console.log(person);

    // 불가능
    person.info = {
        age: 20,
        city: 'Jeju'
    }
    console.log(person);
}

/**
 * Object.seal 도 마찬가지 이다.
 */
{
    const person = {
        name: 'CodingMax',
        info: {
            age: 30,
            city: 'Seoul'
        }
    };

    Object.seal(person);

    // 불가능
    delete person.name;

    // 가능
    delete person.info.age;
    person.info.country = 'Korea';
    console.log(person);
}

/**
 * 그래서 객체의 모든 속성을 조회하면서 객체이면 Object.freeze 나 Object.seal을 호출해야 한다
 */
{
    function deepTravel(obj, check, operation) {
        if (obj && typeof obj === 'object' && !check(obj)) {
          operation(obj);
          for (const key in obj) {
            deepTravel(obj[key], check, operation);
          }
        }
        return obj;
      }
      
      function deepFreeze(obj) {
        return deepTravel(obj, Object.isFrozen, Object.freeze);
      }
      
      function deepSeal(obj) {
        return deepTravel(obj, Object.isSealed, Object.seal);
      }
      
      const person = {
        name: 'CodingMax',
        info: {
          age: 30,
          city: 'Seoul'
        }
      };
      
      deepFreeze(person);
      
      // 불가능
      person.name = 'Jun';
      
      // 불가능
      person.info.age = 20;
      person.info.city = 'Jeju';
      console.log(person);
      
      // 불가능
      person.info = {
        age: 20,
        city: 'Jeju'
      };
      console.log(person);
}

{
    function deepTravel(obj, check, operation) {
        if (obj && typeof obj === 'object' && !check(obj)) {
          operation(obj);
          for (const key in obj) {
            deepTravel(obj[key], check, operation);
          }
        }
        return obj;
      }
      
      function deepFreeze(obj) {
        return deepTravel(obj, Object.isFrozen, Object.freeze);
      }
      
      function deepSeal(obj) {
        return deepTravel(obj, Object.isSealed, Object.seal);
      }
      
      const person = {
        name: 'CodingMax',
        info: {
          age: 30,
          city: 'Seoul'
        }
      };
      
      deepSeal(person);
      
      // 기존 속성값의 변경은 가능
      person.name = 'Jun';
      
      // 새로운 속성 추가나 기존 속성 삭제는 불가능
      person.city = 'Seoul';
      delete person.name;
      console.log(person);      
}

/**
 * 클래스와 사용하면 좋다
 */
{
    function deepTravel(obj, check, operation) {
        if (obj && typeof obj === 'object' && !check(obj)) {
          operation(obj);
          for (const key in obj) {
            deepTravel(obj[key], check, operation);
          }
        }
        return obj;
      }
      
      function deepFreeze(obj) {
        return deepTravel(obj, Object.isFrozen, Object.freeze);
      }
      
      function deepSeal(obj) {
        return deepTravel(obj, Object.isSealed, Object.seal);
      }

      {
        class ImmutablePerson {
            constructor(name, info) {
                this.name = name;
                this.info = info;
                deepFreeze(this);
            }
        }

        const person = new ImmutablePerson('CodingMax', { age: 10, city: 'Seoul'});

        // 불가능
        person.name = 'Jun';
        person.info.age = 30;
    }


    {
        class SealedPerson {
            constructor(name, info) {
                this.name = name;
                this.info = info;
                deepSeal(this);
            }
        }
        const person = new SealedPerson('CodingMax', { age: 10, city: 'Seoul'});
        person.name = 'Jun';
        person.info.age = 30;

        // 불가능
        person.newProps = 'Test';
    }
}