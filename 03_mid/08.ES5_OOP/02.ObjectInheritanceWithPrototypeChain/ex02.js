/**
 * OOP에서 상속은 속성과 메서드를 물려 받는 것이다.
 * 자바스크립트 객체는 [[Prototype]] 슬롯에 특정 객체를 설정해 상속을 구현한다.
 */
{
    const commons = {
        greet: function () {
            console.log(`Hello, I'm ${this.name}!`);
        }
    }

    const father = {
        name: 'James'
    }
    const me = {
        name: 'Jun'
    }

    father.__proto__ = commons;
    me.__proto__ = father;

    // greet을 상속 받았다.
    // Hello, I'm Jun!
    me.greet();
}

/**
 * 디버거를 통해서 프로토타입 체인을 살펴보자.
 * 객체를 열어보면 [[Prototype]] 슬롯이 보이고 
 * [[Prototype]] 슬롯을 열어보면 우리가 직접 설정한 객체들이 프로토타입으로 되어 있다.
 * 아래 코드에서 me.greet() 하면 
 * me 의 속성에서 찾고 없으면 [[Prototype]] 으로 간다
 * father이므로 father의 속성에서 찾고 없으면 [[Prototype]] 으로 같다
 * common이므로 common 속성에서 찾는다. common의 속성에 greet 속성이 있으므로
 * 해당 메서드를 호출한다.
 * 
 * 하지만 없는 속성: me.address 를 하면 똑같은 과정을 거쳐 commons까지 프로토타입 체인을
 * 거슬러 올라간다. 그곳에 없으므로 [[Prototype]] 으로 간다.
 * Object 이므로 Object 속성에서 address를 찾는다.
 * 없으므로 Object의 [[Prototype]] 으로 가지만 Object의 [[Prototype]] 은 null 이므로
 * 프로토타입 체인 검색을 마무리하고 속성을 찾지 못 햇으므로 undefined 가 출력된다.
 * 
 */
{
    const commons = {
        greet: function () {
            console.log(`Hello, I'm ${this.name}!`);
        }
    }

    const father = {
        name: 'James'
    }
    const me = {
        name: 'Jun'
    }

    father.__proto__ = commons;
    me.__proto__ = father;

    // greet을 상속 받았다.
    // Hello, I'm Jun!
    me.greet();
}

/**
 * 코드로도 표현할 수 있다.
 */
{
    // greet까지 찾아가는 과정은 아래와 같다.
    me.__proto__.__proto__.greet.call(me);

    // address를 찾아가는 과정
    me.__proto__.__proto__.__proto__; // Object
    me.__proto__.__proto__.__proto__.__proto__; //Object's __proto__ 는 null 이다.
}

/**
 * 속성도 상속 받을 수 있다.
 * 단, 값을 재설정해야 한다.
 */
{
    const commons = {
        name: '',
        greet: function () {
            console.log(`Hello, I'm ${this.name}!`);
        }
    }

    const father = {}
    const me = {}

    father.__proto__ = commons;
    father.name = 'James';

    me.__proto__ = father;
    me.greet();
    // greet을 상속 받았다.
    // name 도 상속 받았지만 속성값을 재설정하지 않아 James가 출력되었다.
    // Hello, I'm James!
    me.greet();
}