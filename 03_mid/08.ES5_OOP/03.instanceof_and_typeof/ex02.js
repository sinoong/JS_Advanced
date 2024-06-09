/**
 * typeof 연산자 강화
 * Array일 경우, 
 * typeof [] 를 하면 Object가 나온다.
 * 커스텀 객체여도 object가 나온다.
 * 프로토타입 객체를 사용해서 이를 개선해 보자. 
 * 또한 커스텀 객체는 constructor를 사용해 보자.
 */
{
    // object
    console.log(typeof []); 

    function Person(name) {
        this.name = name;
    }
    const person = new Person('CodingMax');
    
    // object
    console.log(typeof person);
}

/**
 * Object 객체의 prototype에는 toString 메서드가 있다. 
 * 이 메서드에 타입을 알고자 하는 객체를 바인딩해서 호출해 보자.
 */
{

    // 출력결과를 보면 규칙이 보인다.
    // [object ] 를 제거하면 타입 정보를 얻을 수 있다.
    Object.prototype.toString.call(1); // "[object Number]"
    Object.prototype.toString.call('1'); // "[object String]"
    Object.prototype.toString.call(true); // "[object Boolean]"
    Object.prototype.toString.call(new String('string')); // "[object String]"
    Object.prototype.toString.call(function () {}); // "[object Function]"
    Object.prototype.toString.call(null); //"[object Null]"
    Object.prototype.toString.call(undefined); //"[object Undefined]"
    Object.prototype.toString.call(/123/g); //"[object RegExp]"
    Object.prototype.toString.call(new Date()); //"[object Date]"
    Object.prototype.toString.call([]); //"[object Array]"
    Object.prototype.toString.call(document); //"[object HTMLDocument]"
    Object.prototype.toString.call(window); //"[object Window]
    
    
    function Person(name) {
        this.name = name;
    }
    const person = new Person('CodingMax');
    // 하지만 커스텀 객체는 여전히 [object Object] 로 나온다.
    // 따라서 이 때에는 생성자 함수 정보를 확인한다.
    Object.prototype.toString.call(person);

    if (person.constructor) {
        console.log(person.constructor.name);
    }

    function getTypeOf(value) {
        const strType = Object.prototype.toString.call(value);
        const extractedType = strType.replace(/^\[object (\S+)\]$/, '$1');
        if (extractedType !== 'Object') {
            return extractedType;
        } 
        return value.constructor && value.constructor.name ? value.constructor.name : extractedType;
    }

    getTypeOf(1); // Number
    getTypeOf('1'); // String
    getTypeOf(true); // Boolean
    getTypeOf(new String('string')); // String
    getTypeOf(function () {}); // Function
    getTypeOf(null); // Null
    getTypeOf(undefined); // Undefined
    getTypeOf(/123/g); // RegExp
    getTypeOf(new Date()); // Date
    getTypeOf([]); // Array
    getTypeOf(document); // HTMLDocument
    getTypeOf(window); // Window
    getTypeOf(person); // Person
}