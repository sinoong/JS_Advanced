/**
 * 1. Symbol 이란
 * - 심볼은 ES6에 소개된 새로운 Primitive 타입이다.
 * - 심볼은 한 번 생성하면 어플리케이션에서 단 하나의 인스턴스로만 존재하고 수정이 불가능하다.
 * - 객체에 고유한 특성을 만들거나 특정 연산을 사용자화(Custom)할 때 주로 심볼을 사용한다.
 */

/**
 * 심볼 만들기
 * - Symbol 함수를 사용하여 만들 수 있다.
 */
{
    const symbol1 = Symbol();
    const symbol2 = Symbol();

    console.log(symbol1 === symbol2);
}

/**
 * 심볼을 만들 때, 설명을 제공할 수 있다.
 * - 디버깅 목적으로 사용하며 toString() 메서드를 사용해서 설명을 가져올 수 있다.
 */
{
    const OBJECT_NAME = Symbol('객체의 이름 속성입니다.');
    console.log(OBJECT_NAME.toString());
}

/**
 * 심볼을 만들 때, Symbol.for() 메서드로 글로벌 심볼로 만들 수 있다.
 * - 글로벌 심볼은 iframe이나 Web Workers에서 접근할 수 있다.
 */
{
    // 심볼키에 대한 심볼이 있으면 해당 심볼을 반환하고 
    // 심볼키에 대한 심볼이 없으면 해당 심볼을 만들고 
    // Global Symbol Registry에 심볼키로 해당 심볼을 등록한다.
    const globalSymbol = Symbol.for('Global_Symbol_Key');

    // Symbol 함수로 만든 심볼은 Global Symbol Registry 에 등록하지 않기 때문에
    // Local 심볼이라고 부르기도 한다.
    const localSymbol = Symbol('Local 심볼 설명입니다.');

    // Global Symbol Registry에 등록한 심볼을 주어 Symbol.keyFor() 메서드를 호출하면
    // 해당 심볼의 키를 문자열로 반환 받을 수 있다.
    const globalSymbolKey = Symbol.keyFor(Symbol.for('Global_Symbol_Key'));
    console.log(globalSymbolKey === 'Global_Symbol_Key');

    // 만약 해당 심볼에 대한 Key가 없다면 undefined를 반환한다.
    console.log(Symbol.keyFor(localSymbol) === undefined);
}

/**
 * Symbol() 과 Symbol.for()
 * - Symbol('description') 함수는 항상 유일한 심볼을 생성해서 반환한다. 설명이 같아도 항상 새로운 심볼을 만든다.
 * - Symbol.for('key') 는 주어진 key로 Global Symbol Registry를 먼저 검색해서 해당 키에 속한 심볼이 있는지 찾는다.
 * - 만약 해당 키에 심볼이 존재한다면 해당 심볼을 반환한다. 만약 없다면 새로운 심볼을 만들고 해당 키에 등록한 다음에 새로 만든
 * - 심볼을 반환한다. 
 */
{
    const symbol1 = Symbol('symbol');
    const symbol2 = Symbol('symbol');

    const symbol3 = Symbol.for('symbol');
    const symbol4 = Symbol.for('symbol');

    // false
    console.log(symbol1 === symbol2);

    // false
    console.log(symbol1 === symbol3);

    // true
    console.log(symbol3 === symbol4);
}