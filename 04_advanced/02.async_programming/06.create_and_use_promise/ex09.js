/**
 * Promise 만들기
 */

/**
 * Promise를 만들기 위해서는 Promise 생성자를 사용한다.
 */
{
    const promise = new Promise(executor);
}

/**
 * Promise 생성자는 인자로 프로미스 작업을 실행하는하는 executor함수를 받는다.
 */
{
    const promise = new Promise((/* ... */) => {
        // 프로미스로 실행할 작업
    });
}

/**
 * 그리고 프로미스 작업을 실행하는 executor 함수는 2개의 콜백 함수를 인자로
 * 갖는다. 강제는 아니지만 관례로 resolve와 reject라는 이름을 사용한다.
 * resolve 콜백 함수는 프로미스 작업이 성공하면 Promise 상태를 Fulfilled 상태로 변경하고
 * 성공한 결과값을 반환하기 위해서 사용한다.
 * reject 콜백 함수는 프로미스 작업이 실패하면 Promise 상태를 Rejected 상태로 변경하고 
 * 실패한 오류값을 반환하기 위해서 사용한다.
 */

{
    const promise = new Promise((resolve, reject) => {
        // 프로미스 작업을 수행합니다.
        const success = true;
        if (success) {
            // resolve 콜백의 인자값은 선택적이다.
            // 외부로 전달할 값이 없으면 아무 값 없이 resolve 콜백을
            // 호출하면 된다.
            resolve();
        } else {
            // reject 콜백의 인자값은 선택적이다.
            // 외부로 전달할 값이 없으면 아무 값 없이 reject 콜백을
            // 호출하면 된다.
            reject();
        }
    });
}

/**
 * 만약 외부로 전달할 값이 있으면 콜백 함수의 인자값으로 전달하면 된다.
 */
{
    const promise = new Promise((resolve, reject) => {
        resolve('데이터입니다.');
    });
}

{
    const promise = new Promise((resolve, reject) => {
        reject(new Error('오류가 발생했습니다.'));
    });
}
