/**
 * Promise 메서드 체이닝
 */

/**
 * Promise의 then과 catch는 fulfilled 상태인 Promise를 반환해서
 * 계속해서 Promise의 메서드를 호출할 수 있다.
 * then 메서드는 반환값으로 pending 상태인 Promise를 반환할 수 있다.
 */
{
    new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('첫번째 Promise');
            resolve();
        }, 1000);
    })
    .then(() => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('두번째 Promise');
                resolve();
            }, 1000);
        })
    })
    .then(() => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('세번째에서 오류발생');
                reject(new Error('오류처리는 catch 메서드 블럭에서 가능해요'));
            }, 1000);
        })
    })
    .catch((error) => {
        console.error(error);
    })
    .then(() => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            console.log('catch 후에도 실행 가능한 네번째 Promise');
            resolve();
          }, 1000);
        });
    })
    .finally(() => console.log('이렇게 Promise 를 순차적으로 실행할 수 있습니다.'));
}

/**
 * catch 에서 새로운 Pending 상태인 Promise를 반환해도 된다.
 */
{
    new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('첫번째 Promise');
            resolve();
        }, 1000);
    })
    .then(() => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('두번째 Promise');
                resolve();
            }, 1000);
        })
    })
    .then(() => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('세번째에서 오류발생');
                reject(new Error('오류처리는 catch 메서드 블럭에서 가능해요'));
            }, 1000);
        })
    })
    .catch((error) => {
        console.error(error);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
              console.log('catch 반환한 Promise');
              resolve();
            }, 1000);
        });
    })
    .then(() => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            console.log('catch 후에도 실행 가능한 네번째 Promise');
            resolve();
          }, 1000);
        });
    })
    .finally(() => console.log('이렇게 Promise 를 순차적으로 실행할 수 있습니다.'));
}

/**
 * 따라서 연속해서 catch 블럭을 실행할 필요가 있다면
 * rejected 상태인 Promise가 반환되면 된다.
 */
{
    new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('서버에서 데이터를 가져옵니다.');
            reject('API 오류가 발생했습니다');
        }, 1000);
    })
    .catch((error) => {
        console.log(error);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('서버에 실패 로그를 기록합니다.');
                reject('API 오류가 발생했습니다');
            }, 1000);
        })
    })
    .catch((error) => {
        console.log(error);
    })
}
