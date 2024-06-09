/**
 * Callback 함수
 * 커스텀 로직의 동적 적용 (플러그인)
 */


function printString(str, plugin) {
    console.log('>>> This is string printer');
    console.log('>>> Your Content is:');
    console.log();
    const result = plugin(str);
    console.log(result);
    console.log();
    console.log('>>> Finished');
}

function translate(value) {
    // const result = fetch('url');
    return '안녕, 멋진 세상이야!';
}

printString('Hello, World', function (value) {
    return value.toUpperCase();
});


printString('Hello, World', function (value) {
    return `### ${value.toUpperCase()} ###`;
});

printString('Hello, World', function (value) {
    const translated = translate(value);
    return translated;
});
