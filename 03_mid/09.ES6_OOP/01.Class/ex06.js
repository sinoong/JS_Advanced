/**
 * 다단계 상속
 * - extends와 super
 */
/**
 * 먼저 ES5 생성자 함수의 다단계 상속
 */
{
    function Person(name) {
        this.name = name;
    }
    Person.prototype.greet = function () {
        console.log(`Hello, I'm ${this.name}`);
    }

    function Employee(name, job) {
        // 중요! Person의 생성자를 호출한다.
        Person.call(this, name);
        this.job = job;
    }
    // 중요! Employee의 프로토타입을 Person의 프로토타입을 설정한다.
    Employee.prototype = Object.create(Person.prototype);
    Employee.prototype.constructor = Employee;

    Employee.prototype.introJob = function () {
        console.log(`I work at ${this.job}`);
    }

    function Manager(name, job, team) {
        // 중요!
        Employee.call(this, name, job);
        this.team = team;
    }
    // 중요!
    // 이렇게 해야지 상속을 위한 프로토타입 체인이 만들어진다.
    Manager.prototype = Object.create(Employee.prototype);
    Manager.prototype.constructor = Manager;

    Manager.prototype.introTeam = function () {
        console.log(`I manage a ${this.team}`);
    }

    const manager = new Manager('Jun', 'Google', 'Development team');
    manager.greet();
    manager.introJob();
    manager.introTeam();

    // true
    console.log(manager instanceof Person); 
    // true
    console.log(manager instanceof Employee);
    // true
    console.log(manager instanceof Manager);
}

/**
 * class 키워드
 * - 객체의 타입과 상속을 표현하는 방법이 매우 깔끔해지고 명확해졌다!!!
 */
{
  class Person {
    constructor(name) {
      this.name = name;
    }
    greet() {
      console.log(`Hello, I'm ${this.name}`);
    }
  }
  
  class Employee extends Person {
    constructor(name, job) {
      super(name);
      this.job = job;
    }
    introJob() {
      console.log(`I work at ${this.job}`);
    }
  }
  
  class Manager extends Employee {
    constructor(name, job, team) {
      super(name, job);
      this.team = team;
    }
    introTeam() {
      console.log(`I manage a ${this.team}`);
    }
  }
  
  const manager = new Manager('Jun', 'Google', 'Development team');
  manager.greet();
  manager.introJob();
  manager.introTeam();
  
  // true
  console.log(manager instanceof Person);
  // true
  console.log(manager instanceof Employee);
  // true
  console.log(manager instanceof Manager);
  
}