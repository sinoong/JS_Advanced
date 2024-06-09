/**
 * 삼항연산자
 */
let age = 20;
console.log(age >= 20 ? '성인' : '청소년');

let isLoggedIn = true;
isLoggedIn ? console.log('어서오세요!') : console.log('로그인을 해 주세요');

// if - else 를 간략하게
function getDiscount(isMember) {
  if (isMember) {
    return 0.1;
  } else {
    return 0;
  }
}

function getDiscount(isMember) {
  return isMember ? 0.1 : 0;
}

// 여러개의 삼항연산자
let x = 5;
const msg = x > 10 ? '10보다 큰 수' : x > 5 ? '5보다 큰수' : '5보다 작거나 같은 수';
console.log(msg);