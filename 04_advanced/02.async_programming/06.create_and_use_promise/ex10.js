/**
 * Promise 의 값 사용하기
 * Promise 가 실행되면 resolved 이거나 rejected 된 값을 가지고 있다.
 * 이 값을 사용하기 위해서는 then 또는 catch 메서드를 사용해야 한다.
 */

/**
 * then 메서드
 */
{
    // Promise 생성
    const promise = new Promise((resolve, reject) => {
        resolve('데이터 입니다.');
    });

    // Promise 값 사용
    // then 메서드는 resolved 값을 사용할 때 사용한다.
    // then 메서드의 콜백 함수의 인자값으로 resolve 된 값이 전달된다.
    promise
        .then((value) => console.log(value));
}

/**
 * then 메서드는 사실 두 개의 콜백 함수를 받는다.
 * onFulfilled, onRejected
 */
{
    const promise = new Promise((resolve, reject) => {
        resolve('데이터 입니다.');
    });

    const onFulfilled = (value) => {
        console.log(value);
    }

    const onRejected = (error) => {
        console.log('오류입니다');
        console.log(error);
    }

    promise.then(onFulfilled, onRejected);

    // 또는
    promise.then((value) => {
        console.log(value);
    }, (error) => {
        console.log('오류입니다');
        console.log(error);
    });

    /** 
     * 하지만 위처럼 then 메서드로 resolve와 reject를 처리하는 것은 
     * 코드 읽기가 어렵고 의미 파악이 힘들다.
     * 그래서 reject를 처리하는 catch 메서드를 제공한다.
     */ 
}


/**
 * catch 메서드
 */
{
    // Promise 생성
    const promise = new Promise((resolve, reject) => {
        reject(new Error('오류입니다.'));
    });

    // Promise 값 사용
    // catch 메서드는 rejected 값을 사용할 때 사용한다.
    // catch 메서드의 콜백 함수의 인자값으로 reject 된 값이 전달된다.
    promise
        .catch((error) => console.log(error));
}



/**
 * finally 메서드
 */
{
    // Promise 생성
    const promise = new Promise((resolve, reject) => {
        resolve('데이터 입니다.');
    })

    /**
     * finally 메서드는 Promise가 resolve되건 reject되건 상관 없이
     * 항상 실행됩니다. finally 의 콜백 함수로 전달되는 인자값은 없습니다.
     */
    promise
        .then((value) => console.log(value))
        .finally(() => {
            console.log('항상 실행됩니다.');
        });
}

{
    // Promise 생성
    const promise = new Promise((resolve, reject) => {
        reject(new Error('오류입니다.'));
    });

    promise
        .catch((error) => console.log(error))
        .finally(() => {
            console.log('항상 실행됩니다.');
        });    
}

/**
 * Promise.resolve 와 Promise.reject
 * 단순히 resolve 상태 또는 reject 상태인 Promise를
 * 만들고자 할 때는 Promise.resolve 와 Promise.reject 
 * 메서드를 사용할 수 있다.
 */
{
    const promise = Promise.resolve('데이터 입니다.');
    promise
        .then((value) => console.log(value))
        .finally(() => {
            console.log('항상 실행됩니다.');
        });   
}

{
    const promise = Promise.reject(new Error('오류입니다.'));
    promise
        .catch((error) => console.log(error))
        .finally(() => {
            console.log('항상 실행됩니다.');
        });    
}