import { SodashChain } from "./SodashChain";

class Sodash {
  static #instance;
  static get shared() {
    if (!Sodash.#instance) {
      Sodash.#instance = new Sodash();
    }
    return Sodash.#instance;
  }

  constructor() {
    if (Sodash.#instance) {
      return Sodash.#instance;
    }
    Sodash.#instance = this;
  }

  chain(iterable) {
    return new SodashChain(iterable);
  }
}
const _ = Sodash.shared;
export default _;