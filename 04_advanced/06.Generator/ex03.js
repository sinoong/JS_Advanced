/**
 * 제너레이터의 실행 과정
 * - yield 키워드는 제너레이터 함수의 실행을 일지 정지 시키기 때문에 
 * - 아래와 같이 무한 루프에 yield 키워드를 사용할 수 있다.
 * - 즉, 무한 루프가 계속 실행되어 메인스레드를 블럭킹하지 않는다.
 * - 이 내용은 디버거로 실행해 보면서 실행 과정을 알아보자
 */
{
    function* generator(start = 0) {
        console.log('숫자 생성기를 시작합니다.');
        let n = start;
        while (true) {
            yield n;
            n++;
        }
    }

    const iter = generator();
    console.log(iter.next());
    
    /**
     * for...of 문을 사용할 수 있다.
     * 다만 제너레이터 내부에서 무한하게 숫자값을 생성하기 때문에
     * 무한 제너레이터를 for...of에서 사용할 때는 루프 종료 조건이 있어야 한다.
     */
    for (const number of generator()) {
        if (number > 10) {
            break;
        }
        console.log(number);
    }

    /**
     * Spread 연산자는 종료 조건을 설정할 수 없기 때문에 
     * 무한 제너레이터를 Spread 연산자에 사용하면 안된다.
     */
    // 메인스레드가 블럭킹 된다.  
    // [...generator()]; 

    /**
     * 배열 분해는 사용 가능하다.
     */
    const [a, b, c] = generator();
    console.log({ a, b, c });
}