<!-- TOC -->
* [1부 타입 기초](#1부-타입-기초)
  * [타입 추론을 적극 활용하자](#타입-추론을-적극-활용하자)
  * [변환 시 사라지는 부분을 파악하자](#변환-시-사라지는-부분을-파악하자)
  * [never 타입과 느낌표](#never-타입과-느낌표)
  * [원시 래퍼 타입, 탬플릿 리터럴 타입, rest, 튜플](#원시-래퍼-타입-탬플릿-리터럴-타입-rest-튜플)
  * [enum, keyof, typeof](#enum-keyof-typeof)
    * [enum](#enum)
<!-- TOC -->

# 1부 타입 기초
## 타입 추론을 적극 활용하자
> 1. 타입을 정의할 때는 최대한 정확하게 만든다.의미없이 부정확하게 만들지 말기  
> 2. 덜 멍청하게 만들기: 추론의 결과가 `any` 와  같다면 문제가 발생한 것이다. 
```typescript
const message = 'Hello, world!';
// const message: string = 'Hello, world!'; 
```

## 변환 시 사라지는 부분을 파악하자
> 💡 타입을 빼도 올바르게 작동되는 코드인가?  
> `: type` , `type` , `interface` , `generic` , `as` , `!` ...

- 타입 강제변환
```typescript
let game = 'Roll for the Galaxy';
game = 132531 as unknown as string;
```

## never 타입과 느낌표
> 💡 빈 배열 선언시 주의가 필요하다.

```typescript
// const array = []; // type: never;
const array: string[] = [];

// 비추천: 존재여부가 확실하다. 절대 보증가능하다. (undefined | null)
// const head = document.querySelector('#head')!; // type: Element
// 추천
const head = document.querySelector('#head');
if (head) {
    head.innerHTML = 'Hello';
}

```

## 원시 래퍼 타입, 탬플릿 리터럴 타입, rest, 튜플
> 💡 대문자를 사용하면 마주할 곳은 `지옥 🔥`

```typescript
const hell: string = '장난같아?';
// const hell: String = '장난아니야';
```
- 타입 정교하게 만들기(템플릿 리터럴 타입)
```typescript
type Game = 'Roll for the Galaxy' | 'Brass: Brimingham';
type Introduce = `게임: ${Game}`;
const game: Game = 'Brass: Brimingham'; 
```
- 튜플 바보 만들기: 타입스크립트 바보
```typescript
const tuple: [string, number] = ['몰입의 즐거움', 22000];
// tuple[2] = '181.37ㅊ994ㅁ'; // Tuple type '[string, number]' of length '2' has no element at index '2'.

tuple.push('181.37ㅊ994ㅁ'); // No errors
```

## enum, keyof, typeof
### enum
변수들을 하나의 그룹으로 묶고 싶을 때 사용, 객체 사용도 가능하다.
```typescript
const enum EContent {
    Tile,
    Board,
    Card,
    VPtoken,
}

// 타입으로 사용가능
function play(dir: EContent) {}

const OContent = {
    Tile: '9 ocean tiles',
    Board: '1 game board',
    Card: '208 project cards',
    VPtoken: '24 forest VP tokens',
} as const; // 값을 상수로 사용하고 싶을 때 키워드 추가

type Content = typeof OContent[keyof typeof OContent];
function explain(dir: Content) {}

const tile = EContent.Tile;
play(EContent.Card);
explain(OContent.VPtoken);

// 값의 키만 사용하고 싶음
type Key = keyof typeof OContent;
// 값의 타입들만 사용하고 싶음
type Key2 = typeof OContent[keyof typeof OContent];
```