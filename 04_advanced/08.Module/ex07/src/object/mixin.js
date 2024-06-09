export function mixin(object, ...components) {
  for (const component of components) {
    for (const prop of Object.getOwnPropertyNames(component)) {
      if (!(prop in object)) {
        object[prop] = component[prop];
      }
    }
  }
  return object;
}