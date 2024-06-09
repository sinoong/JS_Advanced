/**
 * for 문
 */
{
  for (var i = 1; i <= 3; i++) {
    console.log(i);
  }
  console.log('종료후', i);
}

{
  for (let i = 1; i <= 10; i++) {
    if (i === 7) {
      console.log('for문을 종료합니다.', i);
      break;
    }
    console.log(i);
  }
}

{
  for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      continue;
    }
    console.log(i);
  }
}

{
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
  for (let i = 1; i <= 9; i++) {
    console.log(`2 * ${i} = ${2 * i}`);
  }
}

{
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