/**
 * for of 문
 */
{
  const chars = ['a', 'b', 'c', 'd'];
  for (const value of chars) {
    console.log(value);
  }

  const msg = 'Hello';
  for (const value of msg) {
    console.log(value.toUpperCase());
  }
}

{
  const iterableObject = {
    [Symbol.iterator]: function () {
      let count = 0;
      return {
        next() {
          if (count < 10) {
            return { done: false, value: count++ };
          } else {
            return { done: true };
          }
        }
      };
    }
  };

  for (const value of iterableObject) {
    console.log(value);
  }
}