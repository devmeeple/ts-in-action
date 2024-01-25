/**
 * Tuple
 */
const iveTopMembers: string[] = ['안유진', '장원영', '레이'];

const numberAndStringTuple: [number, string] = [23, '미플'];

numberAndStringTuple.push('아이유');
console.log(numberAndStringTuple);

const unmodifiableTuple: readonly [number, string] = [23, '미플'];

// unmodifiableTuple.push();

/**
 * Tuple 유추하기
 */
const actress = ['김고은', '박소담', '전여빈'];

const actressTuple = ['김고은', '박소담', '전여빈'] as const;
const actressTupleConst = ['김고은', '박소담', '전여빈'] as const;

const stringArray: string[] = [...actressTuple, ...actressTupleConst];

/**
 * Named Tuple
 */
const namedTuple: [name: string, age: number] = ['미플', 3];

/**
 * Assigning Tuple to Tuple
 *
 * Tuple은 같은 타입끼리만 할당이 가능하다.
 */
const tuple1: [string, string] = ['아이유', '유애나'];
const tuple2: [number, number] = [1, 2];

// let tuple3: [boolean, boolean] = tuple1;
// let tuple4: [number, number, number] = tuple2;

const tuple5: [number, number] = tuple2;

/**
 * Tuple과 Array의 관계
 */
const ive: [string, string] = ['장원영', '안유진'];

const stringArr: string[] = ive;

// let ive2: [string, string] = stringArr;

/**
 * Multi Dimensional Tuple
 */
const tuple2D: [string, number][] = [
  ['미플', 3],
  ['아이유', 31],
  ['김고은', 30],
];
