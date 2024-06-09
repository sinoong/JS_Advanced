/**
 * CommonJS 모듈
 */

function printObj(obj) {
  console.log(JSON.stringify(obj, null, 2));
}

module.exports = {
  printObj
}