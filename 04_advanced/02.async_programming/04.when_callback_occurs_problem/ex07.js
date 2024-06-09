/**
 * 콜백 함수는 언제 문제가 될까?
 */

/**
 * 비동기 실행 결과를 하나의 콜백 함수가 아무런 디펜던시 없이 홀로 사용하면 아무런 문제가 없다.
 */
{
    function fetchData(callback) {
        const data = { name: 'CodingMax' };
        setTimeout(callback, 1000, data);
    }

    // 이처럼 아무런 의존성 없이 비동기 실행 결과를 콜백 함수 한 개가 사용한다.
    // 그러면 콜백 함수를 사용해도 아무런 문제가 없다.
    fetchData((data) => {
        console.log(`${data}를 받았습니다`);
    });
}

/**
 * 하지만 비동기 실행 결과가 서로 의존성을 가질 때 문제가 발생한다.
 * 다양한 함수의 종류 - 콜백함수에서 만들어 본 예제를 다시 확인해 보자.
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

    /**
     * 이처럼 비동기 실행의 결과가 서로 의존성을 가질 때,
     * 콜백 헬이라는 문제가 발생한다. 
     * 콜백 헬이 생기면 코드의 구조가 비선형이어서 코드를 이해하고 관리하는게 힘들어 진다.
     * 이를 해결하기 위해서 자바스크립트는 Promise 를 제공한다.
     */
    fetchData('https://api.service.com/message/1', function (msg1) {
        fetchData('https://api.service.com/message/2', function (msg2) {
            fetchData('https://api.service.com/message/3', function (msg3) {
                console.log('가져온 데이터 목록: ');
                console.log(`- 1. ${msg1}`);
                console.log(`- 2. ${msg2}`);
                console.log(`- 3. ${msg3}`);
            }, function (error) {
                console.error(error.message);    
            });
        }, function (error) {
            console.error(error.message);    
        })
    }, function (error) {
        console.error(error.message);
    });
}