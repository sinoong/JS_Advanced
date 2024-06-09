/**
 * https://jsonplaceholder.typicode.com/todos API 사용하기
 */

{
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then((json) => console.log(json))
        .catch((error) => console.log(error));
}

/**
 * Response 객체의 속성 사용하기
 */
{
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => {
            if (!res.ok) {
                throw new Error('ToDo 목록을 가져올 수 없습니다.')
            }
            return res.json();
        })
        .then((json) => console.log(json))
        .catch((error) => console.log(error));
}

/**
 * POST 요청 보내기
 * fetch 메서드에서 options 사용하기
 */
{
    fetch('https://jsonplaceholder.typicode.com/todos', {
        // 요청 메서드
        method: 'POST',
        // 요청 헤더값
        headers: {
            'Content-Type': 'application/json'
        },
        // 요청 본문값
        body: JSON.stringify({
            title: '진짜 자바스크립트 완강하기',
            completed: false,
            userId: 1,
        })
    })
    .then(res => res.json())
    .then((json) => console.log(json))
    .catch((error) => console.log(error));
}

/**
 * 여러 요청을 연결해서(체이닝) 보내기
 */
{
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(users => users[0])
        .then(firstUser => {
            return fetch(`https://jsonplaceholder.typicode.com/users/${firstUser.id}/todos`)
        })
        .then(res => res.json())
        .then((json) => console.log(json))
        .catch((error) => console.log(error));
}