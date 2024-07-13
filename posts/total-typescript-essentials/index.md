# Total TypeScript Essentials

# 2. IDE Superpowers

## 여러 줄 오류 처리(Dealing With Multi-Line Errors)

여러 줄로 오류가 발생할 때, 가장 아래에서 위로 읽으며 문제를 해결한다.

## JSDoc Comments

코드의 목적과 사용법을 전달하는 유용한 방법이다.

```javascript
/**
 * 함수 설명
 *
 * @param param - 매개변수 설명
 * @example - 사용방법
 */
```

# 3. TypeScript In The Development Pipeline

## Watch 모드에서 TypeScript 실행(Running TypeScript in Watch Mode)

```shell
tsc --watch
```

자동으로 컴파일 시킴

# 4. Essential Types and Annotations

1. 주석은 타입을 명시적으로 알려주는 역할이다.
2. 변수는 추론을 통해 타입을 유추할 수 있다. 하지만 함수 매개변수는 항상 명시적으로 타입을 지정해야 한다. 타입을 지정하지 않으면 `any` 타입으로 추론된다.

## 객체 리터럴 유형(Object Literal Types)

```typescript
const talkToAnimal = (animal: {
  name: string;
  type: string;
  age: number;
}) => {

};
```

## 타입 별칭(Type Aliases)

나만의 타입을 선언할 때 `.types.ts`파일을 만든다. (관례)

## 배열과 튜플(Arrays and Tuples)

### 배열(Arrays)

배열은 2가지 방법으로 선언 가능하다.

```typescript
const champions: string[] = [
  "이즈리얼",
  "바드",
  "카이사",
  "오른",
];

const championsWithGeneric: Array<string> = [
  '럼블',
  "카밀",
  "쓰레쉬",
];
```

### 튜플(Tuples)

튜플은 고정 길이 배열이다. 각 요소가 다른 타입을 가질 수 있다. 쉽게 '엄격한 배열'이다.

```typescript
// Tuple
const album: [string, number] = ['AAA', 2024];

// Array
const albums: string[] = [
  'AAA',
  '이상비행',
];
```

## 입력 기능(Typing Functions)

### 선택적 매개변수(Optional Parameters)

```typescript
const logUserInfo = (
  name: string,
  age?: number,
) => {
};

logUserInfo('김춘수', 11);
logUserInfo('김춘수');
```

### 기본 매개변수(Default Parameters)

매개변수 기본값을 할당한다.

```typescript
const logUserInfo = (
  name: string,
  age = 25,
) => {
};
```

### 함수 반환 유형(Function Return Types)

매개변수 타입을 선언하는 것 외에 함수의 반환 타입을 선언할 수 있다. 반환되는 값이 선언한 타입과 일치하지 않으면 오류가 발생한다.

```typescript
const logUserInfo = (
  name: string,
  age: number,
): string => {

};
```

### 나머지 매개변수(Rest Parameters)

# 5. Unions, Literals and Narrowing

## 유니온 타입(Union Types)

```typescript
const logId = (id: string | number) => {
  console.log(id);
}

type Id = string | number;

function signUp(id: Id) {
  console.log(id);
}
```

id는 string 또는 number 값을 가질 수 있다.

## 축소(Narrowing)

Narrowing이란 범위를 좁히는 방법이다.

### 1. typeof로 범위 좁히기(Narrowing with typeof)

```typescript
const getAlbumYear = (year: string | number) => {
  if (typeof year === 'string') {
    console.log(`The album was released in ${year.toUpperCase()}.`); // `year` is string
  } else if (typeof year === 'number') {
    console.log(`The album was released in ${year.toFixed(0)}.`); // `year` is number
  }
};
```

```typescript
const getAlbumYear = (year: string | number | boolean) => {
  if (typeof year === 'string') {
    console.log(`The album was released in ${year.toUpperCase()}.`); // `year` is string
  } else if (typeof year === 'number') {
    console.log(`The album was released in ${year.toFixed(0)}.`); // `year` is number
  }

  console.log(year); // `year` is string | number | boolean
};
```

블록 범위로 동작하기 때문에 조건문을 벗어난 `year` 변수는 `string | number | boolean`으로 추론한다.

## unknown and never

[unknown <출처: Total TypeScript Essentials>](./065-introduction-to-unknown.explainer_ohm9pd.png)

`any`와 비슷해보이는 `unknown` 둘의 차이는 무엇일까?

- unknown: 어떤 값도 할당할 수 없다. 무엇인지 모른다. 알 수 없다.
- any: 어떤 값이어도 상관없다.

### never

[never <출처: Total TypeScript Essentials>](./067-introduction-to-never.explainer_ktradt.png)

일어나지 않는 일, 불가능하다. 직접 선언하는 경우는 거의 없다.

# 6. Objects

## 객체 확장(Extending Objects)

```typescript
type Album = {
  title: string;
  artist: string;
  releaseYear: number;
};

type SalesData = {
  unitsSold: number;
  revenue: number;
};

type AlbumSales = Album & SalesData;
```

## 인터페이스(Interfaces)

인터페이스(interface)와 타입(type) 키워드는 비슷해 보이지만 실제로는 다르다.

### 인터페이스 확장(interface extends)

```typescript
interface Album {
  title: string;
  artist: string;
  releaseYear: number;
}

interface StudioAlbum extends Album {
  studio: string;
  producer: string;
}

interface LiveAlbum extends Album {
  concertVenue: string;
  concertDate: Date;
}
```

인터페이스는 상속이 가능하다. 상속을 사용해 구체적인 타입을 만들 수 있다.

```typescript
interface BoxSet extends StudioAlbum, LiveAlbum {
  numberOfDiscs: number;
}
```

또한 다중 상속도 가능하다.

인터페이스 확장은 오류확인 및 작업속도 성능이 좋다. (인터페이스로 모든 타입을 정의해야 한다는 이야기가 아니다) 다른 타입 유형을 확장해야 하는 경우
인터섹션보다 인터페이스 확장 선택을 권장한다.

## 타입과 인터페이스(Types vs Interfaces)

타입과 인터페이스 중 어떤것을 사용하는게 좋을까? 이는 의견이 갈리는 문제다.

```typescript
type Union = string | number;
```

인터페이스는 중복선언을 허용하고 선언된 정보가 포함된 하나의 인터페이스를 만든다. 하지만 타입은 중복 선언을 허용하지 않는다.
**저자는 타입을 기본으로 사용하고 인터페이스 확장이 필요한 경우 인터페이스를 사용한다.**

**<참고 자료>**

1. [Matt Pocock 'Total TypeScript Essentials'](https://www.totaltypescript.com/books/total-typescript-essentials)
