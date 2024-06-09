/**
 * 제너레이터와 비동기 작업
 */

/**
 * 제너레이터를 사용해서 비동기 작업을 순차적으로 실행할 수 있다.
 */
{
    function* asyncGenerator() {
        let count = 1;
        while (true) {
            yield new Promise((resolve) => {
                setTimeout(() => resolve(count++), 1000);
            });
        }
    }

    (async () => {
        const iterator = asyncGenerator();
        // { value: Promise<pending>, done: false } 로
        // pending 상태에 있는 Promise를 반환한다.
        console.log(iterator.next());
        // 따라서 이렇게 value에 있는 Promise를 resolve 해야 한다.
        console.log(await iterator.next().value);
        console.log(await iterator.next().value);
        console.log(await iterator.next().value);
        console.log(await iterator.next().value);
        console.log(await iterator.next().value);
    })();

    /**
     * for await...of 문을 사용하면 좀 더 깔끔하게 코드를 작성할 수 있다.
     */
    (async () => {
        for await (const count of asyncGenerator()) {
            if (count > 3) {
                break;
            }
            console.log('for-await', count);
        }
    })();
}

/**
 * async를 붙여서 제너레이터를 만들면 AsyncGenerator가 반환된다.
 */
{
    async function* asyncGenerator() {
        yield 1;
        yield 2;
        yield 3;
    }

    (async () => {
        const iterator = asyncGenerator();
        // AsyncGenerator
        console.log(iterator);
        // iterator.next() 는 Promise<IteratorResult> 를 반환한다.
        console.log(await iterator.next());
        console.log(await iterator.next());
        console.log(await iterator.next());
        console.log(await iterator.next());
    })();
}