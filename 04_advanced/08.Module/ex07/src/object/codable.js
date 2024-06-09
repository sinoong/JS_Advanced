export class Codable {
  encode() {
    return JSON.stringify(this);
  }

  decode(value) {
    const obj = JSON.parse(value);
    this.id = obj.id;
    this.name = obj.name;
    this.email = obj.email;
    return this;
  }
}