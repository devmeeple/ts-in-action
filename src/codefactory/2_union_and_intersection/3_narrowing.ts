/**
 * Narrowing
 *
 * Narrowing은 Union 타입에서 더욱 구체적인 타입으로
 * 논리적으로 유추 할 수 있게 되는 걸 의미한다.
 */
// let numberOrString: number | string = '미플';
// numberOrString;
//
// const decimal = 12.3278;
// console.log(decimal.toFixed(2));

// numberOrString.toFixed();

/**
 * Narrowing 종류
 *
 * 1) Assigment Narrowing
 * 2) typeof Narrowing
 * 3) Truthiness Narrowing
 * 4) Equality Narrowing
 * 5) in operator narrowing
 * 6) instanceof narrowing
 * 7) discriminated union narrowing (차별된 유니온 내로잉)
 * 8) exhaustiveness checking
 */

// (1) Assigment Narrowing
// 특정 값을 할당해서 내로잉
let numbOrString: number | string = '아이유';

numbOrString.toString();

// (2) typeof narrowing
numbOrString = Math.random() > 0.5 ? 1123 : '아이유';

if (typeof numbOrString === 'string') {
  numbOrString;
} else {
  numbOrString;
}

// (3) Truthiness Narrowing
const nullOrString: null | string[] =
  Math.random() > 0.5 ? null : ['아이유', '레드벨벳'];

if (nullOrString) {
  nullOrString;
} else {
  nullOrString;
}

// (4) Equality Narrowing
const numbOrString2: number | string = Math.random() > 0.5 ? 1123 : '아이유';
const stringOrBool2: string | boolean = Math.random() > 0.5 ? '아이브' : true;

if (numbOrString2 === stringOrBool2) {
  numbOrString2;
  stringOrBool2;
} else {
  numbOrString2;
  stringOrBool2;
}

const numbOrStringOrNull: number | string | null =
  Math.random() > 0.5 ? 1123 : Math.random() > 0.5 ? '안유진' : null;

if (typeof numbOrStringOrNull === 'number') {
  numbOrStringOrNull;
} else {
  numbOrStringOrNull;
}

// (5) in operator narrowing
interface Human {
  name: string;
  age: number;
}

interface Dog {
  name: string;
  type: string;
}

const human: Human = {
  name: '안유진',
  age: 20,
};

const dog: Dog = {
  name: '오리',
  type: 'Yorkshire Terrier',
};

const humanOrDog: Human | Dog = Math.random() > 0.5 ? human : dog;

if ('type' in humanOrDog) {
  humanOrDog;
} else {
  humanOrDog;
}

// (6) instanceof narrowing
const dateOrString: Date | string = Math.random() > 0.5 ? new Date() : '미플';

if (dateOrString instanceof Date) {
  dateOrString;
} else {
  dateOrString;
}

// (7) Discriminated Union Narrowing
interface Animal {
  type: 'dog' | 'human';
  height?: number;
  // 강아지의 종
  breed?: string;
}

const animal: Animal =
  Math.random() > 0.5
    ? {
        type: 'human',
        height: 177,
      }
    : {
        type: 'dog',
        breed: 'Yorkshire Terrier',
      };

if (animal.type === 'human') {
  animal.height;
} else {
  animal.breed;
  animal.height;
}

interface Human2 {
  type: 'human';
  height: number;
}

interface Dog2 {
  type: 'dog';
  breed: string;
}

interface Fish2 {
  type: 'fish';
  length: number;
}

type HumanOrDog2 = Human2 | Dog2 | Fish2;

const humanOrDog2: HumanOrDog2 =
  Math.random() > 0.5
    ? {
        type: 'human',
        height: 177,
      }
    : Math.random() > 0.5
      ? {
          type: 'dog',
          breed: 'Yorkshire Terrier',
        }
      : {
          type: 'fish',
          length: 12,
        };

if (humanOrDog2.type === 'human') {
  humanOrDog2;
} else {
  humanOrDog2;
}

// (8) Exhaustiveness Checking
switch (humanOrDog2.type) {
  case 'human':
    humanOrDog2;
    break;
  case 'dog':
    humanOrDog2;
    break;
  case 'fish':
    humanOrDog2;
    break;
  default:
    humanOrDog2;

    const _check: never = humanOrDog2;
    break;
}
