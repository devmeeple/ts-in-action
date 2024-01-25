/**
 * Casting
 *
 * TS에서 Casting을 하면 JS에서는 적용이 안된다.
 */
const meeple = '미플';
const testNumber = 3;

console.log(meeple.toUpperCase());
// console.log(testNumber.toUpperCase());

const sampleNumber: any = 5;
// console.log(sampleNumber.toUpperCase());
const stringVar = sampleNumber as string;

console.log(typeof (sampleNumber as string));

const number = 5;

console.log((number as any).toUpperCase());
