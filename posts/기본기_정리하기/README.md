# Typescript Basic

타입스크립트는 라이브러리, 프레임워크와 함께 사용할 때 기본적으로 세팅할 수 있다. 하지만 타입스크립트를 '언어'만을 공부할 때 프로젝트 세팅 방법은 어떻게 구성할 수 있는지 작성되었다.

## 환경설정하기

타입스크립트를 사용하기 위해서는 Node가 우선 설치되어 있어야 한다. 이때 설치는 LTS 버전을 설치하는 것을 권장한다. 설치가 완료되면 `node -v` 명령으로 확인할 수 있다.

> 만약 버전이 표시되지 않는 다면 설치가 완료되지 않은 것이다.

* [Node.js 설치](https://nodejs.org/en)

```shell
npm install typescript -g # 컴퓨터 전역으로 설치
npm install --save-dev typescript # 현재 프로젝트에 개발 의존성으로 설치
```

> --save-dev: 개발 의존성으로 패키지를 설치한다. 타입스크립트는 개발환경에서만 사용되고 배포 환경에서는 사용되지 않는다.

마찬가지로 타입스크립트 설치가 완료되면 `tsc -v` 옵션으로 설치를 확인할 수 있다. 이후 `tsc --init` 옵션으로 `tsconfig.json` 파일을 초기화 시킨다.

# 자바스크립트의 문제점 인지하고 파악하기

자바스크립트의 장점과 단점이 되기도 하는 Dynamical typed 언어의 문제를 보완하고자 타입스크립트를 사용한다.

* 타입스크립트는 함수 정의, 변수 정의, 클래스 정의등을 명확하게 선언할 수 있다. 이는 설계의도를 표현하기 용이하다.

# Typescript 기본 타입

타입스크립트는 다음과 같이 타입을 선언할 수 있다. 다른 타입의 값으로 할당할 수 없다.

```typescript
let ive: string = '아이브'; // string 값만을 허용하는 변수를 선언했다.
// string 값을 가지는 변수에 다른 타입의 값을 할당할 수 없다.
ive = 2024; // TS2322: Type 'number' is not assignable to type 'string'.
```

## 자바스크립트 7개 기본 타입

* string: `const ive: string = '아이브';`
* number
* bigint: `const bigIntVar: bigint = BigInt(999999);`
* boolean
* symbol: `const symbolVar: symbol = Symbol(1);`
* null: `const nullVar: null = null;`
* undefined: `const undefinedVar: undefined = undefined;`

## 타입스크립트에만 존재하는 타입

* any: 아무 타입이나 입력할 수 있다. 치트키 같은 존재로 적절한 곳에만 사용할 것을 권장한다. 남용하면 안된다. 타입스크립트를 사용하는 의미가 퇴색될 수 있다.
* unknown: 알 수 없는 타입이다. `any` 타입과 비슷하지만 `unknown`, `any` 타입에만 할당 가능하다. 이외 다른 타입의 변수에는 할당이 불가능하다.
* never: 어떠한 값도 저장되거나 반환되지 않을 때 사용하는 타입 (함수 & 인터섹션에서 복습)
* 리스트 타입

```typescript
// 모두 할당 가능
const cheatKeyType: any = '모던 자바스크립트 Deep Dive';
const anyTypeTemp: boolean = cheatKeyType;

// 일부 할당 가능(unknown, any)
const unknownTypeNumber: unknown = 100;
const unknownTypeTemp: number = unknownTypeNumber; // TS2322: Type 'unknown' is not assignable to type 'number'.
const unknownOkAnyType: any = unknownTypeNumber;
const unknownOkUnknownType: any = unknownTypeNumber;

// 리스트 타입
const ive: string[] = ['안유진', '가을', '레이', '장원영', '리즈', '이서']; 
```

# 컴파일

`npx tsc` 또는 `tsc` 명령으로 타입스크립트 코드를 컴파일 할 수 있다. 타입이 사라지고 자바스크립트에서 인지할 수 있는 코드로 변경된다.
결국 프로덕션(production) 환경에서 사용되는 코드는 자바스크립트 코드다. 따라서 자바스크립트에 전반적인 이해는 선택이 아닌 필수다.

> 컴파일: ive.ts => ive.js

# 타입과 인터페이스 기본기

## 타입(Type)

타입은 타입스크립트에서 타입에 이름을 만들어주는 역할이다.

## 인터페이스(Interface)

> 인터페이스는 타입이 생기고 훨씬 이후에 생겼다. 타입의 문제를 해결하기 위해 등장했다. 서로 상호보완하며 겹치는 부분도 많다.

```typescript
interface IdolInterface {
  name: string;
  year: number;
}

// Optional properties
interface Book {
  title: string;
  money: string;
  isbn?: string;
}
```

> 🔥 타입과 인터페이스의 차이점을 설명하시오.

# Enum

enum은 타입스크립트에만 존재한다.

```typescript

```

# 타입 추론(Type Inference)

* 타입을 직접 입력하지 않아도 타입스크립트가 타입을 유추하는 것을 의미한다.
* `const` 키워드를 사용해서 변수를 선언하면 **타입추론이 구체적이다**.

> 객체 프로퍼티의 타입을 구체화 하기 위해서는 캐스팅을 해주면 된다.

```typescript
const book = {
  title: '코어 자바스크립트' as const,
  writer: '정재남' as const,
};

// book.title = 'NestJS로 배우는 백엔드 프로그래밍'; 할당이 불가능하다.
```

> 🔥 튜플과 리스트 차이점

# 타입 단언(Type Assertions)

> 강의에서는 Casting 이라고 표현하고 있지만 공식 문서에서 Type Assertions으로 표현하여 제목을 수정했다.

타입스크립트는 자바스크립트로 컴파일되는 언어라는 것을 명심하자. 타입스크립트에서 사용하는 `assertions`은 자바스크립트에서 적용되지 않는다. 자바스크립트 환경에서는
`assertions`라는 개념이 없기 때문이다.

타입 단언을 함부로 사용했을 때는 부작용이 따라온다.

```typescript
// 숫자 5를 대문자로 만들어라???
const number = 5;
console.log((number as any).toUpperCase());
```

상당히 부자연스러운 예제이다.

## 그렇다면 언제 쓰이나요?

타입 단언은 상속관계에서 구체적인 타입을 선언하고 싶을 때 사용된다. 눈속임을 위해 `as any`를 사용하는 방식은 지양한다. 타입스크립트를 사용하는 이유를 다시 한번 명심하라.