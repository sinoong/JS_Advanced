/**
 * Tagged 템플릿 함수
 */
function css(strings, ...values) {
  console.log('strings', strings);
  console.log('values', values);
  
  let result = "";

  for (let i = 0; i < strings.length; i++) {
    result += strings[i];

    if (i < values.length) {
      result += values[i];
    }
  }

  return result;
}

const color = "blue";
const fontSize = "16px";

const style = css`
  .container {
    color: ${color};
    font-size: ${fontSize};
  }
`;

console.log(style);

// ".container {
//   color: blue;
//   font-size: 16px;
// }"