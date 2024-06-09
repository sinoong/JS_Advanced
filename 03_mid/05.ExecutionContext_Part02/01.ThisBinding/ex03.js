/**
 * This 바인딩
 * 3. 개발자가 this 를 직접 바인딩 해 보자.(명시적인 this 바인딩)
 * apply/bind/call
 */

/**
 * call
 * - 첫번째 파라미터에 this 로 바인딩할 객체를 인자값으로 전달할 수 있다.
 * - 두번째부터 가변인자와 같이 여러 인자값을 파라미터로 전달할 수 있다.
 * 즉, this 바인딩을 명시적으로 하면서 추가적인 인자값을 전달해야 할 때 사용합니다.
 */
{
    const person = {
        name: 'CodingMax',
        age: 10
    };
    function greet(somethings) {
        console.log(somethings);
        console.log(`my name is ${this.name} and ${this.age} years old`);
    }

    // 바로 호출
    greet.call(person, "Hello");
    greet.call(person, "Hello", "World");
}

//---
{
    const person = {
        name: 'CodingMax',
        age: 10
    };

    function greet(...somethings) {
        console.log(somethings);
        console.log(`my name is ${this.name} and ${this.age} years old`);
    }

    greet.call(person, "Hello", "World", 1, 2, 3);
}


/**
 * apply
 * - 첫번째 파라미터에 this 로 바인딩할 객체를 인자값으로 전달 할 수 있다.
 * - 두번째 파라미터에는 배열 형식으로 추가적인 인자값을 전달할 수 있다.
 * 즉, call 과 큰 차이가 없다. 추가적인 인자값을 call처럼 가변인자 형식으로 전달할 것인가
 * 아니면 apply 처럼 배열 형식으로 전달할 것인가의 차이점이다.
 */
{
    const person = {
        name: 'CodingMax',
        age: 10
    };

    function greet(somethings) {
        console.log(somethings);
        console.log(`my name is ${this.name} and ${this.age} years old`);
    }

    // 바로 호출
    greet.apply(person, ["Hello"]);
    greet.apply(person, ["Hello", "World"]);
}

//---
{
    const person = {
        name: 'CodingMax',
        age: 10
    };

    function greet(...somethings) {
        console.log(somethings);
        console.log(`my name is ${this.name} and ${this.age} years old`);
    }

    greet.apply(max, ["Hello", "World", 1, 2, 3]);
}

/**
 * bind
 * - call, apply 와 다르게 this 를 바인딩한 새로운 함수 객체를 만든다.
 * 
 */
{
    const person = {
        name: 'CodingMax',
        age: 10
    };

    function greet() {
        console.log(`my name is ${this.name} and ${this.age} years old`);
    }

    // 바로 호출하지 않고 this를 person 객체로 바인딩한 새로운 함수 객체를 생성한다.
    const personGreet = greet.bind(person);
    personGreet();
}

//---
{
    const person = {
        name: 'CodingMax',
        age: 10
    };
    function greet(somethings) {
        console.log(somethings);
        console.log(`my name is ${this.name} and ${this.age} years old`);
    }

    // 바로 호출하지 않고 this를 person 객체로 바인딩한 새로운 함수 객체를 생성한다.
    // 따라서 바인딩할 때, 인자값을 주지 않아도 됩니다.
    const personGreet = greet.bind(person);
    personGreet('Hello');
}

// 바로 호출하지 않고 this를 person 객체로 바인딩한 새로운 함수 객체를 생성한다.
// 따라서 바인딩할 때, 인자값을 주지 않아도 됩니다.
{
    const person = {
        name: 'CodingMax',
        age: 10
    };
    function greet(somethings) {
        console.log(somethings);
        console.log(`my name is ${this.name} and ${this.age} years old`);
    }

    // 하지만 이렇게 인자값을 줄 수도 있습니다.
    const personGreet = greet.bind(person, 'Great');
    personGreet();
}

//---
{
    const person = {
        name: 'CodingMax',
        age: 10
    };
    function greet(...somethings) {
        console.log(somethings);
        console.log(`my name is ${this.name} and ${this.age} years old`);
    }

    // 가변 인자 형식으로 전달할 수 있습니다.
    const personGreet = greet.bind(person, 'You', 'are', 'Great');
    // 그리고 함수를 호출할 때 추가적인 인자값도 줄 수 있어요
    personGreet('Hello World');
}
