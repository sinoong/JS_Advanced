/**
 * Callback 함수
 * 비동기 함수의 핸들러
 */
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

fetchData('https://api.service.com/message', function (data) {
    console.log(`가져온 데이터는: ${data}`);
}, function (error) {
    console.error(error.message);
});


/**
 * 오류 시뮬레이션
 */
function fetchData(url, success, failed) {
    console.log(`fetching data from ${url}...`);
    setTimeout(function () {
        // 오류가 발생했다면
        const error = new Error('알 수 없는 오류가 발생했습니다.');
        // const data = fetch(url);
        const data = 'You are Great!';
        if (error) {
            failed(error);
        } else {
            success(data);
        }
    }, 1000);
}

fetchData('https://api.service.com/message', function (data) {
    console.log(`가져온 데이터는: ${data}`);
}, function (error) {
    console.error(error.message);
});


/**
 * 콜백 지옥(Callback Hell) -> 비동기의 콜백 지옥을 피하기 위한 방법으로 Promise 또는 async/await
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