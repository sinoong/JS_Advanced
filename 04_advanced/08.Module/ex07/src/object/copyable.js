export class Copyable {
  clone() {
    return new this.constructor().decode(this.encode());
  }
}