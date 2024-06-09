export class Observable {
  constructor(generatorFunction) {
    this.generatorFunction = generatorFunction;
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