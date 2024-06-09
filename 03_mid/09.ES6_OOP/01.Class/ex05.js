/**
 * 정적 속성과 메서드
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
}

/**
 * static 키워드는 정적 속성 또는 정적 메서드를 정의할 때 사용한다.
 */
{
    class Person {
        static instanceCount = 0;
        static increment() {
            Person.instanceCount += 1;
        }

        specise = 'Human';
        constructor(name) {
            this.name = name;
            Person.increment();
        }

        greet() {
            console.log(`Hello, I'm ${this.myname}`);
        }
    }
    const p1 = new Person('CodingMax');
    const p2 = new Person('Jun');
    console.log(Person.instanceCount); // 2
    console.log(p1.instanceCount); // undefined
}