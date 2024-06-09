/**
 * Optional Chaining 연산자
 */
{
  const user = {
    name: 'CodingMax',
    info: {
      age: undefined,
      country: 'Korea'
    }
  };

  console.log(user.name);
  console.log(user.info?.age);
  console.log(user.info?.country);
  console.log(user.address?.city);

  const city = user.address?.city ?? 'Seoul'
  console.log({ city });

  if (user.address && user.address.city) {
    console.log(user.address.city);
  } else {
    console.log('Seoul');
  }

}