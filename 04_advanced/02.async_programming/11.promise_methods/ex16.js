/**
 * Promise.all
 * Promise.race
 * Promise.allSettled
 * Promise.any
 */

/**
 * Promise.all
 * - 프로미스 목록을 인자값으로 받는다.
 * - 인자값으로 받은 모든 Promise가 fulfilled 상태가 될 때까지 수행한다.
 * - 모든 프로미스가 fulfilled 상태가 되면 then 메서드의 인자로 결과값이 순서대로 배열 목록으로 전달된다.
 */
{
    const promise1 = new Promise((resolve, reject) => {
        setTimeout(() => resolve(1), 1000);
    });
    const promise2 = new Promise((resolve, reject) => {
        setTimeout(() => resolve(2), 2000);
    });
    const promise3 = new Promise((resolve, reject) => {
        setTimeout(() => resolve(3), 3000);
    });
    // promise3이 resolve되어야 then 메서드가 호출된다.
    Promise.all([promise1, promise2, promise3])
        .then(([value1, value2, value3]) => {
            console.log({ value1, value2, value3 })
        });
}

{
    const promise1 = new Promise((resolve, reject) => {
        setTimeout(() => resolve(1), 1000);
    });
    const promise2 = new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error('오류입니다.')), 2000);
    });
    const promise3 = new Promise((resolve, reject) => {
        setTimeout(() => resolve(3), 3000);
    });
    // 인자값으로 주어진 promise 중 하나라도 reject 되면
    // 모든 값을 사용할 수 없다.
    // all or nothing 이다.
    Promise.all([promise1, promise2, promise3])
        .then(([value1, value2, value3]) => {
            console.log({ value1, value2, value3 })
        })
        .catch((error) => console.error(error));
}


/**
 * Promise.race
 * 가장 먼저 fulfilled 상태가 되는 프로미스의 결과값으로 then 메서드를 호출한다.
 */
{
    const promise1 = new Promise((resolve, reject) => {
        setTimeout(() => resolve(1), 1000);
    });
    const promise2 = new Promise((resolve, reject) => {
        setTimeout(() => resolve(2), 2000);
    });
    const promise3 = new Promise((resolve, reject) => {
        setTimeout(() => resolve(3), 3000);
    });
    Promise.race([promise1, promise2, promise3])
        .then((result) => {
            console.log({ result })
        })
        .catch((error) => console.error(error));
}

{
    const promise1 = new Promise((resolve, reject) => {
        setTimeout(() => resolve(1), 1000);
    });
    const promise2 = new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error('오류입니다.')), 2000);
    });
    const promise3 = new Promise((resolve, reject) => {
        setTimeout(() => resolve(3), 3000);
    });
    // 이때도 result: 1이 출력된다.
    Promise.race([promise1, promise2, promise3])
        .then((result) => {
            console.log({ result })
        })
        .catch((error) => console.error(error));
}

/**
 * 하지만 fulfilled 상태가 된 Promise가 하나도 없는 상태에서
 * rejected 된 Promise가 생기면 바로 catch 블럭이 실행된다.
 */
{
    const promise1 = new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error('오류입니다.')), 1000);
    });
    const promise2 = new Promise((resolve, reject) => {
        setTimeout(() => resolve(2), 2000);
    });
    const promise3 = new Promise((resolve, reject) => {
        setTimeout(() => resolve(3), 3000);
    });
    // 이때는 catch 블록이 실행된다.
    Promise.race([promise1, promise2, promise3])
        .then((result) => {
            console.log({ result })
        })
        .catch((error) => console.error(error));
}

/**
 * Promise.allSettled
 * 인자로 주어진 모든 프로미스가 fulfilled 이든 rejected 이든 상태가 
 * 모두 설정되면 then 메서드가 호출된다.
 * catch 메서드는 절대 호출되지 않는다.
 * then 메서드의 값으로 프로미스의 상태와 값이 전달된다.
 */
{
    const promise1 = new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error('오류입니다.')), 1000);
    });
    const promise2 = new Promise((resolve, reject) => {
        setTimeout(() => resolve(2), 2000);
    });
    const promise3 = new Promise((resolve, reject) => {
        setTimeout(() => resolve(3), 3000);
    });
    // 절대 catch 블럭이 실행되지 않는다.
    Promise.allSettled([promise1, promise2, promise3])
        .then((result) => {
            console.log({ result })
        })
        .catch((error) => console.error(error));
}

/**
 * Promise.any
 * - 인자로 주어진 Promise 중에 제일 처음 fulfilled 된 프로미스의 값으로
 * - then 메서드를 호출한다.
 * - 모든 프로미스가 rejected 일 때만 catch 메서드가 호출된다.
 */
{
    const promise1 = new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error('오류입니다.')), 1000);
    });
    const promise2 = new Promise((resolve, reject) => {
        setTimeout(() => resolve(2), 2000);
    });
    const promise3 = new Promise((resolve, reject) => {
        setTimeout(() => resolve(3), 3000);
    });
    // 이때는 { result: 2 }가 출력된다
    Promise.any([promise1, promise2, promise3])
        .then((result) => {
            console.log({ result })
        })
        .catch((error) => console.error(error));
}

{
    const promise1 = new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error('오류입니다.')), 1000);
    });
    const promise2 = new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error('오류입니다.')), 2000);
    });
    const promise3 = new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error('오류입니다.')), 3000);
    });
    //오류발생: AggregateError: All promises were rejected
    Promise.any([promise1, promise2, promise3])
        .then((result) => {
            console.log({ result })
        })
        .catch((error) => console.log(`오류발생: ${error}`));

    // 빈배열일 때도 실행할 프로미스가 없기 때문에 catch 메서드가 실행된다.
    Promise.any([])
        .then((result) => {
            console.log({ result })
        })
        .catch((error) => console.log(`오류발생: ${error}`));
}