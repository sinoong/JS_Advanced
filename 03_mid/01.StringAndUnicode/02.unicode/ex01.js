/**
 * 유니코드는 전 세계의 모든 문자를 고유한 숫자 값으로 표현하기 위한 국제 표준이다.
 * 현재 0x0000부터 0x10FFFF까지의 범위를 가진다.
 * 그러나 16비트 기반의 시스템에서는 이 전체 범위를 직접 표현할 수 없다.
 * 따라서, 유니코드 문자 중 일부는 16비트 시스템에서도 사용될 수 있도록 2개의 16비트 단위로 나눠서 표현해야 하는데, 
 * 이 때 사용되는 16비트 단위를 'Surrogate(서로게이트)'라고 한다.
 *
 * 자바스크립트는 문자열을 UTF-16 으로 인코딩하여 저장한다.
 * 따라서 문자열의 각 문자가 16비트로 표현된다.
 * 이를 통해 대부분의 유니코드 문자를 표현할 수 있다.
 * 다만, 16비트로 표현할 수 없는 범위에 있는 유니코드 문자는 2개의 16비트, 즉 32비트인 서로게이트 페어로 표현된다.
 * 'a' 문자는 한 개의  16비트로 표현된다.
 * '🌎' 문자는 두 개의 16비트로 표현된다.
 * 
 * 서로게이트는 두 종류로 나뉜다.
 * - 상위 서로게이트: 0xD800 ~ 0xDBFF 범위
 * - 하위 서로게이트: 0xDC00 ~ 0xDFFF 범위
 * - 서로게이트는 UTF-16에서 주로 사용되며 UTF-32나 UTF-8에서는 사용되지 않는다.
 * - 상위, 하위 서로게이트로 한 문자를 표현하는 것을 서로게이트 페어로 문자를 표현한다고 한다.
 * - 즉, 서로게이트는 유니코드 코드 포인트의 특별한 하위 범위로 UTF-16 인코딩에서 16비트만으로
 * - 표현할 수 없는 문자들을 표현하기 위한 목적으로 사용한다.
 */

/**
 * charAt은 주어진 index에 하나의 UTF-16 코드 유닛(서로게이트)을 반환한다.
 * 유니코드를 테스트할 때, 이모지를 활용하면 좋다.
 */
{

  const str = 'Hello🌎';
  // 문자열 길이는 7이다. 따라서 위 이모지는 4바이트(2개의 서로게이트)문자다.
  console.log(str.length);
  // 🌎의 UTF-16 인코딩 코드는 아래 주소에서 확인할 수 있다.
  // https://symbl.cc/en/1F30E/
  // D8 3C DF 0E	

  // 자바스크립트에서 유니코드 포인트를 문자열 내에서 직접 사용할 때는 
  // \u(유니코드 이스케이프) 를 사용하여 유니코드 코드 포인트를 사용할 수 있다.
  console.log('\u2730'); // 16비트 코드 포인트
  console.log('\u{1F30E}'); // 16비트가 넘는, 즉 4자리가 넘는 유니코드 포인트는 중괄호{}로 묶어서 표현한다.
  console.log('\uD83C\uDF0E'); // 상위, 하위 서로게이트를 사용할 수도 있다.


  // index 5와 6을 주어 출력해 봐도 🌎 는 출력되지 않는다.
  // 그 이유는 charAt을 사용하면 여러 개의 코드 유닛으로 구성되어 있는 이모지 문자를
  // 쪼개어 개별적으로 접근하기 때문이다.
  console.log(str[5]);
  console.log(str.charAt[5]);
  console.log(str[6]);
  console.log(str.charAt[6]);

  // 옳게 접근하기 위해서는 codePointAt을 사용해야 한다.
  // codePointAt은 주어진 인덱스에 있는 문자의 유니코드 포인트를 반환한다.
  console.log(str.codePointAt(5)); // 127758 이다. (0x1F30E 의 10진수가 127758 이다)
  // 정수인 유니코드 포인트를 유니코드 문자로 표현하기 위해서는 String.fromCodePoint 정적 메서드를 사용해야 한다.
  console.log(String.fromCodePoint(str.codePointAt(5)));
}

/**
 * charCodeAt
 * - 문자열의 지정된 인덱스에서 UTF-16 코드 단위를 반환한다.
 * - 서로게이트 페어로 표현되는 문자는 위치에 따라 상위 또는 하위 서로게이트 16비트 값을 반환한다.
 * 
 * codePointAt
 * - 문자열의 지정된 인덱스에서 전체 유니코드 코드 포인트를 반환한다.
 * - 서로게이트 페어로 표현되는 문자의 경우, 해당 문자의 전체 유니코드 값을 반환한다.
 * - 즉, 상위와 하위 서로게이트 값을 조합한 결과를 반환한다.
 * 
 * 즉, charCodeAt 은 UTF-16 코드 유닛(단위)을 반환하고 
 * codePointAt 은 전체 유니코드 값을 반환한다.
 */
{
  const str = '🌎';
  console.log(str.charCodeAt(0)); // 55356 (상위 서로게이트 값)
  console.log(str.charCodeAt(1)); // 57102 (하위 서로게이트 값)
  console.log(str.codePointAt(0)); // 127758 (전체 유니코드 값, 이모지인 이 경우 상위, 하위 서로게이트 값을 조합한 전체 유니코드 값)

  // fromCodePoint를 사용할 때, 유니코드 유닛 값도 직접 사용할 수 있다.
  console.log(String.fromCodePoint(55356, 57102));

  // fromCharCode를 사용할 수도 있다.
  console.log(String.fromCharCode(55356, 57102));
}

/**
 * 문자열이 서로게이트 페어로 표현되는 Unicode를 포함하고 있는지 판단하기 위해서 
 * 유니코드 포인트가 \u{10000} 보다 크거나 같은 문자가 있는지 판단하면 된다.
 * 이 값은 BMP(Basic Multilingual Plane)을 벗어나는 문자값이다.
 * BMP는 유니코드의 첫 번째 평면으로 U+0000부터 U+FFFF까지의 코드 포인트를 포함하고 있다.
 * 0x0000부터 0xFFFF만 사용하므로 한 문자를 표현할 때 16비트만 사용한다.
 * 이 범위를 벗어난 문자부터 문자를 표현하기 위해 상위, 하위 서로게이트 페어가 필요하다.
 * BMP는 많은 일반적인 문자와 기호를 포함하며, 이 평면에 속하지 않는 문자는 보충 평면(Supplementary Planes)에 속하게 된다.
 */
{
  function includes32UnicodeChar(str) { 
    for (const char of str) { 
      if (char.codePointAt(0) >= 0x10000) { 
        return true; 
      } 
    } 
    return false; 
  }

  console.log(includes32UnicodeChar('Hello'));
  console.log(includes32UnicodeChar('Hello 🌎'));
}

/**
 * encodeURIComponent로 유니코드 문자를 인코딩할 때, 
 * 서로게이트 페어로 표현되는 문자는 두 개의 서로게이트를 모두 인자값으로 전달해야 한다.
 */
{
  
  // encodeURIComponent('\uD83C'); // 오류발생
  encodeURIComponent('\uD83C\uDF0E');
}