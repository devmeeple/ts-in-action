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

**<참고 자료>**

1. [Matt Pocock 'Total TypeScript'](https://www.totaltypescript.com/books/total-typescript-essentials)
