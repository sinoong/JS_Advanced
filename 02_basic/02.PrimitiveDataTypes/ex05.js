/**
 * 문자열, string
 */
{
  console.log('abed'.length);
  let name = 'CodingMax';
  let char = 'A';
  let char2 = "A";

  let firstIndex = 0;
  let lastIndex = name.length - 1;
  console.log(name[0]);
  console.log(name[name.length - 1]);
  for (let i = 0; i < name.length; i++) {
    console.log(name[i]);
  }
}

{
  let sum = `1 + 2 = ${1 + 2}`;
  console.log({ sum });
}

{
  for (let i = 1; i <= 9; i++) {
    console.log(`2 * ${i} = ${2 * i}`);
  }
}

{
  let message = "He said: 'My name is Jim'";
  console.log(message);
  let message2 = 'He said: "My name is Jim"'
  console.log(message2);
  let greeting = 'Hello\nWorld';
  console.log(greeting);
  let tab = 'Hello\tWorld'
  console.log(tab);
  console.log(String.raw`Hello\nworld`);
  const msg = `안녕하세요!
오늘은 날씨가 좋네요~
커피 한잔 어때요?`;
  console.log(msg);
}