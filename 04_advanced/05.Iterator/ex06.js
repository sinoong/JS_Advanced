/**
 * Async Data Query 
 */
{
  class AsyncDataFetcher {
    constructor(queries) {
      this.queries = [...queries];
    }
  
    async next() {
      if (this.queries.length > 0) {
        const apiUrl = this.queries.shift();
        const response = await fetch(apiUrl);
        const value = await response.json();
        return { value, done: false };
      }
      return { done: true };
    }
  }
  
  class AsyncDataQueue {
    #queries = [];
    constructor() {
      this.#queries = [];
    }
  
    enqueue(query) {
      this.#queries.push(query);
    }
  
    [Symbol.asyncIterator]() {
      return new AsyncDataFetcher(this.#queries);
    }
  }
  
  const dataStore = new AsyncDataQueue();
  dataStore.enqueue('https://jsonplaceholder.typicode.com/users/1/todos');
  dataStore.enqueue('https://jsonplaceholder.typicode.com/users/1/posts');
  dataStore.enqueue('https://jsonplaceholder.typicode.com/users/1/albums');

  (async () => {
    for await (const data of dataStore) {
        console.log(data[0]);
    }    
  })();
  
  /**
   * 오류는 아래와 같이 try-catch로 핸들링할 수 있다.
   */
  (async () => {
    try {
        for await (const data of dataStore) {
            console.log(data[0]);
        }    
    } catch (error) {
        console.log(error);
    }
  })();
} 
