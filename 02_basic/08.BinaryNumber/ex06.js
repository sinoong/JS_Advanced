/**
 * 웹 개발에는 JSON 포멧을 사용하여 텍스트 기반으로 데이터를 주고 받기 
 * 때문에 엔디언에 크게 신경 쓰지 않아도 된다.
 * 다만, 바이너리로 데이터를 주고 받을 때는 엔디언에 주의해야 한다.
 * 
 * 자바스크립트에는 Endian을 설정하는 일부 API가 제공된다.
 * 바로 TypedArray와 DataView 이다.
 * TypedArray는 JavaScript에서 바이너리 데이터를 위한 배열로
 * Int8Array, Uint8Array, Int16Array, Uint32Array 등과 같은 여러 타입이 있다.
 * 이 배열들은 기본적으로 호스트 컴퓨터의 엔디언을 따른다.
 * 
 * DataView는 ArrayBuffer의 바이너리 데이터에 대한 low-level 인터페이스를 제공하여
 * 엔디언을 지정하여 데이터를 읽거나 쓸 수 있다.
 */

{
  let buffer = new ArrayBuffer(4);
  let view = new DataView(buffer);

  // Little Endian
  view.setUint16(0, 12345, true);
  const value = view.getUint16(0, true);
  console.log(value);
}


{
  let buffer = new ArrayBuffer(4);
  let view = new DataView(buffer);

  // Big Endian
  view.setUint16(0, 12345, false);
  const value = view.getUint16(0, false);
  console.log(value);
}

{
  let buffer = new ArrayBuffer(4);
  let view = new DataView(buffer);

  // Big Endian
  view.setUint16(0, 12345, false);
  // Little Endian
  const value = view.getUint16(0, true);
  // 서로 엔디언이 다르면 틀린 값이 출력므로 주의해야 한다.
  console.log(value);
}
