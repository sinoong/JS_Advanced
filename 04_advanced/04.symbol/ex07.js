/**
 * Symbol.replace
 * - String의 replace 메서드에 대한 결과를 커스텀하게 만들 수 있다.
 */
{
    class GlobalReplacer {
        static new(value) {
          return new GlobalReplacer(value);
        }
      
        constructor(value) {
          this.value = value;
        }
      
        /**
         * @param {*} string: 원본 문자열
         * @param {*} newValue: 원본 문자열에서 this.value를 대체할 새로운 문자열 값
         * @returns 변경된 문자열
         */
        [Symbol.replace](string, newValue) {
          // /this.value/g
          const regExp = new RegExp(this.value, 'g');
          return string.replace(regExp, newValue);
        }
    }

    console.log('hello hello World!'.replace(GlobalReplacer.new('hello'), '헬로!'));     
}