/**
 * 생성자 함수와 프로토타입
 * - 생성자 함수를 정의해 객체 생성을 위한 틀을 만들 수 있다.
 */
{
    function Person(myname) {
        this.myname = myname;
    }
    const p1 = new Person('CodingMax');
}

/**
 * 또한 생성자 함수의 prototype 속성을 통해 
 * 공통 메서드와 속성을 정의할 수 있다.
 */
{
    function Person(myname) {
      this.myname = myname;
      Person.increment();
    }

    // 타입의 정적 속성
    Person.instanceCount = 0;

    // 타입의 정적 메서드
    Person.increment = function () {
      Person.instanceCount += 1;
    };

    // 인스턴스 공통 속성
    Person.prototype.specise = 'Human';

    // 인스턴스 공통 메서드
    Person.prototype.greet = function () {
      console.log(`Hello, I'm ${this.myname}`);
    };

    const p1 = new Person('CodingMax');
    console.log(p1.greet());
    console.log(p1.specise);
    console.log(Person.instanceCount);
    const p2 = new Person('Jun');
    console.log(Person.instanceCount);
}
