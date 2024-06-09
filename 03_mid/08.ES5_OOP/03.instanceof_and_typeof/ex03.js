/**
 * Object.assign 과 mixin
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
    };
  
    Employee.prototype.introJob = function () {
      console.log(`I work at ${this.job}`);
    };
  
    Manager.prototype.introTeam = function () {
      console.log(`I manage a ${this.team}`);
    };
  
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
  
  {
    function Person(name) {
      this.name = name;
    }
  
    function Employee(job) {
      this.job = job;
    }
  
    function Manager(team) {
      this.team = team;
    }
  
    Person.prototype.greet = function () {
      console.log(`Hello, I'm ${this.name}`);
    };
  
    Employee.prototype.introJob = function () {
      console.log(`I work at ${this.job}`);
    };
  
    Manager.prototype.introTeam = function () {
      console.log(`I manage a ${this.team}`);
    };
  
    {
      const newManager = Object.assign(
        {},
        new Manager('Development Team'),
        new Employee('Google'),
        new Person('Jun')
      );
      console.log(newManager);
      console.log(newManager instanceof Manager);
      console.log(newManager instanceof Employee);
      console.log(newManager instanceof Person);
    }
  
    {
      const newManager = Object.assign(
        new Manager('Development Team'),
        new Employee('Google'),
        new Person('Jun')
      );
      console.log(newManager);
      console.log(newManager instanceof Manager);
      console.log(newManager instanceof Employee);
      console.log(newManager instanceof Person);
    }
  }