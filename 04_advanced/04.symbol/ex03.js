/**
 * 잘 알려진 심볼(well-known Symbol)
 * - 자바스크립는 미리 정의된 내장(Built-in) 심볼을 제공한다.
 */

/**
 * Symbol.toStringTag
 * - 객체에 toString() 메서드를 호출할 때, 커스텀 문자열을 반환할 수 있다.
 */
{
    const person = {
        name: 'CodingMax'
    };
    // [object Object]
    console.log(person.toString());
}

{
    const person = {
        name: 'CodingMax',
        [Symbol.toStringTag]: '객체입니다.'
    };
    console.log(person.toString());

    class Vector {
        constructor(x, y, z) {
            this.x = x;
            this.y = y;
            this.z = z;
        }
    
        get [Symbol.toStringTag]() {
            return `벡터 [${this.x}, ${this.y}, ${this.z}]`;
        }
    }
    
    const vector = new Vector(1, 0, 0);
    console.log(vector.toString());
}
