/**
 * async & await
 */

/**
 * Promise를 반환하는 함수는 await 를 사용하여 동기적인 방식으로 코드를 실행할 수 있다.
 */
{
    function blockingDelay(duration_ms) {
        return new Promise((resolve, reject) => {
            const delayUntil = Date.now() + duration_ms;
            while(Date.now() < delayUntil) {
                ;
            }
            console.log(`${duration_ms}ms 동안 delay했습니다`);
            resolve();
        });
    }

    function asyncDelay(duration_ms)/* : Promise<number> */ {
        return new Promise((resolve, reject) => {
            if (duration_ms < 0) {
                reject(new Error(`delay시간은 음수가 될 수 없습니다: ${duration_ms}`));
                return;
            }
            setTimeout(() => resolve(duration_ms), duration_ms);
        });
    }

    function progress() {
        let progress = 0;
        const intervalId = setInterval(() => {
            progress += 1;
            console.log(`진행률: ${progress}%`)
            if (progress >= 100) {
                clearInterval(intervalId);
            }
        }, 100);
    }

    /**
     * 이렇게 then 메서드를 호출할 수도 있지만 아래와 같이 await를 사용해서 호출할 수 있다.
     */
    asyncDelay(1000)
        .then((value) => console.log(`${value}ms 기다렸습니다.`));

    /**
     * 다만 await 연산자를 사용하기 위해서는 async 로 선언한 함수 블럭이 필요하다.
     * 만약 resolved 되면 함수의 반환값으로 resolved 값이 반환된다.
     */
    (async () => {
        const value = await asyncDelay(1000);
        console.log(`${value}ms 기다렸습니다.`)
    })();

    (async () => {
        // reject 되면 rejected 값이 오류로 던져진다.
        try {
            const value = await asyncDelay(-1);
            console.log(`${value}ms 기다렸습니다.`);
        } catch (error) {
            console.log('reject의 값이 오류로 던져집니다');
            console.error(error);
        }
    })();

    /**
     * await 연산자를 사용하기 위해서는 async 함수 블럭 안에서만 가능하다.
     */
    (async () => {
        /**
         * await 연산자는 Promise 가 resolve 되거나 rejected 상태가
         * 될 때까지 실행을 멈추고 기다린다. 하지만 메인 스레드가 멈추는 것이 아니다.
         * 그러다가 Promise의 상태가 설정(settled)되면 계속해서 실행을 이어 나간다.
         * 만약 resolved 되면 함수의 반환값으로 resolved 값이 반환되고
         * reject 되면 rejected 값이 오류로 던져진다.
         */
        try {
            const value = await asyncDelay(-1);
            console.log(`${value}ms 기다렸습니다.`);
        } catch (error) {
            console.log('reject의 값이 오류로 던져집니다');
            console.error(error);
        }
    })();

    

    /**
     * progress도 실행되고 3초 뒤에는 console.log도 출력됩니다.
     * 즉, await 연산자는 Promise 가 resolve 되거나 rejected 상태가
     * 될 때까지 실행을 멈추고 기다려서 비동기 작업을 동기 작업처럼 코드를 실행한다.
     * 하지만 Promise의 executor 내부에서 비동기 WebAPI를 사용했기 때문에
     * 메인 스레드가 Blocking 되지 않는다.
     */
    (async () => {
        progress();
        const value = await asyncDelay(3000);
        console.log(`${value}ms 동안 기다렸습니다.`);
    })();

    /**
     * 아래와 같이 실행해 보자.
     * (브라우저 콘솔에서 실행한다.)
     * Promise의 executor 내부에서 비동기 WebAPI를 사용하지 않았기 때문에
     * 메인 스레드가 Blocking 된다.
     * 따라서 blockingDelay로 3초가 지난 다음에 progress 가 출력된다.
     */
    (async () => {
        progress();
        await blockingDelay(3000);
    })();

    /**
     * 만약 await 연산자를 함수 안에서 사용려한다면 async 키워드를 사용하여 
     * 함수를 선언 및 정의해야 한다.
     */
    async function countDown(count) {
        for(let i = n; i > 0; i--) {
            await asyncDelay(1000);
            console.log(`COUNT DOWN: ${i}`);
        }
    }

    (async () => {
        await countDown(3);
    })();

    /**
     * async function 이 반환하는 값은 Promise 로 감싸진다
     * Promise는 Pending 상태다.
     */
    async function asyncValue(n) {
        // return을 하면 Promise.resolve(n) 과 동일하다.
        return n;
    }
    const value = asyncValue(10);
    console.log(value);

    /**
     * await를 하면 resolved 값인 n 이 반환된다.
     */
    (async () => {
        const realValue = await value;
        console.log(realValue);
    })();
    

    /**
     * throw로 오류를 던지면 pending 상태의 Promise가 반환된다.
     */
    async function asyncError() {
        throw new Error('오류입니다');
    }

    const error = asyncError();
    console.log(error);

    // await를 하면 rejected 된 error 가 throw된다.
    (async () => {
        try {
            const realError = await error;
            // 아래 console.log는 호출되지 않는다.
            console.log('1', realError);    
        } catch (err) {
            // catch 문의 console.log가 출력된다.
            console.log('2', err);    
        }
    })();
}