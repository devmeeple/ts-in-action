/**
 * Loopholes of Any
 */
let number: number;
number = 10;

// number.toUpperCase();

// (number as any).toUpperCase();

const multiplyTwo = (x: number, y: number) => {
  return x * y;
};

const args1: any = '미플';
const args2: any = true;

multiplyTwo(args1, args2);
// multiplyTwo('미플', true);

const iu: any = { name: '아이유', age: 30 };
iu;

const callbackRunner = (x: number, y: number, callback: any) => {
  return callback(x);
};

const callback = (x: number, y: number) => {
  return x * y;
};

console.log(callbackRunner(5, 4, callback));
