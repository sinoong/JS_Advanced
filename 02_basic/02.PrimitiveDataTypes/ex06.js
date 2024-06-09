/**
 * boolean
 */

{
  let a = 10;
  let b = 5;

  console.log(a > b);
  console.log(a === b);
  console.log(a !== b);
}

{
  let TRUE = true;
  let FALSE = false;
  console.log(TRUE && FALSE); // AND 
  console.log(TRUE || FALSE); // OR 
  console.log(!TRUE); // NOT 
  console.log(!FALSE);
}

{
  console.log(Boolean(true));
  console.log(Boolean(42));
  console.log(Boolean('Hello'));
  console.log(Boolean(false));
  console.log(Boolean(null)); // false 
  console.log(Boolean(undefined)); // false 
  console.log(Boolean(0)); // false 
  console.log(Boolean(NaN)); // false 
  console.log(Boolean('')); // false
}