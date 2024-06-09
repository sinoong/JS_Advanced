export class Hasher {
  static hashString(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      // 정수값으로 해쉬값을 만든다.
      // 해쉬 생성 알고리즘은 임의로 만든 것이다.
      const charCode = str.charCodeAt(i);
      hash = (hash << 5) - hash + charCode;
      hash = hash & hash;
    }
    return hash;
  }

  static hashObject(obj) {
    return this.hashString(JSON.stringify(obj));
  }
}