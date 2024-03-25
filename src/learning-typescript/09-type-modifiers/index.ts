/**
 * 9.1.1 any 다시 보기
 *
 * any 타입으로 매개변수를 정의하여 런타임 오류를 발생시켰다
 * any 타입은 타입 검사를 수행하지 않기때문에 도움을 받을 수 없다(타입 오류)
 * TypeError: name.toUpperCase is not a function
 */
function greetComedian(name: any) {
  console.log(`Announcing ${name.toUpperCase()}!`);
}

// greetComedian({ name: 'Bea Arthur' });

/**
 * 9.1.2 unknown
 */
function greetComedianSafety(name: unknown) {
  if (typeof name === 'string') {
    console.log(`Announcing ${name.toUpperCase()}!`);
  } else {
    console.log(`Well, I'm off.`);
  }
}

greetComedianSafety('Betty White');
greetComedianSafety({});

/**
 * 9.2 타입 서술어
 */
interface Comedian {
  funny: boolean;
}

interface StandupComedian extends Comedian {
  routine: string;
}

function isStandupComedian(value: Comedian): value is StandupComedian {
  return 'routine' in value;
}

/**
 * 9.4.1 포착된 오류 타입 어서션
 */
try {
  // 오류를 발생
} catch (error) {
  console.warn('Oh no', (error as Error).message);
}

try {
  // 오류를 발생
} catch (error) {
  console.warn('Oh no', error instanceof Error ? error.message : error);
}

/**
 * 9.4.2 non-null 어서션
 *
 * case1: 책에 작성된 예제코드가 잘못되었음
 */
const maybeDate = Math.random() > 0.5 ? undefined : new Date();

// 타입이 Date라고 간주
console.log(maybeDate as Date);
console.log(maybeDate!);

// case1:
const seasonCounts = new Map([
  ['I Love Lucy', 'Good'],
  ['The Golden Girls', 'Bad'],
]);

const maybeValue = seasonCounts.get('I Love Lucy');

// console.log(maybeValue.toUpperCase());

const knownValue = seasonCounts.get('I Love Lucy')!;

console.log(knownValue.toUpperCase());
