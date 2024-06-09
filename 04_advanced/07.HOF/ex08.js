/**
 * RxJS의 Observable.of 를 흉내내어 보자. 1편
 * 제너레이터를 활용하여 map, filter 그리고 비동기 연산을 지원하는 flatMap을 구현해 보자.
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
        return new Observable(function* () {
          for (let item of sourceIterator) {
            yield callback(item);
          }
        });
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
          for (let item of sourceIterator) {
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
        for await (const value of this.generatorFunction()) {
          callback(value);
        }
      }
  }

Observable.of(1, 2, 3, 4, 5, 6, 7)
  .filter((it) => it % 2)
  .map((it) => it * 2)
  .subscribe((it) => console.log(it)); // 2, 4, 6을 출력합니다.

Observable.of(1, 2, 3, 4, 5, 6, 7)
  .flatMap((it) => Observable.of(it * 2))
  .subscribe((it) => console.log(it)); // 2, 4, 6을 출력합니다.

Observable.of(1, 2, 3, 4, 5, 6, 7, 8)
  .map((it) => it * 2)
  .flatMap(
    (it) => new Promise((resolve) => setTimeout(() => resolve(it), 1000))
  )
  .subscribe((it) => console.log(it)); // 2, 4, 6을 출력합니다.

Observable.of(1, 2, 3, 4, 5, 6, 7, 8)
  .map((it) => it * 2)
  .flatMap(
    (it) => new Promise((resolve) => setTimeout(() => resolve(it), 1000))
  )
  .map((it) => it * 2)
  .subscribe((it) => console.log(it)); // 2, 4, 6을 출력합니다.
}
