/**
 * bit 연산자의 다양한 활용
 */

/**
 * IP 서브넷 마스크
 * - IP 서브넷 마스크는 특정 IP에서 해당 IP가 속한 서브넷 IP를 구할 때 사용한다.
 * - 그래서 여러 IP가 있을 때 같은 서브넷에 속한 IP인지 검사할 수 있다.
 * - 이 때, 비트 연산을 사용하면 아주 빠르게 판단할 수 있다.
 */

// 정수를 하나의 IP값으로 변경한다.
function ipToInt(a, b, c, d) {
  // 192.168.1.15 처럼 각 1바이트 값이므로 32비트 값을 반환한다.
  return (a << 24) | (b << 16) | (c << 8) | d;
}

// 정수값에 문자열 형식의 ip 표현값을 반환한다.
function ipToStr(ip) {
  const a = (ip >> 24) & 255;
  const b = (ip >> 16) & 255;
  const c = (ip >> 8) & 255;
  const d = ip & 255;
  return `${a}.${b}.${c}.${d}`;
}

function getNetwordAddress(ip, subnetMask) {
  return ip & subnetMask;
}

const ip1 = ipToInt(192, 168, 1, 10);
const ip2 = ipToInt(192, 168, 1, 25);
const ip3 = ipToInt(172, 33, 9, 17);

const subnetMask = ipToInt(255, 255, 255, 0);

const network1 = getNetwordAddress(ip1, subnetMask);
const network2 = getNetwordAddress(ip2, subnetMask);
const network3 = getNetwordAddress(ip3, subnetMask);

console.log(ipToStr(network1));
console.log(ipToStr(network2));
console.log(ipToStr(network3));

