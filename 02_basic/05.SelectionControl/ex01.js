/**
 * if 문
 */
{
  let items = [];
  if (items.length === 0) {
    console.log('items가 비었습니다.');
  }
}

{
  let items = ['사과', '바나나'];
  if (items.length === 0) {
    console.log('items가 비었습니다.');
  } else {
    let firstItem = items[0];
    console.log(`첫번째 아이템은 ${firstItem} 입니다.`)
  }
}

{
  const grade = 85;

  if (grade >= 90) {
    console.log('A 학점');
  } else if (grade >= 80) {
    consooe.log('B 학점');
  } else if (grade >= 70) {
    console.log('C 학점');
  } else {
    console.log('좀 더 분발하세요')
  }
}