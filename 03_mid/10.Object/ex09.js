/**
 * in 연산자: 객체 속성의 열거와 속성 존재 유무의 차이점
 */

/**
 * 자바스크립트에서 in 연산자는 for...in 루프를 통해 
 * 객체 속성을 열거할 때 사용할 수 있다.
 */
{
    const person = {
        name: 'CodingMax'
    };

    Object.defineProperty(person, 'age', {
        value: 20,
        enumerable: true
    });

    for (const prop in person) {
        console.log(prop);
    }
    console.log(Object.keys(person));    
}

/**
 * 또한 in 연산자는 객체에 속서이 존재하는지 유무를 따질 때도 사용된다.
 * 다만 속성의 유무는 속성 설명자의 enumerable 특성과는 상관이 없다.
 * 따라서 속성의 열거와 속성의 존재 유무를 달리 봐야 한다.
 */
{
    const person = {
        name: 'CodingMax'
    };

    Object.defineProperty(person, 'name', {
        enumerable: false
    });

    Object.defineProperty(person, 'age', {
        value: 20,
        enumerable: false
    });

    // 아무것도 나오지 않는다.
    for (const prop in person) {
        console.log(prop);
    }
    console.log(Object.keys(person));    

    // 모두 true가 출력된다.
    console.log('name' in person);
    console.log('age' in person);
}
