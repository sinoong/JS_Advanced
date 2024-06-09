/**
 * 어떻게 실행될까?
 */

console.log('start');

setTimeout(() => {
    console.log('Timeout');
}, 0);

new Promise((resolve, reject) => {
    resolve('Promise Resolved')
})
.then((value) => console.log(value));

console.log('end');