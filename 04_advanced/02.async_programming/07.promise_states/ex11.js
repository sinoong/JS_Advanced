/**
 * Promise의 상태
 * - pending
 * - fulfilled
 * - rejected
 * (크롬 콘솔에서 실습해주세요)
 */

/**
 * Pending
 */
{
    const promise = new Promise((resolve, reject) => {});
    promise; // pending
}

/**
 * Fulfilled
 * [[PromiseState]]
 * [[PromiseResult]]
 */
{
    const promise = new Promise((resolve, reject) => {
        resolve();
    })
    promise; // <fulfilled>
}

{
    const promise = new Promise((resolve, reject) => {
        resolve('Hello');
    })
    promise; // <fulfilled>
}

/**
 * Rejected
 * [[PromiseState]]
 * [[PromiseResult]]
 */
{
    const promise = new Promise((resolve, reject) => {
        reject();
    });
    promise; // rejected
}

/**
 * Rejected
 * [[PromiseState]]
 * [[PromiseResult]]
 */
{
    const promise = new Promise((resolve, reject) => {
        reject(new Error('오류입니다.'));
    });
    promise; // rejected
}

/**
 * Rejected 일 때, Uncaught Error 을 막기 위해서 오류를 반드시 처리해 줘야 한다.
 * 어디서? catch 메서드 블럭에서
 */
{
    const promise = new Promise((resolve, reject) => {
        reject(new Error('오류입니다.'));
    })
    .catch((error) => {
        console.log(error);
    })
}

/**
 * 따라서 then 메서드는 Promise가 fulfilled 상태일 때 호출되고
 * catch 메서드는 Promise가 rejected 상태일 때 호출된다.
 * 또한 then과 catch 메서드는 fulfilled 상태인 Promise를 반환하는데
 * 그 의미는 Promise의 메서드를 체인 형식으로 계속해서 호출 할 수 있도록 하는 것이다.
 * 만약 Promise의 상태가 rejected 상태로 유지되면 체인에 등장하는 
 * 모든 catch 블럭이 계속해서 실행될 것이다.
 * 그것을 막기 위한 것이다.
 */
{
    const promise = Promise.resolve().then(() => {});
    promise // fulfilled
}

{
    const promise = Promise.reject('오류입니다')
        .catch((error) => console.log(error))
        .catch((error) => console.log('이 catch 블럭을 실행되지 않아요'))
        .then(() => console.log('여기는 호출됩니다.'));
}