/**
 * for 문
 * 바ㄴ복은 재실행하는 것
 * 프로그래밍에서도 반복을 표한할 일이 많다
 * 반복을 계속하는데 종료 조건이 true가 될 때까지 코드블럭을 재실행한다
 * 프로그래밍에서는 루프의 종료조건이 반드시 필요합니다.
 */
{
  for (var i = 1; i <= 3; i++) {
    console.log(i);
  }
  console.log('종료후', i); // 스코프 밖이니까 var로 해야 확인 가능
}

{
  // brake
  for (let i = 1; i <= 10; i++) {
    if (i === 7) {
      console.log('for문을 종료합니다.', i);
      break;
    }
    console.log(i);
  }
}

{
  // continue 건너 뛰기 
  for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      continue;
    }
    console.log(i);
  }
}

{
  // 초기화 식 밖으로 빼도 됨 
  let i = 0;
  for (; i < 3; i++) {
    console.log(i);
  }
}

{
  let i = 0;
  for (; ; i++) {
    if (!(i < 3)) {
      break;
    }
    console.log(i);
  }
}

{
  let i = 0;
  for (; ;) {
    if (!(i < 3)) {
      break;
    }
    console.log(i);
    i++;
  }
}

{
  // 2단
  for (let i = 1; i <= 9; i++) {
    console.log(`2 * ${i} = ${2 * i}`);
  }
}

{
  // 구구단
  for (let i = 2; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
      console.log(`${i} * ${j} = ${i * j}`);
    }
  }
}

{
  let matrix = [
    [1, 2],
    [3, 4]
  ];

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++)
      console.log(matrix[row][col]);
  }
}

{
  // 3차원 배열
  let matrix = [
    [
      [1, 2, 3],
      [4, 5, 6]
    ],
    [
      [7, 8, 9]
    ]
  ];

  for (let x = 0; x < matrix.length; x++) {
    for (let y = 0; y < matrix[x].length; y++) {
      for (let z = 0; z < matrix[x][y].length; z++) {
        console.log(matrix[x][y][z]);
      }
    }
  }
}