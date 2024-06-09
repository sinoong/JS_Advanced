/**
 * 재귀 함수
 * 거듭 재, 돌아올 귀 -> 거듭해서 되돌아오는 함수
 */
{
  function countDown(n) {
    // 탈출(종료) 조건
    if (n < 1) {
      return;
    }
    console.log(n);

    // 재귀
    countDown(n - 1);
  }

  countDown(5);
}

{
  // factorial
  // n! = n * (n - 1) * (n - 2) * ... * 1
  function factorial(n) {
    if (n === 0) {
      return 1;
    }
    return n * factorial(n - 1);
  }
}

{
  // 객체 모든 속성 출력하기(indent 없이)
  function printObject(obj) {
    for (const key in obj) {
      const value = obj[key];
      if (typeof value === 'object' && !Array.isArray(value)) {
        console.log(`${key}:`);
        printObject(value);
      } else if (typeof value === 'object' && Array.isArray(value)) {
        console.log(`${key}: [${value}]`);
      } else {
        console.log(`${key}: ${value}`);
      }
    }
  }


  function printObject(obj, depth = 0) {
    const indent = ' '.repeat(depth * 2);
    console.log(`${indent}{`);
    for (const key in obj) {
      const value = obj[key];
      if (typeof value === 'object' && !Array.isArray(value)) {
        console.log(`${indent.repeat(2)}${key}:`);
        printObject(value, depth + 1);
      } else if (typeof value === 'object' && Array.isArray(value)) {
        console.log(`${indent.repeat(2)}${key}: [${value}]`);
      } else {
        console.log(`${indent.repeat(2)}${key}: ${value}`);
      }
    }
    console.log(`${indent}}`);
  }

  printObject({
    name: 'CodingMax1',
    info: {
      age: 30,
      address: {
        country: 'Korea',
        city: 'Seoul'
      },
      dogs: ['Coco', 'titi']
    }
  });
}


{
  // 재귀함수를 이용한 퀵정렬
  // 문제를 작은 문제로 나누어 해결하기
  function quickSort(arr) {
    // 원소가 없거나 1개이면 정렬이 필요없다.
    if (arr.length <= 1) {
      return arr;
    }

    // 기준 원소를 선택한다.
    const pivot = arr[0];

    // 기준보다 작은 그룹과 큰 그룹으로 나눈다.
    // 즉, 문제를 작은 문제로 나눈다.
    const less = [];
    const greater = [];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        less.push(arr[i]);
      } else {
        greater.push(arr[i]);
      }
    }

    // quickSort를 재귀 호출해서 더 작은 문제를 해결하도록 한다.
    return [...quickSort(less), pivot, ...quickSort(greater)];
  }

  // 사용하기
  const unsortedArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
  const sortedArray = quickSort(unsortedArray);

  // 출력은 [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
  console.log(sortedArray);
}