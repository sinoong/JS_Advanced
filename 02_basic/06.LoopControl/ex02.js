/**
 * while과 do~while 문
 */
{
  let i = 0;
  while (i <= 3) {
    console.log(i);
    i++;
  }
  console.log('루프종료', i);

  for (let i = 0; i <= 3; i++) {
    console.log(i);
  }
}

{
  const week = ['월', '화', '수', '목', '금', '토', '일'];
  let day = 0;
  let age = 30;
  while (true) {
    // 루프 종료 조건
    if (age === 32) {
      console.log('로또 당첨');
      break;
    }

    switch (week[day % week.length]) {
      case '토':
      case '일':
        console.log('휴식');
        break;
      default:
        console.log('출퇴근');
        break;
    }

    day++;
    if (day > 365) {
      day = 0;
      age++;
    }
  }
}

{
  do {
    console.log('안녕하세요')
  } while (false);
}

{
  let success = false;
  let retryCount = 0;
  do {
    success = requestAPI();
    if (!success) {
      retryCount++;
    }
  } while (!success && retryCount < 3);
}