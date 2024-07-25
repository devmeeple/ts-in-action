# The TypeScript Handbook

자바스크립트는 크로스 플랫폼 언어다. 크로스 플랫폼 언어란 하나의 소스코드로 여러 환경에서 실행될 수 있는 언어를 의미한다. 자바스크립트는 프런트엔드, 백엔드등에서 사용할 수 있다.

## 학습 내용 📚

* TypeScript 구문 및 패턴을 읽고 이해한다.
* 컴파일러(compiler) 옵션의 효과를 설명한다.
* 타입 시스템 동작을 예측한다.

## 선수지식 및 유의사항

* Microsoft Learn JavaScript tutorial 또는 JavaScript at the Mozilla Web Docs
* 다른 언어 사용경험이 있다면 핸드북을 통해 JavaScript를 배운다.

**<참고 자료>**

* [The TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

# 02. The Basics

TypeScript는 생산성을 높이기 위해 사용한다. 그렇다면 어떤 방법으로 생산성을 높일까.

1. 실행 전에 발생하는 버그를 방지한다.
2. 타입 검사기를 통해 IDE 지원이 편리하다.

TypeScript는 타입을 생략하더라도 타입을 추론한다. 따라서 명시적으로 타입을 지정하지 않아도 된다. 명심해야 될 사실은 TypeScript 관련 코드는
결국 사라진다.

## 설치하기

```shell
npm install -g typescript # 전역으로 설치한다. tsc(TypeScript compiler)도 함께 설치된다.
npm list -g typescript
npm uninstall -g typescript
```

### 컴파일러 옵션

```shell
tsc --noEmitOnError <파일명>
```

코드를 수정해도 JavaScript 코드가 업데이트되지 않는다.

```shell
tsc --target es2015
```

기본적으로 ES3(ECMAScript 3)를 대상으로 작성한다. `target`을 지정하면 ECMAScript 버전을 변경한다.

# 03. Everyday Types

## 타입

원시 타입(primitive type)

* `string`: 문자열
* `number`: 숫자
* `boolean`: `true` / `false`

배열

* `number[]`, `Array<number>`는 같다. 주의할 점은 `[number]`과 같은 튜플은 다른 타입이다.

어디에나 사용한다.

* `any`: 어떤 값에도 할당 가능하다. `any` 타입을 자주 사용하면 TypeScript를 사용하는 의미가 퇴색된다. 주의하자.

### 객체 타입(Object Types)

```typescript
const point = {
  x: 3,
  y: 7,
};
```

### Union Types

다른 타입과 합쳐서 새로운 타입을 만든다. 타입을 추론할 때 narrowing을 활용할 수 있다. narrowing이란 타입을 좁히는 방법이다.

## 사용하기

```typescript
const url: string = `https://devmeeple.github.io/`;
```

위와같이 사용한다. (다른 언어에서 주로 사용하는 `int x = 0`처럼 사용하지 않는다) 하지만 대부분 타입을 명시하지 않는다. TypeScript의 타입시스템은 추론을 시도한다.

```typescript
function playMusic(title: string): string {
  return `현재 재생 중인 노래의 제목은 ${title}입니다.`
}
```

함수에도 타입을 선언할 수 있다. 매개변수(parameter)와 반환 타입을 지정할 수 있다. 하지만 반환 타입 또한 타입 추론이 이뤄진다. 따라서 반환 타입을 명시하지 않아도 된다.
물론 반환결과를 방지하기 위해서 명시적으로 선언할 수 있다. 개인 취향이다.

## Type Aliases

```typescript
type Book = {
  title: string;
  price: number;
};

interface Book {
  title: string;
  price: number;
}
```

타입과 인터페이스는 유사하다. 자유롭게 선택 가능하다. 중요한 차이점은 타입 확장방법이다.

```typescript
interface BaseEntity {
  id: number;
  createdAt: Date;
}

interface Entity extends BaseEntity {
  author: string;
  title: string;
}

type BaseEntity = {
  id: number;
  createdAt: Date;
};

type Entity = BaseEntity & {
  author: string;
  title: string;
}
```

또한 새로운 속성을 추가할 때도 차이가 있다.

```typescript
interface Food {
  name: string;
}

interface Food {
  price: number;
}

// ❌ FAIL
type Food = {
  name: string;
};

type Food = {
  price: number;
};
```

공식문서에서는 인터페이스를 권장한다. 하지만 가장 중요한 건 팀의 코드 컨벤션이다.

## Type Assertions

예제

## Literal Types

예제

## Less Common Primitives

`bigint`

```typescript
const oneHundred: bigint = BigInt(100);
const annotherHundred: bigint = 100n;
```

`symbol`

```typescript
const firstName = Symbol('name');
const secondName = Symbol('name');

// ❌ ERROR: 둘은 전혀 다른 타입이다. 따라서 비교할 수 없다.
if (firstName === secondName) {

}
```
