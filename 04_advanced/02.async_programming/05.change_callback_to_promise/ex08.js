/**
 * Callback을 Promise로 변경하기
 */

{
    function fetchData(url, success, failed) {
        console.log(`fetching data from ${url}...`);
        setTimeout(function () {
            // 성공이라면
            const error = null;
            // const data = fetch(url);
            const data = 'You are Great!';
            if (error) {
                failed(error);
            } else {
                success(data);
            }
        }, 1000);
    }
}

/**
 * 먼저 콜백 함수의 이름을 resolve와 reject로 변경하자.
 * 그러면 성공일 때, resolve 를 호출하고
 * 실패하면 reject를 호출한다.
 */
{
    function fetchData(url, resolve, reject) {
        console.log(`fetching data from ${url}...`);
        setTimeout(function () {
            // 성공이라면
            const error = null;
            // const data = fetch(url);
            const data = 'You are Great!';
            if (error) {
                reject(error);
            } else {
                resolve(data);
            }
        }, 1000);
    }
}

/**
 * 위 콜백을 Promise로 변경해 보자.
 * 비동기 작업을 Promise 객체로 만든다.
 */
{
    function fetchData(url) {
        console.log(`fetching data from ${url}...`);
        return new Promise((resolve, reject) => {
            setTimeout(function () {
                // 성공이라면
                const error = null;
                // const data = fetch(url);
                const data = 'You are Great!';
                if (error) {
                    reject(error);
                } else {
                    resolve(data);
                }
            }, 1000);
        });
    }

    /**
     * Promise를 적용한 fetchData를 사용해서
     * 콜백 헬을 제거해 보자.
     * Promise.all 은 모든 Promise 가 완료될 때까지 기다린다.
     * 따라서 아래와 같이 모든 fetchData가 완료될 때까지 기다린 후
     * then 블럭에서 결과를 출력할 수 있다.
     * 만약 fetchData를 실행하다가 오류가 발생하면
     * catch 블럭에서 오류를 핸들링할 수 있다.
     * 
     * 코드를 보면 Promise를 적용하면 코드가 선형으로 변경되고
     * 의미 파악이 쉽다는 것을 알 수 있다.
     * 콜백 헬처럼 depth 가 깊어지지 않아 코드가 매우 깔끔해 졌다.
     * 따라서 아래 코드가 좀 더 관리하기 쉬운 코드가 되는 것이다.
     * 이럼 Promise를 적용하면 의존성이 있는 비동기 코드를 매우 직관적으로
     * 표현할 수 있다. 
     * 
     * Promise를 좀 더 자세히 알아 보자.
     */
    Promise.all([
        fetchData('https://api.service.com/message/1'),
        fetchData('https://api.service.com/message/2'),
        fetchData('https://api.service.com/message/3'),
    ])
    .then(([msg1, msg2, msg3]) => {
        console.log('가져온 데이터 목록: ');
        console.log(`- 1. ${msg1}`);
        console.log(`- 2. ${msg2}`);
        console.log(`- 3. ${msg3}`);
    })
    .catch((error) => {
        console.error(error.message);
    });
}