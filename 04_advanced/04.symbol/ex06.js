/**
 * Symbol.match
 * - String의 match 메서드에 대한 결과를 커스텀하게 만들 수 있다.
 */
{
    console.log('Hello'.match('hello'));
    console.log('Hello'.match('Hello'));
}
{
    class IgnoreCaseMatch {
        static new(value) {
            return new IgnoreCaseMatch(value);
        }

        constructor(value) {
            this.value = value;
        }

        [Symbol.match](other) {
            return other.toLowerCase().match(this.value.toLowerCase());
        }
    }

    // [hello]
    console.log('Hello'.match(IgnoreCaseMatch.new('hEllo')));

    // null
    console.log('Hello'.match(IgnoreCaseMatch.new('World')));
}