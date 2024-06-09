/**
 * Symbol.asyncIterator
 * Symbol.asyncIterator는 비동기 Iterator로 비동기 작업을 아이템으로 담고 있는
 * 컬렉션을 순회하고자 할 때 사용한다. 
 * Symbol.asyncIterator 메서드를 구현하는 비동기 Iterator는
 * 반드시 Promise<IteratorResult>를 반환하는 next() 메서드를 구현해야 한다.
 */

/**
 * 아래 예는 1초마다 value를 반환하는 비동기 작업을 수행하는 
 * Promise를 반한하는 Symbol.asyncIterator의 예다
 */
{
    class AsyncIterator {
        constructor(end) {
            this.value = 0;
            this.end = end;
        }
    
        next() {
            if (this.value <= this.end) {
                return new Promise((resolve, reject) => {
                    setTimeout(() =>
                        resolve({
                            value: this.value++,
                            done: false
                        }), 1000);
                });
            } else {
                return Promise.resolve({ done: true });
            }
        }
    }

    class AsyncCounter {
        constructor(end) {
            this.end = end;
        }
    
        [Symbol.asyncIterator]() {
            return new AsyncIterator(this.end);
        }
    }
      
    (async () => {
        const asyncIterator = new AsyncCounter(3);
        const iterator = asyncIterator[Symbol.asyncIterator]();
        console.log(await iterator.next());
        console.log(await iterator.next());
        console.log(await iterator.next());
        console.log(await iterator.next());
        console.log(await iterator.next());
    })();      

    /**
     * Symbol.asyncIterator 를 구현한 Iterable을 for...of 문으로 순회하려면
     * 아래와 같이 for await ... of 문으로 순회해야 한다.
     */
    (async () => {
        const asyncIterator = new AsyncCounter(3);
        for await (const value of asyncIterator) {
            console.log(value);
        }
    })();   
}
