/**
 * bit 연산자의 다양한 활용
 */

/**
 * 각 비트 자리수를 특정 옵션 플래그로 설정하고 
 * 해당 플래가 있는지 없는지 검사하는 비트마스크 기법이 많이 사용된다.
 */
{
  const RED = 0b001; // 1
  const GREEN = 0b010; // 2
  const BLUE = 0b100; // 4

  let colors = RED | BLUE;

  if (colors & RED) {
    console.log('빨간색을 사용할 수 있습니다');
  }

  if (colors & GREEN) {
    console.log('녹색을 사용할 수 있습니다');
  }

  if (colors & BLUE) {
    console.log('파란색을 사용할 수 있습니다');
  }

  function colorName(color) {
    if (color === RED) {
      return '빨간색';
    } else if (color === GREEN) {
      return '녹색';
    } else if (color === BLUE) {
      return '파란색';
    }
    return '알수없음';
  }

  function hasColor(target, color) {
    if (target & color) {
      console.log(`${colorName(color)}를 사용할 수 있습니다.`);
    } else {
      console.log(`${colorName(color)}를 사용할 수 없습니다.`);
    }
  }

  function enableColor(target, color) {
    target = target | color;
    return target;
  }

  function disableColor(target, color) {
    target = target & ~color;
    return target;
  }

  colors = disableColor(colors, RED);
  colors = disableColor(colors, BLUE);

  hasColor(colors, RED);
  hasColor(colors, BLUE);
  hasColor(colors, GREEN);

  colors = enableColor(colors, RED);
  colors = enableColor(colors, GREEN);

  hasColor(colors, RED);
  hasColor(colors, BLUE);
  hasColor(colors, GREEN);
}

/**
 * 
 */