/**
 * 5.1.1 필수 매개변수
 *
 * 두 개의 매개변수를 가지는 함수 singTwo를 선언했다.
 * 자바스크립트와 다르게 선언된 모든 매개변수는 선택이 아닌 필수다.
 *
 * case1: 두 개의 인수가 필요하나, 1개만 제공
 * TS2554: Expected 2 arguments, but got 1.
 *
 * case3: 두 개의 인수가 필요하나, 3개를 제공
 * TS2554: Expected 2 arguments, but got 3.
 *
 * 다음과 같은 방법은 타입 안정성을 강화한다.
 */
function singTwo(first: string, second: string) {
  console.log(`첫번째: ${first} / 두번째: ${second}`);
}

// case1:
// singTwo('Pink + White');

// case2:
singTwo('Not Afraid', '개화');

// case3:
// singTwo('바람', 'Raise Up The Flag', '스토커');

/**
 * 5.1.2 선택적 매개변수
 *
 * 선택적 매개변수에는 항상 | undefined 유니언 타입이 추가되어 있음
 */
function announceSong(song: string, singer?: string) {
  console.log(`노래: ${song}`);

  if (singer) {
    console.log(`가수: ${singer}`);
  }
}

announceSong('그렇게 살아가는 것');
announceSong('그렇게 살아가는 것', undefined);
announceSong('그렇게 살아가는 것', '허회경');

/**
 * 함수에서 사용되는 모든 선택적 매개변수는 마지막 매개변수어야 한다. 필수 매개변수 전에 제공되면 구문 오류가 발생한다.
 * TS1016: A required parameter cannot follow an optional parameter.
 */

// function announceSinger(singer?: string, song: string) {}

/**
 * 5.1.4 나머지 매개변수
 */
function singAllTheSongs(singer: string, ...songs: string[]) {
  for (const song of songs) {
    console.log(`${singer} - ${song}`);
  }
}

singAllTheSongs('너드커넥션');
singAllTheSongs('이하이', '한숨', 'ONLY', '홀로');

/**
 * 5.3.2 매개변수 타입 추론
 *
 * forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
 * 제네릭을 사용하여 타입을 추론
 */
const bookList = [
  '리팩터링 2판',
  'Node.js 백엔드 개발자 되기',
  '러닝 타입스크립트',
];

bookList.forEach((book, index) => {
  console.log(`${book} is at index ${index}`);
});

/**
 * 5.4.1 void 반환 타입
 *
 * returnsVoid 함수는 아무것도 반환하지 않는다. (void)
 * void 를 string과 undefined 타입을 가진 변수에 할당하려고 하니 오류가 발생한다.
 * undefined와 void는 다르다.
 * TS2322: Type 'void' is not assignable to type 'string | undefined'.
 */
function returnsVoid() {
  return;
}

let lazyValue: string | undefined;

// lazyValue = returnsVoid();

/**
 * 5.4.2 never 반환 타입
 * @param message
 */
function fail(message: string): never {
  throw new Error(`Invariant failure: ${message}`);
}

function workWithUnsafeParam(param: unknown) {
  if (typeof param !== 'string') {
    fail(`param should be a string, not ${typeof param}`);
  }

  // 파라미터는 string 값으로 추론
  param.toUpperCase();
}

/**
 * 5.5 함수 오버로드
 *
 * 매개변수 2개를 가진 함수가 정의되어 있지 않기때문에 에러가 발생
 * TS2575: No overload expects 2 arguments, but overloads do exist that expect either 1 or 3 arguments.
 */
function createDate(timestamp: number): Date;
function createDate(month: number, day: number, year: number): Date;
function createDate(monthOrTimestamp: number, day?: number, year?: number) {
  return day === undefined || year === undefined
    ? new Date(monthOrTimestamp)
    : new Date(year, monthOrTimestamp, day);
}

createDate(554356800);
createDate(7, 27, 1987);

// createDate(4, 1);
