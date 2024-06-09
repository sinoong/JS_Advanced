/**
 * RxJS의 Observable.of 를 흉내내어 보자. 2편
 * 제너레이터를 활용하여 map, filter 그리고 비동기 연산을 지원하는 flatMap을 구현해 보자.
 */


/**
* 여기까지 잘 되는 것 같다. 하지만 
* flatMap 뒤에 다시 map, filter 같이 동기 연산을 적용하면 오류가 발생한다.
* 그 이유는 flatMap이 반환하는 것이 iterable이 아니라 AsyncGenerator이기 때문이다.
* 그래서 map, filter가 내부에서 순회(iteration)을 하려고 하니 오류가 발생한다.
* 이를 수정하기 위해서는 다른 모든 메서드 들이 비동기를 지원하도록 해야 한다.
* 우선 아래와 같이 map과 subscribe만 AsyncIterator 여부를 판단해서 분기를 하고
* flatMap은 항상 async를 사용하도록 수정해 보자.
*/
{
  class Observable {
      constructor(generatorFunction) {
        this.generatorFunction = generatorFunction;
      }
    
      static of(...items) {
        return new Observable(function* () {
          for (let item of items) {
            yield item;
          }
        });
      }
    
      map(callback) {
        const sourceIterator = this.generatorFunction();
        if (sourceIterator.constructor.name === 'AsyncGenerator') {
          return new Observable(async function* () {
            for await (let item of sourceIterator) {
              yield callback(item);
            }
          });
        } else {
          return new Observable(function* () {
            for (let item of sourceIterator) {
              yield callback(item);
            }
          });
        }
      }
    
      filter(predicate) {
        const sourceIterator = this.generatorFunction();
        return new Observable(function* () {
          for (let item of sourceIterator) {
            if (predicate(item)) {
              yield item;
            }
          }
        });
      }
    
      flatMap(callback) {
        const sourceIterator = this.generatorFunction();
        return new Observable(async function* () {
          const generators = [];
          for await (let item of sourceIterator) {
            // callback의 반환값이 Observable, Promise 또는 일반 함수인지 검사한다.
            const result = callback(item);
            if (result instanceof Observable) {
              generators.push(result.generatorFunction());
            } else if (result instanceof Promise) {
              yield await result;
            } else {
              yield result;
            }
          }
    
          // Generator는 모아서 모두 resolve 하여 yield를 한다.
          for (const generator of generators) {
            for await (const value of generator) {
              yield value;
            }
          }
        });
      }
    
      // subscribe 메서드를 사용하여 Observable의 각 값을 얻을 수 있습니다.
      async subscribe(callback) {
        const generator = this.generatorFunction();
        if (generator.constructor.name === 'AsyncGenerator') {
          console.log(3);
          for await (const value of generator) {
            callback(value);
          }
        } else {
          console.log(1);
          let result = await generator.next();
          while (!result.done) {
            callback(result.value);
            result = await generator.next();
          }
        }
      }
    }
    
    Observable.of(1, 2, 3)
      .map((it) => it * 2)
      .flatMap(
        (it) => new Promise((resolve) => setTimeout(() => resolve(it), 1000))
      )
      .map((it) => it * 2)
      .flatMap(
        (it) => new Promise((resolve) => setTimeout(() => resolve(it), 1000))
      )
      .map((it) => it * 2)
      .subscribe((it) => console.log(it)); // 2, 4, 6을 출력합니다.
    
}

/**
* 아래 코드를 보면 동기 제너레이터에서도 for await 가 동작하는 것을 알 수 있다.
*/
{
  function* syncGenerator() {
      yield 1;
      yield 2;
      yield 3;
      yield 4;
    }
    
    for await (const n of syncGenerator()) {
      console.log(n);
    }
    
    async function* asyncGenerator() {
      yield 'a';
      yield 'b';
      yield 'c';
      yield 'd';
    }

    
    
    (async () => {
      for await (const ch of asyncGenerator()) {
        console.log(ch);
      }
    })();      


    // 다만 for await를 사용하기 위해서 async 함수 블럭이 필요하다.
    async function* nestedGenerator() {
      for await (const ch of asyncGenerator()) {
          console.log(ch);
      }
    }

    (async () => {
      for await (const ch of nestedGenerator()) {
        console.log(ch);
      }
    })(); 
}

/**
* 분기를 적용하니 코드가 지저분해 지는 것을 알 수 있다.
* 따라서 위의 성질을 적용하여 아래와 같이 모든 제너레이터에 for await를 사용한다.
*/
{
  class Observable {
      constructor(generatorFunction) {
        this.generatorFunction = generatorFunction;
      }
    
      static of(...items) {
        return new Observable(function* () {
          for (let item of items) {
            yield item;
          }
        });
      }
    
      map(callback) {
        const sourceGeneratorFunction = this.generatorFunction;
        return new Observable(async function* () {
          // 실제로 필요할 때까지 제너레이터(또는 iterator) 생성을 지연하자.
          for await (let item of sourceGeneratorFunction()) {
            yield callback(item);
          }
        });
      }
    
      filter(predicate) {
        const sourceGeneratorFunction = this.generatorFunction;
        return new Observable(async function* () {
          // 실제로 필요할 때까지 제너레이터(또는 iterator) 생성을 지연하자.
          for await (let item of sourceGeneratorFunction()) {
            if (predicate(item)) {
              yield item;
            }
          }
        });
      }
    
      flatMap(callback) {
        const sourceGeneratorFunction = this.generatorFunction;
        return new Observable(async function* () {
          // 실제로 필요할 때까지 제너레이터(또는 iterator) 생성을 지연하자.
          for await (let item of sourceGeneratorFunction()) {
            // callback의 반환값이 Observable, Promise 또는 일반 함수인지 검사한다.
            const result = callback(item);
            if (result instanceof Observable) {
              for await (const value of result.generatorFunction()) {
                yield value;
              }
            } else if (result instanceof Promise) {
              yield await result;
            } else {
              yield result;
            }
          }
        });
      }
    
      async subscribe(callback) {
        for await (let value of this.generatorFunction()) {
          callback(value);
        }
      }
    }
    
    Observable.of(1, 2, 3, 4, 5, 6)
      .flatMap((it) => it + 1)
      .filter((it) => it % 2 === 1)
      .map((it) => `!! ${it} !!`)
      .flatMap(
        (it) => new Promise((resolve) => setTimeout(() => resolve(it), 1000))
      )
      .map((it) => `## ${it} ##`)
      .flatMap((it) => Observable.of(`==> ${it} <==`))
      .subscribe((it) => console.log(it));
}

/**
* subscribe를 next, complete, error 로 세분화 해 보자.
* RxJS처럼 subscriber가 observer 객체를 받도록 해 보자.
* observer객체는 next, complete, error 콜백 메서드를 갖는 객체다
*/
{
  class Observable {
      constructor(generatorFunction) {
        this.generatorFunction = generatorFunction;
      }
    
      static of(...items) {
        return new Observable(function* () {
          for (let item of items) {
            yield item;
          }
        });
      }
    
      map(callback) {
        const sourceGeneratorFunction = this.generatorFunction;
        return new Observable(async function* () {
          // 실제로 필요할 때까지 제너레이터(또는 iterator) 생성을 지연하자.
          for await (let item of sourceGeneratorFunction()) {
            yield callback(item);
          }
        });
      }
    
      filter(predicate) {
        const sourceGeneratorFunction = this.generatorFunction;
        return new Observable(async function* () {
          // 실제로 필요할 때까지 제너레이터(또는 iterator) 생성을 지연하자.
          for await (let item of sourceGeneratorFunction()) {
            if (predicate(item)) {
              yield item;
            }
          }
        });
      }
    
      flatMap(callback) {
        const sourceGeneratorFunction = this.generatorFunction;
        return new Observable(async function* () {
          // 실제로 필요할 때까지 제너레이터(또는 iterator) 생성을 지연하자.
          for await (let item of sourceGeneratorFunction()) {
            // callback의 반환값이 Observable, Promise 또는 일반 함수인지 검사한다.
            const result = callback(item);
            if (result instanceof Observable) {
              for await (const value of result.generatorFunction()) {
                yield value;
              }
            } else if (result instanceof Promise) {
              yield await result;
            } else {
              yield result;
            }
          }
        });
      }
    
      async subscribe(observer) {
        try {
          for await (let value of this.generatorFunction()) {
            if (observer.next) {
              observer.next(value);
            } else if (typeof observer === 'function') {
              // observer가 next만 정의할 때는 그냥 함수로 전달할 수 있게 해 준다.
              observer(value);
            }
          }
        } catch (error) {
          if (observer.error) {
            observer.error(error);
          }
        } finally {
          if (observer.complete) {
            observer.complete();
          }
        }
      }
    }
    
    Observable.of(1, 2, 3, 4, 5, 6)
      .flatMap((it) => it + 1)
      .filter((it) => it % 2 === 1)
      .map((it) => `!! ${it} !!`)
      .flatMap(
        (it) => new Promise((resolve) => setTimeout(() => resolve(it), 1000))
      )
      .map((it) => `## ${it} ##`)
      .flatMap((it) => Observable.of(`==> ${it} <==`))
      .subscribe((it) => console.log(it));
    
    Observable.of(1, 2, 3, 4, 5, 6)
      .flatMap((it) => it + 1)
      .filter((it) => it % 2 === 1)
      .map((it) => `!! ${it} !!`)
      .flatMap(
        (it) => new Promise((resolve) => setTimeout(() => resolve(it), 1000))
      )
      .map((it) => {
        throw new Error(it);
      })
      .map((it) => `## ${it} ##`)
      .flatMap((it) => Observable.of(`==> ${it} <==`))
      .subscribe({
        next: (v) => console.log(v),
        error: (e) => console.error(e),
        complete: () => console.log('끝났다!')
      });      


    // API 적용 예제
    async function fetchData(userId) {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}/todos`
      );
      return response.json();
    }
  
    Observable.of(1, 2, 3, 4, 5, 6)
      .flatMap((userId) => fetchData(userId))
      .map((todos) => todos[0])
      .subscribe(console.log);
}