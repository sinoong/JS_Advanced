/**
 * JobQueue 만들어 보기
 * - 실행해야할 Job이 입력될 때까지 대기하다가 
 * - Job이 입력되면 실행하는 Queue를 만들어 보자
 */
{
  class JobQueue {
      constructor() {
        this.queue = [];
        this.iterator = this.#process();
        this.iterator.next();
      }
    
      *#process() {
        while (true) {
          if (this.queue.length === 0) {
            yield; // 큐가 비어있을 때, 새 작업이 들어올 때까지 대기한다.
          } else {
            // 큐에서 작업 가져와서 실행한다.
            const job = this.queue.shift();
            // 결과를 반환하고 다음 작업 대기한다.
            yield job.execute();
          }
        }
      }
    
      enqueue(job) {
        // 작업을 추가하고
        this.queue.push(job);
        // 대기 중인 큐의 처리를 재개한다.
        const { value } = this.iterator.next();
        return value;
      }
    }
    
    class Job {
      constructor(name) {
        this.name = name;
      }
    
      execute() {
        console.log(`<=== ${this.name} ===>`);
      }
    }
    
    class PrintJob extends Job {
      constructor() {
        super(PrintJob.name);
      }
    
      execute() {
        super.execute();
        console.log('인쇄를 실행합니다.');
        return `[DONE] ${this.name}`;
      }
    }
    
    class TranslateJob extends Job {
      constructor() {
        super(TranslateJob.name);
      }
    
      execute() {
        super.execute();
        console.log('번역을 실행합니다.');
        return `[DONE] ${this.name}`;
      }
    }
    
    class ReadJob extends Job {
      constructor() {
        super(ReadJob.name);
      }
    
      execute() {
        super.execute();
        console.log('읽기를 실행합니다.');
        return `[DONE] ${this.name}`;
      }
    }
    
    class WriteJob extends Job {
      constructor() {
        super(WriteJob.name);
      }
    
      execute() {
        super.execute();
        console.log('쓰기를 실행합니다.');
        return `[DONE] ${this.name}`;
      }
    }
    
    const jobQ = new JobQueue();
    const result = jobQ.enqueue(new ReadJob());
    console.log(result);
    console.log(jobQ.enqueue(new TranslateJob()));
    console.log(jobQ.enqueue(new WriteJob()));
    console.log(jobQ.enqueue(new PrintJob()));
}

/**
 * yield 입력을 활용한 개선
 * - this.queue 제거하기
 */
{
  class JobQueue {
    constructor() {
      this.iterator = this.#process();
      this.iterator.next();
    }
  
    *#process() {
      let result = undefined;
      while (true) {
        const job = yield result;
        if (job) {
          result = '!' + job.execute();
        }
      }
    }
  
    enqueue(job) {
      const { value } = this.iterator.next(job);
      return value;
    }
  }
  
  class Job {
    constructor(name) {
      this.name = name;
    }
  
    execute() {
      console.log(`<=== ${this.name} ===>`);
    }
  }
  
  class PrintJob extends Job {
    constructor() {
      super(PrintJob.name);
    }
  
    execute() {
      super.execute();
      console.log('인쇄를 실행합니다.');
      return `[DONE] ${this.name}`;
    }
  }
  
  class TranslateJob extends Job {
    constructor() {
      super(TranslateJob.name);
    }
  
    execute() {
      super.execute();
      console.log('번역을 실행합니다.');
      return `[DONE] ${this.name}`;
    }
  }
  
  class ReadJob extends Job {
    constructor() {
      super(ReadJob.name);
    }
  
    execute() {
      super.execute();
      console.log('읽기를 실행합니다.');
      return `[DONE] ${this.name}`;
    }
  }
  
  class WriteJob extends Job {
    constructor() {
      super(WriteJob.name);
    }
  
    execute() {
      super.execute();
      console.log('쓰기를 실행합니다.');
      return `[DONE] ${this.name}`;
    }
  }
  
  const jobQ = new JobQueue();
  const result = jobQ.enqueue(new ReadJob());
  console.log(result);
  console.log(jobQ.enqueue(new TranslateJob()));
  console.log(jobQ.enqueue(new WriteJob()));
  console.log(jobQ.enqueue(new PrintJob()));
}
