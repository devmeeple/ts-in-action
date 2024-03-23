/**
 * 6.1.1 배열과 함수 타입
 *
 * case1: 문자열 배열을 반환
 * case2: 함수들을 담고 있는 문자열 배열
 */
// case1:
let createStrings: () => string[];
// case2:
let stringCreators: (() => string)[];

/**
 * 6.1.2 유니언 타입 배열
 *
 * case1: string 또는 number[] 배열의 값이 할당될 수 있음
 * case2: 배열의 요소가 string 또는 number 배열
 */
// case1:
let stringOrArrayOfNumbers: string | number[];
// case2:
let arrayOfStringOrNumbers: (string | number)[];

const namesMaybe = ['민수', '철수', undefined]; // (string | undefined)[]

/**
 * 6.1.4 다차원 배열
 *
 * (number[])[] 와 같은 형식으로도 표현 가능
 */
const arrayOfArraysOfNumbers: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

/**
 * 6.2.1 주의사항: 불안정한 멤버
 *
 * 컴파일러에서 에러를 출력하지 않는다
 * 런타임에서 에러가 출력된다
 */
function withElements(elements: string[]) {
  console.log(elements[999].length);
}

withElements([`It's`, 'over']);

/**
 * 6.3.1 스프레드
 */
const ive = ['안유진', '장원영', '레이'];

const iveAges = [20, 19, 20];

const conjoined = [...ive, ...iveAges];

/**
 * 6.3.2 나머지 매개변수 스프레드
 */
function logWarriors(greeting: string, ...names: string[]) {
  for (const name of names) {
    console.log(`${greeting}, ${name}`);
  }
}

const warriors = ['Cathay Williams', 'Lozen', 'Nzinga'];

logWarriors('Hello', ...warriors);

const birthYears = [1844, 1840, 1583];

// logWarriors('Born in', ...birthYears);

/**
 * 6.4 튜플
 *
 * 튜플과 배열 구조 분해 할당(array destructuring)
 */
const [year, warrior] =
  Math.random() > 0.5 ? [340, 'Archidamia'] : [1828, 'Rani of Jhansi'];

/**
 * 6.4.1 튜플 할당 가능성
 *
 * 가변 길이의 배열 타입보다 구체적으로 처리됨 -> 가변 길이의 배열을 할당할 수 없음
 * 튜플 pariTupleLoose는 고정길이를 가지지만 pariLoose는 배열이다. 배열은 길이가 변할 수 있어서
 * 튜플에 할당할 수 없다.
 * TS2322: Type '(number | boolean)[]' is not assignable to type '[boolean, number]'.
 * Target requires 2 element(s) but source may have fewer.
 */

const pariLoose = [false, 123];

// const pariTupleLoose: [boolean, number] = pariLoose;

/**
 * 6.4.2 튜플 추론
 *
 * case1: 명시적 튜플 타입
 * case2: const assertion 읽기 전용
 */
// case1:
function firstCharAndSizeExplicit(input: string): [string, number] {
  return [input[0], input.length];
}

const [firstChar, size] = firstCharAndSizeExplicit('Cathay Williams');

// case2:
const unionArray = [1157, 'Tomoe'];

const readonlyTuple = [1157, 'Tomoe'] as const;
