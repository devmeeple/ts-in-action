/**
 * 흔히 찾아 볼 수 있는 타입을 다룸
 * 명시적 타입보다는 타입 추론을 권장
 */

// 원시 타입
const book: string = '코어 자바스크립트';
const price: number = 22000;
const isBookPurchased: boolean = true;

// 배열
const books: string[] = ['몰입의 즐거움', '개발자 원칙', '삼국지'];

// 튜플: 길이와 타입이 고정된 배열
const customer: [string, string, number, boolean] = [
  '미플',
  book,
  price,
  isBookPurchased,
];

// any: 자바스크립트에서 사용하던 방식
let libray: any = '마포평생학습관';
libray = 3;

const product = '비타 500';
// product = 500; // error TS2322: Type 'number' is not assignable to type 'string'.

console.log(customer);

// 매개변수 타입 표기, 올바른 개수의 인자가 전달되었는지 여부를 검사
function readBook(book: string) {
  console.log(`현재 읽고 있는 책은 ${book} 입니다.`);
}

readBook(book);
// readBook(price); // error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.

// 반환 타입 표기
function getFavoriteFood(): string {
  return '달걀장조림';
}

// 익명 함수
const boardGames = ['티츄', '마이티', '브라스 버밍엄', '파워그리드'];
// 문맥적 타입 부여
boardGames.forEach(function (s) {
  // console.log(s.toUppercase()); // error TS2551: Property 'toUppercase' does not exist on type 'string'. Did you mean 'toUpperCase'?
});

boardGames.forEach((s) => {
  // console.log(s.toUppercase()); // error TS2551: Property 'toUppercase' does not exist on type 'string'. Did you mean 'toUpperCase'?
});

// 객체 타입
const til = {
  content: '타입스크립트 올인원 : Part1. 기본 문법편',
  media: '인프런',
};
function todayLearn(til: { content: string; media: string }) {
  console.log(`오늘 학습한 내용은 ${til.content} 입니다.`);
  console.log(`${til.media}을 통해 학습했습니다.`);
}

todayLearn(til);

// 옵셔널 프로퍼티
function playGame(game: { title: string; 'release-date'?: string }) {
  console.log(`제목: ${game.title} / 출시일: ${game['release-date']}`);
  if (game['release-date'] === undefined) {
    console.log('정의되지 않았습니다.');
  }
  // console.log(game['release-date']?.toUpperCase()); // 최신 자바스크립트 문법
}

playGame({ title: 'FM2024' });
// playGame({ title: 'FM204', 'release-date': '2024| 11월 7일 출시' });

// 유니언 타입: 타입 조합
function printISBN(ISBN: number | string) {
  // console.log(ISBN.toUpperCase()); // error TS2339: Property 'toUpperCase' does not exist on type 'string | number'.
  if (typeof ISBN === 'string') {
    console.log(`ISBN: ${ISBN.toUpperCase()}`);
  } else {
    console.log(`ISBN: ${ISBN}`);
  }
}

printISBN(101);
printISBN('181.37ㅊ994ㅁ');
// printISBN({ISBN: 27732}); // error TS2345: Argument of type '{ ISBN: number; }' is not assignable to parameter of type 'string | number'.

// 타입 별칭: 재사용, 또 다른 이름으로 부르고 싶은 경우, 새로운 타입을 만든다.
type Book = {
  title: string;
  price: number;
};

function printBook(book: Book) {
  console.log(`제목: ${book.title} | 가격: ${book.price}원`);
}

printBook({ title: '삼국지', price: 8000 });

// 인터페이스: 객체 타입을 만드는 또다른 방법
interface Game {
  rank: number;
  title: string;
}

function printGame(game: Game) {
  console.log(`Rank: ${game.rank} | Title: ${game.title}`);
}

printGame({ rank: 2, title: 'Pandemic Legacy:Season 1' });

// as: 타입단언
// const message = 'hello' as number;
/*
error TS2352: Conversion of type 'string' to type 'number' may be a mistake because neither type sufficiently overlaps with the other.
If this was intentional, convert the expression to 'unknown' first.
 */

// 리터럴 타입: 유니언과 함께 사용할 때 배가 된다.
function printGeek(
  title: string,
  menu: 'Geek Rating' | 'Avg Rating' | 'Num Voters',
) {
  // ...
}

printGeek('Ark Nova', 'Geek Rating'); // O
// printGeek('Gaia Project', 'Shop'); // error TS2345: Argument of type '"Shop"' is not assignable to parameter of type '"Geek Rating" | "Avg Rating" | "Num Voters"'.

function compare(a: string, b: string): -1 | 0 | 1 {
  // return (a === b) ? 0 : a > b ? 1 : -1; // 삼항연산자 사용
  if (a === b) {
    return 0;
  } else if (a > b) {
    return 1;
  }
  return -1;
}

// null 과 undefined
function doSomething(x: string, y: string) {
  if (x === undefined) {
    // 아무것도 하지 않는다
  } else {
    // 실행
  }
}

// null 아님 단언 접미사 (접미사 !) 절대? 아니에요.
function liveDangerously(x?: number | undefined) {
  // 오류 없음
  console.log(x!.toFixed());
}

// 열거형: 타입스크립트가 자바스크립트에 추가하는 기능, 이름이 있는 상수 집합에 속한 값 중 하나일 수 있도록 제한, 명확하게 파악하지 못했다면 사용보류
