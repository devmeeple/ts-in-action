/**
 * Type Inference
 *
 * 타입 추론
 */
const stringType = 'string';
let booleanType = true;
const numberType = 30;

booleanType = false;

// booleanType = 'false';

const constStringType = 'const string';
const constBooleanType = true;

const yuJin = {
  name: '안유진',
  year: 2003,
};

const yuJin2 = {
  name: '안유진',
  year: 2003,
};

yuJin2.name = '미플';
console.log(yuJin2);

const yuJin3 = {
  name: '안유진' as const,
  year: 2003 as const,
};

// yuJin3.name = '미플';
console.log(yuJin3.name);
console.log(yuJin2.name);

/**
 * Array
 */
const numbers = [1, 2, 3, 4, 5];
const numbersAndString = [1, 2, 3, '4', '5', '6'];

// numbers.push('6');
const number = numbers[0];
const nos = numbersAndString[0];
const nos2 = numbersAndString[100];

// tuple
const twoNumbers = [1, 3] as const;

// twoNumbers[0] = 10;
// twoNumbers.push(100);
const first = twoNumbers[0];
// const first2 = twoNumbers[3];
