/**
 * Tagged 템플릿 함수
 */

// value만 대문자로 변경하기
function upperCase(strings, ...values) {
    console.log('strings', strings);
    console.log('values', values);
  
    let result = "";
  
    for (let i = 0; i < strings.length; i++) {
      result += strings[i];
  
      if (i < values.length) {
        result += String(values[i]).toUpperCase();
      }
    }
  
    return result;
}
  
const name = "CodingMax";
const age = 30;

console.log(upperCase`My name is ${name} and I am ${age} years old.`);