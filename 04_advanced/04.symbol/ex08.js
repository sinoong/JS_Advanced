/**
 * Symbol.search
 * - String의 search 메서드에 대한 결과를 커스텀하게 만들 수 있다.
 */
{
    class ReverseSearch {
        static new(value) {
            return new ReverseSearch(value);
        }

        constructor(value) {
            this.value = value;
        }

        [Symbol.search](string) {
            return string.lastIndexOf(this.value);
        }
    }

    // 0
    console.log('test'.search('t'));

    // 3
    console.log('test'.search(ReverseSearch.new('t')));
}