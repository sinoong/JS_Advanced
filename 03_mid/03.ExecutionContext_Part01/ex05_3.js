// strict 모드에 상관 없이 eval 실행 컨텍스트는 외부 스코프에 접근할 수 있다.
{
	const x = 5;
	function test() {
		const y = 10;
		eval(`console.log(x + y);`);
		console.log('end of test');
	}
	test(); // 15
}
//---------
{
	'use strict'; // strict 모드 활성화
	const x = 5;
	function test() {
		const y = 10;
		eval(`console.log(x + y);`);
		console.log('end of test');
	}
	test(); // 15
}
//---------

{
	const x = 5;
	function test() {
		'use strict'; // strict 모드 활성화
		const y = 10;
		eval(`console.log(x + y);`);
		console.log('end of test');
	}
	test(); // 15
}