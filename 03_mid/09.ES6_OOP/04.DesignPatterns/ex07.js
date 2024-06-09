/**
 * Command Pattern
 * - 커맨드 패턴은 어떤 객체의 행위(메서드, 비즈니스 로직)를 독립된 객체로 분리하여 구현하는 것이다.
 * - 이렇게 하면 커맨드를 일정 로직에 따라 실행할 수도 있고 
 * - 부하에 따라 큐에 넣어서 일정 간격으로 실행할 수도 있다. 
 * - 즉, 요청의 실행을 임의로 지연시킬 수 있다.
 * - 또한 커맨드 패턴을 적용하면 Undo와 Redo 같은 기능도 쉽게 구현할 수 있다.
 */

// Command 인터페이스
class Command {
    execute(receiver) {
      throw new Error('execute method must be implemented.');
    }
    undo(receiver) {
      throw new Error('undo method must be implemented.');
    }
  }
  
  // 덧셈 명령어
  class AddCommand extends Command {
    constructor(value) {
      super();
      this.value = value;
    }
  
    execute(receiver) {
      receiver.value += this.value;
    }
  
    undo(receiver) {
      receiver.value -= this.value;
    }
  }
  
  class SubtractCommand extends Command {
    constructor(value) {
      super();
      this.value = value;
    }
  
    execute(receiver) {
      receiver.value -= this.value;
    }
  
    undo(receiver) {
      receiver.value += this.value;
    }
  }
  
  // Combined Receiver & Invoker
  class Calculator {
    #undoCommands = [];
    #redoCommands = [];
    constructor() {
      this.value = 0;
    }
  
    execute(command) {
      command.execute(this);
      this.#undoCommands.push(command);
      this.#redoCommands = [];
    }
  
    undo() {
      const command = this.#undoCommands.pop();
      if (command) {
        command.undo(this);
        this.#redoCommands.push(command);
      }
    }
  
    redo() {
      const command = this.#redoCommands.pop();
      if (command) {
        command.execute(this);
        this.#undoCommands.push(command);
      }
    }
  }
  
  const calculator = new Calculator();
  console.log(calculator.value); // 0
  
  calculator.execute(new AddCommand(10));
  console.log(calculator.value); // 10
  
  calculator.undo();
  console.log(calculator.value); // 0
  
  calculator.execute(new AddCommand(10));
  console.log(calculator.value); // 10
  
  calculator.execute(new SubtractCommand(5));
  console.log(calculator.value); // 5
  
  calculator.undo();
  console.log(calculator.value); // 10
  
  calculator.redo();
  console.log(calculator.value); // 5
  
  calculator.undo();
  console.log(calculator.value); // 10
  
  calculator.undo();
  console.log(calculator.value); // 0
