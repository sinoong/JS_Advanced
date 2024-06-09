/**
 * AsyncGenerator를 활용한 비동기 JobQueue를 만들어 보자
 */
class JobQueue {
  constructor() {
    this.queue = [];
    this.iterator = this.#process();
  }

  async *#process() {
    while (true) {
      if (this.queue.length === 0) {
        yield; // 큐가 비어있을 때, 새 작업이 들어올 때까지 대기한다.
      } else {
        // 큐에서 작업 가져와서 실행한다.
        const job = this.queue.shift();
        // 결과를 반환하고 다음 작업을 대기한다.
        yield await job.execute();
      }
    }
  }

  async enqueue(job) {
    this.queue.push(job);
    const { value } = await this.iterator.next();
    return value;
  }
}

class Job {
  constructor(name) {
    this.name = name;
  }

  async fetchData(url) {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  }

  async execute() {
    console.log(`<=== ${this.name} ===>`);
  }
}

class FetchOneUserTodoJob extends Job {
  constructor(userId) {
    super(FetchOneUserTodoJob.name);
    this.userId = userId;
  }

  async execute() {
    super.execute();
    const items = await this.fetchData(
      `https://jsonplaceholder.typicode.com/users/${this.userId}/todos`
    );
    return items[0];
  }
}

class FetchOneUserPostJob extends Job {
  constructor(userId) {
    super(FetchOneUserPostJob.name);
    this.userId = userId;
  }

  async execute() {
    super.execute();
    const items = await this.fetchData(
      `https://jsonplaceholder.typicode.com/users/${this.userId}/posts`
    );
    return items[0];
  }
}

class FetchOneUserAlbumJob extends Job {
  constructor(userId) {
    super(FetchOneUserAlbumJob.name);
    this.userId = userId;
  }

  async execute() {
    super.execute();
    const items = await this.fetchData(
      `https://jsonplaceholder.typicode.com/users/${this.userId}/albums`
    );
    return items[0];
  }
}

(async () => {
  const jobQ = new JobQueue();
  const result = await jobQ.enqueue(new FetchOneUserTodoJob(1));
  console.log(result);
  console.log(await jobQ.enqueue(new FetchOneUserPostJob(1)));
  console.log(await jobQ.enqueue(new FetchOneUserAlbumJob(1)));

  /**
   * JobQ는 항상 대기중이다. 따라서 아래와 같이 버튼 이벤트로 Job을 입력하면
   * 대기 중이던 JobQ가 동작하여 데이터를 가져온다.
   * 이 작업 동안 Main Thread는 블럭되지 않는다. UI가 정상 동작한다.
   * Generator의 진정한 힘이다.
   */
  let userId = 1;
  const button = document.createElement('button');
  button.textContent = 'Todo를 가져옵니다.';
  button.addEventListener('click', async () => {
    userId += 1;
    userId = userId > 10 ? 1 : userId;
    const result = await jobQ.enqueue(new FetchOneUserTodoJob(userId));
    console.log(result);
  });
  document.body.appendChild(button);
})();
  