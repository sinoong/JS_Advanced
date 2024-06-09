/**
 * Symbol.isConcatSpreadable
 * - 배열과 배열과 비슷한(Array-like) 객체를 concat으로 이어 붙일 때 동작을
 * - 커스텀하게 만들 수 있다.
 */
{
    const numbers = [1, 2, 3];
    const chars = ['a', 'b', 'c'];

    // 기본적으로 true이기 때문에 모두 펼쳐져서 붙여진다
    console.log(numbers.concat(chars));

    // false로 바꾸면 배열을 펼쳐서 복사하지 않고 배열 자체를 하나의 원소로 추가한다.
    chars[Symbol.isConcatSpreadable] = false;
    console.log(numbers.concat(chars));

    // 배열과 비슷한 객체
    // 즉, length 속성이 있고 숫자가 속성키인 객체에도 사용할 수 있다.
    const days = {
        length: 7,
        0: 'mon',
        1: 'tue',
        2: 'wed',
        3: 'thu',
        4: 'fri',
        5: 'sat',
        6: 'sun'
    }

    // [1, 2, 3, Object]
    console.log(numbers.concat(days));

    // [1, 2, 3, "mon", "tue", "wed", "thu", "fri", "sat", "sun"]
    days[Symbol.isConcatSpreadable] = true;
    console.log(numbers.concat(days));
}