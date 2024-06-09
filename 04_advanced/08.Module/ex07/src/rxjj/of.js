import { Observable } from "./observable";

Observable.of = function(...items) {
  return new Observable(function* () {
    for (let item of items) {
      yield item;
    }
  });
}

export function of(...items) {
  return Observable.of(...items);
}