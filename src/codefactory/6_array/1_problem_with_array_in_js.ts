/**
 * Problem with Array in JS
 */
const numbers = [1, '2', 3, '4', 5];

const strings: string[] = ['1', '2', '3'];

// strings.push(1);

const stringsOrNumbersArray: (string | number)[] = [1, '2', 3, '4'];

let stringArrNumberArr: string[] | number[] = [1, 2, 3];

stringArrNumberArr = ['1', '2', '3'];

let stringOrNumberArr: string | number[] = [1, 2, 3];

stringOrNumberArr = '3';

const boolsArr = [true, false, true];

boolsArr.push(false);

// boolsArr.push(1);

const onlyString = ['1', '2', '3'];
const onlyNumbers = [1, 2, 3];

for (let i = 0; i < onlyString.length; i++) {
  const item = onlyString[i];
}

for (const item of onlyNumbers) {
}

const number3 = onlyNumbers[0];

const number4 = onlyNumbers[9999];
