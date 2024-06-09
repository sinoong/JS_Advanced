/**
 * undefined와 null
 */
{
  var a;
  console.log({ a });

  let b;
  console.log({ b });

  const c = 12;
  console.log({ c });
}

{
  var a = null;
  console.log({ a });

  let b = null;
  console.log({ b });

  const c = null;
  console.log({ c });
}

{
  function div(a, b) {
    if (b === 0) {
      return null;
    }
    return a / b;
  }
  console.log(div(10, 0));
}