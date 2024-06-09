/**
 * 다단계 상속
 */

/**
 * 객체의 __proto__ 속성에 직접 값을 설정하여 
 * 다단계 상속을 구성하는 것은 매우 번거로운 일이고 의하지 않은 버그를 만들 수 있다.
 * 프로토타입과 Object.create() 를 사용해 다단계 상속을 쉽게 구현할 수 있다.
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
 * 프로토타입으로 다중 상속을 구현하는 것은 꽤 복잡하다.
 * 복잡함을 함수에 담아 보자.
 * 중요한 점은 interit 함수를 생성자 함수의 prototype에 새로운 메서드를 추가하기 전에 
 * 반드시 호출해야 한다는 것이다.
 * 그래야 프로토타입 체인이 올바르게 만들어진다. 
 * 따라서 이 방법도 관리하기 매우 어려운 방법이다.
 * 그래서 ES6 에서 class 키워드가 도입된 것이다.
 */
{

    function inherit(...constructors) {
        for (let i = constructors.length - 1; i > 0; i--) {
            const child = constructors[i - 1];
            const parent = constructors[i];
    
            child.prototype = Object.create(parent.prototype);
            child.prototype.constructor = child;
        }
    }

    function Person(name) {
        this.name = name;
    }
    
    function Employee(name, job) {
        // 중요! Person의 생성자를 호출한다.
        Person.call(this, name);
        this.job = job;
    }
    
    function Manager(name, job, team) {
        // 중요!
        Employee.call(this, name, job);
        this.team = team;
    }
    
    inherit(Manager, Employee, Person);



    Person.prototype.greet = function () {
        console.log(`Hello, I'm ${this.name}`);
    }

    Employee.prototype.introJob = function () {
        console.log(`I work at ${this.job}`);
    }

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