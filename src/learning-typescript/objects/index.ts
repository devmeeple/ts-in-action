/**
 * 4.1 객체 타입
 * 시인은 숫자 타입(number) born, 문자열 타입(string) name 을 갖는다.
 * 값의 속성에 접근하는 방법은 다음과 같이 이뤄진다.
 *
 * case1: 값.멤버
 * case2: 값['멤버']
 *
 * 변수에 포함되지 않은 속성 end에 접근 할 수 없다.
 * TS2339: Property 'end' does not exist on type '{ born: number; name: string; }'.
 */
const poet = { born: 1917, name: '윤동주' };

poet.name; // case1: string
poet['born']; // case2: number

// poet.end;

/**
 * 4.1.1 객체 타입 선언
 *
 * 이전과 동일한 타입을 가지는 poetLater 변수를 선언
 * 변수에 선언된 객체 타입 외에 다른 타입의 값을 직접 할당할 수 없다.
 *
 * TS2322: Type 'string' is not assignable to type '{ born: number; name: string; }'.
 */
let poetLater: {
  born: number;
  name: string;
};

// poetLater = {
//   born: 1935,
//   name: '윤동주',
// };

// poetLater = 'Sappho';

/**
 * 4.1.2 별칭 객체 타입
 *
 * 객체 타입을 선언할 때 타입 별칭을 할당해 사용하는 방법이 더 일반적임
 * 인터페이스(Interface) 키워드를 사용하는 방법도 선호됨(거의 동일하지만 차이가 있음)
 * 인터페이스는 7장에서 다룬다.
 */
type Singer = {
  born: number;
  name: string;
};

const singer = {
  born: 2000,
  name: '한로로',
};

/**
 * 4.2.1 사용 검사(Usage Checking)
 *
 * 스타벅스 타입은 drink, food 2가지 프로퍼티(속성)을 가진다.
 * 필수 속성을 선언하지 않으면 타입 오류가 발생한다.
 * TS2741: Property 'food' is missing in type '{ drink: string; }' but required in type 'Starbucks'.
 */
type Starbucks = {
  drink: string;
  food: string;
};

const hasBoth: Starbucks = {
  drink: '아이스 커피',
  food: '바질 토마토 크림치즈 베이글',
};

// const hasOnlyOne: StarbucksMenu = {
//   drink: '카페라떼',
// };

/**
 * 4.2.2 초과 속성 검사(Excess Property Checks)
 *
 * 책 타입은 title, author 프로퍼티를 가진다.
 * 이외에 필드에 접근할 때 초과 속성 검사에 의해 타입오류가 발생한다.
 * TS2353: Object literal may only specify known properties, and 'translator' does not exist in type 'Book'.
 */

type Book = {
  title: string;
  author: string;
};

const bookMatch: Book = {
  title: '러닝 타입스크립트',
  author: '조시 골드버그',
};

// const extraProperty: Book = {
//   translator: '고승원',
//   title: '러닝 타입스크립트',
//   author: '조시 골드버그',
// };

const existingObject = {
  translator: '고승원',
  title: '러닝 타입스크립트',
  author: '조시 골드버그',
};

const extraPropertyButOk: Book = existingObject;
