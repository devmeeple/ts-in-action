/**
 * 10.1 제네릭 함수
 */
function identity<T>(input: T) {
  return input;
}

const numeric = identity('me');
const stringy = identity(123);

// 화살표 함수(Arrow Function)
const identityArrowFunction = <T>(input: T) => input;
identityArrowFunction(123);

/**
 * 10.1.1 명시적 제네릭 호출 타입
 */
function logWrapper<Input>(callback: (input: Input) => void) {
  return (input: Input) => {
    console.log('Input:', input);
    callback(input);
  };
}

// input: string => void
logWrapper((input: string) => {
  console.log(input.length);
});

// input: unknown => void
logWrapper((input) => {
  // console.log(input.length);
});

/**
 * 10.1.2 다중 함수 타입 매개변수
 */
function makeTuple<First, Second>(first: First, second: Second) {
  return [first, second] as const;
}

const tuple = makeTuple(true, 'abc');

/**
 * 10.2 제네릭 인터페이스
 */
interface Box<T> {
  inside: T;
}

const stringyBox: Box<string> = {
  inside: 'abc',
};

const numberBox: Box<number> = {
  inside: 123,
};

/**
 * 10.3 제네릭 클래스
 */
class Secret<Key, Value> {
  key: Key;
  value: Value;

  constructor(key: Key, value: Value) {
    this.key = key;
    this.value = value;
  }

  getValue(key: Key): Value | undefined {
    return this.key === key ? this.value : undefined;
  }
}

const storage = new Secret(12345, 'luggage');
storage.getValue(1987);

/**
 * 10.7.1 Promise 생성
 */
// Promise<unknown>
const resolvesUnknown = new Promise((resolve) => {
  setTimeout(() => resolve('Done!'), 1000);
});

// Promise<string>
const resolvesString = new Promise<string>((resolve) => {
  setTimeout(() => resolve('Done!'), 1000);
});

// Promise<string>
const textEventually = new Promise<string>((resolve) => {
  setTimeout(() => resolve('Done!'), 1000);
});

// Promise<number>
const lengthEventually = textEventually.then((text) => text.length);

/**
 * 10.7.2 async 함수
 */
async function lengthAfterSecond(text: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return text.length;
}

async function lengthImmediately(text: string) {
  return text.length;
}
