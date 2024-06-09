/**
 * BigInt 직렬화와 역직렬화
 */

/**
 * BigInt는 BigInt를 문자열로 만들 수 있고 그 반대도 가능하다.
 * 이를 사용해서 BigInt의 직렬화와 역직렬화를 구현할 수 있다.
 */
{
    const str = '123456';
    const n = BigInt(str);
    console.log(typeof n, n);
    console.log(n.toString());

    // 문자열 타입으로 변경되고 문자열 타입에서 복원할 수 있는 것은 매우 중요하다.
    // JSON 객체는 BigInt를 직렬화 하는 방법을 모르기 때문이다.
    // 따라서 아래 예제는 오류가 발생한다.
    console.log(JSON.stringify({
        n
    }));
    
    // JSON 문자열로 직렬화할 때는 BigInt를 문자열로 변경한다.
    const data = JSON.stringify({
        n: n.toString()
    });
    console.log(data);

    // JSON 문자열에서 복원할 때는 문자열에서 BigInt를 생성한다.
    const obj = JSON.parse(data);
    obj.n = BigInt(obj.n);
    console.log(obj);
}