/**
 * fetch와 API 요청하기
 */

/**
 * 비동기 작업이 필요한 곳은 대부분 I/O 작업이 될 것이다.
 * 그 중 자주 사용하는 네트워크 API를 요청하는 fetch 함수를 사용해 보자.
 * 
 * fetch는 Promise를 지원하는 HTTP Request API 다.
 */
{
    /**
     * options는 요청에 필요한 설정이 필요할 경우 사용한다.
     */
    const promise /*: Promise<Response>*/ = fetch(url, options);
 
    /**
     * fetch 메서드가 실행되어 promise가 resolve 되면 then 의 콜백 메서드로
     * Response 객체가 인자값으로 전달된다.
     * - 응답에 대한 다양한 속성과 메서드를 제공한다.
     * - https://developer.mozilla.org/ko/docs/Web/API/Response
     * - 여기서는 응답의 body 내용을 json 으로 반환하는 내용만 살펴본다.
     * - response 의 json() 메서드는 Promise를 반환한다.
     * - 따라서 아래와 같이 사용한다.
     */
    promise
        .then((response) => response.json())
        .then((json) => console.log(json));

    /**
     * 만약 요청 중에 오류가 발생하면 아래와 같이 catch 메서드가 실행된다.
     */
    promise
        .then((response) => response.json())
        .then((json) => console.log(json))
        .catch((error) => console.error(error))
        .finally(() => {
            console.log('요청이 완료되었습니다');
        });
}