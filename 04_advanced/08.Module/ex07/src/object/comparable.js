import { Hasher } from "../utils/";

export class Comparable {
  equals(other) {
    if (!(other instanceof User)) {
      return false;
    }
    return Hasher.hashObject(this) === Hasher.hashObject(other);
  }
}