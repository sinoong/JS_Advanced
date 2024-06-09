/**
 * 2. 심볼과 객체 속성
 */


/**
 * 심볼을 객체 속성키로 사용하기
 */
{
    const OBJECT_NAME = Symbol('객체의 이름 속성입니다.');
    const person = {
        [OBJECT_NAME]: 'CodingMax'
    };
    /**
     * 심볼을 객체의 속성키로 사용할 때, 해당 속성의 값을 가져오기 위해서는
     * 반드시 대괄호([]) 표기법을 사용해야 한다
     */
    console.log(person[OBJECT_NAME]);
    /**
     * 점(dot) 표기법으로 접근하면 undefined 가 된다.
     */
    console.log(person.OBJECT_NAME);
}

/**
 * 객체의 심볼 속성은 기본적으로 열거가 가능하지 않다.
 * 따라서, Object.keys() 나 for...in 루프 순회시 열거되지 않는다.
 */
{
    const OBJECT_NAME = Symbol('객체의 이름 속성입니다.');
    const person = {
        [OBJECT_NAME]: 'CodingMax',
        age: 30
    };

    // [age]
    console.log(Object.keys(person));

    // age
    for (const propName in person) {
        console.log(propName);
    }
}

/**
 * 객체에 속한 모든 심볼을 얻기 위해서는 
 * Object.getOwnPropertySymbols() 메서드를 사용한다.
 */
{
    const OBJECT_NAME = Symbol('객체의 이름 속성입니다.');
    const person = {
        [OBJECT_NAME]: 'CodingMax',
        age: 30
    };

    const symbols = Object.getOwnPropertySymbols(person);
    // 코드샌드박스는 [null]을 출력하지만 
    // 크롬콘솔에서는 [Symbol()]을 출력한다.
    console.log(symbols);
}

/**
 * 주의할 점은 열거 가능한 속성과 열거 불가능한 속성 모두 나열가능한
 * Object.getOwnPropertyNames() 메서드를 사용해도 심볼은 나열되지 않는다.
 * 즉, Object.getOwnPropertySymbols() 메서드를 통해서만 심볼 속성을 얻을 수 있다.
 */
{
    const OBJECT_NAME = Symbol('객체의 이름 속성입니다.');
    const person = {
        [OBJECT_NAME]: 'CodingMax',
        age: 30
    };

    // [age]
    console.log(Object.getOwnPropertyNames(person));

    // 따라서 이렇게 각각 얻어서 합쳐야 객체의 모든 속성을 얻을 수 있다.
    console.log([
        ...Object.getOwnPropertyNames(person),
        ...Object.getOwnPropertySymbols(person)
    ]);
}

/**
 * 열거 가능 여부와 상관 없이 객체 속성의 존재 유무를 따지는 in 연산자는 사용할 수 있다.
 */
{
    const OBJECT_NAME = Symbol('객체의 이름 속성입니다.');
    const person = {
        [OBJECT_NAME]: 'CodingMax',
        age: 30
    };

    // true
    console.log(OBJECT_NAME in person);
}